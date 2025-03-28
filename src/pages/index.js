import Layout from '../components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="ホーム">
      <div className="space-y-8">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-gray-800">Curiosity-Driven Imagination</h1>
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-600">オープンワールド適応のための計画オペレータの発見と関連政策の学習</h2>
          <p className="text-lg text-gray-700">
            ICRA 2025で発表された論文「Curiosity-Driven Imagination: Discovering Plan Operators and Learning Associated Policies for Open-World Adaptation」の解説
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">概要</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-700 mb-4">
              本研究は、ロボットが未知の環境や変化する状況に素早く適応するための新しいアプローチ「Curiosity-Driven Imagination (CDI)」を提案しています。
              CDIフレームワークは<span className="term">内発的好奇心（Intrinsic Curiosity）</span>と<span className="term">想像力ベースの計画（Imagination-based Planning）</span>を組み合わせ、
              環境の効率的な探索と柔軟な適応を可能にします。
            </p>
            <p className="text-gray-700">
              従来のロボット学習・計画手法と異なり、CDIは好奇心駆動型の探索によって新しい行動プリミティブ（オペレータ）を自律的に発見し、
              想像空間でシミュレーションすることで、実世界での試行錯誤を最小限に抑えながら効率的に学習できます。
              実験結果は、CDIが環境変化に対する適応能力と学習効率の両面で既存手法を上回ることを示しています。
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">主要な貢献</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">統合アーキテクチャ</h3>
              <p className="text-gray-700">
                低レベルの学習ベースコンポーネントと高レベルの記号的計画コンポーネントを統合した革新的なハイブリッドアーキテクチャを提案。
                両アプローチの長所を組み合わせることで、より効果的な意思決定を実現します。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-red-600">新規性対応能力</h3>
              <p className="text-gray-700">
                従来のアプローチでは困難であった新規の課題や状況に素早く適応する能力を実証。
                逐次的な新規性注入（Sequential Novelty Injections）を含む実験で、提案手法の優位性を検証しています。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-green-600">データ効率</h3>
              <p className="text-gray-700">
                好奇心駆動型の探索と想像空間でのシミュレーションにより、実世界での試行錯誤を最小限に抑えながら
                効率的に学習する方法を実現。サンプル効率の大幅な向上を達成しました。
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">研究の位置づけ</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <p className="text-gray-700 mb-4">
              本研究は以下の研究分野の交差点に位置しています：
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><span className="font-semibold">強化学習</span>：内発的好奇心と自己教師あり学習</li>
              <li><span className="font-semibold">記号的AI</span>：行動オペレータの発見と記号的計画</li>
              <li><span className="font-semibold">認知ロボティクス</span>：想像力を模倣した内部モデルの活用</li>
            </ul>
          </div>
        </section>

        <section className="mt-8">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-gray-800">このサイトについて</h2>
            <p className="text-gray-700">
              このウェブサイトでは、「Curiosity-Driven Imagination: Discovering Plan Operators and Learning Associated Policies for Open-World Adaptation」論文の内容を
              視覚的に分かりやすく解説します。論文の理解を深めるための図解や解説を提供し、複雑な概念をできるだけ平易に説明することを目指しています。
            </p>
          </div>
        </section>

        <div className="flex justify-between mt-10 pt-6 border-t border-gray-200">
          <div>
            {/* トップページなので前のページへのリンクはなし */}
          </div>
          <div>
            <Link href="/background/" className="text-blue-600 hover:underline">
              次のセクション：1 Background
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}