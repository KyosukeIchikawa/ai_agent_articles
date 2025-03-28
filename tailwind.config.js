/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: false, // ダークモードを無効化
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        secondary: '#2ecc71',
        accent: '#e74c3c',
      },
      fontFamily: {
        sans: ['Roboto', 'Noto Sans JP', 'sans-serif'],
        mono: ['Source Code Pro', 'monospace'],
      },
    },
  },
  plugins: [],
}