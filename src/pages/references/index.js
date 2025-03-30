import React from 'react';
import Layout from '../../components/Layout';
import Navigation from '../../components/Navigation';
import ReferenceSection from '../../components/ReferenceSection';
import SectionHeader from '../../components/SectionHeader';
import SectionContainer from '../../components/SectionContainer';
import { getPaperById } from '../../data/papers';

export default function References() {
  const paper = getPaperById('curiosity-driven-imagination');
  
  // 参考文献データを新しい形式に変換
  const referenceSections = [
    {
      title: "主要参考文献",
      bgGradient: "from-primary-light to-secondary-light",
      borderColor: "border-primary/20",
      references: [
        {
          id: "1",
          title: "Curiosity-driven exploration by self-supervised prediction",
          authors: ["Pathak, D.", "Agrawal, P.", "Efros, A. A.", "Darrell, T."],
          year: "2017",
          venue: "International Conference on Machine Learning (ICML)",
          url: "https://arxiv.org/abs/1705.05363"
        },
        {
          id: "2",
          title: "Dream to control: Learning behaviors by latent imagination",
          authors: ["Hafner, D.", "Lillicrap, T.", "Ba, J.", "Norouzi, M."],
          year: "2020",
          venue: "International Conference on Learning Representations (ICLR)",
          url: "https://arxiv.org/abs/1912.01603"
        },
        {
          id: "3",
          title: "World models",
          authors: ["Ha, D.", "Schmidhuber, J."],
          year: "2018",
          venue: "Neural Computation, 31(2), 274-306",
          url: "https://arxiv.org/abs/1803.10122"
        },
        {
          id: "4",
          title: "Imagination-augmented agents for deep reinforcement learning",
          authors: ["Racanière, S.", "Weber, T.", "Reichert, D.", "Buesing, L.", "Guez, A.", "Rezende, D. J.", "Pascanu, R."],
          year: "2017",
          venue: "Advances in Neural Information Processing Systems (NeurIPS)",
          url: "https://arxiv.org/abs/1707.06203"
        },
        {
          id: "5",
          title: "Integrated task and motion planning in belief space",
          authors: ["Kaelbling, L. P.", "Lozano-Pérez, T."],
          year: "2013",
          venue: "The International Journal of Robotics Research, 32(9-10), 1194-1227",
          doi: "10.1177/0278364913484072"
        }
      ]
    },
    {
      title: "関連研究：内発的好奇心",
      bgGradient: "from-secondary-light to-primary-light",
      borderColor: "border-secondary/20",
      references: [
        {
          id: "6",
          title: "Exploration by random network distillation",
          authors: ["Burda, Y.", "Edwards, H.", "Storkey, A.", "Klimov, O."],
          year: "2019",
          venue: "International Conference on Learning Representations (ICLR)",
          url: "https://arxiv.org/abs/1810.12894"
        },
        {
          id: "7",
          title: "Episodic curiosity through reachability",
          authors: ["Savinov, N.", "Raichuk, A.", "Marinier, R.", "Vincent, D.", "Pollefeys, M.", "Lillicrap, T.", "Gelly, S."],
          year: "2019",
          venue: "International Conference on Learning Representations (ICLR)",
          url: "https://arxiv.org/abs/1810.02274"
        }
      ]
    },
    {
      title: "関連研究：報酬機械と記号的計画",
      bgGradient: "from-accent-light to-primary-light",
      borderColor: "border-accent/20",
      references: [
        {
          id: "8",
          title: "Using reward machines for high-level task specification and decomposition in reinforcement learning",
          authors: ["Icarte, R. T.", "Klassen, T.", "Valenzano, R.", "McIlraith, S."],
          year: "2018",
          venue: "International Conference on Machine Learning (ICML)",
          url: "https://proceedings.mlr.press/v80/icarte18a.html"
        },
        {
          id: "9",
          title: "Mastering the game of Go with deep neural networks and tree search",
          authors: ["Silver, D.", "Huang, A.", "Maddison, C. J.", "Guez, A.", "Sifre, L.", "Van Den Driessche, G.", "Hassabis, D."],
          year: "2016",
          venue: "Nature, 529(7587), 484-489",
          doi: "10.1038/nature16961"
        }
      ]
    },
    {
      title: "関連研究：オープンワールド適応",
      bgGradient: "from-primary-light to-secondary-light",
      borderColor: "border-primary/20",
      references: [
        {
          id: "10",
          title: "Model-agnostic meta-learning for fast adaptation of deep networks",
          authors: ["Finn, C.", "Abbeel, P.", "Levine, S."],
          year: "2017",
          venue: "International Conference on Machine Learning (ICML)",
          url: "https://arxiv.org/abs/1703.03400"
        },
        {
          id: "11",
          title: "Sim-to-real transfer of robotic control with dynamics randomization",
          authors: ["Peng, X. B.", "Andrychowicz, M.", "Zaremba, W.", "Abbeel, P."],
          year: "2018",
          venue: "IEEE International Conference on Robotics and Automation (ICRA)",
          url: "https://arxiv.org/abs/1710.06537"
        }
      ]
    }
  ];

  return (
    <Layout title="参考文献">
      <div className="space-y-8">
        <SectionHeader 
          number="9"
          title="References"
          subtitle="Curiosity-Driven Imaginationの研究に関連する文献リスト"
        />

        <SectionContainer>
          <div className="prose max-w-none">
            <p>
              本研究と関連する重要な先行研究と参考文献を以下にまとめています。
              これらの文献は、好奇心駆動型学習、想像力ベースの計画、オープンワールド適応などの分野における重要な貢献を含んでいます。
            </p>
            
            {referenceSections.map((section, index) => (
              <div key={index} className="my-6">
                <ReferenceSection
                  title={section.title}
                  references={section.references}
                  bgClass={`bg-gradient-to-r ${section.bgGradient}`}
                  className="border border-primary/20"
                />
              </div>
            ))}
            
            <SectionContainer
              bgGradient="from-primary-light to-secondary-light"
              borderColor="border-primary"
            >
              <p className="text-text">
                これらの参考文献は、本研究の基礎となる理論や手法を理解するのに役立ちます。
                特に、内発的好奇心の概念[1, 6, 7]、想像力ベースの行動計画[2, 3, 4]、タスクと動作の統合計画[5, 8]、
                そして環境変化への適応[10, 11]に関する文献は、「Curiosity-Driven Imagination」アプローチの
                理論的背景を深く理解するための重要な資料です。
              </p>
            </SectionContainer>
          </div>
        </SectionContainer>
        
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