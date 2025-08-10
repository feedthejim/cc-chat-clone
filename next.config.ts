import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    cacheComponents: true,
    clientSegmentCache: true,
    clientParamParsing: true,
    routerBFCache: true,
  },
};

export default nextConfig;
