const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

// 検索対象のディレクトリ
const directories = [
  path.join(__dirname, '..', 'pages'),
  path.join(__dirname, '..', 'components')
];

// 修正対象のパターン
const linkPattern = /href="\/ai_visual_arxiv\/(.*?)"/g;
const replacementPattern = 'href="/$1"';

// ルートへのリンクを特別に処理
const rootLinkPattern = /href="\/ai_visual_arxiv\/"/g;
const rootReplacementPattern = 'href="/"';

// ファイルを再帰的に探索する関数
async function findJSFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  const files = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      return findJSFiles(fullPath);
    } else if (entry.name.endsWith('.js')) {
      return fullPath;
    }
    
    return [];
  }));
  
  return files.flat();
}

// ファイル内のリンクを修正する関数
async function fixLinksInFile(filePath) {
  try {
    // ファイルの内容を読み込む
    const content = await readFileAsync(filePath, 'utf8');
    
    // リンクパターンが見つかるか確認
    if (linkPattern.test(content) || rootLinkPattern.test(content)) {
      // リンクを修正
      let updatedContent = content.replace(linkPattern, replacementPattern);
      updatedContent = updatedContent.replace(rootLinkPattern, rootReplacementPattern);
      
      // 修正内容を書き込む
      await writeFileAsync(filePath, updatedContent, 'utf8');
      
      console.log(`✅ 修正完了: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ エラー (${filePath}): ${error.message}`);
    return false;
  }
}

// メイン処理
async function main() {
  console.log('リンク修正スクリプトを実行中...');
  
  let modifiedFilesCount = 0;
  let checkedFilesCount = 0;
  
  for (const dir of directories) {
    const jsFiles = await findJSFiles(dir);
    
    for (const file of jsFiles) {
      checkedFilesCount++;
      const modified = await fixLinksInFile(file);
      if (modified) {
        modifiedFilesCount++;
      }
    }
  }
  
  console.log('\n処理完了:');
  console.log(`- 検査したファイル: ${checkedFilesCount}`);
  console.log(`- 修正したファイル: ${modifiedFilesCount}`);
}

main().catch(console.error);