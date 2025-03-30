import React from 'react';
import Link from 'next/link';

/**
 * 論文のトップページ用ヘッダーコンポーネント
 * 
 * @param {string} title - 論文タイトル
 * @param {string} jaTitle - 論文の日本語タイトル（オプション）
 * @param {Array|string} authors - 著者名（オプション）- 文字列または{name, affiliations}の配列
 * @param {Object} affiliations - 所属機関の辞書（オプション）
 * @param {Array} authorsWithAffiliations - 所属情報付き著者（オプション）- {name, affiliations}の配列
 * @param {string} description - 論文の説明（オプション）
 * @param {string} venue - 発表場所（オプション）
 * @param {string} date - 発表日（オプション）
 * @param {string} paperUrl - 論文URL（オプション）
 */
export default function PaperHeader({ 
  title, 
  jaTitle,
  subtitle, 
  authors, 
  affiliations,
  authorsWithAffiliations,
  description,
  venue, 
  date, 
  paperUrl 
}) {
  // 著者情報のフォーマット
  const formatAuthors = () => {
    if (authorsWithAffiliations && authorsWithAffiliations.length > 0) {
      return authorsWithAffiliations.map((author, index) => (
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
          {index < authorsWithAffiliations.length - 1 && ', '}
        </span>
      ));
    }
    
    if (!authors) return null;
    
    // 著者が文字列の場合はそのまま使用
    if (typeof authors === 'string') {
      return authors;
    }
    
    // 著者が配列の場合は、名前と所属を適切にフォーマット
    if (Array.isArray(authors)) {
      return authors.map((author, index) => {
        // authorが文字列かオブジェクトかをチェック
        if (typeof author === 'string') {
          return (
            <span key={`author-${index}`}>
              {author}
              {index < authors.length - 1 && ', '}
            </span>
          );
        }
        
        return (
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
        );
      });
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
    <header className="mb-10 text-center">
      {/* 英語タイトル - より大きく、太字で強調 */}
      <h1 className="text-3xl md:text-5xl font-bold mb-3 text-primary leading-tight">
        {title}
      </h1>
      
      {/* 日本語タイトル - 英語タイトルよりも小さいが、十分に目立つサイズ */}
      {jaTitle && (
        <h2 className="text-xl md:text-2xl mb-6 text-primary-dark font-medium">
          {jaTitle}
        </h2>
      )}
      
      {/* 著者情報 */}
      {(authorsWithAffiliations || authors) && (
        <p className="text-lg mb-2 text-text">
          {formatAuthors()}
        </p>
      )}
      
      {/* 所属情報 */}
      {affiliations && renderAffiliations()}
      
      {/* 会議・日付情報 */}
      {(venue || date) && (
        <p className="text-md mt-2 mb-4 text-text font-medium">
          {venue}{venue && date && ', '}{date}
        </p>
      )}
      
      {/* 論文説明 */}
      {description && (
        <p className="mt-4 text-md text-text max-w-3xl mx-auto">
          {description}
        </p>
      )}
      
      {/* 論文URL */}
      {paperUrl && (
        <div className="mt-6">
          <Link 
            href={paperUrl}
            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            target="_blank"
            rel="noopener noreferrer"
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