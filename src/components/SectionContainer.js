import React from 'react';

/**
 * セクションコンテナコンポーネント - 共通のスタイルを持つセクション要素
 * 
 * @param {ReactNode} children - セクションの内容
 * @param {string} title - セクションのタイトル
 * @param {string} subtitle - セクションのサブタイトル（オプション）
 * @param {string} bgGradient - 背景のグラデーション（オプション）
 * @param {string} borderColor - ボーダーの色（オプション）
 * @param {string} titleColor - タイトルの色（オプション）
 */
export default function SectionContainer({
  children,
  title,
  subtitle,
  bgGradient = "from-primary-light to-secondary-light",
  borderColor = "border-primary/20",
  titleColor = "text-primary"
}) {
  return (
    <div className={`bg-gradient-to-r ${bgGradient} p-6 rounded-lg shadow-sm border ${borderColor} my-6`}>
      {title && (
        <h3 className={`text-xl font-semibold mb-3 ${titleColor} ${subtitle ? 'border-b border-primary/20 pb-2' : ''}`}>
          {title}
        </h3>
      )}
      {subtitle && <p className="text-lg mb-4">{subtitle}</p>}
      <div className="prose max-w-none">
        {children}
      </div>
    </div>
  );
}