import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import ResponsiveChart from '../../components/ResponsiveChart';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Chart.jsコンポーネントの登録
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

export default function Results() {
  // Tailwindカラーの変数を作成
  const [colors, setColors] = useState({
    primary: { main: 'rgba(52, 152, 219, 0.7)', border: 'rgba(52, 152, 219, 1)', light: 'rgba(52, 152, 219, 0.2)' },
    secondary: { main: 'rgba(46, 204, 113, 0.7)', border: 'rgba(46, 204, 113, 1)', light: 'rgba(46, 204, 113, 0.2)' },
    accent: { main: 'rgba(231, 76, 60, 0.7)', border: 'rgba(231, 76, 60, 1)', light: 'rgba(231, 76, 60, 0.2)' },
  });

  // マウント時にTailwindのカスタムカラーを取得
  useEffect(() => {
    // カラー取得関数
    const getColorWithOpacity = (colorName, opacity = 1) => {
      const el = document.createElement('div');
      el.classList.add(`text-${colorName}`);
      document.body.appendChild(el);
      const color = window.getComputedStyle(el).color;
      document.body.removeChild(el);

      // RGB値を抽出してRGBA形式に変換
      const rgbMatch = color.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
      if (rgbMatch) {
        return `rgba(${rgbMatch[1]}, ${rgbMatch[2]}, ${rgbMatch[3]}, ${opacity})`;
      }

      return color;
    };

    setColors({
      primary: {
        main: getColorWithOpacity('primary', 0.7),
        border: getColorWithOpacity('primary', 1),
        light: getColorWithOpacity('primary', 0.2),
      },
      secondary: {
        main: getColorWithOpacity('secondary', 0.7),
        border: getColorWithOpacity('secondary', 1),
        light: getColorWithOpacity('secondary', 0.2),
      },
      accent: {
        main: getColorWithOpacity('accent', 0.7),
        border: getColorWithOpacity('accent', 1),
        light: getColorWithOpacity('accent', 0.2),
      },
    });
  }, []);

  // タスク達成率のデータ
  const taskCompletionData = {
    labels: ['標準タスク', '環境変化タスク', '新規オブジェクトタスク'],
    datasets: [
      {
        label: 'Curiosity-Driven Imagination',
        backgroundColor: colors.primary.main,
        data: [92, 86, 78],
        borderColor: colors.primary.border,
        borderWidth: 1,
      },
      {
        label: 'TAMP+RL',
        backgroundColor: colors.secondary.main,
        data: [89, 65, 52],
        borderColor: colors.secondary.border,
        borderWidth: 1,
      },
      {
        label: 'RL Only',
        backgroundColor: colors.accent.main,
        data: [80, 43, 30],
        borderColor: colors.accent.border,
        borderWidth: 1,
      },
    ],
  };

  const taskCompletionOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '異なる難易度のタスクにおける各手法の達成率 (%)',
        color: colors.primary.border,
        font: {
          weight: 'bold'
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: '達成率 (%)',
          color: colors.primary.border,
        },
        ticks: {
          color: colors.primary.main,
        }
      },
      x: {
        ticks: {
          color: colors.primary.main,
        }
      }
    }
  };

  // 学習曲線のデータ
  const learningCurveData = {
    labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    datasets: [
      {
        label: 'Curiosity-Driven Imagination',
        data: [0, 18, 35, 55, 75, 82, 85, 87, 88, 89, 90],
        borderColor: colors.primary.border,
        backgroundColor: colors.primary.light,
        tension: 0.3,
        fill: true,
      },
      {
        label: 'TAMP+RL',
        data: [0, 10, 22, 32, 42, 52, 62, 70, 76, 80, 82],
        borderColor: colors.secondary.border,
        backgroundColor: colors.secondary.light,
        tension: 0.3,
        fill: true,
      },
      {
        label: 'RL Only',
        data: [0, 5, 13, 21, 30, 38, 48, 58, 66, 72, 78],
        borderColor: colors.accent.border,
        backgroundColor: colors.accent.light,
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const learningCurveOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '累積報酬に対するエピソード数の学習曲線',
        color: colors.primary.border,
        font: {
          weight: 'bold'
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: '累積報酬',
          color: colors.primary.border,
        },
        ticks: {
          color: colors.primary.main,
        }
      },
      x: {
        title: {
          display: true,
          text: 'エピソード数',
          color: colors.primary.border,
        },
        ticks: {
          color: colors.primary.main,
        }
      }
    }
  };

  // 環境変化後の回復時間データ
  const recoveryTimeData = {
    labels: ['軽微な変化', '中程度の変化', '大きな変化'],
    datasets: [
      {
        label: 'Curiosity-Driven Imagination',
        backgroundColor: colors.primary.main,
        data: [3, 7, 12],
        borderColor: colors.primary.border,
        borderWidth: 1,
      },
      {
        label: 'TAMP+RL',
        backgroundColor: colors.secondary.main,
        data: [8, 15, 22],
        borderColor: colors.secondary.border,
        borderWidth: 1,
      },
      {
        label: 'RL Only',
        backgroundColor: colors.accent.main,
        data: [12, 20, 28],
        borderColor: colors.accent.border,
        borderWidth: 1,
      },
    ],
  };

  const recoveryTimeOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '環境変化後のパフォーマンス回復時間（エピソード数）',
        color: colors.primary.border,
        font: {
          weight: 'bold'
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: '回復エピソード数',
          color: colors.primary.border,
        },
        ticks: {
          color: colors.primary.main,
        }
      },
      x: {
        ticks: {
          color: colors.primary.main,
        }
      }
    }
  };

  return (
    <Layout title="結果と分析">
      <div className="space-y-8">
        <header>
          <h1 className="text-3xl font-bold mb-4 text-primary">5. 結果と分析</h1>
          <p className="text-lg text-primary">
            提案手法「Curiosity-Driven Imagination」の実験結果とその分析
          </p>
        </header>

        <section>
          <div className="prose max-w-none">
            <p>
              以下では、ロボット操作タスクにおけるCuriosity-Driven Imaginationの評価結果と、
              ベースライン手法との比較分析を紹介します。評価は、タスク達成率、学習効率、環境変化への適応能力に焦点を当てて行われました。
            </p>
            
            <div className="bg-gradient-to-r from-primary-light to-secondary-light p-6 rounded-lg shadow-sm border border-primary/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">5.1 タスク達成率の比較</h3>
              
              <div className="mb-6">
                <ResponsiveChart
                  chart={<Bar data={taskCompletionData} />}
                  baseOptions={taskCompletionOptions}
                  caption="図1: 異なる難易度のタスクにおける各手法の達成率"
                  captionColor="text-primary"
                  bgGradient="from-white to-primary-light"
                />
              </div>
              
              <p className="text-text mb-4">
                図1は、異なる難易度のタスクに対する各手法の達成率を示しています。Curiosity-Driven Imagination（CDI）は、
                特に複雑なタスクと環境変化が発生するシナリオにおいて、他の手法を大幅に上回る性能を示しました。
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-text">
                <li>
                  <strong className="text-primary">標準タスク</strong>：環境変化のない基本的なタスクでは、CDIと高度なTAMP手法の間に有意な差は見られませんでした。
                  これは、静的な環境では従来の計画アプローチも効果的に機能することを示しています。
                </li>
                <li>
                  <strong className="text-primary">環境変化タスク</strong>：タスク実行中に環境変化が導入されるシナリオでは、CDIは約86%の達成率を維持し、
                  次に高いTAMP+RL手法（65%）を21%上回りました。これは、CDIのオンライン適応能力の有効性を示しています。
                </li>
                <li>
                  <strong className="text-secondary">新規オブジェクトタスク</strong>：以前に遭遇したことのない新しいオブジェクトが導入されるシナリオでは、
                  CDIは他の手法と比較して最も高い適応能力を示し、達成率は78%に達しました。
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-secondary-light to-primary-light p-6 rounded-lg shadow-sm border border-secondary/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">5.2 学習効率と収束速度</h3>
              
              <div className="mb-6">
                <ResponsiveChart
                  chart={<Line data={learningCurveData} />}
                  baseOptions={learningCurveOptions}
                  caption="図2: 累積報酬に対するエピソード数の学習曲線"
                  captionColor="text-primary"
                  bgGradient="from-white to-secondary-light"
                />
              </div>
              
              <p className="text-text mb-4">
                図2は、各手法の学習効率と収束速度を示しています。以下の観察結果が得られました：
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-text">
                <li>
                  <strong className="text-secondary">データ効率</strong>：CDIは学習に必要なサンプル数（エピソード数）が他の手法と比較して顕著に少なく、
                  約30%少ないサンプルで同等のパフォーマンスを達成しました。
                </li>
                <li>
                  <strong className="text-primary">収束速度</strong>：CDIは最適ポリシーへの収束が最も速く、TAMP+RL手法と比較して約2倍の速さでした。
                  これは、内発的好奇心モジュールによる効率的な探索と、想像空間でのシミュレーションによる事前評価の効果によるものです。
                </li>
                <li>
                  <strong className="text-accent">安定性</strong>：学習の安定性に関しても、CDIは他の手法と比較して分散が小さく、より一貫した性能を示しました。
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-accent-light to-primary-light p-6 rounded-lg shadow-sm border border-accent/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">5.3 環境変化への適応能力</h3>
              
              <div className="mb-6">
                <ResponsiveChart
                  chart={<Bar data={recoveryTimeData} />}
                  baseOptions={recoveryTimeOptions}
                  caption="図3: 環境変化後のパフォーマンス回復時間"
                  captionColor="text-accent"
                  bgGradient="from-white to-accent-light"
                />
              </div>
              
              <p className="text-text mb-4">
                図3は、環境が変化した後に各手法が元のパフォーマンスレベルに回復するまでに必要なエピソード数を示しています：
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-text">
                <li>
                  <strong className="text-primary">軽微な変化</strong>：オブジェクトの位置変更などの軽微な環境変化に対して、CDIは平均して3エピソード以内に適応し、
                  TAMP+RL（8エピソード）とRL Only（12エピソード）を大幅に上回りました。
                </li>
                <li>
                  <strong className="text-secondary">中程度の変化</strong>：新しい障害物の導入などの中程度の変化に対して、CDIは平均7エピソードで適応し、
                  次に良好だったTAMP+RL（15エピソード）の半分以下の時間でした。
                </li>
                <li>
                  <strong className="text-accent">大きな変化</strong>：新しいオブジェクトの導入や環境力学の変更などの大きな変化に対して、
                  CDIは平均12エピソードで適応しましたが、他の手法は20エピソード以上を要しました。
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-primary-light to-accent-light p-6 rounded-lg shadow-sm border border-primary/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">5.4 アブレーション研究</h3>
              
              <p className="text-text mb-4">
                CDIの各コンポーネントの重要性を理解するために、以下のアブレーション研究を実施しました：
              </p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-primary/20">
                  <thead className="bg-primary-light">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">モデルバリアント</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">達成率</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">収束エピソード</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-primary uppercase tracking-wider">適応時間</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-primary/10">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">完全なCDI</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-primary">85%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-primary">42</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-primary">7.3</td>
                    </tr>
                    <tr className="bg-primary-light/30">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">ICMなし</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-primary">64%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-primary">78</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-primary">16.5</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-accent">想像空間なし</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-accent">72%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-accent">61</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-accent">11.2</td>
                    </tr>
                    <tr className="bg-primary-light/30">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-secondary">報酬機械なし</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary">76%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary">54</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary">9.8</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-text mt-4">
                アブレーション研究から、以下の洞察が得られました：
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mt-3 text-text">
                <li>
                  <strong className="text-primary">内発的好奇心モジュール（ICM）</strong>の除去は最も大きな性能低下をもたらし、達成率が21%低下し、
                  収束に必要なエピソード数が86%増加しました。これは、ICMが効率的な探索と新しい状況の発見に不可欠であることを示しています。
                </li>
                <li>
                  <strong className="text-accent">想像空間シミュレーション</strong>を除去すると、達成率が13%低下し、収束速度が45%低下しました。
                  想像空間は特に環境変化に対する迅速な適応に重要であることが示されています。
                </li>
                <li>
                  <strong className="text-secondary">報酬機械</strong>を除去すると、他のコンポーネントほどではありませんが、性能が低下しました。
                  報酬機械は特に長期的な計画と段階的タスクの成功に重要な役割を果たしていることが示唆されています。
                </li>
              </ul>
            </div>
            
            <p className="bg-gradient-to-r from-primary-light to-secondary-light border-l-4 border-primary p-4 rounded">
              結果から、Curiosity-Driven Imaginationはオープンワールド環境における適応性、学習効率、安定性の面で既存手法を上回ることが示されました。
              特に、未知の状況や環境変化に対する迅速な適応能力は、実世界のロボットアプリケーションにおいて重要な利点となります。
              各コンポーネントがそれぞれ重要な役割を果たしており、システム全体としての相乗効果が優れた性能をもたらしています。
            </p>
          </div>
        </section>

        <Navigation 
          paperId="curiosity-driven-imagination"
          currentSectionId="results" 
          customLabels={{
            prev: "実験",
            next: "議論と今後の展望"
          }}
        />
      </div>
    </Layout>
  );
}