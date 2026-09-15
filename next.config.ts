import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self' data:",
      "connect-src 'self'",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // Site yollari Turkceye tasindi (2026-09-15) - eski Ingilizce yollara
      // giden linkler/yer imleri kirilmasin diye kalici yonlendirme.
      { source: "/about", destination: "/hakkimizda", permanent: true },
      { source: "/brands", destination: "/markalar", permanent: true },
      { source: "/brands/:slug", destination: "/markalar/:slug", permanent: true },
      { source: "/ventures", destination: "/girisimler", permanent: true },
      { source: "/insights", destination: "/icgoruler", permanent: true },
      { source: "/insights/:slug", destination: "/icgoruler/:slug", permanent: true },
      { source: "/insight/:slug", destination: "/icgoruler/:slug", permanent: true },
      { source: "/newsroom", destination: "/basin-merkezi", permanent: true },
      { source: "/newsroom/:slug", destination: "/basin-merkezi/:slug", permanent: true },
      { source: "/news/:slug", destination: "/basin-merkezi/:slug", permanent: true },
      { source: "/careers", destination: "/kariyer", permanent: true },
      { source: "/contact", destination: "/iletisim", permanent: true },
      { source: "/privacy", destination: "/gizlilik-politikasi", permanent: true },
      { source: "/cookies", destination: "/cerez-politikasi", permanent: true },
    ];
  },
};

export default nextConfig;
