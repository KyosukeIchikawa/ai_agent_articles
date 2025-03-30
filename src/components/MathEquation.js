import React, { useEffect } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

/**
 * 数式を表示するためのコンポーネント
 * KaTeXライブラリを使用して数式をレンダリング
 * 
 * @param {string} text - 表示する数式（LaTeX形式）
 * @param {boolean} isInline - インライン表示するかどうか (デフォルトはfalse=ブロック表示)
 * @param {string} caption - 数式の説明（オプション）
 * @param {string} eqNumber - 数式番号（オプション）
 * @param {string} className - 追加のCSSクラス（オプション）
 */
export default function MathEquation({
  text,
  isInline = false,
  caption,
  eqNumber,
  className = "",
}) {
  const containerRef = React.useRef(null);
  
  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(text, containerRef.current, {
          displayMode: !isInline,
          throwOnError: false,
          output: 'html'
        });
      } catch (error) {
        console.error('KaTeX rendering error:', error);
        containerRef.current.textContent = text;
      }
    }
  }, [text, isInline]);

  if (isInline) {
    return (
      <span 
        ref={containerRef}
        className={`math-inline ${className}`} 
      />
    );
  }
  
  return (
    <div className={`my-4 ${className}`}>
      <div className={`flex justify-between items-center py-2 ${!eqNumber ? 'justify-center' : ''}`}>
        <div className={`${eqNumber ? 'flex-grow' : ''} text-center`}>
          <div 
            ref={containerRef}
            className="math-display py-2 px-4 inline-block" 
          />
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