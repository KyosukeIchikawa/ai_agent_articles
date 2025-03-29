import React from 'react';

/**
 * 論文のヘッダー情報を表示するコンポーネント
 * 
 * @param {Object} props
 * @param {string} props.title - 論文のタイトル（英語）
 * @param {string} props.subtitle - 論文のサブタイトル（日本語）
 * @param {string} props.description - 論文の簡単な説明
 * @param {Array} props.authors - 著者情報の配列
 * @param {Object} props.affiliations - 所属情報のオブジェクト
 */
const PaperHeader = ({ 
  title, 
  subtitle, 
  description, 
  authors = [], 
  affiliations = {} 
}) => {
  return (
    <header className="text-center mb-10 bg-gradient-to-r from-primary-light via-blue-50 to-primary-light py-10 rounded-xl shadow-sm">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-text">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary">
          {title}
        </span>
        <span className="block text-xl md:text-2xl font-medium mt-3 text-primary">
          {subtitle}
        </span>
      </h1>
      <p className="text-lg text-primary max-w-3xl mx-auto">
        {description}
      </p>
      <div className="mt-4 text-text">
        <p>
          {authors.map((author, index) => (
            <React.Fragment key={index}>
              {author.name}
              {author.affiliations.map(affId => (
                <sup key={affId}>{affId}</sup>
              ))}
              {index < authors.length - 1 ? ', ' : ''}
            </React.Fragment>
          ))}
        </p>
        <p className="text-sm mt-1">
          {Object.entries(affiliations).map(([id, affiliation], index) => (
            <React.Fragment key={id}>
              <sup>{id}</sup>{affiliation}
              {index < Object.entries(affiliations).length - 1 ? ' | ' : ''}
            </React.Fragment>
          ))}
        </p>
      </div>
    </header>
  );
};

export default PaperHeader;