/**
 * このスクリプトは、プロジェクト内のすべてのJSXファイルをスキャンし、
 * 通常の<a>タグをNext.jsのLinkコンポーネントに置き換え、
 * また、既存のLinkコンポーネントのhref属性も正しく設定します。
 * 
 * GitHub Pages環境でのリンク切れを防ぐため、Next.jsのLinkコンポーネントを使用することが重要です。
 * Linkコンポーネントは、next.config.jsで設定されたbasePathを自動的に付与します。
 * 
 * 使い方: node src/scripts/fix_next_links.js
 */

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

// プロジェクトルートディレクトリ
const rootDir = path.resolve(__dirname, '../../');

// ソースディレクトリ
const srcDir = path.join(rootDir, 'src');

// 検証対象の拡張子
const extensions = ['.js', '.jsx', '.ts', '.tsx'];

// スキップするファイル
const skipFiles = [
  'node_modules',
  '.git',
  '.next',
  'out',
  'public',
  'fix_next_links.js',
];

// 変更を保存するかどうか
const SAVE_CHANGES = true;

// Next.jsのLinkコンポーネントをインポートしているかチェックする正規表現
const linkImportRegex = /import\s+.*?Link.*?from\s+['"]next\/link['"]/;

// 通常の<a>タグを検出する正規表現
const aTagRegex = /<a\s+([^>]*?)href=["']([^"']+)["']([^>]*?)>(.*?)<\/a>/g;

// Linkコンポーネントを検出する正規表現
const linkComponentRegex = /<Link\s+([^>]*?)href=["']([^"']+)["']([^>]*?)>(.*?)<\/Link>/g;

// 内部リンクと外部リンクを区別するための正規表現
const externalLinkRegex = /^(https?:\/\/|mailto:|tel:|\/\/)/;

// 修正されたファイルをカウントする変数
let modifiedFilesCount = 0;
let totalModifiedATagsCount = 0;
let totalModifiedLinkComponentsCount = 0;

/**
 * ディレクトリを再帰的に走査して全てのファイルを探索する
 */
async function scanDirectory(dir, callback) {
  try {
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
  } catch (error) {
    console.error(`ディレクトリ ${dir} の走査中にエラーが発生しました:`, error);
  }
}

/**
 * <a>タグとLink コンポーネントを修正する
 */
async function fixLinksInFile(filePath) {
  try {
    // ファイルを読み込む
    const content = await readFile(filePath, 'utf-8');
    const relativeFilePath = path.relative(rootDir, filePath);
    
    // すでにNext.jsのLinkをインポートしているかチェック
    let hasLinkImport = linkImportRegex.test(content);
    let modifiedContent = content;
    let modifiedATags = 0;
    let modifiedLinkComponents = 0;
    
    // <a>タグを検索してLinkコンポーネントに置き換える
    modifiedContent = modifiedContent.replace(aTagRegex, (match, prefix, href, suffix, children) => {
      // 外部リンクの場合は置き換えない
      if (externalLinkRegex.test(href)) {
        return match;
      }
      
      // 内部リンクの場合はLinkコンポーネントに置き換え
      modifiedATags++;
      return `<Link href="${href}" ${prefix} ${suffix}>${children}</Link>`;
    });

    // Next.jsのLinkコンポーネントを修正する
    // （既存のLinkコンポーネントのhref属性を確認して修正）
    modifiedContent = modifiedContent.replace(linkComponentRegex, (match, prefix, href, suffix, children) => {
      // 外部リンクの場合は修正しない
      if (externalLinkRegex.test(href)) {
        return match;
      }
      
      // 内部リンクにはasを使用しないように修正する
      // 古いNext.jsのパターン <Link href="/path" as="/path">子要素</Link> を修正
      if (suffix.includes(' as=')) {
        suffix = suffix.replace(/\s+as=["'][^"']*["']/g, '');
        modifiedLinkComponents++;
      }
      
      // そのまま返す（Next.jsのLinkコンポーネントがbasePathを自動的に処理する）
      return `<Link href="${href}" ${prefix} ${suffix}>${children}</Link>`;
    });
    
    // 変更があった場合
    if (modifiedATags > 0 || modifiedLinkComponents > 0) {
      // Next.jsのLinkコンポーネントをインポートする必要がある場合
      if (!hasLinkImport && modifiedATags > 0) {
        // import文を探す
        const importRegex = /import\s+.*?from\s+['"]/;
        const importMatch = importRegex.exec(modifiedContent);
        
        if (importMatch) {
          // 既存のimport文の後にLinkのimport文を追加
          const importPosition = importMatch.index + importMatch[0].length;
          modifiedContent = 
            modifiedContent.slice(0, importPosition) + 
            '\nimport Link from \'next/link\';' + 
            modifiedContent.slice(importPosition);
        } else {
          // import文が見つからない場合は、ファイルの先頭に追加
          modifiedContent = 'import Link from \'next/link\';\n' + modifiedContent;
        }
      }
      
      // 変更を適用する
      if (SAVE_CHANGES) {
        await writeFile(filePath, modifiedContent, 'utf-8');
      }
      
      let message = '';
      if (modifiedATags > 0) {
        message += `${modifiedATags}個の<a>タグをLinkコンポーネントに変換、`;
      }
      if (modifiedLinkComponents > 0) {
        message += `${modifiedLinkComponents}個のLinkコンポーネントを修正、`;
      }
      message = message.slice(0, -1); // 末尾のカンマを削除
      
      console.log(`${relativeFilePath}: ${message}`);
      modifiedFilesCount++;
      totalModifiedATagsCount += modifiedATags;
      totalModifiedLinkComponentsCount += modifiedLinkComponents;
    }
  } catch (error) {
    console.error(`ファイル ${filePath} の処理中にエラーが発生しました:`, error);
  }
}

/**
 * メイン実行関数
 */
async function main() {
  console.log('Next.jsのリンク修正処理を開始します...');
  console.log(`変更を${SAVE_CHANGES ? '保存' : 'プレビュー'}します。`);
  
  try {
    // プロジェクト内の全ファイルをスキャンしてリンクを修正
    await scanDirectory(srcDir, fixLinksInFile);
    
    // 結果を表示
    if (modifiedFilesCount > 0) {
      let summary = '';
      if (totalModifiedATagsCount > 0) {
        summary += `${totalModifiedATagsCount}個のaタグをLinkコンポーネントに変換、`;
      }
      if (totalModifiedLinkComponentsCount > 0) {
        summary += `${totalModifiedLinkComponentsCount}個のLinkコンポーネントを修正、`;
      }
      summary = summary.slice(0, -1); // 末尾のカンマを削除
      
      console.log(`\n✅ 完了: ${modifiedFilesCount}個のファイルで${summary}しました`);
      if (SAVE_CHANGES) {
        console.log('すべての変更が保存されました。');
      } else {
        console.log('変更は保存されていません。保存するには SAVE_CHANGES = true に設定してください。');
      }
    } else {
      console.log('\n✅ 修正が必要なリンクは見つかりませんでした');
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