import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SWC kompilyatorunu söndürüb Babel rejimini işə salırıq ki, Windows bloklamasın
  experimental: {
    esmExternals: false,
  },
};

export default nextConfig;