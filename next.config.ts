import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/testnextjs" : undefined,
  assetPrefix: isProd ? "/testnextjs/" : undefined,
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
