import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  generateBuildId: async () => {
    return 'mi-portafolio-v1';
  },
};

export default nextConfig;
