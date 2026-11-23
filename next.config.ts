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
      // Eski Turkce icgoru ve haber adresleri -> yeni Ingilizce slug
      { source: "/icgoruler/dijital-marka-insa-etmenin-ekonomisi", destination: "/insights/the-economics-of-building-a-digital-brand", statusCode: 301 },
      { source: "/insights/dijital-marka-insa-etmenin-ekonomisi", destination: "/insights/the-economics-of-building-a-digital-brand", statusCode: 301 },
      { source: "/icgoruler/yapay-zeka-is-operasyonlarini-nasil-degistiriyor", destination: "/insights/where-ai-is-changing-business-operations", statusCode: 301 },
      { source: "/insights/yapay-zeka-is-operasyonlarini-nasil-degistiriyor", destination: "/insights/where-ai-is-changing-business-operations", statusCode: 301 },
      { source: "/icgoruler/dijital-ticaretin-donusumu", destination: "/insights/the-transformation-of-digital-commerce", statusCode: 301 },
      { source: "/insights/dijital-ticaretin-donusumu", destination: "/insights/the-transformation-of-digital-commerce", statusCode: 301 },
      { source: "/icgoruler/yeni-nesil-finansal-urunlerde-guven-insa-etmek", destination: "/insights/building-trust-in-next-generation-financial-products", statusCode: 301 },
      { source: "/insights/yeni-nesil-finansal-urunlerde-guven-insa-etmek", destination: "/insights/building-trust-in-next-generation-financial-products", statusCode: 301 },
      { source: "/icgoruler/yeni-bir-girisim-lansmanindan-dersler", destination: "/insights/lessons-from-launching-a-new-venture", statusCode: 301 },
      { source: "/insights/yeni-bir-girisim-lansmanindan-dersler", destination: "/insights/lessons-from-launching-a-new-venture", statusCode: 301 },
      { source: "/icgoruler/teknoloji-ile-degisen-tuketici-davranisi", destination: "/insights/how-technology-is-changing-consumer-behaviour", statusCode: 301 },
      { source: "/insights/teknoloji-ile-degisen-tuketici-davranisi", destination: "/insights/how-technology-is-changing-consumer-behaviour", statusCode: 301 },
      { source: "/basin-merkezi/secbird-duyurusu", destination: "/newsroom/prizoma-announces-secbird-a-privacy-focused-email-service", statusCode: 301 },
      { source: "/newsroom/secbird-duyurusu", destination: "/newsroom/prizoma-announces-secbird-a-privacy-focused-email-service", statusCode: 301 },
      { source: "/basin-merkezi/ahenk-tanitimi", destination: "/newsroom/prizomas-fifth-brand-ahenk-is-in-development", statusCode: 301 },
      { source: "/newsroom/ahenk-tanitimi", destination: "/newsroom/prizomas-fifth-brand-ahenk-is-in-development", statusCode: 301 },
      { source: "/basin-merkezi/traders-yeni-bir-girisim-icin-calismalara-basladi", destination: "/newsroom/prizoma-has-begun-work-on-a-new-venture", statusCode: 301 },
      { source: "/newsroom/traders-yeni-bir-girisim-icin-calismalara-basladi", destination: "/newsroom/prizoma-has-begun-work-on-a-new-venture", statusCode: 301 },
      { source: "/basin-merkezi/orca-platformunu-genisletiyor", destination: "/newsroom/wolf-club-expands-its-platform", statusCode: 301 },
      { source: "/newsroom/orca-platformunu-genisletiyor", destination: "/newsroom/wolf-club-expands-its-platform", statusCode: 301 },
      { source: "/basin-merkezi/kriptobeyan-yeni-bir-faza-giriyor", destination: "/newsroom/kriptobeyan-enters-a-new-phase", statusCode: 301 },
      { source: "/newsroom/kriptobeyan-yeni-bir-faza-giriyor", destination: "/newsroom/kriptobeyan-enters-a-new-phase", statusCode: 301 },
      { source: "/basin-merkezi/zesta-ozel-siparis-pazaryerini-baslatti", destination: "/newsroom/zesta-art-design-launches-custom-order-marketplace", statusCode: 301 },
      { source: "/newsroom/zesta-ozel-siparis-pazaryerini-baslatti", destination: "/newsroom/zesta-art-design-launches-custom-order-marketplace", statusCode: 301 },
      // Eski ?kategori= parametresi
      { source: "/iletisim", has: [{ type: "query", key: "kategori", value: "ortaklik" }], destination: "/contact?category=partnership", statusCode: 301 },
      { source: "/contact", has: [{ type: "query", key: "kategori", value: "ortaklik" }], destination: "/contact?category=partnership", statusCode: 301 },
      { source: "/iletisim", has: [{ type: "query", key: "kategori", value: "girisim" }], destination: "/contact?category=venture", statusCode: 301 },
      { source: "/contact", has: [{ type: "query", key: "kategori", value: "girisim" }], destination: "/contact?category=venture", statusCode: 301 },
      { source: "/iletisim", has: [{ type: "query", key: "kategori", value: "basin" }], destination: "/contact?category=press", statusCode: 301 },
      { source: "/contact", has: [{ type: "query", key: "kategori", value: "basin" }], destination: "/contact?category=press", statusCode: 301 },
      { source: "/iletisim", has: [{ type: "query", key: "kategori", value: "genel" }], destination: "/contact?category=general", statusCode: 301 },
      { source: "/contact", has: [{ type: "query", key: "kategori", value: "genel" }], destination: "/contact?category=general", statusCode: 301 },
      // Eski Turkce yollar -> Ingilizce yollar
      { source: "/hakkimizda", destination: "/about", statusCode: 301 },
      { source: "/markalar", destination: "/brands", statusCode: 301 },
      { source: "/markalar/:slug", destination: "/brands/:slug", statusCode: 301 },
      { source: "/girisimler", destination: "/ventures", statusCode: 301 },
      { source: "/icgoruler", destination: "/insights", statusCode: 301 },
      { source: "/icgoruler/:slug", destination: "/insights/:slug", statusCode: 301 },
      { source: "/basin-merkezi", destination: "/newsroom", statusCode: 301 },
      { source: "/basin-merkezi/:slug", destination: "/newsroom/:slug", statusCode: 301 },
      { source: "/kariyer", destination: "/careers", statusCode: 301 },
      { source: "/iletisim", destination: "/contact", statusCode: 301 },
      { source: "/gizlilik-politikasi", destination: "/privacy-policy", statusCode: 301 },
      { source: "/cerez-politikasi", destination: "/cookie-policy", statusCode: 301 },
      { source: "/kvkk", destination: "/data-protection", statusCode: 301 },
      { source: "/site-haritasi", destination: "/site-map", statusCode: 301 },
      { source: "/yonetim", destination: "/admin", statusCode: 301 },
      { source: "/yonetim/:path*", destination: "/admin/:path*", statusCode: 301 },
      // Daha eski kisa yollar
      { source: "/insight/:slug", destination: "/insights/:slug", statusCode: 301 },
      { source: "/news/:slug", destination: "/newsroom/:slug", statusCode: 301 },
      { source: "/privacy", destination: "/privacy-policy", statusCode: 301 },
      { source: "/cookies", destination: "/cookie-policy", statusCode: 301 },
    ];
  },
};

export default nextConfig;
