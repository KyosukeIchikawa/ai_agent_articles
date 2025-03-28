/**
 * このスクリプトはプロジェクト内のJSファイルを走査し、
 * ダークモード関連のクラス（dark:プレフィックス付きのクラス）を削除します。
 * 
 * 使い方:
 * node src/scripts/remove-dark-mode.js
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
  totalDarkClasses: 0,
  removedDarkClasses: 0
};

/**
 * ダークモード関連クラスの削除
 */
function removeDarkModeClasses(content) {
  // ダークモードクラスを検出する正規表現
  const darkClassRegex = /\s+dark:[^"\s]+/g;
  
  // マッチするダークモードクラスを数える
  const darkClasses = (content.match(darkClassRegex) || []);
  statistics.totalDarkClasses += darkClasses.length;
  
  if (darkClasses.length === 0) {
    return { content, changed: false };
  }
  
  // ダークモードクラスを削除
  const modifiedContent = content.replace(darkClassRegex, '');
  
  statistics.removedDarkClasses += darkClasses.length;
  
  return {
    content: modifiedContent,
    changed: darkClasses.length > 0
  };
}

/**
 * ファイル内のダークモードクラスを削除
 */
async function processFile(filePath) {
  try {
    const content = await readFile(filePath, 'utf-8');
    statistics.scannedFiles++;
    
    const { content: modifiedContent, changed } = removeDarkModeClasses(content);
    
    if (changed) {
      await writeFile(filePath, modifiedContent, 'utf-8');
      statistics.modifiedFiles++;
      console.log(`[変更] ${path.relative(rootDir, filePath)}`);
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
  console.log('ダークモード関連クラスの削除を開始します...');
  
  // 初期化
  statistics = {
    scannedFiles: 0,
    modifiedFiles: 0,
    totalDarkClasses: 0,
    removedDarkClasses: 0
  };
  
  // 対象ディレクトリの処理
  for (const dir of targetDirs) {
    if (fs.existsSync(dir)) {
      await scanDirectory(dir);
    }
  }
  
  // 結果レポート
  console.log('\n--- 処理結果 ---');
  console.log(`スキャンしたファイル数: ${statistics.scannedFiles}`);
  console.log(`変更したファイル数: ${statistics.modifiedFiles}`);
  console.log(`検出したダークモードクラス数: ${statistics.totalDarkClasses}`);
  console.log(`削除したダークモードクラス数: ${statistics.removedDarkClasses}`);
}

// スクリプト実行
main().catch(err => {
  console.error('エラーが発生しました:', err);
  process.exit(1);
});