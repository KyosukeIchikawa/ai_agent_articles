import React from 'react';

/**
 * 参考文献アイテムのコンポーネント
 * 
 * @param {Object} reference - 参考文献のデータ
 * @param {string} reference.id - 参考文献のID
 * @param {string} reference.title - 論文タイトル
 * @param {string[]} reference.authors - 著者リスト
 * @param {string} reference.year - 発行年
 * @param {string} reference.venue - 発表場所（ジャーナルや会議名）
 * @param {string} reference.url - 論文URL（オプション）
 * @param {string} reference.doi - DOI（オプション）
 */
export default function ReferenceItem({ reference }) {
  return (
    <div className="py-3 border-b border-primary/10 last:border-b-0">
      <div className="flex gap-3">
        <div className="text-sm font-medium w-8 text-primary shrink-0">
          [{reference.id}]
        </div>
        <div>
          <h3 className="font-medium text-primary">
            {reference.title}
          </h3>
          <p className="text-sm text-text mt-1">
            {reference.authors.join(', ')}
          </p>
          <p className="text-sm text-text">
            <span>{reference.venue}</span>
            {reference.year && <span>, {reference.year}</span>}
          </p>
          {(reference.url || reference.doi) && (
            <div className="flex gap-4 mt-2 text-sm">
              {reference.url && (
                <a 
                  href={reference.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  論文を読む
                </a>
              )}
              {reference.doi && (
                <a 
                  href={`https://doi.org/${reference.doi}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  DOI
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}