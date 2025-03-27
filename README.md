# Curiosity-Driven Imagination

## 概要

このリポジトリは、強化学習における「Curiosity-Driven Imagination」というアプローチを解説するウェブサイトのソースコードです。好奇心駆動型の想像力を活用した新しい学習アルゴリズムについて、その背景、手法、実験結果を詳細に解説しています。

## デプロイ済みサイト

こちらのURLから公開サイトにアクセスできます：

🔗 **[Curiosity-Driven Imagination](https://kyosukeichikawa.github.io/ai_agent_articles/)**

## 主な機能

- **ダークモード対応**: ユーザーの好みに応じて、ライトモードとダークモードを切り替えることができます
- **レスポンシブデザイン**: スマートフォンからデスクトップまで、さまざまな画面サイズに適応
- **トップへ戻るボタン**: 長いコンテンツでもスムーズにナビゲーション
- **数式表示**: 複雑な数式も美しく表示
- **参考文献ページ**: 関連する重要な学術論文へのリンク

## 技術スタック

- **フレームワーク**: Next.js
- **スタイリング**: TailwindCSS
- **デプロイ**: GitHub Pages

## ローカルでの開発

このプロジェクトをローカルで実行するには：

```bash
# リポジトリをクローン
git clone https://github.com/KyosukeIchikawa/ai_agent_articles.git
cd ai_agent_articles

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで `http://localhost:3000` を開くと、サイトにアクセスできます。

## ビルドとデプロイ

GitHub Actionsを使用して、mainブランチへのプッシュ時に自動的にGitHub Pagesにデプロイされます。

手動でビルドするには：

```bash
npm run build
```

ビルドされたファイルは `out` ディレクトリに出力されます。

## コンテンツ構成

- **背景**: 強化学習と好奇心駆動型学習の基本概念
- **方法**: Curiosity-Driven Imaginationアルゴリズムの詳細
- **実験**: 様々な環境での実験結果と分析
- **結論**: 研究のまとめと将来の展望
- **参考文献**: 関連研究のリスト

## ライセンス

MIT