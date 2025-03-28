import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="トップページ">
      <div className="space-y-8">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Curiosity-Driven Imagination
            <span className="block text-xl md:text-2xl font-normal mt-2 text-gray-600 dark:text-gray-300">
              好奇心駆動型想像力によるオープンワールド適応
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            ロボットが未知の環境に素早く適応するための革新的アプローチ
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">論文概要</h2>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              本論文は、動的で不確実なオープンワールド環境に迅速に適応するためのロボットシステムを提案しています。
              提案手法「Curiosity-Driven Imagination（好奇心駆動型想像力）」は、内発的好奇心モジュール（ICM: Intrinsic Curiosity Module）を活用して
              環境への好奇心を刺激し、想像空間内で新しい行動計画を生成・検証することで、未知の状況への適応能力を高めます。
              従来のTask and Motion Planning（TAMP）アプローチと比較して、より効率的かつ柔軟な環境適応を実現しています。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">主要な貢献</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">好奇心駆動型学習</h3>
              <p className="text-gray-700 dark:text-gray-300">
                内発的好奇心モジュール（ICM）により、ロボットが自律的に環境を探索し、興味深い新しい経験を優先的に獲得する仕組みを確立。
                予測誤差を好奇心の指標として活用することで、効率的な環境理解を促進します。
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">想像空間計画</h3>
              <p className="text-gray-700 dark:text-gray-300">
                実世界での試行錯誤なしに、想像空間内で新しい行動計画を生成・評価する能力を実現。
                これにより、実際の実行前に多数の可能性を安全に検討できるため、リスクやコストを削減できます。
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">ハイブリッドアーキテクチャ</h3>
              <p className="text-gray-700 dark:text-gray-300">
                低レベルの学習ベースコンポーネントと高レベルの記号的計画コンポーネントを統合した革新的なハイブリッドアーキテクチャを提案。
                両アプローチの長所を組み合わせることで、より効果的な意思決定を実現します。
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
              <h3 className="text-xl font-semibold mb-3 text-red-600 dark:text-red-400">新規性対応能力</h3>
              <p className="text-gray-700 dark:text-gray-300">
                従来のアプローチでは困難であった新規の課題や状況に素早く適応する能力を実証。
                逐次的な新規性注入（Sequential Novelty Injections）を含む実験で、提案手法の優位性を検証しています。
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">研究の位置づけ</h2>
          <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              本研究は、以下の研究分野に重要な貢献をしています：
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li><span className="font-semibold">ロボット工学</span>：実世界でのロボットタスク実行における適応能力の向上</li>
              <li><span className="font-semibold">強化学習</span>：好奇心駆動型探索による効率的な学習アプローチ</li>
              <li><span className="font-semibold">シンボリックAI</span>：記号的計画と学習ベースの手法の統合</li>
              <li><span className="font-semibold">認知ロボティクス</span>：想像力を模倣した内部モデルの活用</li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">このサイトについて</h2>
            <p className="text-gray-700 dark:text-gray-300">
              このウェブサイトでは、「Curiosity-Driven Imagination: Discovering Plan Operators and Learning Associated Policies for Open-World Adaptation」論文の内容を
              分かりやすく解説しています。論文の背景から実験結果、結論まで、各セクションで詳細に説明していますので、
              左側のナビゲーションから興味のあるセクションを選択してください。
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
}