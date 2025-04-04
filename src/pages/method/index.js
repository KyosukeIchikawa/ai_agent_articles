import React from 'react';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import SectionHeader from '../../components/SectionHeader';
import SectionContainer from '../../components/SectionContainer';
import AlgorithmBlock from '../../components/AlgorithmBlock';
import MathEquation from '../../components/MathEquation';

export default function Method() {
  return (
    <Layout title="提案手法">
      <div className="space-y-8">
        <SectionHeader
          number="4"
          title="Proposed Method"
          subtitle="Curiosity-Driven Imaginationの手法詳細"
        />
        <section>
          <div className="prose max-w-none">
            <p>
              本研究では、オープンワールド環境における未知の状況に適応するエージェントを開発するため、
              記号的計画と強化学習を統合したハイブリッドアプローチを提案しています。提案手法である
              Curiosity-Driven Imagination（好奇心駆動型想像力）は、内発的好奇心による探索と
              想像空間での計画を組み合わせることで、新しい操作（オペレータ）を効率的に発見し、
              対応する方策を学習します。
            </p>
            
            <div className="my-8">
              <div className="bg-primary-light p-4 rounded-lg border border-primary/20">
                <h3 className="text-xl font-semibold text-primary">本手法の主な特徴</h3>
                <ul className="list-disc pl-6 space-y-2 mt-3 text-text">
                  <li>
                    <strong className="text-primary">Numerical Planning Operator Learner</strong>（数値計画オペレータ学習機）：
                    記号的遷移から抽象的なオペレータを学習し、LTL（Linear Temporal Logic）報酬機械を生成
                  </li>
                  <li>
                    <strong className="text-primary">ICM（Intrinsic Curiosity Module）駆動型探索</strong>：
                    新規な記号的遷移に向けてエージェントを導く内発的好奇心メカニズム
                  </li>
                  <li>
                    <strong className="text-primary">Bi-Level Model（二層モデル）</strong>：
                    低レベルのニューラルネットワークモデル（確率的遷移を学習）と高レベルの記号的計画モデル（抽象的遷移をオペレータとして捉える）の二層からなる環境モデル
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary-light to-primary-light/30 p-6 rounded-lg shadow-sm border border-primary/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-primary border-b border-primary/20 pb-2">4.1 Bi-Level Curiosity Algorithm</h3>
              <p className="text-text">
                提案するBi-Level Curiosityアルゴリズムは、連続的（低レベル）と記号的（高レベル）の二つの層で環境を理解するアプローチです。
                このアルゴリズムは次のように機能します：
              </p>
              
              <div className="mt-4 space-y-4">
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-semibold text-primary">連続的層（ニューラルネットワーク）</h4>
                  <p className="text-text">
                    ICM（Intrinsic Curiosity Module）を用いて内発的好奇心を生成し、エージェントを未知の状態へと導きます。
                    この層は低レベルの状態表現と行動を扱い、環境との直接的なインタラクションを担当します。
                    特に確率的な遷移を学習することで、不確実な環境でのロバスト性を高めています。
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded shadow-sm">
                  <h4 className="font-semibold text-primary">記号的層（計画ドメイン）</h4>
                  <p className="text-text">
                    連続的層から抽象化された記号的遷移を使って、想像空間（imaginary space）での計画を生成します。
                    この想像空間では、エージェントは様々な行動シーケンスをシミュレーションし、最も効果的な計画を見つけ出します。
                    抽象的なオペレータを活用することで、未経験の状況にも対応可能な一般化能力を実現しています。
                  </p>
                </div>
              </div>
              
              <p className="mt-4 text-text">
                この二層アプローチの利点は、ICMによる効率的な探索と記号的計画による構造化された行動生成を組み合わせることで、
                新しい環境への適応を加速できる点にあります。エージェントは好奇心に導かれて新しい状態を探索しながら、
                同時に記号的知識を活用して目標達成のための効率的な計画を構築します。
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-secondary-light to-green-50 p-6 rounded-lg shadow-sm border border-secondary/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-secondary border-b border-secondary/20 pb-2">4.2 想像空間での計画生成</h3>
              <p className="text-text">
                本手法における重要な要素の一つが、「想像空間」（Imaginary Space）での計画生成です。
                エージェントは記号的知識を用いて仮想的な計画を生成し、実際の環境で試行する前に評価します。
              </p>
              
              <div className="mt-4 space-y-3">
                <h4 className="font-semibold text-secondary">記号的計画の概要</h4>
                <p className="text-text">
                  記号的計画は、PDDL（Planning Domain Description Language）などの形式言語を用いて記述されるドメイン<span className="text-sm">（論文中のσ）</span>
                  に基づいています。各状態は述語論理で表現され、オペレータ（行動）は前提条件と効果によって定義されます。
                </p>
                
                <h4 className="font-semibold text-secondary mt-3">想像的計画生成プロセス</h4>
                <ol className="list-decimal pl-6 space-y-2 text-text">
                  <li>
                    記号的遷移<span className="text-sm">（論文中のT<sub>k</sub>）</span>から抽象的なオペレータを学習
                  </li>
                  <li>
                    学習したオペレータを用いて想像的ドメイン<span className="text-sm">（論文中のσ<sub>im</sub>）</span>を構築
                  </li>
                  <li>
                    想像的ドメイン上で計画を生成<span className="text-sm">（論文中のP<sub>im</sub>）</span>
                  </li>
                  <li>
                    生成された計画を報酬機械として変換し、実際の環境での学習に活用
                  </li>
                </ol>
                
                <p className="bg-secondary-light p-3 rounded mt-3 text-text">
                  想像空間での計画生成の主な利点は、実際に試行錯誤せずとも様々な行動シーケンスを評価できる点です。
                  これにより、探索空間を大幅に削減し、効率的な学習を実現しています。
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-accent-light to-red-50 p-6 rounded-lg shadow-sm border border-accent/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-accent border-b border-accent/20 pb-2">4.3 報酬機械（Reward Machine）の生成</h3>
              <p className="text-text">
                報酬機械（Reward Machine）は、時間的に拡張された報酬関数を形式的に表現するためのフレームワークです。
                本研究では、想像空間で生成された計画を線形時相論理（LTL: Linear Temporal Logic）の式に変換し、
                これを報酬機械として使用しています。
              </p>
              
              <div className="mt-4">
                <h4 className="font-semibold text-accent">報酬機械の構造</h4>
                <p className="text-text">
                  報酬機械は有限状態オートマトンとして表現され、
                  環境の状態遷移に応じて異なる報酬を提供します。論文中では以下のように定義されています：
                </p>
                
                <div className="bg-white p-4 rounded my-3">
                  <p className="font-mono text-sm text-text">
                    報酬機械 R<sub>m</sub>は、エージェントが想像的計画P<sub>im</sub>内のチェックポイントに到達したときに
                    報酬を提供し、環境内での進捗を導きます。
                  </p>
                </div>
                
                <h4 className="font-semibold text-accent mt-4">LTL式への変換</h4>
                <p className="text-text">
                  想像的計画P<sub>im</sub>は、次のようにLTL式に変換されます：
                </p>
                
                <div className="bg-white p-4 rounded my-3">
                  <p className="font-mono text-sm text-text">
                    計画内の各ステップを述語の連続として表現し、これらが順序通りに満たされるべきことを
                    時相演算子（Eventually, Next）を用いて指定します。
                  </p>
                </div>
                
                <p className="mt-3 text-text">
                  この報酬機械には2つの重要な役割があります：
                </p>
                <ol className="list-decimal pl-6 space-y-2 mt-2 text-text">
                  <li>
                    <strong className="text-accent">進捗ガイド</strong>：想像的計画内のチェックポイントに到達するたびに報酬を提供し、
                    エージェントをゴールへと導く
                  </li>
                  <li>
                    <strong className="text-accent">探索促進</strong>：ICMからの内発的報酬と組み合わせることで、
                    未知の状態への探索と目標達成のバランスを取る
                  </li>
                </ol>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-primary-light to-secondary-light p-6 rounded-lg shadow-sm border border-primary/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-primary border-b border-primary/20 pb-2">4.4 Intrinsic Curiosity Module (ICM)</h3>
              <p className="text-text">
                本研究では、効率的な探索を実現するために Pathak らによって提案された
                Intrinsic Curiosity Module（ICM: 内発的好奇心モジュール）を採用しています。
                ICMは、エージェントの行動の結果を予測する能力に基づいて内発的報酬を生成します。
              </p>
              
              <div className="mt-4 space-y-3">
                <h4 className="font-semibold text-primary">ICMの構成要素</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h5 className="font-medium text-primary">順モデル（Forward Model）</h5>
                    <p className="text-sm text-text">
                      現在の状態s<sub>t</sub>と行動a<sub>t</sub>から次の状態ŝ<sub>t+1</sub>を予測します。
                      予測誤差||ŝ<sub>t+1</sub> - s̃<sub>t+1</sub>||<sup>2</sup>が内発的報酬R<sub>intrinsic</sub>
                      として使用されます。
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <h5 className="font-medium text-primary">逆モデル（Inverse Model）</h5>
                    <p className="text-sm text-text">
                      現在の状態s<sub>t</sub>と次の状態s<sub>t+1</sub>から、その遷移を引き起こした行動â<sub>t</sub>を予測します。
                      このモデルにより、環境のダイナミクスに関連する特徴表現が学習されます。
                    </p>
                  </div>
                </div>
                
                <h4 className="font-semibold text-primary mt-4">ICMの利点</h4>
                <ul className="list-disc pl-6 space-y-2 text-text">
                  <li>
                    <strong className="text-primary">希少報酬問題の解決</strong>：外部報酬が少ない環境でも効率的な探索が可能
                  </li>
                  <li>
                    <strong className="text-primary">新規状態への誘導</strong>：未知の状態ほど予測誤差が大きくなるため、
                    エージェントは自然と新しい状態を探索するよう動機づけられる
                  </li>
                  <li>
                    <strong className="text-primary">ノイズへの頑健性</strong>：逆モデルを通じて環境のダイナミクスに無関係な特徴を除外
                  </li>
                </ul>
                
                <p className="bg-primary-light p-3 rounded mt-3 text-text">
                  ICMによる内発的報酬と、報酬機械による外部報酬を組み合わせることで、
                  エージェントは新しい環境への適応と目標達成の両方を効率的に行うことができます。
                  特に、未知のオペレータの発見において、この組み合わせは大きな効果を発揮します。
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-secondary-light to-accent-light p-6 rounded-lg shadow-sm border border-secondary/20 my-6">
              <h3 className="text-xl font-semibold mb-3 text-secondary border-b border-secondary/20 pb-2">4.5 アルゴリズムの詳細</h3>
              <p className="text-text">
                論文で提案されている Curiosity-Driven Imagination のアルゴリズムは大きく分けて3つのフェーズで構成されています：
              </p>
              
              <div className="bg-white p-4 rounded my-4 shadow-sm">
                <h4 className="font-semibold text-secondary">アルゴリズムの主要フェーズ</h4>
                <ol className="list-decimal pl-6 space-y-2 mt-2 text-text">
                  <li>
                    <strong className="text-secondary">想像空間での計画と報酬機械生成</strong>：
                    記号的知識を用いて想像空間で計画を生成し、それをLTL形式の報酬機械に変換します。
                  </li>
                  <li>
                    <strong className="text-secondary">環境探索とICM報酬計算</strong>：
                    実際の環境で行動し、ICMからの好奇心報酬を計算して方策を更新します。
                  </li>
                  <li>
                    <strong className="text-secondary">記号的オペレータの学習</strong>：
                    新しい遷移T<sub>k</sub>から記号的オペレータを学習し、想像的ドメインσ<sub>im</sub>とICMネットワークを更新します。
                  </li>
                </ol>
              </div>
              
              <p className="text-text">
                アルゴリズムの大まかな流れは次のとおりです：
              </p>
              
              <AlgorithmBlock
                title="Curiosity-Driven Imagination Algorithm"
                number="1"
                caption="提案手法の主要アルゴリズム"
                lines={[
                  "Input: 初期状態 s₀, 環境 E, 学習率 α, 割引率 γ",
                  "Output: 発見された新しいオペレータ o_discovery",
                  "",
                  "// 初期化",
                  "ICM ← 内発的好奇心モジュールを初期化",
                  "π ← 方策ネットワークを初期化",
                  "σ_im ← 想像的ドメインを初期化",
                  "T_k ← 記号的遷移セットを初期化",
                  "",
                  "while not converged do",
                  "    // フェーズ1: 想像空間での計画と報酬機械生成",
                  "    P_im ← GeneratePlan(σ_im, s_current, goal)",
                  "    R_m ← ConvertToRewardMachine(P_im)",
                  "",
                  "    // フェーズ2: 環境探索とICM報酬計算",
                  "    for each episode do",
                  "        s_t ← 現在の環境状態",
                  "        a_t ← π(s_t)  // 方策から行動を選択",
                  "        s_t+1, r_ext ← E(s_t, a_t)  // 環境から次状態と外部報酬を取得",
                  "        r_int ← ICM.ComputeReward(s_t, a_t, s_t+1)  // 内発的報酬の計算",
                  "        r_rm ← R_m.GetReward(s_t+1)  // 報酬機械からの報酬",
                  "        r_total ← r_ext + βr_int + λr_rm  // 総報酬の計算",
                  "        π ← UpdatePolicy(π, s_t, a_t, r_total, s_t+1, α, γ)  // 方策の更新",
                  "        if IsNovelTransition(s_t, a_t, s_t+1) then",
                  "            T_k ← T_k ∪ {(s_t, a_t, s_t+1)}  // 新しい遷移を記録",
                  "        end if",
                  "    end for",
                  "",
                  "    // フェーズ3: 記号的オペレータの学習と更新",
                  "    if |T_k| > threshold then",
                  "        o_new ← LearnOperator(T_k)  // 新しい遷移から記号的オペレータを学習",
                  "        σ_im ← UpdateDomain(σ_im, o_new)  // 想像的ドメインの更新",
                  "        ICM ← UpdateICM(ICM, T_k)  // ICMの更新",
                  "        o_discovery ← o_discovery ∪ {o_new}  // 発見したオペレータを記録",
                  "        T_k ← ∅  // 遷移セットをリセット",
                  "    end if",
                  "end while",
                  "",
                  "return o_discovery"
                ]}
              />
              
              <p className="text-text">
                このアルゴリズムの特筆すべき点は、好奇心駆動型探索と記号的計画の統合により、
                環境内の新しいオペレータを効率的に発見できる点です。特に、環境の変化によって
                既存の計画が実行不可能になった場合、このアプローチは新しい解決策を
                素早く見つけ出す能力を発揮します。
              </p>
            </div>
          </div>
        </section>
        
        <Navigation 
          paperId="curiosity-driven-imagination"
          currentSectionId="method" 
          customLabels={{
            prev: "関連研究",
            next: "実験"
          }}
        />
      </div>
    </Layout>
  );
}