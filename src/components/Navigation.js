import Link from 'next/link';
import { useRouter } from 'next/router';
import { getAllPapers } from '../data/papers';

/**
 * 論文記事内のページナビゲーションコンポーネント
 * 現在のページの前後のページへのリンクを自動的に生成します
 * 
 * @param {Object} props コンポーネントのプロパティ
 * @param {string} [props.paperId] 論文ID（省略した場合はURLから自動取得）
 * @param {string} [props.currentSectionId] 現在のセクションID（省略した場合はURLから自動取得）
 * @param {Object} [props.customLabels] カスタムラベル（前へ/次へのテキストをカスタマイズする場合）
 * @returns {JSX.Element} ナビゲーションコンポーネント
 */
export default function Navigation({ paperId, currentSectionId, customLabels = {} }) {
  const router = useRouter();
  
  // URLからpaperId/sectionIdを取得（プロパティが指定されていない場合）
  const effectivePaperId = paperId || router.query.paperId;
  const path = router.pathname;

  // セクションIDの取得（URLパスの最後の部分を使用）
  const effectiveSectionId = currentSectionId || 
    path.split('/').filter(segment => segment).pop();
  
  // 全論文データから該当する論文を取得
  const papers = getAllPapers();
  const paper = papers.find(p => p.id === effectivePaperId);

  // 論文データが見つからない場合、またはセクションが不明な場合は表示なし
  if (!paper || !effectiveSectionId) {
    return null;
  }

  // セクションの並び順を取得
  const sections = paper.sections;
  const currentSectionIndex = sections.findIndex(section => 
    section.id === effectiveSectionId
  );

  // 現在のセクションが見つからない場合は表示なし
  if (currentSectionIndex === -1) {
    return null;
  }

  // 前後のセクションを取得
  const prevSection = currentSectionIndex > 0 
    ? sections[currentSectionIndex - 1] 
    : null;
  
  const nextSection = currentSectionIndex < sections.length - 1 
    ? sections[currentSectionIndex + 1] 
    : null;

  // URLから特定の論文のセクションを表示しているかどうかを判断
  const isViewingSpecificPaper = path.includes('/papers/');

  // 前後のページへのリンクパスを生成
  const getPrevPath = () => {
    if (!prevSection) return null;
    return isViewingSpecificPaper 
      ? `/papers/${effectivePaperId}/${prevSection.id}` 
      : `/${prevSection.id}`;
  };

  const getNextPath = () => {
    if (!nextSection) return null;
    return isViewingSpecificPaper 
      ? `/papers/${effectivePaperId}/${nextSection.id}` 
      : `/${nextSection.id}`;
  };

  // 前後のラベルをカスタマイズできるようにする
  const prevLabel = customLabels.prev || (prevSection ? prevSection.title : '前へ');
  const nextLabel = customLabels.next || (nextSection ? nextSection.title : '次へ');

  const prevPath = getPrevPath();
  const nextPath = getNextPath();

  return (
    <div className="flex justify-between mt-10 pt-6 border-t border-primary/10">
      <div>
        {prevPath && (
          <Link href={prevPath}>
            <a className="text-primary hover:text-primary-800 hover:underline flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {prevLabel}
            </a>
          </Link>
        )}
      </div>
      <div>
        {nextPath && (
          <Link href={nextPath}>
            <a className="text-primary hover:text-primary-800 hover:underline flex items-center">
              {nextLabel}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}