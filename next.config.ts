import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // AVIF first (≈30-50% smaller than WebP), WebP as fallback.
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "motion", "gsap"],
  },
  // Keep old WordPress URLs working (SEO + shared links).
  async redirects() {
    return [
      { source: "/portafolio-de-servicios", destination: "/servicios", permanent: true },
      { source: "/como-asociarme", destination: "/asociarme", permanent: true },
      { source: "/servicio-al-cliente", destination: "/atencion", permanent: true },
      { source: "/simuladores", destination: "/simulador", permanent: true },
      { source: "/consulta-de-saldos", destination: "/atencion", permanent: true },
      { source: "/descarga-de-formularios", destination: "/asociarme", permanent: true },
      { source: "/mantenimiento", destination: "/", permanent: true },
      { source: "/sample-page", destination: "/", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
