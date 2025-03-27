# AI Agent 論文解説サイト

## 概要

このリポジトリは、AI Agent に関する重要な論文を解説するウェブサイトのソースコードです。AI分野の最新研究を理解しやすく解説し、その背景、手法、実験結果を詳細に紹介しています。現在は「Curiosity-Driven Imagination」の解説が含まれており、今後さらに多くの論文解説を追加していく予定です。

## デプロイ済みサイト

こちらのURLから公開サイトにアクセスできます：

🔗 **[AI Agent 論文解説サイト](https://kyosukeichikawa.github.io/ai_agent_articles/)**

## 収録論文

現在、以下の論文の解説が収録されています：

- **Curiosity-Driven Imagination**: 好奇心駆動型想像力による強化学習の新アプローチ

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

## 新しい論文記事の追加方法

このリポジトリは複数の論文解説記事を管理できるよう設計されています。以下の手順に従って新しい論文記事を追加できます：

### 1. 論文データファイルの作成

`src/data/papers/_template.js` ファイルをコピーして新しい論文データファイルを作成します：

```bash
# テンプレートファイルを新しいファイル名でコピー
cp src/data/papers/_template.js src/data/papers/papers/your-paper-id.js
```

`your-paper-id` は論文の一意のIDに置き換えてください（URLスラッグとして使用されます）。

### 2. 論文データの編集

新しく作成したファイルを開き、論文の詳細情報を入力します：

```javascript
const paper = {
  id: 'your-paper-id',           // URLスラッグとして使用される一意のID
  title: '論文の英語タイトル',     // 英語のタイトル
  subtitle: '論文の日本語タイトル', // 日本語のタイトルまたはサブタイトル
  description: '論文の簡潔な説明',  // 概要
  publishedYear: 2023,            // 出版年
  authors: ['著者1', '著者2'],     // 著者リスト
  categories: ['カテゴリ1', 'カテゴリ2'], // 関連カテゴリ
  sections: [
    // 各セクション情報（必要に応じてカスタマイズ可能）
    {
      id: 'background',
      title: '背景',
      path: '/papers/your-paper-id/background'
    },
    // ... 他のセクション
  ]
};
```

### 3. インデックスファイルの更新

`src/data/papers/index.js` ファイルを開き、以下の変更を行います：

1. インポート文の追加:
```javascript
import yourPaper from './papers/your-paper-id.js';
```

2. papers配列に新しい論文を追加:
```javascript
const papers = [
  curiosityDrivenImagination,
  yourPaper,  // 新しい論文を追加
  // 他の論文...
];
```

### 4. セクションコンテンツの作成

各セクションのコンテンツを作成します。現在の構造では、以下のディレクトリにコンテンツファイルを作成する必要があります：

- `/src/pages/papers/[paperId]/[sectionId].js`

このディレクトリ構造に合わせてセクションごとのコンテンツファイルを作成してください。

### 5. 動作確認

開発サーバーを起動して、新しい論文ページが正しく表示されることを確認します：

```bash
npm run dev
```

ブラウザで `http://localhost:3000/papers/your-paper-id` にアクセスして、新しい論文ページが表示されることを確認してください。

## ライセンス

MIT