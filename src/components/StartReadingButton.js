import React from 'react';
import Link from 'next/link';

/**
 * 論文を読み始めるためのボタンコンポーネント
 * 
 * @param {Object} props 
 * @param {string} props.href - リンク先のパス
 * @param {string} props.text - ボタンに表示するテキスト
 */
const StartReadingButton = ({ 
  href = '/background/', 
  text = '論文を読み始める' 
}) => {
  return (
    <div className="flex justify-center mt-10">
      <Link href={href}>
        <a className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg shadow-md hover:from-primary hover:to-secondary/90 transition duration-300 flex items-center">
          {text}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </Link>
    </div>
  );
};

export default StartReadingButton;