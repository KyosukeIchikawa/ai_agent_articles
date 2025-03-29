import React from 'react';
import Link from 'next/link';

/**
 * 論文のトップページ用ヘッダーコンポーネント
 * 
 * @param {string} title - 論文タイトル
 * @param {string} subtitle - 論文サブタイトル（オプション）
 * @param {string} authors - 著者名（オプション）
 * @param {string} venue - 発表場所（オプション）
 * @param {string} date - 発表日（オプション）
 * @param {string} paperUrl - 論文URL（オプション）
 */
export default function PaperHeader({ 
  title, 
  subtitle, 
  authors, 
  venue, 
  date, 
  paperUrl 
}) {
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
          {authors}
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