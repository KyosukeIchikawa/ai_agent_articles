import React from 'react';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import ReferenceSection from '../../components/ReferenceSection';

export default function References() {
  // 参考文献データの定義
  const referenceSections = [
    {
      title: "主要参考文献",
      colorTheme: "primary",
      fromColor: "primary-light",
      toColor: "secondary-light",
      references: [
        {
          index: "[1]",
          authors: "Pathak, D., Agrawal, P., Efros, A. A., & Darrell, T. (2017).",
          title: "Curiosity-driven exploration by self-supervised prediction.",
          publication: "In International Conference on Machine Learning (ICML) (pp. 2778-2787).",
          url: "https://arxiv.org/abs/1705.05363"
        },
        {
          index: "[2]",
          authors: "Hafner, D., Lillicrap, T., Ba, J., & Norouzi, M. (2020).",
          title: "Dream to control: Learning behaviors by latent imagination.",
          publication: "In International Conference on Learning Representations (ICLR).",
          url: "https://arxiv.org/abs/1912.01603"
        },
        {
          index: "[3]",
          authors: "Ha, D., & Schmidhuber, J. (2018).",
          title: "World models.",
          publication: "Neural Computation, 31(2), 274-306.",
          url: "https://arxiv.org/abs/1803.10122"
        },
        {
          index: "[4]",
          authors: "Racanière, S., Weber, T., Reichert, D., Buesing, L., Guez, A., Rezende, D. J., ... & Pascanu, R. (2017).",
          title: "Imagination-augmented agents for deep reinforcement learning.",
          publication: "In Advances in Neural Information Processing Systems (NeurIPS) (pp. 5690-5701).",
          url: "https://arxiv.org/abs/1707.06203"
        },
        {
          index: "[5]",
          authors: "Kaelbling, L. P., & Lozano-Pérez, T. (2013).",
          title: "Integrated task and motion planning in belief space.",
          publication: "The International Journal of Robotics Research, 32(9-10), 1194-1227.",
          url: "https://doi.org/10.1177/0278364913484072"
        }
      ]
    },
    {
      title: "関連研究：内発的好奇心",
      colorTheme: "secondary",
      fromColor: "secondary-light",
      toColor: "primary-light",
      references: [
        {
          index: "[6]",
          authors: "Burda, Y., Edwards, H., Storkey, A., & Klimov, O. (2019).",
          title: "Exploration by random network distillation.",
          publication: "In International Conference on Learning Representations (ICLR).",
          url: "https://arxiv.org/abs/1810.12894"
        },
        {
          index: "[7]",
          authors: "Savinov, N., Raichuk, A., Marinier, R., Vincent, D., Pollefeys, M., Lillicrap, T., & Gelly, S. (2019).",
          title: "Episodic curiosity through reachability.",
          publication: "In International Conference on Learning Representations (ICLR).",
          url: "https://arxiv.org/abs/1810.02274"
        }
      ]
    },
    {
      title: "関連研究：報酬機械と記号的計画",
      colorTheme: "accent",
      fromColor: "accent-light",
      toColor: "primary-light",
      references: [
        {
          index: "[8]",
          authors: "Icarte, R. T., Klassen, T., Valenzano, R., & McIlraith, S. (2018).",
          title: "Using reward machines for high-level task specification and decomposition in reinforcement learning.",
          publication: "In International Conference on Machine Learning (ICML) (pp. 2107-2116).",
          url: "https://proceedings.mlr.press/v80/icarte18a.html"
        },
        {
          index: "[9]",
          authors: "Silver, D., Huang, A., Maddison, C. J., Guez, A., Sifre, L., Van Den Driessche, G., ... & Hassabis, D. (2016).",
          title: "Mastering the game of Go with deep neural networks and tree search.",
          publication: "Nature, 529(7587), 484-489.",
          url: "https://doi.org/10.1038/nature16961"
        }
      ]
    },
    {
      title: "関連研究：オープンワールド適応",
      colorTheme: "primary",
      fromColor: "primary-light",
      toColor: "secondary-light",
      references: [
        {
          index: "[10]",
          authors: "Finn, C., Abbeel, P., & Levine, S. (2017).",
          title: "Model-agnostic meta-learning for fast adaptation of deep networks.",
          publication: "In International Conference on Machine Learning (ICML) (pp. 1126-1135).",
          url: "https://arxiv.org/abs/1703.03400"
        },
        {
          index: "[11]",
          authors: "Peng, X. B., Andrychowicz, M., Zaremba, W., & Abbeel, P. (2018).",
          title: "Sim-to-real transfer of robotic control with dynamics randomization.",
          publication: "In IEEE International Conference on Robotics and Automation (ICRA) (pp. 1-8).",
          url: "https://arxiv.org/abs/1710.06537"
        }
      ]
    }
  ];

  return (
    <Layout title="参考文献">
      <div className="space-y-8">
        <header>
          <h1 className="text-3xl font-bold mb-4 text-primary">参考文献</h1>
          <p className="text-lg text-primary">
            Curiosity-Driven Imaginationの研究に関連する文献リスト
          </p>
        </header>
        <section>
          <div className="prose max-w-none">
            <p>
              本研究と関連する重要な先行研究と参考文献を以下にまとめています。
              これらの文献は、好奇心駆動型学習、想像力ベースの計画、オープンワールド適応などの分野における重要な貢献を含んでいます。
            </p>
            
            {referenceSections.map((section, index) => (
              <ReferenceSection
                key={index}
                title={section.title}
                references={section.references}
                colorTheme={section.colorTheme}
                fromColor={section.fromColor}
                toColor={section.toColor}
              />
            ))}
            
            <div className="bg-gradient-to-r from-primary-light to-secondary-light border-l-4 border-primary p-4 rounded">
              <p className="text-text">
                これらの参考文献は、本研究の基礎となる理論や手法を理解するのに役立ちます。
                特に、内発的好奇心の概念[1, 6, 7]、想像力ベースの行動計画[2, 3, 4]、タスクと動作の統合計画[5, 8]、
                そして環境変化への適応[10, 11]に関する文献は、「Curiosity-Driven Imagination」アプローチの
                理論的背景を深く理解するための重要な資料です。
              </p>
            </div>
          </div>
        </section>
        
        <Navigation 
          paperId="curiosity-driven-imagination"
          currentSectionId="references" 
          customLabels={{
            prev: "結論",
            next: "トップページ"
          }}
          nextPath="/"
        />
      </div>
    </Layout>
  );
}