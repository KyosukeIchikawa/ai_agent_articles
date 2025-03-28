import React from 'react';
import Link from 'next/link';

/**
 * 論文のトップページ用ヘッダーコンポーネント
 * 
 * @param {string} title - 論文タイトル
 * @param {string} subtitle - 論文サブタイトル（オプション）
 * @param {Array|string} authors - 著者名（オプション）- 文字列または{name, affiliations}の配列
 * @param {Object} affiliations - 所属機関の辞書（オプション）
 * @param {string} description - 論文の説明（オプション）
 * @param {string} venue - 発表場所（オプション）
 * @param {string} date - 発表日（オプション）
 * @param {string} paperUrl - 論文URL（オプション）
 */
export default function PaperHeader({ 
  title, 
  subtitle, 
  authors, 
  affiliations,
  description,
  venue, 
  date, 
  paperUrl 
}) {
  // 著者情報のフォーマット
  const formatAuthors = () => {
    if (!authors) return null;
    
    // 著者が文字列の場合はそのまま使用
    if (typeof authors === 'string') {
      return authors;
    }
    
    // 著者が配列の場合は、名前と所属を適切にフォーマット
    if (Array.isArray(authors)) {
      return authors.map((author, index) => (
        <span key={`author-${index}`}>
          {author.name}
          {author.affiliations && author.affiliations.length > 0 && (
            <sup>
              {author.affiliations.map((affId, idx) => (
                <span key={`aff-${index}-${idx}`}>
                  {idx > 0 && ', '}
                  {affId}
                </span>
              ))}
            </sup>
          )}
          {index < authors.length - 1 && ', '}
        </span>
      ));
    }
    
    return null;
  };

  // 所属情報のフォーマット
  const renderAffiliations = () => {
    if (!affiliations) return null;
    
    return (
      <div className="text-sm mt-2 text-text">
        {Object.entries(affiliations).map(([id, affiliation]) => (
          <div key={`affiliation-${id}`}>
            <sup>{id}</sup> {affiliation}
          </div>
        ))}
      </div>
    );
  };

  return (
    <header className="mb-8 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-3 text-primary">
        {title}
      </h1>
      
      {subtitle && (
        <p className="text-xl md:text-2xl mb-4 text-primary-dark">
          {subtitle}
        </p>
      )}
      
      {authors && (
        <p className="text-lg mb-2 text-text">
          {formatAuthors()}
        </p>
      )}
      
      {affiliations && renderAffiliations()}
      
      {description && (
        <p className="mt-4 text-md text-text max-w-3xl mx-auto">
          {description}
        </p>
      )}
      
      {(venue || date) && (
        <p className="text-md mb-4 text-text">
          {venue}{venue && date && ', '}{date}
        </p>
      )}
      
      {paperUrl && (
        <div className="mt-4">
          <Link 
            href={paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
              />
            </svg>
            原論文を読む
          </Link>
        </div>
      )}
    </header>
  );
}