import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ TypeScript: fail build on type errors
  typescript: {
    ignoreBuildErrors: false,
  },

  // ✅ ESLint: fail build on lint errors
  eslint: {
    ignoreDuringBuilds: false,
  },

  // (optional but recommended)
  reactStrictMode: true,
};

export default nextConfig;

