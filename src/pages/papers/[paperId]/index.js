import { useRouter } from 'next/router';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { getPaperById } from '../../data/papers';

export default function PaperDetail() {
  const router = useRouter();
  const { paperId } = router.query;
  
  // paperId が undefined の場合（初期レンダリング時）は早期リターン
  if (!paperId) {
    return <div>Loading...</div>;
  }
  
  const paper = getPaperById(paperId);
  
  // 論文が見つからない場合
  if (!paper) {
    return (
      <Layout title="論文が見つかりません">
        <div className="text-center py-10">
          <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            お探しの論文が見つかりません
          </h1>
          <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
            指定されたIDの論文は存在しないか、移動した可能性があります。
          </p>
          <Link href="/papers">
            <a className="text-blue-600 dark:text-blue-400 hover:underline">
              論文一覧に戻る
            </a>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title={paper.title}>
      <div className="space-y-8">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
            {paper.title}
          </h1>
          <h2 className="text-xl mt-2 text-gray-700 dark:text-gray-300">
            {paper.subtitle}
          </h2>
          <div className="mt-4 text-gray-600 dark:text-gray-400">
            <span>著者: {paper.authors.join(', ')}</span>
            <span className="ml-4">発表年: {paper.publishedYear}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {paper.categories.map(category => (
              <span 
                key={category} 
                className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded"
              >
                {category}
              </span>
            ))}
          </div>
        </header>
        
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            {paper.description}
          </p>
          
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              目次
            </h3>
            <nav className="space-y-2">
              {paper.sections.map(section => (
                <Link 
                  key={section.id} 
                  href={`/papers/${paper.id}/${section.id}`}
                >
                  <a className="block p-3 bg-gray-50 dark:bg-gray-700 rounded hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
                    {section.title}
                  </a>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </Layout>
  );
}