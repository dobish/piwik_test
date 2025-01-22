import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/piwik_test/' : '',
  basePath: isProd ? '/piwik_test' : '',
  output: 'export',
  transpilePackages: ['@piwikpro/next-piwik-pro']
};

export default nextConfig;
