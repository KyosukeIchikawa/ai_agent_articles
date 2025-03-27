/**
 * このスクリプトはプロジェクト内の全てのページとコンポーネントをスキャンし、
 * 内部リンク（href属性）の有効性を検証します。
 * 
 * 使い方: node src/scripts/check-links.js
 */
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const stat = promisify(fs.stat);

// Next.jsの設定ファイルを読み込む
let trailingSlashConfig = true; // デフォルト値
let basePathConfig = ''; // デフォルトは空文字

try {
  const nextConfigPath = path.resolve(__dirname, '../../next.config.js');
  if (fs.existsSync(nextConfigPath)) {
    const nextConfigContent = fs.readFileSync(nextConfigPath, 'utf-8');
    
    // 正規表現で trailingSlash の設定を抽出
    const trailingSlashMatch = nextConfigContent.match(/trailingSlash:\s*(true|false)/);
    if (trailingSlashMatch && trailingSlashMatch[1]) {
      trailingSlashConfig = trailingSlashMatch[1] === 'true';
    }
    
    // basePath の設定を抽出
    const basePathMatch = nextConfigContent.match(/basePath:.*?['"]([^'"]+)['"]/);
    if (basePathMatch && basePathMatch[1]) {
      basePathConfig = basePathMatch[1];
    }
  }
} catch (error) {
  console.warn('Next.jsの設定ファイルの読み込み中にエラーが発生しました:', error);
  console.warn('デフォルト設定（trailingSlash: true, basePath: ""）を使用します。');
}

// プロジェクトルートディレクトリ
const rootDir = path.resolve(__dirname, '../../');

// ソースディレクトリ
const srcDir = path.join(rootDir, 'src');

// pagesディレクトリ
const pagesDir = path.join(srcDir, 'pages');

// 検証対象の拡張子
const extensions = ['.js', '.jsx', '.ts', '.tsx', '.md', '.mdx'];

// リンクを抽出する正規表現パターン
const linkPatterns = [
  /<Link\s+[^>]*href=["']([^"']+)["'][^>]*>/g,   // Next.jsのLinkコンポーネント
  /<a\s+[^>]*href=["']([^"']+)["'][^>]*>/g,      // HTMLのaタグ
  /href=["']([^"']+)["']/g,                      // href属性（単独）
  /\[.*?\]\(([^)]+)\)/g,                         // Markdown形式のリンク [text](url)
];

// チェック対象外のリンク（外部リンクや特殊なリンク）
const excludePatterns = [
  /^https?:\/\//,                                // http:// or https:// で始まるURL
  /^mailto:/,                                    // メールリンク
  /^tel:/,                                       // 電話番号リンク
  /^#/,                                          // ページ内リンク (#section)
  /^\/api\//,                                    // API エンドポイント
  /\{\{.*?\}\}/,                                 // テンプレート変数 {{variable}}
  /^\[.*?\]$/,                                   // 変数や正規表現のパターン記述 [variable]
  /^javascript:/,                                // JavaScriptプロトコル
  /^data:/,                                      // データURL
  // /^\//,                                      // 絶対パスを除外する設定を削除（チェック対象に含める）
];

// 明示的にスキップするファイル
const skipFiles = [
  'check-links.js',                              // このスクリプト自体
  'node_modules',                                // node_modules
  '.git',                                        // Gitディレクトリ
  '.next',                                       // Next.jsビルドディレクトリ
];

// 標準的なページパスのルートマッピング（動的ルーティングを含む）
const validPagePaths = new Set();

// 実際に存在するファイルパス
const existingFiles = new Set();

// 見つかったリンク切れの情報を格納する配列
const brokenLinks = [];

// GitHubPagesの検証モード
const checkGitHubPages = process.env.CHECK_GITHUB_PAGES === 'true';

/**
 * ディレクトリを再帰的に走査して全てのファイルを探索する
 */
async function scanDirectory(dir, callback) {
  const entries = await readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    // スキップすべきファイルやディレクトリをチェック
    if (skipFiles.some(skipFile => fullPath.includes(skipFile))) {
      continue;
    }
    
    if (entry.isDirectory()) {
      await scanDirectory(fullPath, callback);
    } else {
      const ext = path.extname(entry.name);
      if (extensions.includes(ext)) {
        await callback(fullPath);
      }
    }
  }
}

/**
 * ページディレクトリからルーティングパスを取得する
 */
async function collectValidPagePaths(dir, basePath = '') {
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        // 動的ルーティング用のフォルダ名 [param] 処理
        const dirName = entry.name;
        let routePath;
        
        if (dirName.startsWith('[') && dirName.endsWith(']')) {
          // 動的パスはワイルドカードとして扱う（任意の値が有効）
          routePath = `${basePath}/*`;
          validPagePaths.add(routePath);
        } else {
          routePath = `${basePath}/${dirName}`;
        }
        
        await collectValidPagePaths(fullPath, routePath);
      } else {
        const filename = entry.name;
        // index.js, index.tsx などは親ディレクトリのパスを表す
        if (filename.startsWith('index.')) {
          validPagePaths.add(basePath || '/');
        } else {
          // 拡張子を除去
          const baseName = filename.split('.')[0];
          // [param].js などの動的パス
          if (baseName.startsWith('[') && baseName.endsWith(']')) {
            validPagePaths.add(`${basePath}/*`);
          } else {
            validPagePaths.add(`${basePath}/${baseName}`);
          }
        }
      }
    }
  } catch (error) {
    console.error(`ページパスの収集中にエラーが発生しました: ${error.message}`);
  }
}

/**
 * 既存のファイルパスを収集する
 */
async function collectExistingFiles(dir, basePath = '') {
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      // スキップすべきディレクトリをチェック
      if (skipFiles.some(skipFile => entry.name.includes(skipFile))) {
        continue;
      }
      
      const fullPath = path.join(dir, entry.name);
      const relativePath = path.join(basePath, entry.name);
      
      if (entry.isDirectory()) {
        existingFiles.add(relativePath);
        await collectExistingFiles(fullPath, relativePath);
      } else {
        existingFiles.add(relativePath);
      }
    }
  } catch (error) {
    console.error(`既存ファイルの収集中にエラーが発生しました: ${error.message}`);
  }
}

/**
 * リンクがプロジェクト内で有効かどうかを検証する
 */
function isValidInternalLink(link) {
  // 除外パターンに一致するリンクはチェック対象外
  for (const excludePattern of excludePatterns) {
    if (excludePattern.test(link)) {
      return true;
    }
  }
  
  // 相対パスをルートパスに変換
  let normalizedLink = link;
  
  // クエリパラメータとハッシュを削除
  normalizedLink = normalizedLink.split('?')[0].split('#')[0];
  
  // データファイルへのリンクなど、特定のファイルをチェック
  if (normalizedLink.includes('.') && !normalizedLink.endsWith('/')) {
    // publicディレクトリ内のファイルチェック
    const publicFilePath = path.join('public', normalizedLink.startsWith('/') ? normalizedLink.slice(1) : normalizedLink);
    if (existingFiles.has(publicFilePath)) {
      return true;
    }
    
    // プロジェクトルート内の他のファイルのチェック
    const rootFilePath = normalizedLink.startsWith('/') ? normalizedLink.slice(1) : normalizedLink;
    if (existingFiles.has(rootFilePath)) {
      return true;
    }
    
    return false;
  }
  
  // GitHub Pagesモードでの検証（リポジトリ名変更の問題を検出）
  if (checkGitHubPages && basePathConfig && normalizedLink.startsWith('/')) {
    // basePath の検証: GitHub Pages上でのリンクにリポジトリ名を含める必要がある
    // 例: /method/ → /ai_visual_arxiv/method/
    
    // リンクがすでにbasePathで始まっているか確認
    const hasBasePath = normalizedLink.startsWith(basePathConfig);
    
    // GitHub Pagesでデプロイする場合、内部リンクはbasePathで始まる必要がある
    if (!hasBasePath && normalizedLink !== '/') {
      // basePathが設定されているのに、リンクにbasePathがない
      return false;
    }
    
    // basePathを持つリンクの場合、basePathを取り除いて検証する
    if (hasBasePath) {
      normalizedLink = normalizedLink.substr(basePathConfig.length);
      if (normalizedLink === '') normalizedLink = '/';
    }
  }
  
  // trailing slash の検証
  // trailingSlashConfig が true の場合、ページリンクは末尾にスラッシュが必要
  // trailingSlashConfig が false の場合、ページリンクは末尾にスラッシュが不要
  if (normalizedLink !== '/') {
    const hasTrailingSlash = normalizedLink.endsWith('/');
    if (trailingSlashConfig && !hasTrailingSlash) {
      // trailingSlash が必要なのに、リンクに末尾のスラッシュがない
      return false;
    } else if (!trailingSlashConfig && hasTrailingSlash) {
      // trailingSlash が不要なのに、リンクに末尾のスラッシュがある
      return false;
    }
  }
  
  // 末尾のスラッシュを調整して正規化（検証のため）
  let pathForValidation = normalizedLink;
  if (normalizedLink !== '/') {
    if (normalizedLink.endsWith('/')) {
      pathForValidation = normalizedLink.slice(0, -1);
    }
  }
  
  // ページのルーティングパスのチェック
  if (validPagePaths.has(pathForValidation)) {
    return true;
  }
  
  // 動的ルーティングの場合のワイルドカードチェック
  const linkParts = pathForValidation.split('/');
  const foundWildcardMatch = [...validPagePaths].some(validPath => {
    if (!validPath.includes('*')) return false;
    
    const validPathParts = validPath.split('/');
    if (linkParts.length !== validPathParts.length) return false;
    
    return validPathParts.every((part, index) => 
      part === '*' || part === linkParts[index]
    );
  });
  
  return foundWildcardMatch;
}

/**
 * ファイル内のリンクを抽出して検証する
 */
async function checkLinksInFile(filePath) {
  try {
    const content = await readFile(filePath, 'utf-8');
    const relativeFilePath = path.relative(rootDir, filePath);
    
    // このファイルをスキップすべきかチェック
    if (skipFiles.some(skipFile => relativeFilePath.includes(skipFile))) {
      return;
    }
    
    // 全てのリンクパターンに対してチェック
    for (const pattern of linkPatterns) {
      let match;
      pattern.lastIndex = 0; // 正規表現のインデックスをリセット
      
      while ((match = pattern.exec(content)) !== null) {
        const link = match[1];
        
        // 空のリンクはスキップ
        if (!link || link.trim() === '') continue;
        
        // 特殊なパターンを除外
        if (link.includes('${') || link.includes('{') || link.includes('[') || link.includes('...')) {
          continue; 
        }
        
        // 内部リンクのみチェック（外部URLは検証しない）
        if (!link.startsWith('https://') && !link.startsWith('http://')) {
          if (!isValidInternalLink(link)) {
            brokenLinks.push({
              file: relativeFilePath,
              link: link,
              position: match.index
            });
          }
        }
      }
    }
  } catch (error) {
    console.error(`ファイル ${filePath} の処理中にエラーが発生しました: ${error.message}`);
  }
}

/**
 * メイン実行関数
 */
async function main() {
  console.log('リンク検証を開始します...');
  
  try {
    // 有効なページパスを収集
    await collectValidPagePaths(pagesDir);
    console.log(`${validPagePaths.size}個の有効なページパスを検出しました`);
    
    // 既存ファイルのパスを収集
    await collectExistingFiles(rootDir);
    console.log(`${existingFiles.size}個のファイルを検出しました`);
    
    // プロジェクト内の全ファイルをスキャン
    await scanDirectory(srcDir, checkLinksInFile);
    
    // 結果を表示
    if (brokenLinks.length > 0) {
      console.error('\n❌ リンク切れが見つかりました:');
      brokenLinks.forEach(({ file, link }) => {
        console.error(`  ${file}: ${link}`);
      });
      console.error(`\n合計: ${brokenLinks.length}個のリンク切れが見つかりました`);
      process.exit(1);
    } else {
      console.log('\n✅ リンク切れは見つかりませんでした');
      process.exit(0);
    }
  } catch (error) {
    console.error('スクリプト実行中に予期しないエラーが発生しました:', error);
    process.exit(1);
  }
}

// スクリプト実行
main().catch(err => {
  console.error('エラーが発生しました:', err);
  process.exit(1);
});