import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Method() {
  return (
    <Layout title="提案手法">
      <div className="space-y-8">
        <header>
          <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">提案手法</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Curiosity-Driven Imagination：好奇心駆動型想像力によるオープンワールド適応
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">システム概要</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              提案手法「Curiosity-Driven Imagination」は、内発的好奇心に基づく探索と想像空間での計画生成を組み合わせた
              ハイブリッドアーキテクチャです。このシステムは以下の主要コンポーネントから構成されています：
            </p>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 my-6">
              <figure className="text-center">
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-4">
                  <div className="mx-auto max-w-3xl">
                    {/* システムアーキテクチャの図（ここでは簡略化したテキスト表現） */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg text-center flex flex-col items-center justify-center">
                        <div className="text-lg font-semibold mb-2">低レベルコンポーネント</div>
                        <div className="bg-blue-200 dark:bg-blue-800/50 p-3 rounded w-full mb-2">内発的好奇心モジュール (ICM)</div>
                        <div className="bg-blue-200 dark:bg-blue-800/50 p-3 rounded w-full">行動政策ネットワーク</div>
                      </div>
                      <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg text-center flex flex-col items-center justify-center">
                        <div className="text-lg font-semibold mb-2">高レベルコンポーネント</div>
                        <div className="bg-green-200 dark:bg-green-800/50 p-3 rounded w-full mb-2">記号的計画モジュール</div>
                        <div className="bg-green-200 dark:bg-green-800/50 p-3 rounded w-full">オペレータ発見モジュール</div>
                      </div>
                    </div>
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg text-center mt-4">
                      <div className="text-lg font-semibold mb-2">統合レイヤー</div>
                      <div className="bg-purple-200 dark:bg-purple-800/50 p-3 rounded w-full">想像空間シミュレーション</div>
                    </div>
                    <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg text-center mt-4">
                      <div className="text-lg font-semibold mb-2">報酬機械（Reward Machine）</div>
                      <div className="bg-yellow-200 dark:bg-yellow-800/50 p-3 rounded w-full">行動-状態-報酬マッピング</div>
                    </div>
                  </div>
                </div>
                <figcaption className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  図1: Curiosity-Driven Imaginationシステムアーキテクチャ
                </figcaption>
              </figure>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">低レベルコンポーネント</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>内発的好奇心モジュール (ICM)</strong>：環境の予測誤差に基づいて好奇心報酬を生成
                  </li>
                  <li>
                    <strong>行動政策ネットワーク</strong>：状態から適切な行動を選択するニューラルネットワーク
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">高レベルコンポーネント</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>記号的計画モジュール</strong>：抽象的な行動計画を生成
                  </li>
                  <li>
                    <strong>オペレータ発見モジュール</strong>：新しい行動オペレータを発見・学習
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">統合レイヤー</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  <strong>想像空間シミュレーション</strong>：内部モデルを使用して行動の結果を予測し検証
                </li>
                <li>
                  <strong>報酬機械（Reward Machine）</strong>：行動の結果に対する報酬を構造化して表現
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">内発的好奇心モジュール（ICM）</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              <span className="term">内発的好奇心モジュール（Intrinsic Curiosity Module: ICM）</span>は、
              環境の予測誤差に基づいて好奇心報酬を生成する重要なコンポーネントです。ICMの主な役割は以下の通りです：
            </p>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 my-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">ICMの仕組み</h3>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">状態表現学習</h4>
                  <p className="text-sm">生の観測データから意味のある特徴表現を学習</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">予測モデル</h4>
                  <p className="text-sm">現在の状態と行動から次の状態を予測</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">好奇心報酬</h4>
                  <p className="text-sm">予測誤差に基づく内発的報酬の生成</p>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                ICMは、現在の状態 s<sub>t</sub> と行動 a<sub>t</sub> から次の状態 s<sub>t+1</sub> を予測するフォワードモデルと、
                状態の変化に基づいて行動を予測する逆モデルを学習します。予測誤差が大きい領域（システムが予測できない新規な体験）に
                対して高い内発的報酬を与えることで、エージェントは未知の領域を探索するように動機づけられます。
              </p>

              <div className="mt-4">
                <h4 className="font-semibold mb-2">数学的定式化</h4>
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
                  <p className="text-sm font-mono">
                    予測誤差に基づく内発的報酬: r<sub>i</sub>(s<sub>t</sub>, a<sub>t</sub>, s<sub>t+1</sub>) = 
                    η/2 || φ̂(s<sub>t+1</sub>) - φ(s<sub>t</sub>, a<sub>t</sub>) ||<sup>2</sup>
                  </p>
                  <p className="text-xs mt-2">
                    ここで：
                    <br />φ̂(s<sub>t+1</sub>)は実際の次状態の特徴表現
                    <br />φ(s<sub>t</sub>, a<sub>t</sub>)はフォワードモデルによる予測
                    <br />ηはスケーリング係数
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4">
              この好奇心駆動型アプローチにより、エージェントは以下の能力を獲得します：
            </p>
            
            <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-700 dark:text-gray-300">
              <li>報酬が希少または存在しない環境での効率的な探索</li>
              <li>既知の状態から未知の状態への積極的な移行</li>
              <li>環境の「新規性マップ」の構築と更新</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">想像空間シミュレーション</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              提案システムの中核となる「想像空間シミュレーション」は、エージェントが実際に行動する前に
              内部モデルを使って行動の結果をシミュレーションする機能を提供します。
            </p>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 my-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">想像空間の特徴</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-indigo-600 dark:text-indigo-400">仮想的行動検証</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    学習した予測モデルを使って行動シーケンスの結果を予測し、実際の試行前に評価します。
                    これにより危険な行動や非効率な探索を避けることができます。
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-indigo-600 dark:text-indigo-400">記号的計画との統合</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    高レベルの記号的計画を低レベルの行動シーケンスに変換し、その実現可能性を想像空間で検証します。
                    これにより記号とサブシンボルの橋渡しを実現しています。
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-2 text-indigo-600 dark:text-indigo-400">想像による学習最適化</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  実際の環境と想像空間の両方でのQ学習を組み合わせることで、学習効率を大幅に向上させています。
                  特に以下の式で定義される想像空間でのQ値更新を行います：
                </p>
                
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mt-2">
                  <p className="text-sm font-mono">
                    Q<sub>im</sub>(s, a) ← Q<sub>im</sub>(s, a) + α[r + γ max<sub>a'</sub> Q<sub>im</sub>(s', a') - Q<sub>im</sub>(s, a)]
                  </p>
                  <p className="text-xs mt-2">
                    ここで：<br />
                    Q<sub>im</sub>は想像空間でのQ値<br />
                    s'は予測モデルによる次状態の予測<br />
                    r = r<sub>i</sub> + r<sub>e</sub> （内発的報酬と外部報酬の和）
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">報酬機械（Reward Machine）</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              提案システムでは、複雑なタスクの報酬構造を表現するために<span className="term">報酬機械（Reward Machine）</span>を採用しています。
              これは状態、行動、報酬の関係を明示的に表現する有限状態オートマトンの一種です。
            </p>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 my-6">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
                <div className="text-center">
                  {/* 報酬機械の図（簡略化した表現） */}
                  <div className="mx-auto max-w-lg">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-full flex items-center justify-center">
                        状態1
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="w-full h-0 border-t-2 border-gray-400 dark:border-gray-500 relative">
                          <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs">行動A</span>
                          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs">報酬+1</span>
                        </div>
                      </div>
                      <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-full flex items-center justify-center">
                        状態2
                      </div>
                    </div>
                    
                    <div className="mt-8 grid grid-cols-3 gap-4">
                      <div className="flex items-center justify-end">
                        <div className="h-16 w-0 border-r-2 border-gray-400 dark:border-gray-500"></div>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="w-full h-0 border-t-2 border-gray-400 dark:border-gray-500 relative">
                          <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs">行動B</span>
                          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs">報酬+5</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-start">
                        <div className="h-16 w-0 border-l-2 border-gray-400 dark:border-gray-500"></div>
                      </div>
                    </div>
                    
                    <div className="mt-4 grid grid-cols-3 gap-4">
                      <div className="bg-yellow-100 dark:bg-yellow-900/30 p-3 rounded-full flex items-center justify-center">
                        状態3
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="w-full h-0 border-t-2 border-gray-400 dark:border-gray-500 relative">
                          <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs">行動C</span>
                          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs">報酬+10</span>
                        </div>
                      </div>
                      <div className="bg-green-200 dark:bg-green-900/30 p-3 rounded-full flex items-center justify-center border-2 border-green-500">
                        目標状態
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300">
                報酬機械は以下の利点を提供します：
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mt-2 text-gray-700 dark:text-gray-300">
                <li>段階的な報酬シグナルによる疎報酬問題の緩和</li>
                <li>タスクの階層的構造化と分解</li>
                <li>複雑な時間的依存関係の明示的表現</li>
                <li>学習済み知識の再利用と転移可能性の向上</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="flex justify-between mt-8">
          <Link href="/ai_visual_arxiv/background" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            ← 背景
          </Link>
          <Link href="/ai_visual_arxiv/experiments" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
            実験 →
          </Link>
        </div>
      </div>
    </Layout>
  );
}