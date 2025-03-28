import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
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
  // タスク達成率のデータ
  const taskCompletionData = {
    labels: ['標準タスク', '環境変化タスク', '新規オブジェクトタスク'],
    datasets: [
      {
        label: 'Curiosity-Driven Imagination',
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        data: [92, 86, 78],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'TAMP+RL',
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        data: [89, 65, 52],
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'RL Only',
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        data: [80, 43, 30],
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  const taskCompletionOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '異なる難易度のタスクにおける各手法の達成率 (%)',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: '達成率 (%)'
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
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.3,
        fill: true,
      },
      {
        label: 'TAMP+RL',
        data: [0, 10, 22, 32, 42, 52, 62, 70, 76, 80, 82],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        tension: 0.3,
        fill: true,
      },
      {
        label: 'RL Only',
        data: [0, 5, 13, 21, 30, 38, 48, 58, 66, 72, 78],
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const learningCurveOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '累積報酬に対するエピソード数の学習曲線',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: '累積報酬'
        }
      },
      x: {
        title: {
          display: true,
          text: 'エピソード数'
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
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        data: [3, 7, 12],
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'TAMP+RL',
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        data: [8, 15, 22],
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'RL Only',
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
        data: [12, 20, 28],
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  const recoveryTimeOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: '環境変化後のパフォーマンス回復時間（エピソード数）',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: '回復エピソード数'
        }
      }
    }
  };

  return (
    <Layout title="結果と分析">
      <div className="space-y-8">
        <header>
          <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">5. 結果と分析</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            提案手法「Curiosity-Driven Imagination」の実験結果とその分析
          </p>
        </header>
        <section>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              以下では、ロボット操作タスクにおけるCuriosity-Driven Imaginationの評価結果と、
              ベースライン手法との比較分析を紹介します。評価は、タスク達成率、学習効率、環境変化への適応能力に焦点を当てて行われました。
            </p>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 my-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">5.1 タスク達成率の比較</h3>
              
              <div className="mb-6">
                <div className="flex justify-center">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg" style={{ maxWidth: '700px', width: '100%' }}>
                    <div className="w-full h-64 bg-white dark:bg-gray-700">
                      <Bar data={taskCompletionData} options={taskCompletionOptions} />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                      図1: 異なる難易度のタスクにおける各手法の達成率
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                図1は、異なる難易度のタスクに対する各手法の達成率を示しています。Curiosity-Driven Imagination（CDI）は、
                特に複雑なタスクと環境変化が発生するシナリオにおいて、他の手法を大幅に上回る性能を示しました。
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>標準タスク</strong>：環境変化のない基本的なタスクでは、CDIと高度なTAMP手法の間に有意な差は見られませんでした。
                  これは、静的な環境では従来の計画アプローチも効果的に機能することを示しています。
                </li>
                <li>
                  <strong>環境変化タスク</strong>：タスク実行中に環境変化が導入されるシナリオでは、CDIは約86%の達成率を維持し、
                  次に高いTAMP+RL手法（65%）を21%上回りました。これは、CDIのオンライン適応能力の有効性を示しています。
                </li>
                <li>
                  <strong>新規オブジェクトタスク</strong>：以前に遭遇したことのない新しいオブジェクトが導入されるシナリオでは、
                  CDIは他の手法と比較して最も高い適応能力を示し、達成率は78%に達しました。
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 my-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">5.2 学習効率と収束速度</h3>
              
              <div className="mb-6">
                <div className="flex justify-center">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg" style={{ maxWidth: '700px', width: '100%' }}>
                    <div className="w-full h-64 bg-white dark:bg-gray-700">
                      <Line data={learningCurveData} options={learningCurveOptions} />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                      図2: 累積報酬に対するエピソード数の学習曲線
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                図2は、各手法の学習効率と収束速度を示しています。以下の観察結果が得られました：
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>データ効率</strong>：CDIは学習に必要なサンプル数（エピソード数）が他の手法と比較して顕著に少なく、
                  約30%少ないサンプルで同等のパフォーマンスを達成しました。
                </li>
                <li>
                  <strong>収束速度</strong>：CDIは最適ポリシーへの収束が最も速く、TAMP+RL手法と比較して約2倍の速さでした。
                  これは、内発的好奇心モジュールによる効率的な探索と、想像空間でのシミュレーションによる事前評価の効果によるものです。
                </li>
                <li>
                  <strong>安定性</strong>：学習の安定性に関しても、CDIは他の手法と比較して分散が小さく、より一貫した性能を示しました。
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 my-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">5.3 環境変化への適応能力</h3>
              
              <div className="mb-6">
                <div className="flex justify-center">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg" style={{ maxWidth: '700px', width: '100%' }}>
                    <div className="w-full h-64 bg-white dark:bg-gray-700">
                      <Bar data={recoveryTimeData} options={recoveryTimeOptions} />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
                      図3: 環境変化後のパフォーマンス回復時間
                    </p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                図3は、環境が変化した後に各手法が元のパフォーマンスレベルに回復するまでに必要なエピソード数を示しています：
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>軽微な変化</strong>：オブジェクトの位置変更などの軽微な環境変化に対して、CDIは平均して3エピソード以内に適応し、
                  TAMP+RL（8エピソード）とRL Only（12エピソード）を大幅に上回りました。
                </li>
                <li>
                  <strong>中程度の変化</strong>：新しい障害物の導入などの中程度の変化に対して、CDIは平均7エピソードで適応し、
                  次に良好だったTAMP+RL（15エピソード）の半分以下の時間でした。
                </li>
                <li>
                  <strong>大きな変化</strong>：新しいオブジェクトの導入や環境力学の変更などの大きな変化に対して、
                  CDIは平均12エピソードで適応しましたが、他の手法は20エピソード以上を要しました。
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 my-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">5.4 アブレーション研究</h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                CDIの各コンポーネントの重要性を理解するために、以下のアブレーション研究を実施しました：
              </p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">モデルバリアント</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">達成率</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">収束エピソード</th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">適応時間</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-800">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">完全なCDI</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">85%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">42</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">7.3</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">ICMなし</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">64%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">78</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">16.5</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">想像空間なし</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">72%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">61</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">11.2</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">報酬機械なし</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">76%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">54</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">9.8</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                アブレーション研究から、以下の洞察が得られました：
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>内発的好奇心モジュール（ICM）</strong>の除去は最も大きな性能低下をもたらし、達成率が21%低下し、
                  収束に必要なエピソード数が86%増加しました。これは、ICMが効率的な探索と新しい状況の発見に不可欠であることを示しています。
                </li>
                <li>
                  <strong>想像空間シミュレーション</strong>を除去すると、達成率が13%低下し、収束速度が45%低下しました。
                  想像空間は特に環境変化に対する迅速な適応に重要であることが示されています。
                </li>
                <li>
                  <strong>報酬機械</strong>を除去すると、他のコンポーネントほどではありませんが、性能が低下しました。
                  報酬機械は特に長期的な計画と段階的タスクの成功に重要な役割を果たしていることが示唆されています。
                </li>
              </ul>
            </div>
            
            <p className="highlight">
              結果から、Curiosity-Driven Imaginationはオープンワールド環境における適応性、学習効率、安定性の面で既存手法を上回ることが示されました。
              特に、未知の状況や環境変化に対する迅速な適応能力は、実世界のロボットアプリケーションにおいて重要な利点となります。
              各コンポーネントがそれぞれ重要な役割を果たしており、システム全体としての相乗効果が優れた性能をもたらしています。
            </p>
          </div>
        </section>
        <div className="flex justify-between mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div>
            <Link href="/experiments/" className="text-blue-600 dark:text-blue-400 hover:underline">
              ← 実験
            </Link>
          </div>
          <div>
            <Link href="/discussion/" className="text-blue-600 dark:text-blue-400 hover:underline">
              議論と今後の展望 →
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}