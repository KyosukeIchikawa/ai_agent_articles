/**
 * Curiosity-Driven Imagination 論文データ
 */

/**
 * @typedef {import('../types').Paper} Paper
 */

/**
 * 論文データ
 * @type {Paper}
 */
const paper = {
  id: 'curiosity-driven-imagination',
  title: 'Curiosity-Driven Imagination',
  subtitle: '好奇心駆動型想像力によるオープンワールド適応',
  description: 'ロボットが未知の環境に素早く適応するための革新的アプローチ',
  publishedYear: 2022,
  authors: ['Jane Doe', 'John Smith'],
  categories: ['ロボット工学', '強化学習', 'シンボリックAI', '認知ロボティクス'],
  sections: [
    {
      id: 'background',
      title: '背景',
      path: '/papers/curiosity-driven-imagination/background'
    },
    {
      id: 'related-work',
      title: '関連研究',
      path: '/papers/curiosity-driven-imagination/related-work'
    },
    {
      id: 'method',
      title: '提案手法',
      path: '/papers/curiosity-driven-imagination/method'
    },
    {
      id: 'experiments',
      title: '実験',
      path: '/papers/curiosity-driven-imagination/experiments'
    },
    {
      id: 'results',
      title: '結果',
      path: '/papers/curiosity-driven-imagination/results'
    },
    {
      id: 'discussion',
      title: '考察',
      path: '/papers/curiosity-driven-imagination/discussion'
    },
    {
      id: 'conclusion',
      title: '結論',
      path: '/papers/curiosity-driven-imagination/conclusion'
    },
    {
      id: 'references',
      title: '参考文献',
      path: '/papers/curiosity-driven-imagination/references'
    }
  ]
};

export default paper;