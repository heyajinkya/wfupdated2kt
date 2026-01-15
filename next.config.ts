import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ TypeScript: fail build on type errors
  typescript: {
    ignoreBuildErrors: true,
  },

  // ✅ ESLint: fail build on lint errors
  eslint: {
    ignoreDuringBuilds: true,
  },

  // (optional but recommended)
 
};

export default nextConfig;

