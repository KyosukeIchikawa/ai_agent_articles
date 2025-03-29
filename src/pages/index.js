import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="トップページ">
      <div className="space-y-8">
        <header className="text-center mb-10 bg-gradient-to-r from-primary-light via-blue-50 to-primary-light py-10 rounded-xl shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-text">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary">
              Curiosity-Driven Imagination
            </span>
            <span className="block text-xl md:text-2xl font-medium mt-3 text-primary">
              好奇心駆動型想像力によるオープンワールド適応
            </span>
          </h1>
          <p className="text-lg text-primary max-w-3xl mx-auto">
            ロボットが未知の環境に素早く適応するための革新的アプローチ
          </p>
          <div className="mt-4 text-text">
            <p>Pierrick Lorang<sup>1,2</sup>, Hong Lu<sup>1</sup>, Matthias Scheutz<sup>1</sup></p>
            <p className="text-sm mt-1">
              <sup>1</sup>Tufts University, USA | <sup>2</sup>AIT Austrian Institute of Technology GmbH, Austria
            </p>
          </div>
        </header>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-primary/20 pb-2">論文概要</h2>
          <div className="bg-gradient-to-br from-primary-light to-secondary-light p-6 rounded-lg shadow-sm border border-primary/20">
            <p className="text-text leading-relaxed">
              本論文は、動的で不確実なオープンワールド環境に迅速に適応するためのロボットシステムを提案しています。
              提案手法「Curiosity-Driven Imagination（好奇心駆動型想像力）」は、内発的好奇心モジュール（ICM: Intrinsic Curiosity Module）を活用して
              環境への好奇心を刺激し、想像空間内で新しい行動計画を生成・検証することで、未知の状況への適応能力を高めます。
              従来のTask and Motion Planning（TAMP）アプローチと比較して、より効率的かつ柔軟な環境適応を実現しています。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-primary border-b-2 border-primary/20 pb-2">主要な貢献</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white to-secondary-light p-6 rounded-lg shadow-md border-t-4 border-secondary hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-secondary">好奇心駆動型学習</h3>
              <p className="text-text">
                内発的好奇心モジュール（ICM）により、ロボットが自律的に環境を探索し、興味深い新しい経験を優先的に獲得する仕組みを確立。
                予測誤差を好奇心の指標として活用することで、効率的な環境理解を促進します。
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-accent-light p-6 rounded-lg shadow-md border-t-4 border-accent hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-accent">想像空間計画</h3>
              <p className="text-text">
                実世界での試行錯誤なしに、想像空間内で新しい行動計画を生成・評価する能力を実現。
                これにより、実際の実行前に多様な可能性を安全に検討でき、適応の効率性が大幅に向上します。
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-primary-light p-6 rounded-lg shadow-md border-t-4 border-primary hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-primary">Bi-Modelアーキテクチャ</h3>
              <p className="text-text">
                低レベルの学習ベースコンポーネントと高レベルの記号的計画コンポーネントを統合した革新的なハイブリッドアーキテクチャを提案。
                両アプローチの長所を組み合わせることで、より効果的な意思決定を実現します。
              </p>
            </div>

            <div className="bg-gradient-to-br from-white to-secondary-light p-6 rounded-lg shadow-md border-t-4 border-secondary hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3 text-secondary">新規性対応能力</h3>
              <p className="text-text">
                従来のアプローチでは困難であった新規の課題や状況に素早く適応する能力を実証。
                実験では「Shift」と「Disruption」の2種類の環境変化に対する適応能力を検証しています。
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-primary/20 pb-2">研究の位置づけ</h2>
          <div className="bg-gradient-to-br from-white to-primary-light p-6 rounded-lg shadow-md border border-primary/20">
            <p className="text-text mb-4">
              本研究は、以下の研究分野に重要な貢献をしています：
            </p>
            <ul className="list-disc pl-6 space-y-3 text-text">
              <li><span className="font-semibold text-primary">ロボット工学</span>：実世界でのロボットタスク実行における適応能力の向上</li>
              <li><span className="font-semibold text-secondary">強化学習</span>：好奇心駆動型探索による効率的な学習アプローチ</li>
              <li><span className="font-semibold text-accent">シンボリックAI</span>：記号的計画と学習ベースの手法の統合</li>
              <li><span className="font-semibold text-secondary">認知ロボティクス</span>：想像力を模倣した内部モデルの活用</li>
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-primary border-b-2 border-primary/20 pb-2">論文セクション</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/background/">
              <a className="no-underline">
                <div className="bg-gradient-to-br from-white to-primary-light p-5 rounded-lg shadow-sm border border-primary/20 hover:shadow-md transition-shadow duration-300 h-full">
                  <h3 className="text-xl font-semibold mb-2 text-primary">I. 背景</h3>
                  <p className="text-text">
                    オープンワールド環境におけるロボット適応の課題と従来アプローチの限界について解説します。
                  </p>
                </div>
              </a>
            </Link>
            
            <Link href="/related-work/">
              <a className="no-underline">
                <div className="bg-gradient-to-br from-white to-primary-light p-5 rounded-lg shadow-sm border border-primary/20 hover:shadow-md transition-shadow duration-300 h-full">
                  <h3 className="text-xl font-semibold mb-2 text-primary">II. 関連研究</h3>
                  <p className="text-text">
                    内発的好奇心、想像力ベースの計画、ハイブリッドアプローチなど、関連する研究分野を紹介します。
                  </p>
                </div>
              </a>
            </Link>
            
            <Link href="/method/">
              <a className="no-underline">
                <div className="bg-gradient-to-br from-white to-accent-light p-5 rounded-lg shadow-sm border border-accent/20 hover:shadow-md transition-shadow duration-300 h-full">
                  <h3 className="text-xl font-semibold mb-2 text-accent">IV. 提案手法</h3>
                  <p className="text-text">
                    Curiosity-Driven Imaginationフレームワークのアーキテクチャとコンポーネントについて詳述します。
                  </p>
                </div>
              </a>
            </Link>
            
            <Link href="/experiments/">
              <a className="no-underline">
                <div className="bg-gradient-to-br from-white to-secondary-light p-5 rounded-lg shadow-sm border border-secondary/20 hover:shadow-md transition-shadow duration-300 h-full">
                  <h3 className="text-xl font-semibold mb-2 text-secondary">V. 実験</h3>
                  <p className="text-text">
                    提案手法を評価するためのタスク環境設計と実験条件について説明します。
                  </p>
                </div>
              </a>
            </Link>
            
            <Link href="/results/">
              <a className="no-underline">
                <div className="bg-gradient-to-br from-white to-secondary-light p-5 rounded-lg shadow-sm border border-secondary/20 hover:shadow-md transition-shadow duration-300 h-full">
                  <h3 className="text-xl font-semibold mb-2 text-secondary">VI. 実験結果</h3>
                  <p className="text-text">
                    性能評価の結果と比較手法に対する優位性の分析を提示します。
                  </p>
                </div>
              </a>
            </Link>
            
            <Link href="/discussion/">
              <a className="no-underline">
                <div className="bg-gradient-to-br from-white to-accent-light p-5 rounded-lg shadow-sm border border-accent/20 hover:shadow-md transition-shadow duration-300 h-full">
                  <h3 className="text-xl font-semibold mb-2 text-accent">VII. 考察</h3>
                  <p className="text-text">
                    実験結果からの知見と、提案手法の長所・限界についての議論を展開します。
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </section>
        
        <section className="mt-12 bg-gradient-to-br from-primary-light to-secondary-light p-6 rounded-lg shadow-sm border border-primary/20">
          <h2 className="text-2xl font-bold mb-4 text-primary">概念図</h2>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="relative border-2 border-primary/20 rounded-lg p-4 bg-gradient-to-br from-white to-primary-light">
              {/* モジュール構成を表現するための図 */}
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-3 py-4 px-6 bg-gradient-to-r from-primary to-primary rounded-lg border border-primary text-center font-semibold shadow-sm text-white">
                  Curiosity-Driven Imagination フレームワーク
                </div>
                
                <div className="col-span-1 space-y-4">
                  <div className="p-3 bg-gradient-to-br from-secondary-light to-secondary-light rounded-lg border border-secondary text-center shadow-sm">
                    <div className="font-medium">内発的好奇心モジュール</div>
                    <div className="text-xs mt-1 text-text">Intrinsic Curiosity Module</div>
                  </div>
                  
                  <div className="p-3 bg-gradient-to-br from-primary-light to-primary-light rounded-lg border border-primary text-center shadow-sm">
                    <div className="font-medium">状態遷移モデル</div>
                    <div className="text-xs mt-1 text-text">State Transition Model</div>
                  </div>
                </div>
                
                <div className="col-span-1 space-y-4">
                  <div className="p-3 bg-gradient-to-br from-accent-light to-accent-light rounded-lg border border-accent text-center shadow-sm">
                    <div className="font-medium">想像空間</div>
                    <div className="text-xs mt-1 text-text">Imagination Space</div>
                  </div>
                  
                  <div className="p-3 bg-gradient-to-br from-accent-light to-accent-light rounded-lg border border-accent text-center shadow-sm">
                    <div className="font-medium">報酬機械</div>
                    <div className="text-xs mt-1 text-text">Reward Machine</div>
                  </div>
                </div>
                
                <div className="col-span-1 space-y-4">
                  <div className="p-3 bg-gradient-to-br from-primary-light to-primary-light rounded-lg border border-primary text-center shadow-sm">
                    <div className="font-medium">オペレータ発見</div>
                    <div className="text-xs mt-1 text-text">Operator Discovery</div>
                  </div>
                  
                  <div className="p-3 bg-gradient-to-br from-secondary-light to-secondary-light rounded-lg border border-secondary text-center shadow-sm">
                    <div className="font-medium">政策学習</div>
                    <div className="text-xs mt-1 text-text">Policy Learning</div>
                  </div>
                </div>
                
                <div className="col-span-3 py-3 px-6 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg border border-gray-300 text-center font-medium shadow-sm">
                  環境とのインタラクション
                </div>
              </div>
              
              {/* 矢印などの関係性の表現 */}
              <div className="absolute left-1/4 top-[45%] transform -translate-x-1/2 rotate-90 text-primary">{'->'}</div>
              <div className="absolute left-3/4 top-[45%] transform -translate-x-1/2 rotate-90 text-primary">{'->'}</div>
              <div className="absolute left-1/2 top-[40%] transform -translate-x-1/2 text-primary">{'<->'}</div>
              <div className="absolute left-1/2 top-[60%] transform -translate-x-1/2 text-primary">{'<->'}</div>
            </div>
          </div>
          <p className="text-center text-sm text-text mt-2">
            図1: Curiosity-Driven Imagination (CDI)フレームワークのアーキテクチャ概要
          </p>
        </section>
        
        <section className="mt-8 bg-gradient-to-br from-white to-primary-light p-6 rounded-lg shadow-sm border border-primary/20">
          <h2 className="text-2xl font-bold mb-4 text-primary">この論文について</h2>
          <p className="text-text">
            この論文「Curiosity-Driven Imagination: Discovering Plan Operators and Learning Associated Policies for Open-World Adaptation」は、
            ロボットが未知の変化に適応するための革新的なアプローチを提案しています。従来の純粋に記号的なアプローチでは対応が難しい
            オープンワールド環境において、好奇心駆動型の探索と想像力を模倣したプランニングを組み合わせることで、
            効率的かつ効果的な適応能力を実現しています。
          </p>
        </section>
        
        <div className="flex justify-center mt-10">
          <Link href="/background/">
            <a className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg shadow-md hover:from-primary hover:to-secondary/90 transition duration-300 flex items-center">
              論文を読み始める
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
