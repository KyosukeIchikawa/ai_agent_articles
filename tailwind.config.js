/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',      // 青系 - ロボティクス・AIを表現
        secondary: '#2ecc71',    // 緑系 - 好奇心・探索を表現
        accent: '#e74c3c',       // 赤系 - 重要概念の強調
        background: '#f5f5f5',   // 明るいグレー - 読みやすさを確保
        text: '#333333',         // 濃いグレー - コントラスト確保
        'primary-light': '#e8f4fd',
        'secondary-light': '#e8f8f1',
        'accent-light': '#fceae8',
      },
      fontFamily: {
        sans: ['Roboto', 'Noto Sans JP', 'sans-serif'],
        mono: ['Source Code Pro', 'monospace'],
      },
    },
  },
  plugins: [],
}