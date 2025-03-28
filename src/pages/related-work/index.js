import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

export default function RelatedWork() {
  return (
    <Layout title="関連研究">
      <div className="space-y-8">
        <header>
          <h1 className="text-3xl font-bold mb-4 text-gray-800">2. 関連研究</h1>
          <p className="text-lg text-gray-600">
            Curiosity-Driven Imaginationに関連する既存研究の概要
          </p>
        </header>
        <section>
          <div className="prose max-w-none">
            <p>
              本研究は複数の研究分野の交点に位置しています。ここでは、内発的好奇心、想像力ベースの計画、記号的計画と強化学習の統合など、
              関連する主要な研究領域を紹介します。
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 my-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">2.1 内発的好奇心（Intrinsic Curiosity）</h3>
              <p className="text-gray-700">
                内発的好奇心は、外部報酬が希少または存在しない環境での探索を促進するメカニズムです。
                以下の研究がこの分野に重要な貢献をしています：
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-700">
                <li>
                  <strong>Pathak et al. (2017)</strong>: 予測誤差を内発的報酬として使用する好奇心駆動型探索手法を提案。
                  環境との相互作用から学習した順モデルの予測誤差を最大化することで、エージェントが未知の状態を探索するよう促します。
                </li>
                <li>
                  <strong>Burda et al. (2019)</strong>: Random Network Distillation (RND)を用いた好奇心ベースの探索手法を提案。
                  固定されたランダムネットワークの出力を予測するモデルの誤差を内発的報酬として使用します。
                </li>
                <li>
                  <strong>Houthooft et al. (2016)</strong>: VIME (Variational Information Maximizing Exploration)を提案。
                  情報理論の観点から、ベイジアンニューラルネットワークを使った情報獲得に基づく探索を行います。
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 my-6">
              <h3 className="text-xl font-semibold mb-3 text-green-600">2.2 想像力ベースの計画（Imagination-based Planning）</h3>
              <p className="text-gray-700">
                想像力ベースの計画は、エージェントが内部モデルを使って行動結果をシミュレーションし、実際の実行前に計画を評価・改善する手法です：
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-700">
                <li>
                  <strong>Hamrick et al. (2017)</strong>: モデルベース強化学習における想像力の役割を探求。
                  内部モデルを使った仮想的なロールアウトによる決定木探索を実装しています。
                </li>
                <li>
                  <strong>Racanière et al. (2017)</strong>: Imagination-Augmented Agents (I2A)を提案。
                  内部モデルを使って複数の可能な未来をシミュレーションし、それらを統合して行動選択を行います。
                </li>
                <li>
                  <strong>Xie et al. (2021)</strong>: 階層的強化学習に想像力ベースの計画を導入。
                  サブタスク間の依存関係を考慮した効率的な計画生成を可能にしています。
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 my-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-600">2.3 ハイブリッドアプローチ（記号的計画と強化学習の統合）</h3>
              <p className="text-gray-700">
                記号的計画と強化学習を統合するハイブリッドアプローチは、両者の長所を組み合わせる試みです：
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-700">
                <li>
                  <strong>Garnelo et al. (2016)</strong>: 深層強化学習と記号的推論を統合する枠組みを提案。
                  高レベルのタスク計画と低レベルの行動制御を分離しつつ協調させています。
                </li>
                <li>
                  <strong>Yang et al. (2018)</strong>: PEORL (Planning-Execution-Observation Reinforcement Learning)フレームワークを提案。
                  記号的知識を報酬形成に組み込み、効率的な探索を実現しています。
                </li>
                <li>
                  <strong>Groshev et al. (2018)</strong>: 訓練データから学習した関数近似器を使って古典的計画のヒューリスティックを改善する手法を提案。
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 my-6">
              <h3 className="text-xl font-semibold mb-3 text-red-600">2.4 報酬機械（Reward Machines）</h3>
              <p className="text-gray-700">
                報酬機械は、複雑な報酬構造を形式的に表現するためのフレームワークです：
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-700">
                <li>
                  <strong>Icarte et al. (2018)</strong>: 強化学習における報酬機械の概念を導入。
                  有限状態オートマトンを使って時間的に拡張された報酬関数を表現しています。
                </li>
                <li>
                  <strong>Toro Icarte et al. (2022)</strong>: 報酬機械の学習と使用を統合したフレームワークを提案。
                  環境との相互作用から報酬機械を自動的に導出します。
                </li>
              </ul>
            </div>
            
            <p className="highlight">
              本研究は、これらの関連研究の知見を統合し発展させることで、未知の環境への素早い適応という課題に取り組んでいます。
              特に、内発的好奇心による効率的な探索と、想像空間での計画評価を組み合わせた点が革新的です。
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
            <Link href="/method/" className="text-blue-600 hover:underline">
              提案手法 →
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}