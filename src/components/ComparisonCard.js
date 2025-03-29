import React from 'react';

/**
 * 比較手法や解析結果を表示するためのカードコンポーネント
 * 
 * @param {string} title - カードのタイトル
 * @param {ReactNode} children - カードの内容
 * @param {string} bgGradient - 背景のグラデーション（オプション）
 * @param {string} borderColor - ボーダーの色（オプション）
 * @param {string} titleColor - タイトルの色（オプション）
 */
export default function ComparisonCard({
  title,
  children,
  bgGradient = "from-primary-light to-secondary-light",
  borderColor = "border-primary/20",
  titleColor = "text-primary"
}) {
  return (
    <div className={`bg-gradient-to-br ${bgGradient} p-4 rounded-lg shadow-sm border ${borderColor}`}>
      <h4 className={`text-lg font-medium mb-2 ${titleColor}`}>{title}</h4>
      {children}
    </div>
  );
}