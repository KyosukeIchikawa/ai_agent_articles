import Layout from '../../components/Layout';
import Link from 'next/link';

export default function Method() {
  return (
    <Layout title="提案手法">
      <div className="space-y-8">
        <header>
          <h1 className="text-3xl font-bold mb-4 text-primary">4. 提案手法</h1>
          <p className="text-lg text-primary/80">
            好奇心駆動型の想像力を用いた計画演算子の発見と関連政策の学習
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-primary/20 pb-2">4.1 アプローチ概要: Bi-Model アーキテクチャ</h2>
          <div className="prose max-w-none">
            <p>
              本研究では、オープンワールド環境における適応能力を高めるために、<span className="term font-semibold text-primary">Bi-Model（バイモデル）</span>と呼ばれる
              ハイブリッドな二層モデル駆動型学習アプローチを提案します。このアプローチは、記号的計画と強化学習の強みを組み合わせることで、
              未知の状況に効率的に適応する能力を実現します。
            </p>

            <div className="bg-gradient-to-r from-primary/5 to-blue-50 p-6 rounded-lg shadow-sm border border-primary/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Bi-Model アーキテクチャの構成要素</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium mb-2 text-primary/80">1. 内発的好奇心モジュール (ICM)</h4>
                  <p className="text-gray-700">
                    <span className="term font-semibold text-primary/80">Intrinsic Curiosity Module</span>は、エージェントの探索を
                    駆動する好奇心ベースのメカニズムです。予測誤差を内部報酬として利用し、未知の状態空間の効率的な探索を促進します。
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-2 text-primary/80">2. 計画報酬機械 (PRM)</h4>
                  <p className="text-gray-700">
                    <span className="term font-semibold text-primary/80">Planning Reward Machine</span>は、高レベルの計画目標を
                    低レベルの報酬信号に変換するメカニズムです。これにより、計画の各ステップに対する報酬が生成され、学習が誘導されます。
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-4">
              このアーキテクチャの核心は、<span className="font-semibold text-accent">新規性発見</span>と<span className="font-semibold text-accent">適応学習</span>の
              二つのプロセスを統合する点にあります。新しい環境特性に遭遇すると、システムは以下のプロセスを実行します：
            </p>

            <div className="bg-gradient-to-r from-accent/5 to-accent/10 p-6 rounded-lg shadow-sm border border-accent/20 my-6">
              <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                <li>
                  <strong className="text-accent">計画段階</strong>: 既知のオペレータを用いてタスク達成のための計画を生成します。
                </li>
                <li>
                  <strong className="text-accent">実行とモニタリング</strong>: 計画を実行し、予期しない結果や失敗を検出します。
                </li>
                <li>
                  <strong className="text-accent">好奇心駆動探索</strong>: 計画の失敗点から、ICMを用いて新しい状態や遷移を探索します。
                </li>
                <li>
                  <strong className="text-accent">適応学習</strong>: 新しい遷移に対する政策をPRMの報酬シグナルを用いて学習します。
                </li>
                <li>
                  <strong className="text-accent">演算子抽出</strong>: 学習した政策から新しい記号的演算子を抽象化します。
                </li>
              </ol>
            </div>

            <p className="bg-gradient-to-r from-primary/10 to-blue-100 border-l-4 border-primary p-4 rounded">
              Bi-Modelアプローチの特徴は、記号的知識と連続的制御の両方を同時に学習・更新できる点にあります。
              これにより、サンプル効率と適応能力のトレードオフを効果的に解決しています。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-primary/20 pb-2">4.2 ハイブリッド計画・学習アルゴリズム</h2>
          <div className="prose max-w-none">
            <p>
              システムの全体的なワークフローは、<span className="term font-semibold text-primary">Hybrid Planning & Learning</span>
              アルゴリズムとして実装されています。このアルゴリズムは、計画と学習のサイクルを以下のステップで実行します：
            </p>

            <div className="bg-gradient-to-r from-blue-50 to-primary/5 p-6 rounded-lg shadow-sm border border-primary/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Algorithm 1: Hybrid Planning & Learning</h3>
              <div className="bg-gray-50 p-4 rounded-md font-mono text-sm">
                <p><span className="text-blue-600">Input:</span> Planning Task 𝒯</p>
                <p><span className="text-blue-600">Output:</span> Updated Planning Task</p>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>𝒫 ← Plan(𝑇) <span className="text-gray-500">// 𝒫 = ⟨𝑜₁, 𝑜₂, …, 𝑜|𝒫|⟩</span></li>
                  <li><span className="text-primary">for</span> 𝑜ᵢ ∈ 𝒫 <span className="text-primary">do</span></li>
                  <li>  success ← Execute(𝑜ᵢ)</li>
                  <li>  <span className="text-primary">if</span> ¬success <span className="text-primary">then</span></li>
                  <li>    𝒯~, 𝑜ₑ, 𝑠ₑ ← UpdateProblem(𝒯) <span className="text-gray-500">// Stretch IPT</span></li>
                  <li>    𝑜ₙₑw ← Curiosity-Driven Imagination(𝒯~, 𝑜ₑ, 𝑠ₑ)</li>
                  <li>    <span className="text-primary">return</span> Hybrid Planning & Learning(𝒯~)</li>
                  <li>  <span className="text-primary">end if</span></li>
                  <li><span className="text-primary">end for</span></li>
                  <li><span className="text-primary">return</span> 𝒯</li>
                </ol>
              </div>
            </div>

            <p>
              このアルゴリズムの重要なポイントは、計画の実行中に失敗が検出された場合、
              <span className="font-semibold text-accent">Curiosity-Driven Imagination</span>プロセスを呼び出して
              新しい演算子を発見・学習する点です。これにより、従来のアプローチでは対応できなかった
              未知の状況に適応する能力を獲得します。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-primary/20 pb-2">4.3 好奇心駆動型想像アルゴリズム</h2>
          <div className="prose max-w-none">
            <p>
              <span className="term font-semibold text-primary">Curiosity-Driven Imagination</span>アルゴリズムは、
              未知の遷移を探索し、その遷移を実現する政策を学習するプロセスを実装しています。
              このアルゴリズムは、「想像力」という概念を計算的に実現するものであり、
              未知の可能性を探索し、学習することを可能にします。
            </p>

            <div className="bg-gradient-to-r from-secondary/5 to-green-50 p-6 rounded-lg shadow-sm border border-secondary/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-secondary">Algorithm 2: Curiosity-Driven Imagination</h3>
              <div className="bg-gray-50 p-4 rounded-md font-mono text-sm">
                <p><span className="text-blue-600">Input:</span> Modified Task 𝒯~, Failed Operator 𝑜ₑ, Target State 𝑠ₑ</p>
                <p><span className="text-blue-600">Output:</span> New Operator 𝑜ₙₑw</p>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Domain σᵢₘ populated with ℰ and ℱ</li>
                  <li>Planning Task 𝑇 = ⟨ℰ, ℱ, 𝒪, 𝑠₀, 𝑔⟩</li>
                  <li><span className="text-secondary">while</span> !done <span className="text-secondary">do</span></li>
                  <li>  𝑠~ ← current state</li>
                  <li>  𝑎 ← ICM.Select(π, 𝑠~, β)</li>
                  <li>  𝑠~′, 𝑟, done ← Step(𝑠~, 𝑎)</li>
                  <li>  UpdateICM(𝑠~, 𝑎, 𝑠~′)</li>
                  <li>  UpdatePRM(𝑠~, 𝑎, 𝑠~′, 𝑇)</li>
                  <li>  π ← π.Update(𝑠~, 𝑎, 𝑠~′, 𝑟)</li>
                  <li>  <span className="text-secondary">if</span> max steps reached <span className="text-secondary">then</span></li>
                  <li>    done ← true</li>
                  <li>  <span className="text-secondary">end if</span></li>
                  <li>  𝑠~ ← 𝑠~′</li>
                  <li><span className="text-secondary">end while</span></li>
                  <li><span className="text-secondary">if</span> success(π, 𝒯~) > η <span className="text-secondary">then</span></li>
                  <li>  𝑥ₐₚₚₗᵧᵢₙg ← ⟨𝐼, π, β⟩</li>
                  <li>  𝑜ₙₑw ← Abstract(𝑥ₐₚₚₗᵧᵢₙg)</li>
                  <li>  <span className="text-secondary">return</span> 𝑜ₙₑw</li>
                  <li><span className="text-secondary">end if</span></li>
                  <li>UpdateCost(⟨𝑜₁, 𝑜₂, …, 𝑜|𝒫|⟩)</li>
                  <li>UpdateICM</li>
                </ol>
              </div>
            </div>

            <p>
              このアルゴリズムの核心的な部分は以下の要素で構成されています：
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-gradient-to-br from-secondary/5 to-green-50 p-6 rounded-lg shadow-sm border border-secondary/20">
                <h4 className="text-lg font-semibold mb-2 text-secondary">内発的好奇心による探索</h4>
                <p className="text-gray-700">
                  ICMは、現在の状態と政策に基づいて行動を選択します。好奇心パラメータβにより、
                  探索（high β）と活用（low β）のバランスを調整します。環境の予測誤差が大きい状態ほど、
                  高い内部報酬が与えられ、未知の状態への探索が促進されます。
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-secondary/5 p-6 rounded-lg shadow-sm border border-secondary/20">
                <h4 className="text-lg font-semibold mb-2 text-secondary">計画報酬機械による誘導</h4>
                <p className="text-gray-700">
                  PRMは、目標状態への接近度に基づいて報酬信号を生成します。これにより、
                  単なるランダム探索ではなく、目標指向の探索が実現され、効率的に新しい遷移を
                  発見することが可能になります。
                </p>
              </div>
            </div>

            <p className="bg-gradient-to-r from-secondary/10 to-green-100 border-l-4 border-secondary p-4 rounded">
              好奇心駆動型想像アルゴリズムの重要な特性は、探索（curiosity）と目標指向（imagination）の
              バランスを取りながら学習を進める点です。これにより、効率的なサンプル収集と
              目標達成のための適応的な政策学習が同時に実現されています。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-primary border-b-2 border-primary/20 pb-2">4.4 演算子抽象化とドメイン拡張</h2>
          <div className="prose max-w-none">
            <p>
              学習した政策から新しい記号的演算子を抽出するプロセスは、連続的な行動空間と
              記号的計画空間をブリッジする重要な要素です。このプロセスは以下のステップで構成されています：
            </p>

            <div className="bg-gradient-to-r from-accent/5 to-accent/10 p-6 rounded-lg shadow-sm border border-accent/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-accent">演算子抽象化プロセス</h3>
              <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                <li>
                  <strong className="text-accent">遷移サンプリング</strong>:
                  学習した政策を用いて、開始状態から目標状態への遷移を複数回サンプリングします。
                </li>
                <li>
                  <strong className="text-accent">前提条件の識別</strong>:
                  成功した遷移の開始状態から共通の述語（Boolean または数値的）を抽出し、これを演算子の前提条件として定義します。
                </li>
                <li>
                  <strong className="text-accent">効果の識別</strong>:
                  遷移前後の状態変化から、演算子の効果を抽出します。これは、値が変化した述語の集合として定義されます。
                </li>
                <li>
                  <strong className="text-accent">コスト計算</strong>:
                  演算子の実行コストは、遷移を達成するために必要なステップ数の平均値として計算されます。
                </li>
                <li>
                  <strong className="text-accent">演算子の統合</strong>:
                  類似の効果を持つ演算子は、前提条件の一貫性を保ちながら統合され、最も低コストの演算子が選択されます。
                </li>
              </ol>
            </div>

            <p>
              この抽象化プロセスにより、連続的な制御政策を記号的な計画演算子として表現することが可能になります。
              これにより、以下の利点が得られます：
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-gradient-to-br from-primary/5 to-blue-50 p-6 rounded-lg shadow-sm border border-primary/20">
                <h4 className="text-lg font-semibold mb-2 text-primary">知識の再利用</h4>
                <p className="text-gray-700">
                  抽象化された演算子は、将来の類似タスクに再利用できます。これにより、
                  すでに学習した知識を新しい状況に転用することが可能になり、
                  学習効率が向上します。
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-primary/5 p-6 rounded-lg shadow-sm border border-primary/20">
                <h4 className="text-lg font-semibold mb-2 text-primary">プランニングの拡張</h4>
                <p className="text-gray-700">
                  新しく抽象化された演算子を計画ドメインに追加することで、
                  エージェントの行動能力が拡張されます。これにより、
                  以前は解決できなかった問題に対しても計画を生成できるようになります。
                </p>
              </div>
            </div>

            <p className="bg-gradient-to-r from-primary/10 to-blue-100 border-l-4 border-primary p-4 rounded">
              演算子抽象化プロセスは、「想像力」の概念を計算的に実現する鍵となる要素です。
              学習した経験を記号的知識として抽象化し、それを将来の計画に活用することで、
              エージェントは経験から学び、適応する能力を獲得します。
            </p>
          </div>
        </section>

        <div className="flex justify-between mt-10 pt-6 border-t border-primary/10">
          <div>
            <Link href="/related-work/">
              <a className="text-primary hover:text-primary/70 hover:underline flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                関連研究
              </a>
            </Link>
          </div>
          <div>
            <Link href="/experiments/">
              <a className="text-primary hover:text-primary/70 hover:underline flex items-center">
                実験
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