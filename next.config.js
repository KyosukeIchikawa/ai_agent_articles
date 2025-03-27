/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/curiosity-driven-imagination' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/curiosity-driven-imagination/' : '',
  trailingSlash: true,
};

module.exports = nextConfig;