/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/ai_visual_arxiv' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ai_visual_arxiv/' : '',
  trailingSlash: true,
};

module.exports = nextConfig;