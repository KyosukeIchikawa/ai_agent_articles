#!/bin/bash

# GitHub Pagesのリンク問題を検出および修正するスクリプト
# 使用方法:
#   ./fix_github_pages_links.sh check    - リンク問題の検出のみ実行
#   ./fix_github_pages_links.sh fix      - 問題のあるリンクを自動修正

# 色付き出力用の変数
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
BOLD='\033[1m'
NC='\033[0m' # No Color

# スクリプトの場所を取得
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" &>/dev/null && pwd)"

# 第一引数（コマンド）を取得
COMMAND="check"
if [ $# -ge 1 ]; then
  COMMAND="$1"
fi

# ヘルプメッセージを表示
if [ "$COMMAND" == "help" ] || [ "$COMMAND" == "--help" ] || [ "$COMMAND" == "-h" ]; then
  echo -e "${BLUE}${BOLD}GitHub Pages リンク問題修正スクリプト${NC}"
  echo ""
  echo "このスクリプトは GitHub Pages でホストする際のリンク問題を検出・修正します。"
  echo "特に '/ai_visual_arxiv/' ベースパスが欠けているリンクを自動的に修正します。"
  echo ""
  echo -e "${BOLD}使用方法:${NC}"
  echo -e "  ${YELLOW}./fix_github_pages_links.sh check${NC}    - リンク問題の検出のみ実行"
  echo -e "  ${YELLOW}./fix_github_pages_links.sh fix${NC}      - 問題のあるリンクを自動修正"
  echo -e "  ${YELLOW}./fix_github_pages_links.sh help${NC}     - このヘルプを表示"
  echo ""
  exit 0
fi

# リンクチェック実行
if [ "$COMMAND" == "check" ]; then
  echo -e "${BLUE}${BOLD}GitHub Pages用のリンク問題を検出します...${NC}"
  CHECK_GITHUB_PAGES=true node src/scripts/check-links.js

  if [ $? -ne 0 ]; then
    echo -e "\n${YELLOW}リンク問題を修正するには以下を実行してください:${NC}"
    echo -e "  ${BOLD}./fix_github_pages_links.sh fix${NC}"
  fi
  exit $?
fi

# リンク修正実行
if [ "$COMMAND" == "fix" ]; then
  echo -e "${BLUE}${BOLD}GitHub Pages用のリンク問題を修正します...${NC}"
  FIX_GITHUB_PAGES=true CHECK_GITHUB_PAGES=true node src/scripts/check-links.js

  if [ $? -eq 0 ]; then
    echo -e "\n${GREEN}✓ GitHub Pages用のリンク問題がすべて修正されました${NC}"
  else
    echo -e "\n${RED}✗ 一部の問題が残っています。もう一度 'check' コマンドを実行して確認してください。${NC}"
  fi
  exit $?
fi

# 不明なコマンド
echo -e "${RED}不明なコマンド: $COMMAND${NC}"
echo -e "使用できるコマンド: check, fix, help"
echo -e "ヘルプを表示するには: ${BOLD}./fix_github_pages_links.sh help${NC}"
exit 1