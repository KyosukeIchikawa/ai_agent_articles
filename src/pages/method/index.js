import Layout from '../components/Layout';

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
                対して高い内発的報酬を与えることで、エージェントの探索を促進します。
              </p>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">ICMの数学的定式化</h4>
                <p className="mb-2">好奇心報酬 r<sup>i</sup><sub>t</sub> は以下のように計算されます：</p>
                <div className="text-center font-mono bg-white dark:bg-gray-900 p-3 rounded">
                  r<sup>i</sup><sub>t</sub> = η/2 ||ϕ(s<sub>t+1</sub>) - ϕ̂(s<sub>t</sub>, a<sub>t</sub>)||<sup>2</sup>
                </div>
                <p className="mt-2 text-sm">
                  ここで、ϕは状態特徴抽出器、ϕ̂はフォワードモデル、ηはスケーリング係数です。
                </p>
              </div>
            </div>
            
            <p>
              ICMによって生成された好奇心報酬は、外部報酬と組み合わせてエージェントの総合的な報酬として使用されます：
            </p>
            
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center font-mono my-4">
              r<sub>total</sub> = r<sup>e</sup> + β·r<sup>i</sup>
            </div>
            
            <p>
              ここで、r<sup>e</sup>は外部報酬（タスク達成に対する報酬）、βは内発的報酬の重みを調整するハイパーパラメータです。
              このバランスを適切に調整することで、タスク指向の行動と好奇心に基づく探索のトレードオフを制御します。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">反復的学習プロセス</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              Curiosity-Driven Imaginationシステムの中核となるのは継続的な反復学習プロセスです。
              このシステムは単一のパスで完璧な行動を学習するのではなく、探索と計画のサイクルを何度も繰り返すことで
              能力を徐々に向上させていきます。
            </p>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 my-6">
              <figure className="text-center">
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-4">
                  <div className="mx-auto max-w-3xl">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-lg text-center flex flex-col items-center justify-center w-full md:w-1/4">
                        <div className="text-lg font-semibold mb-2">1. 環境探索</div>
                        <div className="text-sm">好奇心に基づく探索行動</div>
                      </div>
                      <div className="text-3xl">→</div>
                      <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg text-center flex flex-col items-center justify-center w-full md:w-1/4">
                        <div className="text-lg font-semibold mb-2">2. 知識抽出</div>
                        <div className="text-sm">新たな行動と状態遷移の学習</div>
                      </div>
                      <div className="text-3xl">→</div>
                      <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg text-center flex flex-col items-center justify-center w-full md:w-1/4">
                        <div className="text-lg font-semibold mb-2">3. 計画生成</div>
                        <div className="text-sm">想像空間での行動計画</div>
                      </div>
                      <div className="text-3xl">→</div>
                      <div className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg text-center flex flex-col items-center justify-center w-full md:w-1/4">
                        <div className="text-lg font-semibold mb-2">4. 計画実行</div>
                        <div className="text-sm">実環境での計画検証</div>
                      </div>
                    </div>
                    <div className="text-3xl mt-2 transform rotate-180">↑</div>
                    <div className="text-3xl mb-2">↓</div>
                    <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-lg text-center">
                      <div className="text-lg font-semibold mb-2">5. モデル更新</div>
                      <div className="text-sm">内部モデルと政策の更新</div>
                    </div>
                  </div>
                </div>
                <figcaption className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  図2: Curiosity-Driven Imaginationの反復学習サイクル
                </figcaption>
              </figure>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">継続的改善のメカニズム</h3>
                <p className="mb-4">
                  反復的学習プロセスを通じて、システムは以下の能力を徐々に向上させていきます：
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>環境理解の深化</strong>：繰り返しの探索により、環境の予測モデルの精度が向上します
                  </li>
                  <li>
                    <strong>行動表現の抽象化</strong>：低レベルの行動から高レベルの行動プリミティブを学習します
                  </li>
                  <li>
                    <strong>計画能力の拡張</strong>：より複雑な行動シーケンスを計画できるようになります
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-indigo-600 dark:text-indigo-400">反復の停止条件</h3>
                <p className="mb-4">
                  システムは以下の条件が満たされるまで反復を継続します：
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>
                    <strong>タスク完了</strong>：目標状態に到達した場合
                  </li>
                  <li>
                    <strong>知識収束</strong>：内部モデルの予測誤差が閾値以下になった場合
                  </li>
                  <li>
                    <strong>探索停滞</strong>：一定回数の反復で新規性スコアに改善が見られない場合
                  </li>
                  <li>
                    <strong>リソース制約</strong>：計算リソースやステップ数の制限に達した場合
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg my-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">適応的反復サイクルの特徴</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">動的な探索-活用バランス</h4>
                  <p className="text-sm">学習の進行に応じて、探索（好奇心）と活用（計画実行）のバランスを動的に調整します。初期段階では探索を重視し、知識が蓄積されるにつれて計画実行の比重を高めていきます。</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">階層的知識構築</h4>
                  <p className="text-sm">低レベルの行動プリミティブから始め、反復を重ねるごとに高レベルの抽象的行動を構築します。この階層的構造により、複雑なタスクに対してもスケーラブルな学習が可能になります。</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">失敗からの学習</h4>
                  <p className="text-sm">計画の実行が失敗した場合でも、その経験から内部モデルを更新し、次の反復で改善します。失敗は単なる「エラー」ではなく、学習のための貴重な情報源として活用されます。</p>
                </div>
              </div>
            </div>

            <p>
              この反復的学習プロセスにより、システムは初期状態では解決できなかった複雑なタスクや未知の状況に対しても、
              徐々に適応能力を獲得していきます。また、環境の変化に対しても、新たな探索と計画のサイクルを通じて
              柔軟に対応することができます。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">想像空間での計画生成</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              <span className="term">想像空間（Imagination Space）</span>は、システムが実世界での行動を実行する前に
              内部モデルを使用して異なる行動計画をシミュレーションし評価する仮想環境です。これには以下の要素が含まれます：
            </p>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 my-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">想像空間の構成要素</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium mb-2 text-green-600 dark:text-green-400">内部世界モデル</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    環境の動的特性を表現するニューラルネットワークモデルで、状態遷移関数 P(s<sub>t+1</sub> | s<sub>t</sub>, a<sub>t</sub>) を学習します。
                    このモデルは過去の経験から学習され、環境のシミュレーションを可能にします。
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-2 text-green-600 dark:text-green-400">オペレータ発見</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    環境との相互作用から得られたデータを分析し、高レベルの行動オペレータ（前提条件、効果、成功確率）を自動的に発見します。
                    これらのオペレータは記号的計画で使用されます。
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-lg font-medium mb-2 text-purple-600 dark:text-purple-400">想像空間での探索プロセス</h4>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>現在の状態 s<sub>t</sub> から出発</li>
                  <li>記号的計画による複数の候補行動計画の生成</li>
                  <li>内部モデルを使用して各計画の結果を予測</li>
                  <li>予測された状態遷移に対して報酬を評価</li>
                  <li>最も有望な計画を選択して実行</li>
                </ol>
              </div>
              
              <figure className="text-center mt-6">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
                  <div className="mx-auto max-w-3xl">
                    {/* 想像空間シミュレーションの図（簡略化した表現） */}
                    <div className="flex flex-col items-center">
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-4 w-32 text-center">
                        現在の状態 s<sub>t</sub>
                      </div>
                      <div className="flex justify-center items-start w-full mb-4">
                        <div className="flex flex-col items-center mx-2">
                          <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg text-sm mb-2 w-24 text-center">
                            計画 A
                          </div>
                          <svg height="40" width="24">
                            <line x1="12" y1="0" x2="12" y2="40" stroke="currentColor" strokeWidth="2" />
                            <polygon points="12,40 8,32 16,32" fill="currentColor" />
                          </svg>
                          <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg text-sm w-24 text-center">
                            予測結果 A
                          </div>
                        </div>
                        <div className="flex flex-col items-center mx-2">
                          <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg text-sm mb-2 w-24 text-center">
                            計画 B
                          </div>
                          <svg height="40" width="24">
                            <line x1="12" y1="0" x2="12" y2="40" stroke="currentColor" strokeWidth="2" />
                            <polygon points="12,40 8,32 16,32" fill="currentColor" />
                          </svg>
                          <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-sm w-24 text-center">
                            予測結果 B
                          </div>
                        </div>
                        <div className="flex flex-col items-center mx-2">
                          <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-lg text-sm mb-2 w-24 text-center">
                            計画 C
                          </div>
                          <svg height="40" width="24">
                            <line x1="12" y1="0" x2="12" y2="40" stroke="currentColor" strokeWidth="2" />
                            <polygon points="12,40 8,32 16,32" fill="currentColor" />
                          </svg>
                          <div className="bg-yellow-100 dark:bg-yellow-900/30 p-2 rounded-lg text-sm w-24 text-center">
                            予測結果 C
                          </div>
                        </div>
                      </div>
                      <div className="bg-green-200 dark:bg-green-800/50 p-3 rounded-lg w-40 text-center">
                        最適計画選択
                      </div>
                    </div>
                  </div>
                </div>
                <figcaption>図2: 想像空間でのシミュレーションと計画選択プロセス</figcaption>
              </figure>
            </div>
            
            <p className="highlight">
              想像空間の大きな利点は、実世界での試行錯誤なしに多数の行動計画をシミュレーションできることです。
              これにより、効率的に最適な計画を発見し、危険な状況や高コストな失敗を回避できます。
              また、実際に行動する前に新しいオペレータを発見・検証することで、学習効率を大幅に向上させています。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">報酬機械（Reward Machine）</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              <span className="term">報酬機械（Reward Machine）</span>は、環境との相互作用から得られた報酬を構造化して表現するモデルです。
              報酬機械は、特定の状態遷移や行動シーケンスに対する報酬を明示的に定義し、長期的な報酬獲得を促進します。
            </p>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 my-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">報酬機械の構造</h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                報酬機械は形式的には有限状態機械（FSM）として表現され、以下の要素で構成されます：
              </p>
              
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li><strong>状態集合 U</strong>：報酬機械の内部状態</li>
                <li><strong>初期状態 u<sub>0</sub> ∈ U</strong>：開始時の状態</li>
                <li><strong>遷移関数 δ<sub>u</sub></strong>：環境状態に基づいて次の報酬機械状態を決定</li>
                <li><strong>報酬関数 R</strong>：現在の報酬機械状態、環境状態、次の報酬機械状態に基づいて報酬を割り当て</li>
              </ul>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">報酬機械の動作プロセス</h4>
                <ol className="list-decimal pl-6 space-y-1 text-sm">
                  <li>エージェントが環境で行動 a<sub>t</sub> を実行し、状態 s<sub>t</sub> から s<sub>t+1</sub> へ遷移</li>
                  <li>報酬機械が環境の状態遷移を観測し、内部状態 u<sub>t</sub> から u<sub>t+1</sub> へ更新</li>
                  <li>報酬 r<sub>t</sub> = R(u<sub>t</sub>, s<sub>t</sub>, u<sub>t+1</sub>, s<sub>t+1</sub>) を計算</li>
                  <li>この報酬をエージェントの学習に使用</li>
                </ol>
              </div>
            </div>
            
            <p>
              提案手法では、報酬機械は以下の2つの重要な役割を果たします：
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                <h4 className="text-lg font-medium mb-2 text-yellow-600 dark:text-yellow-400">長期的な行動指針</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  単純な即時報酬だけでなく、複雑なタスク構造や長期的な目標達成に対する報酬を表現することができ、
                  短期的な報酬最大化に陥りがちな強化学習の問題を緩和します。
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
                <h4 className="text-lg font-medium mb-2 text-yellow-600 dark:text-yellow-400">知識の転移</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  報酬機械の構造は新しい環境やタスクにも転用可能であり、過去の経験から得た知識を効率的に再利用することができます。
                  これにより、新しい状況への素早い適応が可能になります。
                </p>
              </div>
            </div>
            
            <p className="highlight">
              報酬機械は、低レベルの学習コンポーネントと高レベルの計画コンポーネントを繋ぐ重要な役割を果たしています。
              環境から得られる複雑な報酬信号を構造化し、意味のある形で表現することで、効率的な学習と適応を促進します。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">反復的学習プロセス</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              本システムの中核となるのは、継続的な反復プロセスです。この反復サイクルによって、エージェントは環境との相互作用から学習し、
              能力を向上させていきます。反復プロセスは以下のステップで構成されています：
            </p>
            
            <ol className="list-decimal pl-6 space-y-4 my-4">
              <li>
                <strong>環境探索フェーズ</strong>：内発的好奇心モジュール（ICM）によって生成される好奇心報酬を最大化するように、
                エージェントは未知の環境を探索します。この過程で、環境についての新しい知識を獲得します。
              </li>
              <li>
                <strong>オペレータ発見フェーズ</strong>：探索で得られたデータを分析し、環境に対して有効な操作（オペレータ）を
                自動的に発見します。これらのオペレータは環境の変化を引き起こす行動のパターンを表します。
              </li>
              <li>
                <strong>計画生成フェーズ</strong>：発見されたオペレータを用いて、目標達成のための計画を生成します。
                この計画は想像空間内でシミュレートされ、実行可能性が検証されます。
              </li>
              <li>
                <strong>政策学習フェーズ</strong>：生成された計画を実行するための低レベル政策（policy）を学習します。
                これにより、抽象的な計画を具体的な行動系列に変換できるようになります。
              </li>
              <li>
                <strong>評価と再反復フェーズ</strong>：学習した政策の性能を評価し、必要に応じて上記のプロセスを再度反復します。
                反復を重ねるごとに、システムの知識と能力は向上していきます。
              </li>
            </ol>
            
            <p>
              このような継続的な反復プロセスにより、システムは新しい環境や課題に柔軟に適応できるようになります。
              特に、オープンワールドのような予測不可能な状況においても、反復的な学習を通じて効果的に対応することが可能です。
            </p>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 my-6">
              <figure className="text-center">
                <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg mb-4">
                  <div className="mx-auto max-w-2xl">
                    {/* 反復プロセスの図 */}
                    <div className="flex flex-col">
                      <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-lg mb-4">
                        <div className="font-semibold">環境探索</div>
                      </div>
                      <div className="text-2xl mb-2">↓</div>
                      <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-lg mb-4">
                        <div className="font-semibold">オペレータ発見</div>
                      </div>
                      <div className="text-2xl mb-2">↓</div>
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg mb-4">
                        <div className="font-semibold">計画生成</div>
                      </div>
                      <div className="text-2xl mb-2">↓</div>
                      <div className="bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg mb-4">
                        <div className="font-semibold">政策学習</div>
                      </div>
                      <div className="text-2xl mb-2">↓</div>
                      <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg mb-4">
                        <div className="font-semibold">評価と再反復</div>
                      </div>
                      <div className="text-2xl mb-2">↓</div>
                      <div className="text-lg font-semibold">(サイクル継続)</div>
                    </div>
                  </div>
                </div>
                <figcaption className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  図2: 反復的学習プロセスのフロー
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        <div className="flex justify-between mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
          <div>
            <a href="/background" className="text-blue-600 dark:text-blue-400 hover:underline">
              ← 背景
            </a>
          </div>
          <div>
            <a href="/experiments" className="text-blue-600 dark:text-blue-400 hover:underline">
              実験 →
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}