import React from 'react';

/**
 * 図表とキャプションを表示するためのコンポーネント
 * 
 * @param {ReactNode} children - 図表のコンテンツ
 * @param {string} caption - 図表のキャプション
 * @param {string} number - 図表番号（オプション）
 * @param {string} className - 追加のCSSクラス（オプション）
 * @param {string} captionClassName - キャプションのCSSクラス（オプション）
 * @param {string} containerClassName - 図表コンテナのCSSクラス（オプション）
 */
export default function FigureWithCaption({
  children,
  caption,
  number,
  className = "",
  captionClassName = "text-primary",
  containerClassName = "bg-white p-4 rounded-lg mb-2 shadow-inner",
}) {
  return (
    <figure className={`text-center mx-auto ${className}`}>
      <div className={containerClassName}>
        {children}
      </div>
      {caption && (
        <figcaption className={`text-sm ${captionClassName}`}>
          {number && <span>図{number}: </span>}
          {caption}
        </figcaption>
      )}
    </figure>
  );
}