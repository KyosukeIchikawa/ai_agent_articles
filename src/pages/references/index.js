import Layout from '../../components/Layout'
import Navigation from '../../components/Navigation';

export default function References() {
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
            
            <div className="bg-gradient-to-r from-primary-light to-secondary-light p-6 rounded-lg shadow-sm border border-primary/20 my-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">主要参考文献</h3>
              
              <ul className="space-y-6 list-none pl-0">
                <li className="pb-4 border-b border-primary/20">
                  <div className="flex flex-col">
                    <span className="text-text font-medium">[1] Pathak, D., Agrawal, P., Efros, A. A., & Darrell, T. (2017).</span>
                    <span className="font-semibold text-primary">Curiosity-driven exploration by self-supervised prediction.</span>
                    <span className="text-text/80">In International Conference on Machine Learning (ICML) (pp. 2778-2787).</span>
                    <a href="https://arxiv.org/abs/1705.05363" target="_blank" rel="noopener noreferrer" className="text-sm text-primary mt-1 hover:text-primary-800 hover:underline inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      https://arxiv.org/abs/1705.05363
                    </a>
                  </div>
                </li>
                
                <li className="pb-4 border-b border-primary/20">
                  <div className="flex flex-col">
                    <span className="text-text font-medium">[2] Hafner, D., Lillicrap, T., Ba, J., & Norouzi, M. (2020).</span>
                    <span className="font-semibold text-primary">Dream to control: Learning behaviors by latent imagination.</span>
                    <span className="text-text/80">In International Conference on Learning Representations (ICLR).</span>
                    <a href="https://arxiv.org/abs/1912.01603" target="_blank" rel="noopener noreferrer" className="text-sm text-primary mt-1 hover:text-primary-800 hover:underline inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      https://arxiv.org/abs/1912.01603
                    </a>
                  </div>
                </li>
                
                <li className="pb-4 border-b border-primary/20">
                  <div className="flex flex-col">
                    <span className="text-text font-medium">[3] Ha, D., & Schmidhuber, J. (2018).</span>
                    <span className="font-semibold text-primary">World models.</span>
                    <span className="text-text/80">Neural Computation, 31(2), 274-306.</span>
                    <a href="https://arxiv.org/abs/1803.10122" target="_blank" rel="noopener noreferrer" className="text-sm text-primary mt-1 hover:text-primary-800 hover:underline inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      https://arxiv.org/abs/1803.10122
                    </a>
                  </div>
                </li>
                
                <li className="pb-4 border-b border-primary/20">
                  <div className="flex flex-col">
                    <span className="text-text font-medium">[4] Racanière, S., Weber, T., Reichert, D., Buesing, L., Guez, A., Rezende, D. J., ... & Pascanu, R. (2017).</span>
                    <span className="font-semibold text-primary">Imagination-augmented agents for deep reinforcement learning.</span>
                    <span className="text-text/80">In Advances in Neural Information Processing Systems (NeurIPS) (pp. 5690-5701).</span>
                    <a href="https://arxiv.org/abs/1707.06203" target="_blank" rel="noopener noreferrer" className="text-sm text-primary mt-1 hover:text-primary-800 hover:underline inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      https://arxiv.org/abs/1707.06203
                    </a>
                  </div>
                </li>
                
                <li className="pb-4 border-b border-primary/20">
                  <div className="flex flex-col">
                    <span className="text-text font-medium">[5] Kaelbling, L. P., & Lozano-Pérez, T. (2013).</span>
                    <span className="font-semibold text-primary">Integrated task and motion planning in belief space.</span>
                    <span className="text-text/80">The International Journal of Robotics Research, 32(9-10), 1194-1227.</span>
                    <a href="https://doi.org/10.1177/0278364913484072" target="_blank" rel="noopener noreferrer" className="text-sm text-primary mt-1 hover:text-primary-800 hover:underline inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      https://doi.org/10.1177/0278364913484072
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-secondary-light to-primary-light p-6 rounded-lg shadow-sm border border-secondary/20 my-6">
              <h3 className="text-xl font-semibold mb-4 text-secondary">関連研究：内発的好奇心</h3>
              
              <ul className="space-y-6 list-none pl-0">
                <li className="pb-4 border-b border-secondary/20">
                  <div className="flex flex-col">
                    <span className="text-text font-medium">[6] Burda, Y., Edwards, H., Storkey, A., & Klimov, O. (2019).</span>
                    <span className="font-semibold text-secondary">Exploration by random network distillation.</span>
                    <span className="text-text/80">In International Conference on Learning Representations (ICLR).</span>
                    <a href="https://arxiv.org/abs/1810.12894" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary mt-1 hover:text-secondary-800 hover:underline inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      https://arxiv.org/abs/1810.12894
                    </a>
                  </div>
                </li>
                
                <li className="pb-4 border-b border-secondary/20">
                  <div className="flex flex-col">
                    <span className="text-text font-medium">[7] Savinov, N., Raichuk, A., Marinier, R., Vincent, D., Pollefeys, M., Lillicrap, T., & Gelly, S. (2019).</span>
                    <span className="font-semibold text-secondary">Episodic curiosity through reachability.</span>
                    <span className="text-text/80">In International Conference on Learning Representations (ICLR).</span>
                    <a href="https://arxiv.org/abs/1810.02274" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary mt-1 hover:text-secondary-800 hover:underline inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      https://arxiv.org/abs/1810.02274
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-accent-light to-primary-light p-6 rounded-lg shadow-sm border border-accent/20 my-6">
              <h3 className="text-xl font-semibold mb-4 text-accent">関連研究：報酬機械と記号的計画</h3>
              
              <ul className="space-y-6 list-none pl-0">
                <li className="pb-4 border-b border-accent/20">
                  <div className="flex flex-col">
                    <span className="text-text font-medium">[8] Icarte, R. T., Klassen, T., Valenzano, R., & McIlraith, S. (2018).</span>
                    <span className="font-semibold text-accent">Using reward machines for high-level task specification and decomposition in reinforcement learning.</span>
                    <span className="text-text/80">In International Conference on Machine Learning (ICML) (pp. 2107-2116).</span>
                    <a href="https://proceedings.mlr.press/v80/icarte18a.html" target="_blank" rel="noopener noreferrer" className="text-sm text-accent mt-1 hover:text-accent-800 hover:underline inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      https://proceedings.mlr.press/v80/icarte18a.html
                    </a>
                  </div>
                </li>
                
                <li className="pb-4 border-b border-accent/20">
                  <div className="flex flex-col">
                    <span className="text-text font-medium">[9] Silver, D., Huang, A., Maddison, C. J., Guez, A., Sifre, L., Van Den Driessche, G., ... & Hassabis, D. (2016).</span>
                    <span className="font-semibold text-accent">Mastering the game of Go with deep neural networks and tree search.</span>
                    <span className="text-text/80">Nature, 529(7587), 484-489.</span>
                    <a href="https://doi.org/10.1038/nature16961" target="_blank" rel="noopener noreferrer" className="text-sm text-accent mt-1 hover:text-accent-800 hover:underline inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      https://doi.org/10.1038/nature16961
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-primary-light to-secondary-light p-6 rounded-lg shadow-sm border border-primary/20 my-6">
              <h3 className="text-xl font-semibold mb-4 text-primary">関連研究：オープンワールド適応</h3>
              
              <ul className="space-y-6 list-none pl-0">
                <li className="pb-4 border-b border-primary/20">
                  <div className="flex flex-col">
                    <span className="text-text font-medium">[10] Finn, C., Abbeel, P., & Levine, S. (2017).</span>
                    <span className="font-semibold text-primary">Model-agnostic meta-learning for fast adaptation of deep networks.</span>
                    <span className="text-text/80">In International Conference on Machine Learning (ICML) (pp. 1126-1135).</span>
                    <a href="https://arxiv.org/abs/1703.03400" target="_blank" rel="noopener noreferrer" className="text-sm text-primary mt-1 hover:text-primary-800 hover:underline inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      https://arxiv.org/abs/1703.03400
                    </a>
                  </div>
                </li>
                
                <li className="pb-4 border-b border-primary/20">
                  <div className="flex flex-col">
                    <span className="text-text font-medium">[11] Peng, X. B., Andrychowicz, M., Zaremba, W., & Abbeel, P. (2018).</span>
                    <span className="font-semibold text-primary">Sim-to-real transfer of robotic control with dynamics randomization.</span>
                    <span className="text-text/80">In IEEE International Conference on Robotics and Automation (ICRA) (pp. 1-8).</span>
                    <a href="https://arxiv.org/abs/1710.06537" target="_blank" rel="noopener noreferrer" className="text-sm text-primary mt-1 hover:text-primary-800 hover:underline inline-flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      https://arxiv.org/abs/1710.06537
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            
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