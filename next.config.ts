import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Keep old WordPress URLs working (SEO + shared links).
  async redirects() {
    return [
      { source: "/portafolio-de-servicios", destination: "/servicios", permanent: true },
      { source: "/como-asociarme", destination: "/asociarme", permanent: true },
      { source: "/servicio-al-cliente", destination: "/atencion", permanent: true },
      { source: "/simuladores", destination: "/simulador", permanent: true },
      { source: "/consulta-de-saldos", destination: "/atencion", permanent: true },
      { source: "/descarga-de-formularios", destination: "/asociarme", permanent: true },
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
