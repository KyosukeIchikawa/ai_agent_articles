import React from 'react';
import ReferenceItem from './ReferenceItem';

/**
 * 参考文献セクションコンポーネント
 * 
 * @param {Object[]} references - 参考文献の配列
 * @param {string} title - セクションタイトル（オプション）
 * @param {string} className - 追加のCSSクラス（オプション）
 * @param {string} bgClass - 背景のCSSクラス（オプション）
 */
export default function ReferenceSection({ 
  references, 
  title = "参考文献", 
  className = "", 
  bgClass = "bg-white" 
}) {
  return (
    <section className={`${bgClass} rounded-lg shadow-sm p-6 ${className}`}>
      <h2 className="text-xl font-bold mb-4 text-primary">{title}</h2>
      <div className="divide-y divide-primary/10">
        {references.map((reference) => (
          <ReferenceItem key={reference.id} reference={reference} />
        ))}
      </div>
    </section>
  );
}