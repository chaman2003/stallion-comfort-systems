import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Performance optimizations for Next.js 15
  compress: true,
  productionBrowserSourceMaps: false,
  
  // Faster package imports
  experimental: {
    optimizePackageImports: ["@/components", "@/lib", "framer-motion"],
  },
  
  // Disable static generation for faster dev server startup
  staticPageGenerationTimeout: 30,
};

export default nextConfig;
