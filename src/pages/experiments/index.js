import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import ResponsiveChart from '../../components/ResponsiveChart';
import dynamic from 'next/dynamic';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { getChartColors, getBarChartOptions, getLineChartOptions } from '../../utils/chartUtils';

// Chart.jsコンポーネントの登録
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// クライアントサイドのみでレンダリングされるChartコンポーネント
const ClientSideBarChart = dynamic(() => 
  import('../../components/ClientSideChart').then((mod) => mod.ClientSideBarChart), 
  { ssr: false }
);

const ClientSideScatterChart = dynamic(() => 
  import('../../components/ClientSideChart').then((mod) => mod.ClientSideScatterChart), 
  { ssr: false }
);

export default function Experiments() {
  // Tailwindカラーの変数を作成
  const [colors, setColors] = useState(getChartColors());
  const [isMounted, setIsMounted] = useState(false);

  // クライアントサイドでのみ実行されるカラー設定
  useEffect(() => {
    setIsMounted(true);
    
    if (typeof window !== 'undefined') {
      setColors(getChartColors());
    }
  }, []);

  // タスク達成率のデータ
  const taskCompletionData = {
    labels: ['初期段階', '新規性注入1', '新規性注入2', '新規性注入3', '新規性注入4'],
    datasets: [
      {
        label: '提案手法',
        data: [95, 90, 85, 82, 80],
        backgroundColor: colors.primary.main,
        borderColor: colors.primary.border,
        borderWidth: 2,
      },
      {
        label: 'TAMP',
        data: [92, 65, 55, 50, 48],
        backgroundColor: colors.secondary.main,
        borderColor: colors.secondary.border,
        borderWidth: 2,
      },
      {
        label: '標準RL',
        data: [85, 55, 45, 40, 38],
        backgroundColor: colors.accent.main,
        borderColor: colors.accent.border,
        borderWidth: 2,
      }
    ],
  };

  const taskCompletionOptions = getBarChartOptions(colors, '各フェーズでのタスク達成率の比較', '達成率 (%)');

  // コンポーネント分析のデータ
  const componentAnalysisData = {
    datasets: [
      {
        label: 'フル提案手法',
        data: [{ x: 85, y: 92 }],
        backgroundColor: colors.primary.border,
        borderColor: colors.primary.border,
        borderWidth: 2,
        pointRadius: 8,
      },
      {
        label: 'ICMのみ',
        data: [{ x: 65, y: 78 }],
        backgroundColor: colors.primary.main,
        borderColor: colors.primary.border,
        borderWidth: 2,
        pointRadius: 8,
      },
      {
        label: '想像空間のみ',
        data: [{ x: 72, y: 70 }],
        backgroundColor: colors.accent.main,
        borderColor: colors.accent.border,
        borderWidth: 2,
        pointRadius: 8,
      },
      {
        label: '標準RL',
        data: [{ x: 45, y: 58 }],
        backgroundColor: colors.secondary.main,
        borderColor: colors.secondary.border,
        borderWidth: 2,
        pointRadius: 8,
      },
      {
        label: 'TAMP',
        data: [{ x: 60, y: 65 }],
        backgroundColor: colors.primary.light,
        borderColor: colors.primary.border,
        borderWidth: 2,
        pointRadius: 8,
      }
    ],
  };

  const componentAnalysisOptions = getLineChartOptions(colors, '各手法のサンプル効率と適応能力の比較', 'サンプル効率', '適応能力');

  return (
    <Layout title="実験と結果">
      <div className="space-y-8">
        <header>
          <h1 className="text-3xl font-bold mb-4 text-primary">4. 実験</h1>
          <p className="text-lg text-primary">
            Curiosity-Driven Imaginationの評価と検証
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-primary">4.1 実験設定</h2>
          <div className="prose max-w-none">
            <p>
              提案手法の有効性を評価するために、以下の実験設定が用いられました。
              これらの実験は、動的で不確実なオープンワールド環境での適応能力を検証することを目的としています。
            </p>
            
            <div className="bg-gradient-to-r from-primary-light to-secondary-light p-6 rounded-lg shadow-sm border border-primary/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">4.1.1 実験環境</h3>
              
              <div className="flex flex-col md:grid md:grid-cols-2 gap-6 mb-6">
                <div className="order-2 md:order-1">
                  <h4 className="text-lg font-medium mb-2 text-primary">ロボット操作ドメイン</h4>
                  <p className="text-text">
                    物理シミュレーション環境内のロボットアームが、様々なオブジェクトを操作するタスクを行います。
                    環境内には複数のオブジェクト（ブロック、球、カップなど）があり、それらを移動、積み重ね、または特定の位置に配置するタスクが課されます。
                  </p>
                </div>
                
                <figure className="text-center mx-auto mb-4 md:mb-0 order-1 md:order-2 w-full max-w-xs md:max-w-full">
                  <div className="bg-white p-4 rounded-lg mb-2 shadow-inner">
                    {/* ロボット操作環境の図（簡略化した表現） */}
                    <div className="aspect-w-16 aspect-h-12 bg-gradient-to-b from-primary-light to-primary-light rounded-lg relative min-h-[160px]">
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-gray-300 rounded"></div>
                      <div className="absolute bottom-4 left-1/4 w-2 h-20 bg-primary rounded"></div>
                      <div className="absolute bottom-24 left-1/4 w-24 h-2 bg-primary rounded-l"></div>
                      <div className="absolute bottom-24 left-1/4 transform translate-x-24 w-8 h-12 bg-primary rounded"></div>
                      
                      {/* オブジェクト */}
                      <div className="absolute bottom-6 left-1/2 w-6 h-6 bg-accent rounded"></div>
                      <div className="absolute bottom-6 left-2/3 w-6 h-6 bg-secondary rounded-full"></div>
                      <div className="absolute bottom-6 right-1/4 w-8 h-4 bg-amber-500 rounded-t"></div>
                    </div>
                  </div>
                  <figcaption className="text-sm text-primary">図1: ロボット操作実験環境の概念図</figcaption>
                </figure>
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-primary">4.1.2 タスクと逐次的新規性注入</h3>
              
              <p className="text-text mb-4">
                実験では、<span className="text-primary font-medium">逐次的新規性注入（Sequential Novelty Injections）</span>という手法が用いられました。
                これは、エージェントが学習過程で徐々に新しい状況や課題に直面することを意味します。具体的には以下のようなシナリオが設定されました：
              </p>
              
              {/* デスクトップビュー用のテーブル */}
              <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-primary-light">
                      <th className="px-4 py-2 border border-primary/20 text-left text-primary">フェーズ</th>
                      <th className="px-4 py-2 border border-primary/20 text-left text-primary">環境の変化</th>
                      <th className="px-4 py-2 border border-primary/20 text-left text-primary">適応課題</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="px-4 py-2 border border-primary/20 font-medium text-primary">初期段階</td>
                      <td className="px-4 py-2 border border-primary/20 text-text">基本的なブロック操作タスク</td>
                      <td className="px-4 py-2 border border-primary/20 text-text">基本的な物体把持と配置を学習</td>
                    </tr>
                    <tr className="bg-primary-light/30">
                      <td className="px-4 py-2 border border-primary/20 font-medium text-primary">新規性注入 1</td>
                      <td className="px-4 py-2 border border-primary/20 text-text">新しい形状のオブジェクトの導入</td>
                      <td className="px-4 py-2 border border-primary/20 text-text">異なる把持戦略の必要性</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-2 border border-primary/20 font-medium text-primary">新規性注入 2</td>
                      <td className="px-4 py-2 border border-primary/20 text-text">オブジェクトの物理特性変化（重さ、摩擦）</td>
                      <td className="px-4 py-2 border border-primary/20 text-text">力制御と動作計画の調整</td>
                    </tr>
                    <tr className="bg-primary-light/30">
                      <td className="px-4 py-2 border border-primary/20 font-medium text-primary">新規性注入 3</td>
                      <td className="px-4 py-2 border border-primary/20 text-text">障害物の追加と環境の制約</td>
                      <td className="px-4 py-2 border border-primary/20 text-text">障害物回避と代替経路計画</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-2 border border-primary/20 font-medium text-primary">新規性注入 4</td>
                      <td className="px-4 py-2 border border-primary/20 text-text">動的に変化するオブジェクトと相互作用</td>
                      <td className="px-4 py-2 border border-primary/20 text-text">予測不可能な変化への対応</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              {/* モバイルビュー用のカードレイアウト */}
              <div className="md:hidden space-y-4">
                <div className="bg-white rounded-lg shadow-sm border border-primary/20 p-4">
                  <h4 className="text-primary font-medium mb-2">初期段階</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <div>
                      <div className="text-xs text-primary font-medium">環境の変化</div>
                      <div className="text-text">基本的なブロック操作タスク</div>
                    </div>
                    <div>
                      <div className="text-xs text-primary font-medium">適応課題</div>
                      <div className="text-text">基本的な物体把持と配置を学習</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary-light/30 rounded-lg shadow-sm border border-primary/20 p-4">
                  <h4 className="text-primary font-medium mb-2">新規性注入 1</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <div>
                      <div className="text-xs text-primary font-medium">環境の変化</div>
                      <div className="text-text">新しい形状のオブジェクトの導入</div>
                    </div>
                    <div>
                      <div className="text-xs text-primary font-medium">適応課題</div>
                      <div className="text-text">異なる把持戦略の必要性</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border border-primary/20 p-4">
                  <h4 className="text-primary font-medium mb-2">新規性注入 2</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <div>
                      <div className="text-xs text-primary font-medium">環境の変化</div>
                      <div className="text-text">オブジェクトの物理特性変化（重さ、摩擦）</div>
                    </div>
                    <div>
                      <div className="text-xs text-primary font-medium">適応課題</div>
                      <div className="text-text">力制御と動作計画の調整</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary-light/30 rounded-lg shadow-sm border border-primary/20 p-4">
                  <h4 className="text-primary font-medium mb-2">新規性注入 3</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <div>
                      <div className="text-xs text-primary font-medium">環境の変化</div>
                      <div className="text-text">障害物の追加と環境の制約</div>
                    </div>
                    <div>
                      <div className="text-xs text-primary font-medium">適応課題</div>
                      <div className="text-text">障害物回避と代替経路計画</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-sm border border-primary/20 p-4">
                  <h4 className="text-primary font-medium mb-2">新規性注入 4</h4>
                  <div className="grid grid-cols-1 gap-2">
                    <div>
                      <div className="text-xs text-primary font-medium">環境の変化</div>
                      <div className="text-text">動的に変化するオブジェクトと相互作用</div>
                    </div>
                    <div>
                      <div className="text-xs text-primary font-medium">適応課題</div>
                      <div className="text-text">予測不可能な変化への対応</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-primary">4.1.3 比較手法</h3>
            <p>
              提案手法の効果を評価するために、以下の比較手法が実装されました：
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-gradient-to-br from-primary-light to-secondary-light p-4 rounded-lg shadow-sm border border-primary/20">
                <h4 className="text-lg font-medium mb-2 text-primary">従来のTAMPアプローチ</h4>
                <ul className="list-disc pl-6 space-y-1 text-text">
                  <li>記号的計画（Symbolic Planning）に基づく高レベル計画</li>
                  <li>事前定義されたオペレータセット</li>
                  <li>動作計画のためのサンプリングベース手法</li>
                  <li>内部モデルはあるが、想像空間での計画生成はなし</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-secondary-light to-primary-light p-4 rounded-lg shadow-sm border border-secondary/20">
                <h4 className="text-lg font-medium mb-2 text-secondary">標準的な強化学習アプローチ</h4>
                <ul className="list-disc pl-6 space-y-1 text-text">
                  <li>深層強化学習（Deep Reinforcement Learning, Deep RL）</li>
                  <li>内発的報酬を用いない標準的な手法</li>
                  <li>階層的強化学習（Hierarchical Reinforcement Learning, HRL）</li>
                  <li>モデルベース強化学習（Model-Based Reinforcement Learning）（但し想像空間なし）</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-accent-light to-primary-light p-4 rounded-lg shadow-sm border border-accent/20">
              <h4 className="text-lg font-medium mb-2 text-accent">提案手法の変種</h4>
              <ul className="list-disc pl-6 space-y-1 text-text">
                <li><strong className="text-primary">ICMのみ</strong>：好奇心駆動型探索は使用するが、想像空間でのシミュレーションなし</li>
                <li><strong className="text-accent">想像空間のみ</strong>：内部モデルでのシミュレーションは行うが、好奇心駆動型探索なし</li>
                <li><strong className="text-primary">フル提案手法（ICM + 想像空間 + 報酬機械）</strong>：本論文の提案手法</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-bold mb-3 mt-6 text-primary">4.1.4 評価指標</h3>
            <p>
              以下の指標を用いて各手法の性能を評価しました：
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-text my-4">
              <li><strong className="text-primary">タスク達成率</strong>：各フェーズでタスクを正常に完了できた割合</li>
              <li><strong className="text-primary">適応時間</strong>：新規性注入後、元のパフォーマンスレベルに回復するまでに要したエピソード数</li>
              <li><strong className="text-secondary">サンプル効率</strong>：一定のパフォーマンスレベルに達するために必要なサンプル数</li>
              <li><strong className="text-accent">新規オペレータ発見率</strong>：システムが自動的に発見できた新しいオペレータの数</li>
              <li><strong className="text-primary">ロバスト性</strong>：環境の変動に対するパフォーマンスの安定性</li>
            </ul>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4 text-primary">4.2 実験結果</h2>
          <div className="prose max-w-none">
            <p>
              実験結果は、提案手法「Curiosity-Driven Imagination」が従来のアプローチと比較して、
              オープンワールド環境での適応能力において優れていることを示しました。
            </p>
            
            <div className="bg-gradient-to-r from-primary-light to-secondary-light p-6 rounded-lg shadow-sm border border-primary/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">4.2.1 主要な実験結果</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2 text-primary">タスク達成率</h4>
                
                <div className="rounded-lg overflow-hidden shadow-sm mb-4">
                  <ResponsiveChart
                    chart={
                      <div className="h-full w-full">
                        <ClientSideBarChart 
                          data={taskCompletionData} 
                          options={taskCompletionOptions} 
                        />
                      </div>
                    }
                    caption="図2: 各フェーズでのタスク達成率の比較"
                    captionColor="text-primary"
                    bgGradient="from-white to-primary-light"
                  />
                </div>
                
                <p className="text-text mt-4">
                  提案手法は、新規性注入後の性能低下が比較手法より小さく、迅速に元のパフォーマンスレベルに回復しました。
                  特に、3回目と4回目の新規性注入後も80%以上のタスク達成率を維持した一方、従来のアプローチは50%以下まで低下しました。
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-2 text-primary">オペレータ発見能力</h4>
                
                <p className="text-text mb-4">
                  新規性注入後、提案手法は以下のような新しいオペレータを自動的に発見し学習しました：
                </p>
                
                <ul className="list-disc pl-6 space-y-2 text-text">
                  <li>
                    <strong className="text-primary">異なる把持戦略</strong>：新しい形状のオブジェクトに対して、適切な把持位置と力の制御方法を発見
                  </li>
                  <li>
                    <strong className="text-primary">障害物回避行動</strong>：障害物を検知し、最適な回避経路を生成するオペレータを学習
                  </li>
                  <li>
                    <strong className="text-accent">複合行動</strong>：基本オペレータを組み合わせた効率的な行動シーケンスを発見
                  </li>
                  <li>
                    <strong className="text-secondary">適応的制御</strong>：オブジェクトの物理特性に応じて動きの速度と力を調整するオペレータを学習
                  </li>
                </ul>
                
                <p className="text-text mt-4">
                  提案手法は平均して各新規性注入後に3〜5個の新しいオペレータを発見できた一方、
                  従来のTAMPアプローチは事前定義されたオペレータのみを使用し、標準的な強化学習は明示的なオペレータを形成しませんでした。
                </p>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-primary">4.2.2 コンポーネント分析</h3>
            
            <p>
              提案手法の各コンポーネントの貢献を評価するために、異なる変種の比較実験が行われました：
            </p>
            
            <div className="bg-gradient-to-r from-secondary-light to-accent-light p-6 rounded-lg shadow-sm border border-secondary/20 my-6">
              <div className="rounded-lg overflow-hidden shadow-sm mb-4">
                <ResponsiveChart
                  chart={
                    <div className="h-full w-full">
                      <ClientSideScatterChart 
                        data={componentAnalysisData} 
                        options={componentAnalysisOptions} 
                      />
                    </div>
                  }
                  caption="図3: 各手法のサンプル効率と適応能力の比較"
                  captionColor="text-primary"
                  bgGradient="from-white to-secondary-light"
                />
              </div>
              
              <div className="mt-4">
                <h4 className="text-lg font-medium mb-2 text-primary">分析結果</h4>
                <ul className="list-disc pl-6 space-y-2 text-text">
                  <li>
                    <strong className="text-primary">ICMの貢献</strong>：好奇心駆動型探索により、新規性の高い状況への積極的な探索が促進され、
                    環境の変化に対する適応速度が向上しました。ICMのみの変種は標準RLより大幅に適応が速かったですが、
                    フル提案手法には及びませんでした。
                  </li>
                  <li>
                    <strong className="text-accent">想像空間の貢献</strong>：内部シミュレーションにより、実際の試行錯誤なしに多数の行動計画を評価でき、
                    サンプル効率が大幅に向上しました。想像空間のみの変種はTAMPより効率的でしたが、
                    好奇心駆動型探索がないため新規状況での効率は劣りました。
                  </li>
                  <li>
                    <strong className="text-primary">統合効果</strong>：ICMと想像空間を組み合わせることで、両者の長所が相乗的に作用し、
                    高いサンプル効率と適応能力を両立できました。特に、ICMが興味深い状況を特定し、
                    想像空間でその状況を詳細に検討することで、効率的かつ効果的な学習が実現しました。
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <Navigation 
          paperId="curiosity-driven-imagination"
          currentSectionId="experiments" 
          customLabels={{
            prev: "提案手法",
            next: "結果と分析"
          }}
        />
      </div>
    </Layout>
  );
}
