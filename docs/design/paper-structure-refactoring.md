# 論文データ構造リファクタリング設計書

## 目的

- 新しい論文の追加を容易にする
- データ構造を統一し、一貫性を保つ
- 各論文データを個別ファイルとして管理し、メンテナンス性を向上させる

## 現状の課題

現在のプロジェクトでは、論文データが以下のような問題を抱えています：

1. すべての論文データが単一の `index.js` ファイルに定義されている
2. 論文ごとのコンテンツが分離されておらず、新規追加時に `index.js` を直接編集する必要がある
3. データ構造に型定義がなく、必要なプロパティの把握が難しい

## 提案するリファクタリング

### 1. フォルダ構造の改善

```
src/
  data/
    papers/
      index.js           # 論文データをエクスポートする集約ファイル
      types.js           # 論文データの型定義
      _template.js       # 新規論文追加時のテンプレートファイル
      papers/            # 個別論文データを格納するフォルダ
        curiosity-driven-imagination.js
        # 今後追加される論文ファイル...
```

### 2. データ構造の標準化

各論文ファイルは以下の構造を持つオブジェクトをエクスポートします：

```javascript
// 論文データの標準フォーマット
{
  id: 'unique-paper-id',         // 一意のID（URLスラッグとして使用）
  title: 'Paper Title',          // 論文の英語タイトル
  subtitle: '論文の日本語タイトル',  // サブタイトルまたは日本語訳
  description: '論文の簡潔な説明',  // 概要説明
  publishedYear: 2023,           // 出版年
  authors: ['Author Name'],      // 著者リスト
  categories: ['Category'],      // カテゴリタグ
  sections: [                    // 論文のセクション構造
    {
      id: 'section-id',          // セクションID
      title: 'セクションタイトル',   // セクションの表示名
      path: '/papers/paper-id/section-id' // セクションへのパス
    }
    // ...他のセクション
  ]
}
```

### 3. インデックスファイルの自動集約

`index.js` ファイルでは、個別の論文ファイルをインポートして集約します：

```javascript
import paperA from './papers/paper-a.js';
import paperB from './papers/paper-b.js';
// 他の論文インポート

// 全論文データの配列
const papers = [paperA, paperB, /* その他の論文 */];

// エクスポート関数
export function getAllPapers() {
  return papers;
}

export function getPaperById(id) {
  return papers.find(paper => paper.id === id) || null;
}

// その他の補助関数
```

### 4. 新規論文追加プロセスの簡素化

新しい論文を追加する際の手順：

1. `_template.js` ファイルをコピーして新しい論文ファイルを作成
2. 論文の詳細情報を入力
3. `index.js` にインポート文を追加

## 実装計画

1. フォルダ構造の整理と作成
2. 型定義ファイルの作成
3. テンプレートファイルの作成
4. 既存の論文データを新しい構造に移行
5. インデックスファイルの更新
6. 動作確認とテスト