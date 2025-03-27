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
                対して高い内発的報酬を与えることで、エ