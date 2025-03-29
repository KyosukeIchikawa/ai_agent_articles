import React from 'react';

/**
 * 数式を表示するためのコンポーネント
 * KaTeXやMathJaxなどのライブラリを使用することを想定
 * 
 * @param {string} formula - 表示する数式
 * @param {boolean} isInline - インライン表示するかどうか (デフォルトはfalse=ブロック表示)
 * @param {string} caption - 数式の説明（オプション）
 * @param {string} eqNumber - 数式番号（オプション）
 * @param {string} className - 追加のCSSクラス（オプション）
 */
export default function MathEquation({
  formula,
  isInline = false,
  caption,
  eqNumber,
  className = "",
}) {
  // 実際の実装では、KaTeXやMathJaxなどのライブラリを使用して数式をレンダリングします
  // ここではプレースホルダーとして実装します
  
  if (isInline) {
    return (
      <span 
        className={`math-inline font-mono bg-gray-100 px-1.5 rounded ${className}`} 
        data-formula={formula}
      >
        {formula}
      </span>
    );
  }
  
  return (
    <div className={`my-4 ${className}`}>
      <div className="flex justify-between items-center py-2">
        <div className="flex-grow text-center">
          <div 
            className="math-display font-mono py-2 px-4 bg-gray-100 rounded inline-block" 
            data-formula={formula}
          >
            {formula}
          </div>
        </div>
        {eqNumber && (
          <div className="text-gray-600 ml-4">({eqNumber})</div>
        )}
      </div>
      {caption && (
        <div className="text-sm text-gray-600 mt-1 text-center">
          {caption}
        </div>
      )}
    </div>
  );
}