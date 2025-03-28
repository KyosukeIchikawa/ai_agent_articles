import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Background() {
  return (
    <Layout title="背景">
      <div className="space-y-8">
        <header>
          <h1 className="text-3xl font-bold mb-4 text-indigo-800">1. 背景</h1>
          <p className="text-lg text-indigo-600">
            オープンワールド環境におけるロボット適応の課題と既存アプローチの限界
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-indigo-700 border-b-2 border-indigo-200 pb-2">1.1 オープンワールド環境の課題</h2>
          <div className="prose max-w-none">
            <p>
              実世界環境でのロボット操作は、構造化された単純な環境と異なり、予測不可能な変化や未知の状況に直面することが多くあります。
              このような<span className="term font-semibold text-indigo-700">オープンワールド環境（Open-world environments）</span>では、以下のような課題が存在します：
            </p>
            
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-lg shadow-sm border border-indigo-100 my-6">
              <h3 className="text-xl font-semibold mb-3 text-indigo-800">環境の不確実性と動的変化</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong className="text-indigo-700">予測不可能な変化</strong>：環境は時間とともに変化し、ロボットの動作計画時には予見できない状況が発生します。
                </li>
                <li>
                  <strong className="text-indigo-700">部分観測性</strong>：ロボットはセンサーを通じて環境を認識しますが、常に完全な情報を得られるわけではありません。
                </li>
                <li>
                  <strong className="text-indigo-700">外部からの介入</strong>：他のエージェント（人間や他のロボットなど）との相互作用が予測不能な形で環境を変化させます。
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg shadow-sm border border-blue-100 my-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-800">新規性への適応</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>
                  <strong className="text-blue-700">未知のオブジェクト</strong>：事前に学習していない新しいオブジェクトや状況に対応する必要があります。
                </li>
                <li>
                  <strong className="text-blue-700">想定外の相互作用</strong>：オブジェクト間の予期しない相互作用や物理法則の複雑な適用が発生します。
                </li>
                <li>
                  <strong className="text-blue-700">目標の変化</strong>：タスク実行中に目標が変更されたり、新しい制約が追加されたりすることがあります。
                </li>
              </ul>
            </div>
            
            <p className="bg-gradient-to-r from-indigo-100 to-blue-100 border-l-4 border-indigo-500 p-4 rounded">
              これらの課題により、事前にプログラムされた固定的な戦略や、単一のタスクに特化した学習アプローチでは、
              オープンワールド環境での効果的なロボット制御は困難です。環境への柔軟な適応と、未経験の状況への対応能力が不可欠となります。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-indigo-700 border-b-2 border-indigo-200 pb-2">1.2 従来のアプローチとその限界</h2>
          <div className="prose max-w-none">
            <p>
              オープンワールド環境でのロボット制御に対する従来のアプローチには、主に以下の2つがあります：
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-lg shadow-sm border border-indigo-100">
                <h3 className="text-xl font-semibold mb-3 text-indigo-700">記号的計画アプローチ（TAMP）</h3>
                <p className="text-gray-700">
                  <span className="term font-semibold text-indigo-700">Task and Motion Planning (TAMP)</span>は、高レベルの記号的計画と低レベルの動作計画を組み合わせたアプローチです。
                  環境のモデルと明示的なルールに基づいて行動計画を生成します。
                </p>
                <h4 className="text-lg font-medium mt-4 mb-2 text-indigo-700">限界：</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>環境の正確なモデルが必要</li>
                  <li>未知の状況に対する適応が困難</li>
                  <li>環境変化に対する計画修正が非効率</li>
                  <li>複雑な物理的相互作用の扱いが困難</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg shadow-sm border border-blue-100">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">強化学習アプローチ</h3>
                <p className="text-gray-700">
                  <span className="term font-semibold text-blue-700">強化学習（Reinforcement Learning）</span>は、環境との相互作用から得られる報酬に基づいて行動を学習するアプローチです。
                  明示的なモデルを必要とせず、経験から政策を学習します。
                </p>
                <h4 className="text-lg font-medium mt-4 mb-2 text-blue-700">限界：</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>大量のデータと訓練が必要</li>
                  <li>学習したドメイン外への一般化が難しい</li>
                  <li>長期的な計画や抽象的推論が苦手</li>
                  <li>新しいタスクごとに再学習が必要</li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-violet-700 border-b border-violet-200 pb-1">データ効率と適応性のジレンマ</h3>
            <p>
              従来のアプローチは、「データ効率」と「適応性」のトレードオフに直面しています。
              記号的アプローチはデータ効率が高いものの適応性に欠け、学習ベースのアプローチは適応性があるもののデータ効率が低いという問題があります。
            </p>
            
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-lg shadow-sm border border-violet-100 my-6">
              <h4 className="text-lg font-semibold mb-2 text-violet-800">既存アプローチの主な課題：</h4>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>
                  <strong className="text-violet-700">探索効率の低さ</strong>：新しい環境での効率的な探索戦略が不足しており、多くの試行錯誤が必要
                </li>
                <li>
                  <strong className="text-violet-700">内部モデルの不足</strong>：実際に行動する前に想像空間で検証する能力の欠如
                </li>
                <li>
                  <strong className="text-violet-700">知識の再利用不足</strong>：過去の経験から得た知識を新しい状況に適用する仕組みの欠如
                </li>
                <li>
                  <strong className="text-violet-700">計画と学習の分離</strong>：記号的計画と経験的学習が別々のシステムとして設計されることが多く、統合が不十分
                </li>
              </ol>
            </div>
            
            <p className="bg-gradient-to-r from-indigo-100 to-blue-100 border-l-4 border-indigo-500 p-4 rounded">
              これらの課題を解決するためには、計画と学習を効果的に統合し、内発的好奇心に基づく効率的な探索と、
              想像力を活用した内部シミュレーションを組み合わせた新しいアプローチが必要です。
              本研究の「Curiosity-Driven Imagination」はこれらの課題に対応するために提案されました。
            </p>
          </div>
        </section>
        
        <div className="flex justify-between mt-10 pt-6 border-t border-indigo-100">
          <div>
            <Link href="/">
              <a className="text-indigo-600 hover:text-indigo-800 hover:underline flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                トップページ
              </a>
            </Link>
          </div>
          <div>
            <Link href="/related-work/">
              <a className="text-indigo-600 hover:text-indigo-800 hover:underline flex items-center">
                関連研究
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}