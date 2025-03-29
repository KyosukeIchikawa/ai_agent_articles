import React, { useEffect, useState } from 'react';
import { Chart as ChartJS } from 'chart.js';

/**
 * レスポンシブなチャートを表示するコンポーネント
 * 
 * @param {Object} props
 * @param {React.ReactElement} props.chart - Chart.jsのコンポーネント (Bar, Line, Pieなど)
 * @param {Object} props.baseOptions - Chart.jsのオプション
 * @param {string} props.caption - チャートの説明キャプション
 * @param {string} props.captionColor - キャプションの色クラス名
 * @param {string} props.bgGradient - 背景グラデーションクラス (デフォルト: "from-white to-primary-light")
 */
const ResponsiveChart = ({ 
  chart, 
  baseOptions, 
  caption, 
  captionColor = "text-primary",
  bgGradient = "from-white to-primary-light"
}) => {
  // 画面サイズの状態
  const [isMobile, setIsMobile] = useState(false);
  // チャートオプション
  const [chartOptions, setChartOptions] = useState(baseOptions);

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

  // モバイル向けのチャートオプション調整
  useEffect(() => {
    if (isMobile) {
      setChartOptions({
        ...baseOptions,
        maintainAspectRatio: false,
        plugins: {
          ...baseOptions.plugins,
          legend: {
            ...baseOptions.plugins?.legend,
            position: 'bottom',
            labels: {
              boxWidth: 10,
              padding: 10,
              font: {
                size: 10
              }
            }
          },
          title: {
            ...baseOptions.plugins?.title,
            font: {
              ...(baseOptions.plugins?.title?.font || {}),
              size: 12
            }
          }
        },
        scales: {
          ...baseOptions.scales,
          y: {
            ...baseOptions.scales?.y,
            ticks: {
              ...(baseOptions.scales?.y?.ticks || {}),
              font: {
                size: 9
              }
            },
            title: {
              ...(baseOptions.scales?.y?.title || {}),
              font: {
                size: 10
              }
            }
          },
          x: {
            ...baseOptions.scales?.x,
            ticks: {
              ...(baseOptions.scales?.x?.ticks || {}),
              font: {
                size: 9
              }
            },
            title: {
              ...(baseOptions.scales?.x?.title || {}),
              font: {
                size: 10
              }
            }
          }
        }
      });
    } else {
      setChartOptions(baseOptions);
    }
  }, [baseOptions, isMobile]);

  return (
    <div className="flex justify-center">
      <div className="bg-white p-4 rounded-lg shadow-inner w-full">
        <div 
          className={`w-full bg-gradient-to-b ${bgGradient}`} 
          style={{ height: isMobile ? '250px' : '320px' }}
        >
          {/* Chart.jsのコンポーネントをクローンして新しいpropsを渡す */}
          {React.cloneElement(chart, { options: chartOptions })}
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