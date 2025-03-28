import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import ScrollToTop from './ScrollToTop';

export default function Layout({ children, title = 'Curiosity-Driven Imagination' }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileTableOfContents, setIsMobileTableOfContents] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  // マウント後にのみレンダリングするための処理
  useEffect(() => {
    setMounted(true);
  }, []);

  // ページ遷移時にメニューを閉じる
  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileTableOfContents(false);
  }, [router.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // メニューを開いたら目次は閉じる
    if (!isMenuOpen) {
      setIsMobileTableOfContents(false);
    }
  };

  const toggleMobileTableOfContents = () => {
    setIsMobileTableOfContents(!isMobileTableOfContents);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  // ナビゲーションリンク
  const navLinks = [
    { href: '/', label: 'トップ' },
    { href: '/background/', label: '背景' },
    { href: '/related-work/', label: '関連研究' },
    { href: '/method/', label: '提案手法' },
    { href: '/experiments/', label: '実験' },
    { href: '/results/', label: '結果と分析' },
    { href: '/discussion/', label: '議論と今後の展望' },
    { href: '/conclusion/', label: '結論' },
    { href: '/references/', label: '参考文献' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>{title} | 論文解説</title>
        <meta name="description" content="Curiosity-Driven Imagination: Discovering Plan Operators and Learning Associated Policies for Open-World Adaptation の論文解説" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700&family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="sticky top-0 z-20 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
            Curiosity-Driven Imagination
          </Link>
          <div className="flex items-center space-x-4">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                aria-label="テーマ切り替え"
              >
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            )}
            
            {/* モバイル用目次ボタン */}
            <button
              className="block md:hidden text-gray-700 dark:text-gray-300"
              onClick={toggleMobileTableOfContents}
              aria-expanded={isMobileTableOfContents}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            
            {/* ハンバーガーメニュー */}
            <button
              className="block md:hidden text-gray-700 dark:text-gray-300"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          
          {/* デスクトップ用ナビゲーション */}
          <nav className="hidden md:block">
            <ul className="flex flex-row space-x-8">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                      router.pathname === link.href ? 'font-semibold text-blue-600 dark:text-blue-400' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        {/* モバイル用メインナビゲーション */}
        <div
          className={`${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 shadow-lg`}
        >
          <nav className="container mx-auto px-4 py-2">
            <ul className="flex flex-col space-y-3 pb-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className={`block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                      router.pathname === link.href ? 'font-semibold text-blue-600 dark:text-blue-400' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        {/* モバイル用目次ドロップダウン */}
        <div
          className={`${
            isMobileTableOfContents ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          } md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 shadow-lg`}
        >
          <div className="container mx-auto px-4 py-2">
            <h3 className="text-lg font-semibold my-2 text-gray-800 dark:text-gray-200">目次</h3>
            <ul className="flex flex-col space-y-2 pb-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className={`block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                      router.pathname === link.href ? 'font-semibold text-blue-600 dark:text-blue-400' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          <aside className="hidden lg:block w-64 shrink-0 mr-8">
            <div className="sticky top-24 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">目次</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                        router.pathname === link.href ? 'font-semibold text-blue-600 dark:text-blue-400' : ''
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          
          <div className="flex-grow bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            {children}
          </div>
          
          <aside className="hidden xl:block w-64 shrink-0 ml-8">
            <div className="sticky top-24 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">論文情報</h3>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>
                  <strong>タイトル:</strong> Curiosity-Driven Imagination: Discovering Plan Operators and Learning Associated Policies for Open-World Adaptation
                </p>
                <p>
                  <strong>著者:</strong> Pierrick Lorang, Hong Lu, Matthias Scheutz
                </p>
                <p>
                  <strong>会議:</strong> ICRA 2025
                </p>
                <p>
                  <a
                    href="https://arxiv.org/abs/2503.04931v1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    原論文を読む (arXiv)
                  </a>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>
      
      <ScrollToTop />
      
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2025 Curiosity-Driven Imagination論文解説</p>
              <p className="text-sm text-gray-400">
                本サイトは論文「Curiosity-Driven Imagination: Discovering Plan Operators and Learning Associated Policies for Open-World Adaptation」の解説を目的として作成されています。
              </p>
            </div>
            <div>
              <a
                href="https://github.com/KyosukeIchikawa/ai_visual_arxiv/?tab=readme-ov-file#ai-visual-arxiv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}