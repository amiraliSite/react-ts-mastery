import type { NextConfig } from "next";

const isPagesBuild = process.env.GH_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isPagesBuild
    ? {
        output: "export" as const,
        basePath: "/react-ts-mastery",
        assetPrefix: "/react-ts-mastery",
        images: { unoptimized: true },
        trailingSlash: true,
      }
    : {
        output: "standalone",
      }),
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
