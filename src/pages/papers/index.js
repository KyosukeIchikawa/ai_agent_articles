import { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import { getAllPapers } from '../data/papers';

export default function PapersIndex() {
  const papers = getAllPapers();
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPapers = papers.filter(paper => 
    paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    paper.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    paper.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    paper.categories.some(category => category.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout title="論文一覧">
      <div className="space-y-8">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            AI関連論文解説
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            最新のAI研究論文の解説記事コレクション
          </p>
        </header>
        
        <div className="mb-6">
          <input
            type="text"
            placeholder="論文を検索..."
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredPapers.map(paper => (
            <div key={paper.id} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow">
              <Link href={`/papers/${paper.id}`}>
                <a className="block h-full">
                  <h2 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">{paper.title}</h2>
                  <h3 className="text-lg mb-3 text-gray-700 dark:text-gray-300">{paper.subtitle}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{paper.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {paper.categories.map(category => (
                      <span 
                        key={category} 
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <span>著者: {paper.authors.join(', ')}</span>
                    <span className="ml-4">発表年: {paper.publishedYear}</span>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
        
        {filteredPapers.length === 0 && (
          <div className="text-center p-8 text-gray-500 dark:text-gray-400">
            検索条件に一致する論文が見つかりませんでした。
          </div>
        )}
      </div>
    </Layout>
  );
}