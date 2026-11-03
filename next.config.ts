import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: '/a-uniq', destination: '/sobre', permanent: true }];
  },
};


export default nextConfig;
