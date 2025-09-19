const repo = process.env.NODE_ENV === 'production' ? '/testnextjs' : '';

const nextConfig = {
  output: 'export',
  basePath: repo,
  assetPrefix: `${repo}/`,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
