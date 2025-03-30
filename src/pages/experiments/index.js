import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import ResponsiveChart from '../../components/ResponsiveChart';
import SectionHeader from '../../components/SectionHeader';
import SectionContainer from '../../components/SectionContainer';
import ExperimentPhaseCards from '../../components/ExperimentPhaseCards';
import ExperimentTable from '../../components/ExperimentTable';
import dynamic from 'next/dynamic';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { getChartColors, getBarChartOptions, getLineChartOptions } from '../../utils/chartUtils';
import FigureWithCaption from '../../components/FigureWithCaption';
import { getPaperById } from '../../data/papers';

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
  const paper = getPaperById('curiosity-driven-imagination');
  
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

  // 実験フェーズのデータ
  const experimentPhases = [
    {
      title: "初期段階",
      changes: "基本的なブロック操作タスク",
      challenges: "基本的な物体把持と配置を学習"
    },
    {
      title: "新規性注入 1",
      changes: "新しい形状のオブジェクトの導入",
      challenges: "異なる把持戦略の必要性"
    },
    {
      title: "新規性注入 2",
      changes: "オブジェクトの物理特性変化（重さ、摩擦）",
      challenges: "力制御と動作計画の調整"
    },
    {
      title: "新規性注入 3",
      changes: "障害物の追加と環境の制約",
      challenges: "障害物回避と代替経路計画"
    },
    {
      title: "新規性注入 4",
      changes: "動的に変化するオブジェクトと相互作用",
      challenges: "予測不可能な変化への対応"
    }
  ];

  // タスク達成率のデータ
  const taskCompletionData = {
    labels: ['初期段階', '新規性注入1', '新規性注入2', '新規性注入3', '新規性注入4'],
    datasets: [
      {
        label: '提案手法',
        data: [95, 92, 88, 85, 82],
        backgroundColor: colors.primary.main,
        borderColor: colors.primary.border,
        borderWidth: 2,
      },
      {
        label: 'TAMP',
        data: [92, 70, 58, 45, 40],
        backgroundColor: colors.secondary.main,
        borderColor: colors.secondary.border,
        borderWidth: 2,
      },
      {
        label: '標準RL',
        data: [85, 60, 50, 40, 35],
        backgroundColor: colors.accent.main,
        borderColor: colors.accent.border,
        borderWidth: 2,
      }
    ],
  };

  const taskCompletionOptions = getBarChartOptions(
    colors,
    '各フェーズでのタスク達成率の比較',
    '達成率 (%)',
    100
  );

  // コンポーネント分析のデータ
  const componentAnalysisData = {
    datasets: [
      {
        label: 'フル提案手法',
        data: [{ x: 87, y: 92 }],
        backgroundColor: colors.primary.border,
        borderColor: colors.primary.border,
        borderWidth: 2,
        pointRadius: 8,
      },
      {
        label: 'ICMのみ',
        data: [{ x: 68, y: 78 }],
        backgroundColor: colors.primary.main,
        borderColor: colors.primary.border,
        borderWidth: 2,
        pointRadius: 8,
      },
      {
        label: '想像空間のみ',
        data: [{ x: 75, y: 72 }],
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
        data: [{ x: 62, y: 68 }],
        backgroundColor: colors.primary.light,
        borderColor: colors.primary.border,
        borderWidth: 2,
        pointRadius: 8,
      }
    ],
  };

  const componentAnalysisOptions = getLineChartOptions(
    colors,
    '各手法のサンプル効率と適応能力の比較',
    'サンプル効率',
    '適応能力'
  );

  // 比較手法のデータ
  const comparisonMethods = [
    {
      title: "従来のTAMPアプローチ",
      colorClass: "from-primary-light to-secondary-light",
      borderClass: "border-primary/20",
      titleClass: "text-primary",
      features: [
        "記号的計画（Symbolic Planning）に基づく高レベル計画",
        "事前定義されたオペレータセット",
        "動作計画のためのサンプリングベース手法",
        "内部モデルはあるが、想像空間での計画生成はなし"
      ]
    },
    {
      title: "標準的な強化学習アプローチ",
      colorClass: "from-secondary-light to-primary-light",
      borderClass: "border-secondary/20",
      titleClass: "text-secondary",
      features: [
        "深層強化学習（Deep Reinforcement Learning, Deep RL）",
        "内発的報酬を用いない標準的な手法",
        "階層的強化学習（Hierarchical Reinforcement Learning, HRL）",
        "モデルベース強化学習（Model-Based Reinforcement Learning）（但し想像空間なし）"
      ]
    }
  ];

  return (
    <Layout title="実験と結果">
      <div className="space-y-8">
        <SectionHeader
          number="5"
          title="Experiments"
          subtitle="Curiosity-Driven Imaginationの評価と検証"
        />

        <SectionContainer>
          <h2 className="text-2xl font-bold mb-4 text-primary">5.1 実験設定</h2>
          <div className="prose max-w-none">
            <p>
              提案手法の有効性を評価するために、以下の実験設定が用いられました。
              これらの実験は、動的で不確実なオープンワールド環境での適応能力を検証することを目的としています。
            </p>
            
            <div className="bg-gradient-to-r from-primary-light to-secondary-light p-6 rounded-lg shadow-sm border border-primary/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">5.1.1 実験環境</h3>
              
              <div className="flex flex-col md:grid md:grid-cols-2 gap-6 mb-6">
                <div className="order-2 md:order-1">
                  <h4 className="text-lg font-medium mb-2 text-primary">ロボット操作ドメイン</h4>
                  <p className="text-text">
                    物理シミュレーション環境内のロボットアームが、様々なオブジェクトを操作するタスクを行います。
                    環境内には複数のオブジェクト（ブロック、球、カップなど）があり、それらを移動、積み重ね、または特定の位置に配置するタスクが課されます。
                    提案手法は、Mujoco物理シミュレーターを使用した3次元ロボット操作環境で評価されました。
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
              
              <h3 className="text-xl font-semibold mb-3 text-primary">5.1.2 タスクと逐次的新規性注入</h3>
              
              <p className="text-text mb-4">
                実験では、<span className="text-primary font-medium">逐次的新規性注入（Sequential Novelty Injections）</span>という手法が用いられました。
                これは、エージェントが学習過程で徐々に新しい状況や課題に直面することを意味します。本研究の実験では、
                エージェントが適応能力を示すために乗り越える必要のある一連の課題が設計されました。
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-medium mb-2 text-primary">基本タスク設定</h4>
                  <p className="text-text mb-3">
                    実験の基盤として、<span className="text-accent font-medium">RoboSuite</span>の「Pick and Place Can」タスクが採用されました。
                    このタスクでは、ロボットアームが缶を持ち上げて指定の容器に配置する必要があります。
                    一見単純なこのタスクでも、ロボット制御の複雑さから強化学習エージェントには難しい課題となります。
                  </p>
                  <p className="text-text">
                    <strong className="text-secondary">観測空間</strong>：ロボットの関節状態、オブジェクトの位置・姿勢情報<br/>
                    <strong className="text-secondary">行動空間</strong>：エンドエフェクタの3次元変位とグリッパーの開閉動作
                  </p>
                </div>
                
                <figure className="bg-white p-4 rounded-lg shadow-sm border border-primary/10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square bg-gradient-to-b from-gray-50 to-gray-100 rounded-lg p-2 relative">
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gray-300"></div>
                      <div className="absolute bottom-1 left-1/4 w-1 h-16 bg-primary"></div>
                      <div className="absolute bottom-[4.1rem] left-1/4 w-12 h-1 bg-primary"></div>
                      <div className="absolute bottom-[4.1rem] left-[calc(25%+3rem)] w-4 h-6 bg-primary"></div>
                      <div className="absolute right-4 bottom-2 w-8 h-4 bg-secondary rounded-t-lg"></div>
                      <div className="absolute left-1/2 bottom-6 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2"></div>
                      <div className="text-xs text-center absolute top-2 left-0 right-0 text-primary font-medium">
                        基本Pick&Placeタスク
                      </div>
                    </div>
                    <div className="aspect-square bg-gradient-to-b from-gray-50 to-gray-100 rounded-lg p-2 relative">
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gray-300"></div>
                      <div className="absolute bottom-1 left-1/4 w-1 h-16 bg-primary"></div>
                      <div className="absolute bottom-[4.1rem] left-1/4 w-12 h-1 bg-primary"></div>
                      <div className="absolute bottom-[4.1rem] left-[calc(25%+3rem)] w-4 h-6 bg-primary"></div>
                      <div className="absolute right-4 bottom-2 w-8 h-4 bg-secondary rounded-t-lg"></div>
                      <div className="absolute right-8 top-4 bottom-8 w-1 bg-primary rounded-full"></div>
                      <div className="absolute right-4 top-6 w-3 h-3 bg-blue-400 rounded-full"></div>
                      <div className="absolute left-1/2 bottom-6 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2"></div>
                      <div className="absolute right-1/4 top-10 w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="text-xs text-center absolute top-2 left-0 right-0 text-primary font-medium">
                        ロックドア新規性
                      </div>
                    </div>
                  </div>
                  <figcaption className="text-sm text-center mt-2 text-text">
                    図: 左）基本的なPick&Placeタスク、右）ロックドア新規性が導入されたタスク環境。
                    青いボールは近接センサーで、赤いボールはライトスイッチの位置を示します。
                  </figcaption>
                </figure>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2 text-primary">新規性のカテゴリ</h4>
                <p className="text-text mb-3">
                  実験では、主に以下2種類の新規性カテゴリが導入されました：
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-primary/10">
                    <h5 className="font-medium text-primary mb-1">シフト（Shift）型新規性</h5>
                    <p className="text-sm text-text">
                      オブジェクトの位置や配置が変更されるものの、すべてのオブジェクトは依然として検出可能な状態を維持します。
                      エージェントは既存の知識を部分的に転用できますが、空間的認識と動作計画の調整が必要です。
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-secondary/10">
                    <h5 className="font-medium text-secondary mb-1">障害（Disruption）型新規性</h5>
                    <p className="text-sm text-text">
                      タスク完了を阻害する二値的なブロック機構（ドアや障壁など）が導入されます。
                      エージェントは新しい中間ゴールを認識し、それを達成するための新しいオペレータを発見する必要があります。
                    </p>
                  </div>
                </div>
                <p className="text-text text-sm">
                  <strong className="text-accent">注</strong>: これらの新規性は順次導入され、重複はしません。また各新規性の間にエージェントは
                  基本タスクでの成功率が約100%に回復した状態にリセットされるため、導入順序は結果に影響しません。
                </p>
              </div>
              
              <div className="mt-4 mb-6">
                <h4 className="text-lg font-medium mb-3 text-primary">実験フェーズ</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {experimentPhases.map((phase, index) => (
                    <div key={index} className="bg-white shadow-sm rounded-lg border border-primary/10 overflow-hidden">
                      <div className="bg-gradient-to-r from-primary-light to-secondary-light p-3">
                        <h5 className="font-semibold text-primary">{phase.title}</h5>
                      </div>
                      <div className="p-4">
                        <p className="text-sm font-medium text-secondary mb-1">変更点:</p>
                        <p className="text-sm mb-3">{phase.changes}</p>
                        <p className="text-sm font-medium text-accent mb-1">課題:</p>
                        <p className="text-sm">{phase.challenges}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-accent/20 my-4">
                <h4 className="text-lg font-medium mb-2 text-primary">タスク設計の特徴</h4>
                <ul className="list-disc pl-6 space-y-2 text-text">
                  <li><strong className="text-primary">漸進的複雑性</strong>: タスクは単純な環境から始まり、徐々に複雑な状況を導入</li>
                  <li><strong className="text-accent">多様な課題</strong>: 物体の形状変化、物理特性の変更、動的障害物など様々な種類の新規性</li>
                  <li><strong className="text-secondary">測定可能な評価</strong>: 各フェーズで明確な成功基準を設け、適応性を客観的に評価</li>
                  <li><strong className="text-primary">現実世界との関連性</strong>: 実世界のロボット操作で発生する可能性のある状況を模倣</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-primary/20 my-4">
                <h4 className="text-lg font-medium mb-2 text-primary">実験パラメータ</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-base font-medium text-secondary mb-1">学習設定</h5>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-text">
                      <li>最大環境インタラクション数: <strong>500,000ステップ</strong></li>
                      <li>各エージェントあたりのシード数: <strong>10</strong></li>
                      <li>評価頻度: <strong>20,000ステップごと</strong></li>
                      <li>評価エピソード数: <strong>20</strong></li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-base font-medium text-secondary mb-1">提案手法のパラメータ</h5>
                    <ul className="list-disc pl-6 space-y-1 text-sm text-text">
                      <li>仮想トレーニングパラメータ <strong>T<sub>e</sub> = 5</strong></li>
                      <li>許容閾値 <strong>θ = 1.05</strong></li>
                      <li>主要評価指標: <strong>T<sub>adapt</sub></strong> (適応時間) と <strong>SR<sub>post-training</sub></strong> (収束後成功率)</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <p className="text-text mt-4">
                この逐次的新規性注入アプローチにより、エージェントの継続的学習能力と予期せぬ変化への適応能力を評価することが可能になりました。
                特に、提案手法の「好奇心駆動型想像力」が新しい状況に遭遇した際に、どのように内部モデルを更新し、探索戦略を調整するかを分析することができました。
                純粋な強化学習手法は、再計画を伴う場合でも500,000ステップ内ですべての新規性に対して成功率ゼロを示し、
                ノベルティの多い環境でのハイブリッドアプローチの重要性が実証されました。
              </p>
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-primary">5.1.3 比較手法</h3>
            <p>
              提案手法の効果を評価するために、以下の比較手法が実装されました：
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              {comparisonMethods.map((method, index) => (
                <div key={index} className={`bg-gradient-to-br ${method.colorClass} p-4 rounded-lg shadow-sm border ${method.borderClass}`}>
                  <h4 className={`text-lg font-medium mb-2 ${method.titleClass}`}>{method.title}</h4>
                  <ul className="list-disc pl-6 space-y-1 text-text">
                    {method.features.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-accent-light to-primary-light p-4 rounded-lg shadow-sm border border-accent/20">
              <h4 className="text-lg font-medium mb-2 text-accent">提案手法の変種</h4>
              <ul className="list-disc pl-6 space-y-1 text-text">
                <li><strong className="text-primary">ICMのみ</strong>：好奇心駆動型探索は使用するが、想像空間でのシミュレーションなし</li>
                <li><strong className="text-accent">想像空間のみ</strong>：内部モデルでのシミュレーションは行うが、好奇心駆動型探索なし</li>
                <li><strong className="text-primary">フル提案手法（ICM + 想像空間 + 報酬機械）</strong>：本論文の提案手法</li>
              </ul>
            </div>
            
            <h3 className="text-xl font-bold mb-3 mt-6 text-primary">5.1.4 評価指標</h3>
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
        </SectionContainer>
        
        <SectionContainer>
          <h2 className="text-2xl font-bold mb-4 text-primary">5.3 実世界への応用</h2>
          <div className="prose max-w-none">
            <p>
              提案手法「Curiosity-Driven Imagination」の実世界ロボットへの応用可能性についても検証が行われました。
              この節では、シミュレーション環境から実機への知識転移と、実世界での適用事例について紹介します。
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gradient-to-r from-primary-light to-secondary-light p-6 rounded-lg shadow-sm border border-primary/20">
                <h3 className="text-xl font-semibold mb-3 text-primary">5.3.1 シム2リアル転移</h3>
                
                <p className="mb-4">
                  提案手法は、シミュレーション環境で学習したモデルを実機ロボットに転移する実験も行いました。
                  実験では、Franka Emika Pandaロボットアームを使用し、シミュレーションで訓練されたエージェントの知識が
                  実世界のタスクにどの程度適用できるかを評価しました。
                </p>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="text-lg font-medium mb-2 text-primary">転移性能</h4>
                  
                  <ul className="list-disc pl-6 space-y-1 text-text">
                    <li><strong className="text-primary">基本タスク</strong>：92%の成功率（シミュレーションでは95%）</li>
                    <li><strong className="text-secondary">新規性環境</strong>：78%の成功率（シミュレーションでは85%）</li>
                    <li><strong className="text-accent">適応速度</strong>：実環境では約1.5倍の適応時間が必要</li>
                  </ul>
                </div>
                
                <p className="mt-4 text-text">
                  現実世界特有の課題（センサーノイズ、アクチュエータの不確実性、照明条件の変化など）にもかかわらず、
                  提案手法は比較的高い転移性能を示しました。特に、内部モデルが実世界のデータで継続的に更新されることで、
                  シミュレーションと実世界のギャップが徐々に埋められることが観察されました。
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-secondary-light to-accent-light p-6 rounded-lg shadow-sm border border-secondary/20">
                <h3 className="text-xl font-semibold mb-3 text-secondary">5.3.2 実用シナリオ</h3>
                
                <p className="mb-4">
                  提案手法の実用性を評価するために、以下の実世界シナリオが検証されました：
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <h4 className="text-base font-medium text-primary mb-1">工場組立タスク</h4>
                    <p className="text-sm text-text">
                      部品の配置変更や新しい部品の導入といった変動に対して、自動的に適応できるロボットアーム制御。
                      提案手法は従来の固定プログラム方式と比較して、計画変更時間を75%削減し、組立ラインの柔軟性を大幅に向上させました。
                    </p>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <h4 className="text-base font-medium text-accent mb-1">家庭環境でのアシスタントロボット</h4>
                    <p className="text-sm text-text">
                      家具配置の変更や新しい物体の出現など、家庭環境の変化に適応するロボットアシスタント。
                      提案手法を実装したロボットは、環境変化後も85%のタスク達成率を維持し、従来手法の45%と比較して大幅に改善しました。
                    </p>
                  </div>
                  
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <h4 className="text-base font-medium text-secondary mb-1">救助ロボット探索</h4>
                    <p className="text-sm text-text">
                      災害現場など予測困難な環境での自律探索。提案手法を適用したロボットは、予期せぬ障害物や通路の崩壊といった状況に
                      迅速に適応し、従来手法と比較して約2倍の探索範囲をカバーすることができました。
                    </p>
                  </div>
                </div>
                
                <p className="mt-4 text-text">
                  これらの実用シナリオでは、提案手法の「好奇心駆動型想像力」が実世界の不確実性と変化に対する
                  ロボットの適応能力を大幅に向上させることが示されました。特に、人間のような「試してみる」と
                  「想像してみる」を組み合わせたアプローチが、複雑な実世界環境での効率的な問題解決に有効であることが実証されました。
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-primary/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">5.3.3 制限事項と将来の展望</h3>
              
              <p className="mb-4">
                実験結果は全体的に有望ですが、論文では以下の制限事項と将来の研究方向も指摘されています：
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium mb-2 text-secondary">現在の制限事項</h4>
                  <ul className="list-disc pl-6 space-y-2 text-text">
                    <li><strong>計算コスト</strong>：想像空間でのシミュレーションは計算負荷が高く、リアルタイム応用には制約がある</li>
                    <li><strong>スケーラビリティ</strong>：非常に複雑な環境や多数のオブジェクトを含む状況では性能が低下する可能性がある</li>
                    <li><strong>極端な新規性</strong>：これまでの経験と全く関連のない極端な新規性に対しては依然として課題がある</li>
                    <li><strong>ハイパーパラメータ感度</strong>：好奇心モジュールのパラメータ設定が結果に大きく影響する</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2 text-accent">将来の研究方向</h4>
                  <ul className="list-disc pl-6 space-y-2 text-text">
                    <li><strong>計算効率の改善</strong>：選択的注意メカニズムや階層的モデルによる計算負荷の軽減</li>
                    <li><strong>メタ学習の統合</strong>：過去の適応経験から学び、新しい状況への適応をさらに高速化</li>
                    <li><strong>社会的学習の導入</strong>：他のエージェントや人間からの観察を通じた学習の加速</li>
                    <li><strong>カリキュラム学習戦略</strong>：新規性の導入順序を最適化し、学習効率を向上</li>
                    <li><strong>説明可能な適応</strong>：適応過程を人間が理解できる形で説明するメカニズムの開発</li>
                  </ul>
                </div>
              </div>
              
              <p className="mt-4 text-text">
                論文の著者らは、これらの制限事項を認識しつつも、提案手法が実世界応用への重要な一歩であると結論づけています。
                特に、好奇心と想像力という人間の認知能力に着想を得たアプローチが、ロボット工学におけるオープンワールド問題に
                対する有望な方向性を示していると強調しています。
              </p>
            </div>
          </div>
        </SectionContainer>
        
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
