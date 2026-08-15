import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/move-mate",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
