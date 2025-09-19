import type { NextConfig } from 'next';

const repo = process.env.NODE_ENV === 'production' ? '/testnextjs' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: repo,
  assetPrefix: `${repo}/`,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
