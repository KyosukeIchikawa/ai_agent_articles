import React from 'react';
import ReferenceItem from './ReferenceItem';

/**
 * 参考文献セクションを表示するコンポーネント
 * 
 * @param {Object} props
 * @param {string} props.title - セクションタイトル
 * @param {Array} props.references - 参考文献のリスト
 * @param {string} props.colorTheme - セクションのカラーテーマ (primary, secondary, accent)
 * @param {string} props.fromColor - グラデーションの開始色クラス
 * @param {string} props.toColor - グラデーションの終了色クラス
 */
const ReferenceSection = ({ 
  title, 
  references, 
  colorTheme = 'primary',
  fromColor = 'primary-light',
  toColor = 'secondary-light'
}) => {
  const gradientClasses = {
    bg: `bg-gradient-to-r from-${fromColor} to-${toColor}`,
    border: `border-${colorTheme}/20`
  };
  
  const titleClass = `text-xl font-semibold mb-4 text-${colorTheme}`;
  
  return (
    <div className={`${gradientClasses.bg} p-6 rounded-lg shadow-sm border ${gradientClasses.border} my-6`}>
      <h3 className={titleClass}>{title}</h3>
      
      <ul className="space-y-6 list-none pl-0">
        {references.map((reference, index) => (
          <ReferenceItem
            key={reference.index || index}
            index={reference.index}
            authors={reference.authors}
            title={reference.title}
            publication={reference.publication}
            url={reference.url}
            colorTheme={colorTheme}
          />
        ))}
      </ul>
    </div>
  );
};

export default ReferenceSection;