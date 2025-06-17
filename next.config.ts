import type { NextConfig } from "next";


import withBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzerConfigured = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  compress: true,
  swcMinify: true,
};

export default withBundleAnalyzerConfigured(nextConfig);

