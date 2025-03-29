import React from 'react';

/**
 * 参考文献の個別項目を表示するコンポーネント
 * 
 * @param {Object} props
 * @param {string} props.index - 文献の番号 (例: "[1]")
 * @param {string} props.authors - 著者情報
 * @param {string} props.title - 論文タイトル
 * @param {string} props.publication - 出版情報（ジャーナル名、ページ番号など）
 * @param {string} props.url - 文献のURL
 * @param {string} props.colorTheme - カラーテーマ (primary, secondary, accent)
 */
const ReferenceItem = ({ 
  index, 
  authors, 
  title, 
  publication, 
  url,
  colorTheme = 'primary' 
}) => {
  // カラーテーマに基づいたスタイルの設定
  const themeClasses = {
    primary: {
      title: "text-primary",
      link: "text-primary hover:text-primary-800",
      border: "border-primary/20"
    },
    secondary: {
      title: "text-secondary",
      link: "text-secondary hover:text-secondary-800",
      border: "border-secondary/20"
    },
    accent: {
      title: "text-accent",
      link: "text-accent hover:text-accent-800",
      border: "border-accent/20"
    }
  };
  
  const theme = themeClasses[colorTheme] || themeClasses.primary;
  
  return (
    <li className={`pb-4 border-b ${theme.border}`}>
      <div className="flex flex-col">
        <span className="text-text font-medium">{index} {authors}</span>
        <span className={`font-semibold ${theme.title}`}>{title}</span>
        <span className="text-text/80">{publication}</span>
        {url && (
          <a 
            href={url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`text-sm ${theme.link} mt-1 hover:underline inline-flex items-center`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            {url}
          </a>
        )}
      </div>
    </li>
  );
};

export default ReferenceItem;