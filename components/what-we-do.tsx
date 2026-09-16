import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";

function MarkDiscover() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
      <circle cx="16" cy="16" r="2" fill="currentColor" />
      <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="1.3" opacity="0.6" />
      <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.3" opacity="0.25" />
    </svg>
  );
}

function MarkBuild() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
      <rect x="5" y="5" width="10" height="10" stroke="currentColor" strokeWidth="1.3" />
      <rect x="17" y="17" width="10" height="10" stroke="currentColor" strokeWidth="1.3" />
      <rect x="17" y="5" width="10" height="10" stroke="currentColor" strokeWidth="1.3" opacity="0.35" />
    </svg>
  );
}

function MarkLaunch() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
      <rect x="5" y="21" width="6" height="6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M11 21 25 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M16 7h9v9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MarkOperate() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
      <rect x="4" y="4" width="24" height="24" stroke="currentColor" strokeWidth="1.3" opacity="0.35" />
      <rect
        x="11"
        y="11"
        width="10"
        height="10"
        stroke="currentColor"
        strokeWidth="1.3"
        transform="rotate(45 16 16)"
      />
    </svg>
  );
}

function MarkExpand() {
  return (
    <svg viewBox="0 0 32 32" fill="none" className="h-7 w-7">
      <rect x="10" y="10" width="12" height="12" stroke="currentColor" strokeWidth="1.3" opacity="0.5" />
      <path d="M4 10V4h6M28 10V4h-6M4 22v6h6M28 22v6h-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const CAPABILITIES = [
  {
    n: "01",
    title: "Keşfet",
    description: "Yeni fikirleri ve pazar fırsatlarını araştırıyoruz.",
    Mark: MarkDiscover,
  },
  {
    n: "02",
    title: "İnşa Et",
    description: "Marka, ürün, teknoloji ve sistemleri geliştiriyoruz.",
    Mark: MarkBuild,
  },
  {
    n: "03",
    title: "Hayata Geçir",
    description: "Fikirleri gerçek ürün ve işletmelere dönüştürüyoruz.",
    Mark: MarkLaunch,
  },
  {
    n: "04",
    title: "İşlet",
    description: "Sadece kurup bırakmıyoruz; büyüme sürecinde aktif rol alıyoruz.",
    Mark: MarkOperate,
  },
  {
    n: "05",
    title: "Büyüt",
    description: "Başarılı modelleri yeni pazarlara ve kategorilere taşıyoruz.",
    Mark: MarkExpand,
  },
];

export function WhatWeDo() {
  return (
    <section className="border-b border-border py-28 md:py-36">
      <div className="container-edit">
        <ScrollReveal>
          <SectionLabel>Ne Yapıyoruz</SectionLabel>
          <h2 className="mt-4 max-w-xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            Fikirleri işleyen markalara dönüştürüyoruz.
          </h2>
        </ScrollReveal>

        <div className="mt-16">
          {CAPABILITIES.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 80}>
              <div className="group grid grid-cols-1 gap-4 border-t border-border py-8 transition-colors duration-300 hover:border-border-hover md:grid-cols-[64px_56px_220px_1fr] md:items-center md:gap-10">
                <span className="text-sm text-muted">{c.n}</span>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-105">
                  <c.Mark />
                </div>
                <span className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                  {c.title}
                </span>
                <p className="max-w-lg text-[15px] leading-relaxed text-muted">
                  {c.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
