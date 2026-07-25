import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ZijianZhang",
  assetPrefix: "/ZijianZhang/",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
