import React, { useEffect, useState } from 'react';
import { Bar, Scatter } from 'react-chartjs-2';

/**
 * クライアントサイドでのみレンダリングされるBar Chart
 * サーバーサイドレンダリング問題を回避するために使用
 */
export const ClientSideBarChart = ({ data, options }) => {
  // モバイル状態の検出
  const [chartOptions, setChartOptions] = useState(options);

  // クライアントサイドでのみ実行される処理
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setChartOptions({
        ...options,
        plugins: {
          ...options.plugins,
          legend: {
            ...options.plugins?.legend,
            position: isMobile ? 'bottom' : 'top',
            labels: {
              boxWidth: isMobile ? 10 : 12,
              padding: isMobile ? 10 : 10,
              font: {
                size: isMobile ? 10 : 12
              }
            }
          }
        }
      });
    };

    // 初回レンダリング時に実行
    handleResize();

    // リサイズイベントのリスナーを追加
    window.addEventListener('resize', handleResize);

    // クリーンアップ関数
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [options]);

  return <Bar data={data} options={chartOptions} />;
};

/**
 * クライアントサイドでのみレンダリングされるScatter Chart
 * サーバーサイドレンダリング問題を回避するために使用
 */
export const ClientSideScatterChart = ({ data, options }) => {
  // モバイル状態の検出
  const [chartOptions, setChartOptions] = useState(options);

  // クライアントサイドでのみ実行される処理
  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      setChartOptions({
        ...options,
        plugins: {
          ...options.plugins,
          legend: {
            ...options.plugins?.legend,
            position: isMobile ? 'bottom' : 'top',
            labels: {
              boxWidth: isMobile ? 10 : 12,
              padding: isMobile ? 8 : 10,
              font: {
                size: isMobile ? 10 : 12
              }
            }
          }
        }
      });
    };

    // 初回レンダリング時に実行
    handleResize();

    // リサイズイベントのリスナーを追加
    window.addEventListener('resize', handleResize);

    // クリーンアップ関数
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [options]);

  return <Scatter data={data} options={chartOptions} />;
};