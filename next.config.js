/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/ai_agent_articles' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/ai_agent_articles/' : '',
  trailingSlash: true,
};

module.exports = nextConfig;