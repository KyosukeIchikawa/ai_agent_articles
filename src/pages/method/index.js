import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Method() {
  return (
    <Layout title="提案手法">
      <div className="space-y-8">
        <header>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">3. 提案手法：Curiosity-Driven Imagination</h1>
          <p className="text-lg text-gray-600">
            好奇心駆動型の探索と想像力に基づく行動計画の統合アプローチ
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">3.1 アプローチの概要</h2>
          <div className="prose max-w-none">
            <p>
              私たちの提案する<span className="term">Curiosity-Driven Imagination (CDI)</span>は、オープンワールド環境でのロボット適応能力を向上させるための新しいフレームワークです。
              CDIは、内発的好奇心に基づく効率的な探索と、想像空間を活用した内部シミュレーションを統合し、下図のようなアーキテクチャを持ちます。
            </p>
            
            <figure className="my-8">
              <div className="bg-white p-4 rounded-lg">
                <div className="relative border-2 border-gray-300 rounded-lg p-4 bg-gray-50">
                  {/* モジュール構成を表現するための図 */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-3 py-4 px-6 bg-blue-100 rounded-lg border border-blue-200 text-center font-semibold">
                      Curiosity-Driven Imagination フレームワーク
                    </div>
                    
                    <div className="col-span-1 space-y-4">
                      <div className="p-3 bg-green-100 rounded-lg border border-green-200 text-center">
                        <div className="font-medium">内発的好奇心モジュール</div>
                        <div className="text-xs mt-1 text-gray-600">Intrinsic Curiosity Module (ICM)</div>
                      </div>
                      
                      <div className="p-3 bg-yellow-100 rounded-lg border border-yellow-200 text-center">
                        <div className="font-medium">状態遷移モデル</div>
                        <div className="text-xs mt-1 text-gray-600">State Transition Model</div>
                      </div>
                    </div>
                    
                    <div className="col-span-1 space-y-4">
                      <div className="p-3 bg-purple-100 rounded-lg border border-purple-200 text-center">
                        <div className="font-medium">想像空間</div>
                        <div className="text-xs mt-1 text-gray-600">Imagination Space</div>
                      </div>
                      
                      <div className="p-3 bg-red-100 rounded-lg border border-red-200 text-center">
                        <div className="font-medium">報酬機械</div>
                        <div className="text-xs mt-1 text-gray-600">Reward Machine</div>
                      </div>
                    </div>
                    
                    <div className="col-span-1 space-y-4">
                      <div className="p-3 bg-indigo-100 rounded-lg border border-indigo-200 text-center">
                        <div className="font-medium">オペレータ発見</div>
                        <div className="text-xs mt-1 text-gray-600">Operator Discovery</div>
                      </div>
                      
                      <div className="p-3 bg-pink-100 rounded-lg border border-pink-200 text-center">
                        <div className="font-medium">政策学習</div>
                        <div className="text-xs mt-1 text-gray-600">Policy Learning</div>
                      </div>
                    </div>
                    
                    <div className="col-span-3 py-3 px-6 bg-gray-100 rounded-lg border border-gray-200 text-center font-medium">
                      環境とのインタラクション
                    </div>
                  </div>
                  
                  {/* 矢印などの関係性の表現 */}
                  <div className="absolute left-1/4 top-[45%] transform -translate-x-1/2 rotate-90">→</div>
                  <div className="absolute left-3/4 top-[45%] transform -translate-x-1/2 rotate-90">→</div>
                  <div className="absolute left-1/2 top-[40%] transform -translate-x-1/2">↔</div>
                  <div className="absolute left-1/2 top-[60%] transform -translate-x-1/2">↔</div>
                </div>
              </div>
              <figcaption className="text-center text-sm text-gray-600">
                図1: Curiosity-Driven Imagination (CDI)フレームワークのアーキテクチャ概要
              </figcaption>
            </figure>
            
            <p>
              CDIのコアとなる特徴は以下の通りです：
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>好奇心駆動型の探索</strong>：内発的好奇心に基づいて新しい状態や未知の状況を積極的に探索し、環境についての知識を効率的に獲得します。
              </li>
              <li>
                <strong>想像空間でのシミュレーション</strong>：実際に行動する前に、内部モデルを用いて異なる行動の結果を「想像」し、効率的な行動計画を生成します。
              </li>
              <li>
                <strong>オペレータの動的発見と学習</strong>：環境との相互作用から新しいオペレータ（基本的な行動ユニット）を自動的に発見し、それに対応する政策を学習します。
              </li>
              <li>
                <strong>報酬機械を通じた長期的計画</strong>：複雑なタスクを分解し、内部的な報酬信号を生成することで、長期的な目標達成を促進します。
              </li>
            </ul>
            
            <p>
              これらの要素を統合することで、CDIは従来の手法と比較して以下の利点を提供します：
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 my-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">提案手法の主な利点</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium mb-2 text-blue-600">サンプル効率の向上</h4>
                  <p className="text-gray-700">
                    想像空間での事前シミュレーションにより、実際の試行錯誤の回数を大幅に削減します。
                    また、好奇心駆動の探索により、情報量の多い状態に積極的に移動することで、効率的に環境を理解します。
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2 text-green-600">適応能力の向上</h4>
                  <p className="text-gray-700">
                    既知のオペレータを組み合わせて新しい行動を生成し、未知の状況に対応します。
                    また、好奇心によって新しい環境変化に対して敏感に反応し、迅速に適応戦略を更新します。
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2 text-purple-600">知識の転移と再利用</h4>
                  <p className="text-gray-700">
                    抽象化されたオペレータの形で知識を保存することで、新しい状況にも既存の知識を適用できます。
                    これにより、ゼロから学習し直す必要性が軽減されます。
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2 text-red-600">計画と学習の統合</h4>
                  <p className="text-gray-700">
                    記号的計画と強化学習を緊密に統合することで、それぞれの利点を活かした効率的な問題解決が可能になります。
                    特に、未知の環境での探索と適応において大きな強みとなります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">3.2 システムコンポーネント</h2>
          <div className="prose max-w-none">
            <p>
              CDIフレームワークは、相互に連携する複数のコンポーネントで構成されています。
              ここでは、各コンポーネントの詳細と、それらがどのように連携して全体のシステムを形成するかを説明します。
            </p>
            
            <div className="my-6 space-y-8">
              <div className="bg-green-50 p-6 rounded-lg shadow-sm border border-green-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  3.2.1 内発的好奇心モジュール（ICM）
                </h3>
                <p className="mb-4 text-gray-700">
                  内発的好奇心モジュール（Intrinsic Curiosity Module, ICM）は、エージェントの探索行動を駆動する中核的コンポーネントです。
                  ICMは、環境の予測可能性に基づいて内発的報酬を生成し、エージェントが未知の状態や興味深い状況を積極的に探索するよう促します。
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium mb-2 text-gray-800">主要機能:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>状態表現の学習と特徴抽出</li>
                      <li>状態遷移の予測誤差計算</li>
                      <li>予測誤差に基づく好奇心報酬の生成</li>
                      <li>探索戦略の最適化</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-2 text-gray-800">利点:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>不確実な領域を優先的に探索</li>
                      <li>「新奇性バイアス」の実現</li>
                      <li>環境変化の検出効率を向上</li>
                      <li>探索と活用のバランスを自動調整</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 text-sm text-gray-600">
                  <p className="font-semibold">技術詳細:</p>
                  <p>
                    ICMは前向きモデル（行動から次状態を予測）と逆モデル（状態遷移から行動を予測）の双方を学習し、
                    予測誤差 ε(s<sub>t</sub>, a<sub>t</sub>, s<sub>t+1</sub>) = ||f<sub>θ</sub>(φ(s<sub>t</sub>), a<sub>t</sub>) - φ(s<sub>t+1</sub>)|| を内発的報酬として使用します。
                    ここで φ は状態エンコーダー、f<sub>θ</sub> は前向きモデルを表します。
                  </p>
                </div>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg shadow-sm border border-purple-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  3.2.2 想像空間（Imagination Space）
                </h3>
                <p className="mb-4 text-gray-700">
                  想像空間は、エージェントが実際に行動する前に異なる行動計画の結果をシミュレーションするための内部環境です。
                  これにより、リアルワールドでの試行錯誤なしに仮想的な実験が可能になり、効率的な行動選択を実現します。
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium mb-2 text-gray-800">主要機能:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>学習した遷移モデルに基づく内部シミュレーション</li>
                      <li>計画の評価と最適化</li>
                      <li>仮想体験からの学習</li>
                      <li>不確実性を考慮した複数シナリオ生成</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-2 text-gray-800">利点:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>実環境でのサンプル数を削減</li>
                      <li>危険な状況を事前に回避</li>
                      <li>長期的結果を予測して計画を改善</li>
                      <li>モデルベース学習の効率化</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 text-sm text-gray-600">
                  <p className="font-semibold">技術詳細:</p>
                  <p>
                    想像空間は確率的遷移モデル P(s<sub>t+1</sub> | s<sub>t</sub>, a<sub>t</sub>) を用いて実装され、
                    モンテカルロツリー探索（MCTS）またはモデル予測制御（MPC）を通じて複数の未来状態を生成・評価します。
                    不確実性推定も組み込まれており、モデルの信頼性が低い領域での過剰な確信を防止します。
                  </p>
                </div>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg shadow-sm border border-indigo-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  3.2.3 オペレータ発見と政策学習
                </h3>
                <p className="mb-4 text-gray-700">
                  このコンポーネントは、環境との相互作用を通じて新しいオペレータ（有用な行動単位）を自動的に発見し、
                  それらのオペレータに対応する低レベル政策を学習する役割を担います。
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium mb-2 text-gray-800">主要機能:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>環境変化の検出と新オペレータの候補特定</li>
                      <li>オペレータの前提条件と効果の学習</li>
                      <li>オペレータに対応する低レベル政策の獲得</li>
                      <li>オペレータライブラリの管理と最適化</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-2 text-gray-800">利点:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>事前定義されたオペレータへの依存を排除</li>
                      <li>環境変化や未知の状況に対する適応能力を向上</li>
                      <li>新しい能力の自律的獲得を実現</li>
                      <li>タスク間での知識転移を促進</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 text-sm text-gray-600">
                  <p className="font-semibold">技術詳細:</p>
                  <p>
                    オペレータは前提条件 pre(o)、効果 eff(o)、そして実行政策 π<sub>o</sub> の3つ組として表現されます。
                    オペレータ発見は状態変化の因果関係分析を通じて行われ、
                    各オペレータの政策は階層強化学習（HRL）のサブ政策として学習されます。
                    また、類似オペレータ間での知識共有メカニズムも実装されています。
                  </p>
                </div>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg shadow-sm border border-red-200">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  3.2.4 報酬機械（Reward Machine）
                </h3>
                <p className="mb-4 text-gray-700">
                  報酬機械は、複雑なタスクを表現し、タスク達成に向けた中間目標を生成するためのフレームワークです。
                  階層的な内部報酬構造を提供することで、長期的目標の達成を効率化します。
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-medium mb-2 text-gray-800">主要機能:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>タスクの階層的分解と表現</li>
                      <li>状態や進捗に基づく内部報酬の生成</li>
                      <li>サブタスク間の依存関係の管理</li>
                      <li>計画の柔軟な修正と調整</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium mb-2 text-gray-800">利点:</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>疎報酬問題の緩和</li>
                      <li>長期的計画の効率化</li>
                      <li>複雑なタスクの効率的な学習</li>
                      <li>途中状態での報酬による学習加速</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 text-sm text-gray-600">
                  <p className="font-semibold">技術詳細:</p>
                  <p>
                    報酬機械は形式的には有限状態オートマトン（FSA）として実装され、
                    状態 U、遷移関数 δ、報酬関数 L で定義されます。
                    環境の状態 s<sub>t</sub> における機械の状態 u<sub>t</sub> に基づいて、報酬 r<sub>t</sub> = L(u<sub>t</sub>, s<sub>t</sub>, u<sub>t+1</sub>) が生成されます。
                    遷移は観測された環境の変化に応じて更新され、タスクの進捗状況と対応しています。
                  </p>
                </div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-gray-800">3.3 コンポーネント間の統合と情報フロー</h3>
            <p>
              CDIフレームワークの強みは、各コンポーネントが密接に連携し、情報を共有しながら動作する点にあります。
              以下に、主要な情報フローと相互作用を示します：
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 my-6">
              <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                <li>
                  <strong>ICMと想像空間の連携</strong>：ICMが特定した興味深い状態や不確実な領域が、想像空間でのシミュレーション対象として優先されます。
                  これにより、探索リソースを最も情報価値の高い状態に集中させることができます。
                </li>
                <li>
                  <strong>想像空間とオペレータ発見の相互作用</strong>：想像空間でのシミュレーション結果は、新しいオペレータの候補を特定するために使用されます。
                  逆に、発見されたオペレータは想像空間でのシミュレーションの精度と効率を向上させます。
                </li>
                <li>
                  <strong>オペレータと報酬機械の連携</strong>：発見されたオペレータはタスク計画の基本単位となり、報酬機械の状態遷移設計に影響を与えます。
                  報酬機械はオペレータの組み合わせ方やシーケンスに関する情報を提供し、オペレータの高レベルな利用を導きます。
                </li>
                <li>
                  <strong>全体的なフィードバックループ</strong>：実環境との相互作用の結果は、各コンポーネントのモデルを更新し、システム全体の精度を継続的に向上させます。
                  このフィードバックループにより、CDIは環境の変化に対して継続的に適応できます。
                </li>
              </ol>
            </div>
            
            <p className="highlight">
              この統合されたアプローチにより、CDIは単に個々のコンポーネントの機能を足し合わせた以上の性能を発揮します。
              各要素が相互に強化し合うことで、オープンワールド環境における適応能力、学習効率、そして環境理解の深さが大幅に向上します。
              これは特に、動的に変化する環境や未知の状況に直面した際に顕著な利点となります。
            </p>
          </div>
        </section>
        
        <div className="flex justify-between mt-10 pt-6 border-t border-gray-200">
          <div>
            <Link href="/background/" className="text-blue-600 hover:underline">
              ← 背景
            </Link>
          </div>
          <div>
            <Link href="/experiments/" className="text-blue-600 hover:underline">
              実験 →
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}