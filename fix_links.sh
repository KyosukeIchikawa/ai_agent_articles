#!/bin/bash

# Next.jsのページディレクトリへのパス
PAGES_DIR="/home/kyo/prj/ai_agent_articles/src/pages"

# リンクを正規化する関数
normalize_links() {
  local file=$1
  
  # まず、重複するスラッシュを修正（例：/path// → /path/）
  sed -i 's|href="/\([^/"]\+\)//"|href="/\1/"|g' "$file"
  
  # 末尾にスラッシュがないリンクを修正（例：/path" → /path/"）
  # ただし、拡張子を持つファイルへのリンク（例：/favicon.ico）は除外
  sed -i 's|href="/\([^/.][^/"]*[^/.]\)"|href="/\1/"|g' "$file"
  
  # ホームへのリンクは特別扱い
  sed -i 's|href="///"|href="/"|g' "$file"
  
  # faviconリンクの修正（誤って追加されたスラッシュを削除）
  sed -i 's|href="/favicon.ico/"|href="/favicon.ico"|g' "$file"
  
  echo "正規化されたリンク: $file"
}

# ページディレクトリ内の全てのJSファイルを再帰的に探索
find "$PAGES_DIR" -type f -name "*.js" | while read -r file; do
  normalize_links "$file"
done

# Layoutコンポーネントも修正
LAYOUT_FILE="/home/kyo/prj/ai_agent_articles/src/components/Layout.js"
normalize_links "$LAYOUT_FILE"

echo "リンク修正完了！"
