import { useState } from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { getAllPapers } from '../../data/papers';

export default function PapersIndex() {
  const papers = getAllPapers();
  const [searchTerm, setSearchTerm] = useState('');
  
  // 各ペーパーに必要なプロパティが存在することを確認
  const filteredPapers = papers.filter(paper => {
    // 検索に使うプロパティが存在するか確認
    const title = paper.title || '';
    const fullTitle = paper.fullTitle || '';
    const subtitle = paper.subtitle || '';
    const description = paper.description || '';
    // categoriesが配列であることを確認
    const categories = Array.isArray(paper.categories) ? paper.categories : [];
    
    return title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      fullTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      categories.some(category => category?.toLowerCase().includes(searchTerm.toLowerCase()));
  });

  return (
    <Layout title="論文一覧">
      <div className="space-y-8">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">
            AI関連論文解説
          </h1>
          <p className="text-lg text-gray-600">
            最新のAI研究論文の解説記事コレクション
          </p>
        </header>
        
        <div className="mb-6">
          <input
            type="text"
            placeholder="論文を検索..."
            className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-900"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredPapers.map(paper => {
            // ペーパーごとに必要なプロパティが存在することを確認
            const title = paper.title || '';
            const fullTitle = paper.fullTitle || '';
            const subtitle = paper.subtitle || '';
            const description = paper.description || '';
            const categories = Array.isArray(paper.categories) ? paper.categories : [];
            // authors が配列かどうか確認
            const authors = Array.isArray(paper.authors) ? paper.authors : 
                           (typeof paper.authors === 'string' ? [paper.authors] : []);
            const publishedYear = paper.publishedYear || paper.publicationDate || '';
            
            return (
              <div key={paper.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <Link href={`/papers/${paper.id}`}>
                  <a className="block h-full">
                    <h2 className="text-xl font-bold mb-2 text-primary">{title}</h2>
                    {fullTitle && fullTitle !== title && (
                      <h3 className="text-lg mb-3 text-primary-dark">{fullTitle}</h3>
                    )}
                    {subtitle && (
                      <h3 className="text-lg mb-3 text-secondary">{subtitle}</h3>
                    )}
                    <p className="text-text mb-4">{description}</p>
                    
                    {categories.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {categories.map((category, index) => (
                          <span 
                            key={index} 
                            className="bg-primary-light text-primary text-xs px-2 py-1 rounded"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    <div className="text-sm text-text">
                      {authors.length > 0 && (
                        <span>著者: {authors.join(', ')}</span>
                      )}
                      {publishedYear && (
                        <span className="ml-4">発表年: {publishedYear}</span>
                      )}
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
        
        {filteredPapers.length === 0 && (
          <div className="text-center p-8 text-text-light">
            検索条件に一致する論文が見つかりませんでした。
          </div>
        )}
      </div>
    </Layout>
  );
}