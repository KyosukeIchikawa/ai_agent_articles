/**
 * 論文データの型定義
 * 
 * このファイルでは、論文データの構造と各プロパティの意味を定義しています。
 * 新しい論文を追加する際は、この型定義に従ってデータを作成してください。
 */

/**
 * 論文のセクション情報
 * @typedef {Object} PaperSection
 * @property {string} id - セクションのID（URLの一部として使用）
 * @property {string} title - セクションのタイトル
 * @property {string} path - セクションへの完全なパス
 */

/**
 * 論文データの構造
 * @typedef {Object} Paper
 * @property {string} id - 論文の一意のID（URLスラッグとして使用）
 * @property {string} title - 論文の英語タイトル
 * @property {string} subtitle - 論文の日本語タイトルまたはサブタイトル
 * @property {string} description - 論文の簡潔な説明
 * @property {number} publishedYear - 出版年
 * @property {string[]} authors - 著者リスト
 * @property {string[]} categories - カテゴリタグ
 * @property {PaperSection[]} sections - 論文のセクション構造
 */

// エクスポートするものはありませんが、JSDoc型定義として機能します