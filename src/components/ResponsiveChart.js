import React, { useEffect, useState } from 'react';

/**
 * レスポンシブなチャートを表示するコンポーネント
 * 
 * @param {Object} props
 * @param {React.ReactElement} props.chart - Chart.jsのコンポーネント (Bar, Line, Pieなど)
 * @param {string} props.caption - チャートの説明キャプション
 * @param {string} props.captionColor - キャプションの色クラス名
 * @param {string} props.bgGradient - 背景グラデーションクラス (デフォルト: "from-white to-primary-light")
 */
const ResponsiveChart = ({ 
  chart, 
  caption, 
  captionColor = "text-primary",
  bgGradient = "from-white to-primary-light"
}) => {
  // 画面サイズの状態
  const [isMobile, setIsMobile] = useState(false);
  
  // マウント時とリサイズ時に画面サイズを検出
  useEffect(() => {
    // 画面サイズの検出
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px以下ならモバイル判定
    };
    
    // 初回チェック
    checkIfMobile();
    
    // リサイズイベントのリスナーを追加
    window.addEventListener('resize', checkIfMobile);
    
    // クリーンアップ関数
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // chartがBooleanかどうかをチェック (エラー防止)
  const isValidChart = chart && typeof chart !== 'boolean';

  return (
    <div className="flex justify-center">
      <div className="bg-white p-4 rounded-lg shadow-inner w-full">
        <div 
          className={`w-full bg-gradient-to-b ${bgGradient}`} 
          style={{ height: isMobile ? '250px' : '320px' }}
        >
          {/* Chartが有効な場合のみレンダリング */}
          {isValidChart && (
            <div className="h-full w-full">
              {chart}
            </div>
          )}
          
          {/* チャートが無効な場合のフォールバック表示 */}
          {!isValidChart && (
            <div className="h-full w-full flex items-center justify-center">
              <p className="text-primary">グラフを読み込めませんでした</p>
            </div>
          )}
        </div>
        {caption && (
          <p className={`text-sm ${captionColor} mt-2 text-center`}>
            {caption}
          </p>
        )}
      </div>
    </div>
  );
};

export default ResponsiveChart;