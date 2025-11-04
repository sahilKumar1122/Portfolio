import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Disable image optimization to prevent memory issues
  },
  // Disable webpack cache to reduce memory usage
  webpack: (config) => {
    config.cache = false;
    return config;
  },
};

export default nextConfig;
