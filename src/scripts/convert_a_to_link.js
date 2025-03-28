/**
 * このスクリプトはプロジェクト内のJSファイルを走査し、
 * 内部リンク（<a href="/path/">）をNext.jsのLinkコンポーネント（<Link href="/path/">）に変換します。
 * 
 * 使い方:
 * node src/scripts/convert_a_to_link.js
 * 
 * テスト実行（変更を適用せず検出のみ）:
 * DRY_RUN=true node src/scripts/convert_a_to_link.js
 * 
 * 詳細出力:
 * VERBOSE=true node src/scripts/convert_a_to_link.js
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const stat = promisify(fs.stat);

// プロジェクトルートディレクトリ
const rootDir = path.resolve(__dirname, '../../');

// 検査対象のディレクトリ
const targetDirs = [
  path.join(rootDir, 'src/pages'),
  path.join(rootDir, 'src/components')
];

// スキップするディレクトリやファイル
const skipPaths = [
  path.join(rootDir, 'src/scripts'),
  path.join(rootDir, 'node_modules'),
  path.join(rootDir, '.git'),
  path.join(rootDir, '.next')
];

// 検査対象の拡張子
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

// 結果統計
let statistics = {
  scannedFiles: 0,
  modifiedFiles: 0,
  totalLinks: 0,
  convertedLinks: 0
};

// 詳細出力フラグ
const isVerbose = process.env.VERBOSE === 'true';

// テストモード（DRY_RUN=trueの場合は変更を適用しない）
const isDryRun = process.env.DRY_RUN === 'true';

/**
 * aタグからLinkコンポーネントへの変換パターン
 * 内部リンク（/で始まるパス）のみを対象とする
 */
function convertATagsToLinkComponents(content, filePath) {
  // a要素を検出する正規表現
  const aTagRegex = /<a\s+([^>]*?)href=["'](\/[^"']+)["']([^>]*?)>([\s\S]*?)<\/a>/g;
  
  // 内部リンクの数をカウント
  const internalLinks = [];
  let match;
  while ((match = aTagRegex.exec(content)) !== null) {
    internalLinks.push({
      fullMatch: match[0],
      prefix: match[1] || '',
      path: match[2],
      suffix: match[3] || '',
      content: match[4]
    });
  }
  
  if (isVerbose && internalLinks.length > 0) {
    console.log(`[検出] ${path.relative(rootDir, filePath)}: ${internalLinks.length}個の内部リンクを検出`);
    internalLinks.forEach((link, i) => {
      console.log(`  [${i+1}] ${link.fullMatch.substring(0, 100)}${link.fullMatch.length > 100 ? '...' : ''}`);
    });
  }
  
  statistics.totalLinks += internalLinks.length;
  
  if (internalLinks.length === 0) {
    return { content, changed: false };
  }
  
  // 正規表現で内部リンクを検出し変換
  let modifiedContent = content;
  let convertedCount = 0;
  
  // import Linkがまだない場合は追加
  const hasLinkImport = /import\s+Link\s+from\s+['"]next\/link['"]/m.test(content);
  if (!hasLinkImport && internalLinks.length > 0) {
    // import文を追加する位置を探す（既存のimport文の後）
    const importStatements = content.match(/import\s+.*?from\s+['"].*?['"]/g) || [];
    if (importStatements.length > 0) {
      const lastImport = importStatements[importStatements.length - 1];
      const lastImportPos = content.lastIndexOf(lastImport) + lastImport.length;
      modifiedContent = 
        content.substring(0, lastImportPos) + 
        "\nimport Link from 'next/link';" + 
        content.substring(lastImportPos);
    } else {
      // import文がない場合は先頭に追加
      modifiedContent = "import Link from 'next/link';\n" + content;
    }
  }
  
  // <a href="/path/">text</a> を <Link href="/path/">text</Link> に変換
  modifiedContent = modifiedContent.replace(
    /<a\s+([^>]*?)href=["'](\/[^"']+)["']([^>]*?)>([\s\S]*?)<\/a>/g,
    (match, prefix, path, suffix, innerContent) => {
      // 外部リンクのパターンはスキップ（既に除外されているはずだが念のため）
      if (path.startsWith('http://') || path.startsWith('https://')) {
        return match;
      }
      
      // target="_blank"やrel="noopener"などの属性を持つ場合はスキップ
      // これらは通常外部リンク用の属性であるため
      if ((prefix && (prefix.includes('target="_blank"') || prefix.includes('rel="noopener"'))) || 
          (suffix && (suffix.includes('target="_blank"') || suffix.includes('rel="noopener"')))) {
        if (isVerbose) {
          console.log(`  [スキップ] 外部リンク属性を含むため変換をスキップ: ${match.substring(0, 100)}`);
        }
        return match;
      }
      
      convertedCount++;
      
      // classNameなどの属性を保持
      let attributes = '';
      const classMatch = (prefix + ' ' + suffix).match(/className=["']([^"']*)["']/);
      if (classMatch) {
        attributes += ` className="${classMatch[1]}"`;
      }
      
      if (isVerbose) {
        console.log(`  [変換] ${match.substring(0, 50)} => <Link href="${path}"${attributes}>${innerContent.substring(0, 20)}...</Link>`);
      }
      
      return `<Link href="${path}"${attributes}>${innerContent}</Link>`;
    }
  );
  
  statistics.convertedLinks += convertedCount;
  
  return {
    content: modifiedContent,
    changed: convertedCount > 0
  };
}

/**
 * ファイル内のaタグをLinkコンポーネントに変換
 */
async function processFile(filePath) {
  try {
    const content = await readFile(filePath, 'utf-8');
    statistics.scannedFiles++;
    
    const { content: modifiedContent, changed } = convertATagsToLinkComponents(content, filePath);
    
    if (changed) {
      if (!isDryRun) {
        await writeFile(filePath, modifiedContent, 'utf-8');
        statistics.modifiedFiles++;
        console.log(`[変換] ${path.relative(rootDir, filePath)}`);
      } else {
        statistics.modifiedFiles++;
        console.log(`[検出] ${path.relative(rootDir, filePath)} (変換を適用せず - テストモード)`);
      }
    }
  } catch (error) {
    console.error(`ファイル ${filePath} の処理中にエラーが発生しました: ${error.message}`);
  }
}

/**
 * ディレクトリを再帰的に走査してファイルを処理
 */
async function scanDirectory(dir) {
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      // スキップパスに含まれるかチェック
      if (skipPaths.some(skipPath => fullPath.startsWith(skipPath))) {
        continue;
      }
      
      if (entry.isDirectory()) {
        await scanDirectory(fullPath);
      } else {
        const ext = path.extname(entry.name);
        if (extensions.includes(ext)) {
          await processFile(fullPath);
        }
      }
    }
  } catch (error) {
    console.error(`ディレクトリ ${dir} の走査中にエラーが発生しました: ${error.message}`);
  }
}

/**
 * メイン実行関数
 */
async function main() {
  console.log(`aタグをLinkコンポーネントに変換するスクリプトを実行します${isDryRun ? ' (テストモード)' : ''}...`);
  
  // 初期化
  statistics = {
    scannedFiles: 0,
    modifiedFiles: 0,
    totalLinks: 0,
    convertedLinks: 0
  };
  
  // 対象ディレクトリの処理
  for (const dir of targetDirs) {
    if (fs.existsSync(dir)) {
      await scanDirectory(dir);
    }
  }
  
  // 結果レポート
  console.log('\n--- 変換結果 ---');
  console.log(`スキャンしたファイル数: ${statistics.scannedFiles}`);
  console.log(`変更したファイル数: ${statistics.modifiedFiles}`);
  console.log(`検出した内部リンク数: ${statistics.totalLinks}`);
  console.log(`変換したリンク数: ${statistics.convertedLinks}`);
  
  if (isDryRun) {
    console.log('\n実際に変換を適用するには:');
    console.log('node src/scripts/convert_a_to_link.js');
  }
}

// スクリプト実行
main().catch(err => {
  console.error('エラーが発生しました:', err);
  process.exit(1);
});