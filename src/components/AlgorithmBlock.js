import React from 'react';

/**
 * アルゴリズムや疑似コードを表示するためのコンポーネント
 * 
 * @param {string} title - アルゴリズムのタイトル
 * @param {string[]} lines - アルゴリズムの行（配列）
 * @param {string} number - アルゴリズム番号（オプション）
 * @param {string} caption - アルゴリズムの説明（オプション）
 * @param {boolean} showLineNumbers - 行番号を表示するかどうか（オプション）
 * @param {string} className - 追加のCSSクラス（オプション）
 */
export default function AlgorithmBlock({
  title,
  lines,
  number,
  caption,
  showLineNumbers = true,
  className = "",
}) {
  return (
    <div className={`my-6 ${className}`}>
      <div className="bg-white rounded-lg shadow overflow-hidden border border-primary/20">
        <div className="bg-primary-light text-primary font-medium px-4 py-2 border-b border-primary/20">
          {number && <span>Algorithm {number}: </span>}
          {title}
        </div>
        <div className="p-4 bg-gray-50 font-mono text-sm overflow-x-auto">
          <table className="w-full">
            <tbody>
              {lines.map((line, index) => (
                <tr key={index} className="leading-relaxed">
                  {showLineNumbers && (
                    <td className="pr-4 text-right text-gray-500 select-none w-12">
                      {index + 1}
                    </td>
                  )}
                  <td className="whitespace-pre">
                    {line}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {caption && (
        <div className="text-sm text-primary mt-2 text-center">
          {caption}
        </div>
      )}
    </div>
  );
}