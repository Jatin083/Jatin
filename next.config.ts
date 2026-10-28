import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve project screenshots as AVIF/WebP at the size each screen needs.
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Only bundle the icons and motion helpers actually imported.
    optimizePackageImports: ["react-icons/si", "motion/react"],
  },
  async headers() {
    return [
      {
        // Fonts, video and images never change between deploys without a rename.
        source: "/:dir(font|video|img)/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
