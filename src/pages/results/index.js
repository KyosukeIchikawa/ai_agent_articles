import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import ResponsiveChart from '../../components/ResponsiveChart';
import SectionHeader from '../../components/SectionHeader';
import SectionContainer from '../../components/SectionContainer';
import ComparisonCard from '../../components/ComparisonCard';
import dynamic from 'next/dynamic';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { getChartColors, getBarChartOptions, getLineChartOptions } from '../../utils/chartUtils';
import { getPaperById } from '../../data/papers';

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

// クライアントサイドのみでレンダリングされるChartコンポーネント
const ClientSideBarChart = dynamic(() => 
  import('../../components/ClientSideChart').then((mod) => mod.ClientSideBarChart), 
  { ssr: false }
);

const ClientSideLineChart = dynamic(() => 
  import('../../components/ClientSideChart').then((mod) => mod.ClientSideLineChart), 
  { ssr: false }
);

export default function Results() {
  const paper = getPaperById('curiosity-driven-imagination');
  
  // Tailwindカラーの変数を作成
  const [colors, setColors] = useState(getChartColors());

  // マウント時にTailwindのカスタムカラーを取得
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setColors(getChartColors());
    }
  }, []);

  // タスク達成率のデータ
  const taskCompletionData = {
    labels: ['標準タスク', '環境変化タスク', '新規オブジェクトタスク'],
    datasets: [
      {
        label: 'Curiosity-Driven Imagination',
        backgroundColor: colors.primary.main,
        data: [92, 88, 82],
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

  const taskCompletionOptions = getBarChartOptions(
    colors,
    '異なる難易度のタスクにおける各手法の達成率 (%)',
    '達成率 (%)',
    100
  );

  // 学習曲線のデータ
  const learningCurveData = {
    labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    datasets: [
      {
        label: 'Curiosity-Driven Imagination',
        data: [0, 20, 40, 60, 78, 85, 88, 90, 91, 92, 92],
        borderColor: colors.primary.border,
        backgroundColor: colors.primary.light,
        tension: 0.3,
        fill: true,
      },
      {
        label: 'TAMP+RL',
        data: [0, 12, 25, 35, 45, 55, 64, 70, 75, 79, 82],
        borderColor: colors.secondary.border,
        backgroundColor: colors.secondary.light,
        tension: 0.3,
        fill: true,
      },
      {
        label: 'RL Only',
        data: [0, 5, 15, 22, 32, 42, 52, 60, 68, 72, 75],
        borderColor: colors.accent.border,
        backgroundColor: colors.accent.light,
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const learningCurveOptions = getLineChartOptions(
    colors,
    '累積報酬に対するエピソード数の学習曲線',
    '累積報酬',
    'エピソード数'
  );

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

  const recoveryTimeOptions = getBarChartOptions(
    colors,
    '環境変化後のパフォーマンス回復時間（エピソード数）',
    '回復エピソード数'
  );

  return (
    <Layout title="結果と分析">
      <div className="space-y-8">
        <SectionHeader
          number="6" 
          title="Results and Analysis"
          subtitle="提案手法「Curiosity-Driven Imagination」の実験結果とその分析"
        />

        <SectionContainer>
          <div className="prose max-w-none">
            <p>
              以下では、ロボット操作タスクにおけるCuriosity-Driven Imagination（CDI）の評価結果と、
              ベースライン手法との比較分析を紹介します。評価は、タスク達成率、学習効率、環境変化への適応能力に焦点を当てて行われました。
            </p>
            
            <div className="bg-gradient-to-r from-primary-light to-secondary-light p-6 rounded-lg shadow-sm border border-primary/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">6.1 タスク達成率の比較</h3>
              
              <div className="mb-6">
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
                    caption="図4: 異なる難易度のタスクにおける各手法の達成率"
                    captionColor="text-primary"
                    bgGradient="from-white to-primary-light"
                  />
                </div>
              </div>
              
              <p className="text-text mb-4">
                図4は、異なる難易度のタスクに対する各手法の達成率を示しています。Curiosity-Driven Imagination（CDI）は、
                特に複雑なタスクと環境変化が発生するシナリオにおいて、他の手法を大幅に上回る性能を示しました。
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-text">
                <li>
                  <strong className="text-primary">標準タスク</strong>：環境変化のない基本的なタスクでは、CDIと高度なTAMP手法の間に有意な差は見られませんでした。
                  これは、静的な環境では従来の計画アプローチも効果的に機能することを示しています。
                </li>
                <li>
                  <strong className="text-primary">環境変化タスク</strong>：タスク実行中に環境変化が導入されるシナリオでは、CDIは約88%の達成率を維持し、
                  次に高いTAMP+RL手法（65%）を23%上回りました。論文では、このシナリオにおいてCDIが素早く新しい環境条件を特定し、
                  それに適応するために新しいオペレータを発見する能力が強調されています。
                </li>
                <li>
                  <strong className="text-secondary">新規オブジェクトタスク</strong>：以前に遭遇したことのない新しいオブジェクトが導入されるシナリオでは、
                  CDIは他の手法と比較して最も高い適応能力を示し、達成率は82%に達しました。論文によれば、これは好奇心駆動型探索が
                  新しいオブジェクトに対する興味を自然に生成し、それを想像空間内で効率的に学習する能力によるものです。
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-secondary-light to-primary-light p-6 rounded-lg shadow-sm border border-secondary/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">6.2 学習効率と収束速度</h3>
              
              <div className="mb-6">
                <div className="rounded-lg overflow-hidden shadow-sm mb-4">
                  <ResponsiveChart
                    chart={
                      <div className="h-full w-full">
                        <ClientSideLineChart 
                          data={learningCurveData} 
                          options={learningCurveOptions} 
                        />
                      </div>
                    }
                    caption="図5: 累積報酬に対するエピソード数の学習曲線"
                    captionColor="text-primary"
                    bgGradient="from-white to-secondary-light"
                  />
                </div>
              </div>
              
              <p className="text-text mb-4">
                図5は、各手法の学習効率と収束速度を示しています。以下の観察結果が得られました：
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-text">
                <li>
                  <strong className="text-secondary">データ効率</strong>：CDIは学習に必要なサンプル数（エピソード数）が他の手法と比較して顕著に少なく、
                  約40%少ないサンプルで同等のパフォーマンスを達成しました。論文では、この効率性が想像空間内での行動シミュレーションと、
                  好奇心に基づく効率的な探索戦略の組み合わせによるものだと説明されています。
                </li>
                <li>
                  <strong className="text-primary">収束速度</strong>：CDIは最適ポリシーへの収束が最も速く、TAMP+RL手法と比較して約2.2倍、
                  標準RL手法と比較して約2.8倍の速さでした。これは、内発的好奇心モジュールによる効率的な探索と、
                  想像空間でのシミュレーションによる事前評価の効果によるものです。
                </li>
                <li>
                  <strong className="text-accent">安定性</strong>：学習の安定性に関しても、CDIは他の手法と比較して分散が小さく、より一貫した性能を示しました。
                  論文では、これが報酬機械による長期的な行動指針の提供によるものだと指摘されています。
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-accent-light to-primary-light p-6 rounded-lg shadow-sm border border-accent/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">6.3 環境変化への適応能力</h3>
              
              <div className="mb-6">
                <div className="rounded-lg overflow-hidden shadow-sm mb-4">
                  <ResponsiveChart
                    chart={
                      <div className="h-full w-full">
                        <ClientSideBarChart 
                          data={recoveryTimeData} 
                          options={recoveryTimeOptions} 
                        />
                      </div>
                    }
                    caption="図6: 環境変化後のパフォーマンス回復時間"
                    captionColor="text-accent"
                    bgGradient="from-white to-accent-light"
                  />
                </div>
              </div>
              
              <p className="text-text mb-4">
                図6は、環境が変化した後に各手法が元のパフォーマンスレベルに回復するまでに必要なエピソード数を示しています：
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-text">
                <li>
                  <strong className="text-primary">軽微な変化</strong>：オブジェクトの位置変更などの軽微な環境変化に対して、CDIは平均して3エピソード以内に適応し、
                  TAMP+RL（8エピソード）とRL Only（12エピソード）を大幅に上回りました。論文によれば、これはCDIが環境変化を検出し、
                  適切なオペレータを素早く見つけ出す能力によるものです。
                </li>
                <li>
                  <strong className="text-secondary">中程度の変化</strong>：新しい障害物の導入などの中程度の変化に対して、CDIは平均7エピソードで適応し、
                  次に良好だったTAMP+RL（15エピソード）の半分以下の時間でした。論文では、この速い適応が好奇心駆動型探索により
                  新たな障害物周辺を集中的に調査することで実現されたと説明されています。
                </li>
                <li>
                  <strong className="text-accent">大きな変化</strong>：新しいオブジェクトの導入や環境力学の変更などの大きな変化に対して、
                  CDIは平均12エピソードで適応しましたが、他の手法は20エピソード以上を要しました。論文では、この差が最も顕著であり、
                  CDIが複数の新しいオペレータを発見し、それらを組み合わせて複雑な問題を解決する能力が示されたとしています。
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-primary-light to-accent-light p-6 rounded-lg shadow-sm border border-primary/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">6.4 アブレーション研究</h3>
              
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-primary">88%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-primary">40</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-primary">7.0</td>
                    </tr>
                    <tr className="bg-primary-light/30">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">ICMなし</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-primary">62%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-primary">80</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-primary">17.5</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-accent">想像空間なし</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-accent">74%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-accent">60</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-accent">10.5</td>
                    </tr>
                    <tr className="bg-primary-light/30">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-secondary">報酬機械なし</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary">78%</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary">52</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-secondary">9.2</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-text mt-4">
                アブレーション研究から、以下の洞察が得られました：
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mt-3 text-text">
                <li>
                  <strong className="text-primary">内発的好奇心モジュール（ICM）</strong>の除去は最も大きな性能低下をもたらし、達成率が26%低下し、
                  収束に必要なエピソード数が2倍に増加しました。論文では、ICMが新しい状況や変化への迅速な対応を促す
                  「探検家」としての役割を果たしていると説明されています。
                </li>
                <li>
                  <strong className="text-accent">想像空間シミュレーション</strong>を除去すると、達成率が14%低下し、収束速度が50%低下しました。
                  論文によれば、想像空間は特に未経験の状況において、実際に試行する前に様々な行動プランを評価する
                  「思考実験」の役割を果たしており、サンプル効率を大幅に向上させています。
                </li>
                <li>
                  <strong className="text-secondary">報酬機械</strong>を除去すると、他のコンポーネントほどではありませんが、性能が低下しました。
                  報酬機械は特に長期的な計画と段階的タスクの成功に重要な役割を果たしています。論文では、報酬機械が
                  「ナビゲーター」として、エージェントを目標に向かって導く役割を果たしていると述べられています。
                </li>
              </ul>
            </div>
            
            <p className="bg-gradient-to-r from-primary-light to-secondary-light border-l-4 border-primary p-4 rounded">
              結果から、Curiosity-Driven Imaginationはオープンワールド環境における適応性、学習効率、安定性の面で既存手法を上回ることが示されました。
              特に、未知の状況や環境変化に対する迅速な適応能力は、実世界のロボットアプリケーションにおいて重要な利点となります。
              各コンポーネントがそれぞれ重要な役割を果たしており、システム全体としての相乗効果が優れた性能をもたらしています。
              論文の著者らは、この手法が将来的に工場の生産ラインや家庭用ロボット、災害対応ロボットなど、不確実で変化する環境での応用に
              大きな可能性を持つと結論づけています。
            </p>
          </div>
        </SectionContainer>

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