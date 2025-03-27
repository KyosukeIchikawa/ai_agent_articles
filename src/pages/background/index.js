import Layout from '../../components/Layout';

export default function Background() {
  return (
    <Layout title="背景">
      <div className="space-y-8">
        <header>
          <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">背景</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            オープンワールド環境におけるロボット適応の課題と既存アプローチの限界
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">オープンワールド環境の課題</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              実世界環境でのロボット操作は、構造化された単純な環境と異なり、予測不可能な変化や未知の状況に直面することが多くあります。
              このような<span className="term">オープンワールド環境（Open-world environments）</span>では、以下のような課題が存在します：
            </p>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 my-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">環境の不確実性と動的変化</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>予測不可能な変化</strong>：環境は時間とともに変化し、ロボットの動作計画時には予見できない状況が発生します。
                </li>
                <li>
                  <strong>部分観測性</strong>：ロボットはセンサーを通じて環境を認識しますが、常に完全な情報を得られるわけではありません。
                </li>
                <li>
                  <strong>外部からの介入</strong>：他のエージェント（人間や他のロボットなど）との相互作用が予測不能な形で環境を変化させます。
                </li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 my-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">新規性への適応</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>未知のオブジェクト</strong>：事前に学習していない新しいオブジェクトや状況に対応する必要があります。
                </li>
                <li>
                  <strong>想定外の相互作用</strong>：オブジェクト間の予期しない相互作用や物理法則の複雑な適用が発生します。
                </li>
                <li>
                  <strong>目標の変化</strong>：タスク実行中に目標が変更されたり、新しい制約が追加されたりすることがあります。
                </li>
              </ul>
            </div>
            
            <p className="highlight">
              これらの課題により、事前にプログラムされた固定的な戦略や、単一のタスクに特化した学習アプローチでは、
              オープンワールド環境での効果的なロボット制御は困難です。環境への柔軟な適応と、未経験の状況への対応能力が不可欠となります。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">従来のアプローチとその限界</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              オープンワールド環境でのロボット制御に対する従来のアプローチには、主に以下の2つがあります：
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">記号的計画アプローチ（TAMP）</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="term">Task and Motion Planning (TAMP)</span>は、高レベルの記号的計画と低レベルの動作計画を組み合わせたアプローチです。
                  環境のモデルと明示的なルールに基づいて行動計画を生成します。
                </p>
                <h4 className="text-lg font-medium mt-4 mb-2 text-gray-800 dark:text-gray-200">限界：</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>環境の正確なモデルが必要</li>
                  <li>未知の状況に対する適応が困難</li>
                  <li>環境変化に対する計画修正が非効率</li>
                  <li>複雑な物理的相互作用の扱いが困難</li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">強化学習アプローチ</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="term">強化学習（Reinforcement Learning）</span>は、環境との相互作用から得られる報酬に基づいて行動を学習するアプローチです。
                  明示的なモデルを必要とせず、経験から政策を学習します。
                </p>
                <h4 className="text-lg font-medium mt-4 mb-2 text-gray-800 dark:text-gray-200">限界：</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                  <li>大量のデータと訓練が必要</li>
                  <li>学習したドメイン外への一般化が難しい</li>
                  <li>長期的な計画や抽象的推論が苦手</li>
                  <li>新しいタスクごとに再学習が必要</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">データ効率と適応性のジレンマ</h3>
            <p>
              従来のアプローチは、「データ効率」と「適応性」のトレードオフに直面しています。
              記号的アプローチはデータ効率が高いものの適応性に欠け、学習ベースのアプローチは適応性があるもののデータ効率が低いという問題があります。
            </p>
            
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-6">
              <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">既存アプローチの主な課題：</h4>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>探索効率の低さ</strong>：新しい環境での効率的な探索戦略が不足しており、多くの試行錯誤が必要
                </li>
                <li>
                  <strong>内部モデルの不足</strong>：実際に行動する前に想像空間で検証する能力の欠如
                </li>
                <li>
                  <strong>知識の再利用不足</strong>：過去の経験から得た知識を新しい状況に適用する仕組みの欠如
                </li>
                <li>
                  <strong>計画と学習の分離</strong>：記号的計画と経験的学習が別々のシステムとして設計されることが多く、統合が不十分
                </li>
              </ol>
            </div>
            
            <p className="highlight">
              これらの課題を解決するためには、計画と学習を効果的に統合し、内発的好奇心に基づく効率的な探索と、
              想像力を活用した内部シミュレーションを組み合わせた新しいアプローチが必要です。
              本研究の「Curiosity-Driven Imagination」はこれらの課題に対応するために提案されました。
            </p>
          </div>
        </section>

        <div className="flex justify-between mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div>
            <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
              ← トップページ
            </a>
          </div>
          <div>
            <a href="/method" className="text-blue-600 dark:text-blue-400 hover:underline">
              提案手法 →
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}