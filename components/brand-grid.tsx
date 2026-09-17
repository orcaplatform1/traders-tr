import Image from "next/image";
import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { brands } from "@/lib/content/brands";
import type { Brand, BrandAccent } from "@/lib/content/types";

const GLOW: Record<BrandAccent, string> = {
  blue: "#3b82f6",
  purple: "#8b5cf6",
  teal: "#14b8a6",
};

// Marka kimligine gore ozel renk: Orca mavi, KriptoBeyan altin/sampanya
// (marka rengi purple yerine burada bilincli olarak altina ceviriyoruz),
// Zesta kendi teal accent'i (zeytin yesili degil). Bu renk hem buyuk
// gorsel panelin cercevesinde hem "01/02/03" numarasinda kullanilir.
// KriptoBeyan'in logo kutusunun arkaplani da ayni altin tonuyla tintleniyor.
const BRAND_COLOR: Record<string, string> = {
  orca: GLOW.blue,
  kriptobeyan: "#d4af37",
  zesta: GLOW.teal,
};

const LOGO_BG: Record<string, string> = {
  kriptobeyan: "rgba(212, 175, 55, 0.16)",
};

const EXPLORE_LABEL: Record<string, string> = {
  orca: "ORCA'yı Keşfedin",
  kriptobeyan: "KriptoBeyan'ı Keşfedin",
  zesta: "Zesta'yı Keşfedin",
};

const ACCENT_HOVER_TEXT: Record<BrandAccent, string> = {
  blue: "hover:text-blue-400",
  purple: "hover:text-purple",
  teal: "hover:text-teal",
};

function BrandVisual({ brand }: { brand: Brand }) {
  const glow = GLOW[brand.accent];
  const brandColor = BRAND_COLOR[brand.id] ?? glow;
  const logoBg = LOGO_BG[brand.id];

  return (
    <div
      className="relative h-[320px] w-full overflow-hidden rounded-sm border-2 md:h-[420px] lg:h-[480px]"
      style={{ borderColor: brandColor }}
    >
      <div className="absolute inset-0 bg-slate-900 transition-transform duration-700 ease-out group-hover:scale-[1.03]">
        {brand.accent === "teal" ? (
          <div
            className="absolute inset-0 opacity-70"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, rgba(20,184,166,0.22), transparent 55%), radial-gradient(circle at 80% 75%, rgba(20,184,166,0.14), transparent 50%)",
            }}
          />
        ) : (
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                brand.accent === "purple"
                  ? "repeating-linear-gradient(115deg, rgba(139,92,246,0.14) 0px, rgba(139,92,246,0.14) 1px, transparent 1px, transparent 42px)"
                  : "linear-gradient(to right, rgba(248,250,252,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(248,250,252,0.06) 1px, transparent 1px)",
              backgroundSize: brand.accent === "purple" ? undefined : "48px 48px",
            }}
          />
        )}

        <div
          className="absolute -left-16 -top-16 h-72 w-72 rounded-full opacity-30 blur-[100px]"
          style={{ background: `radial-gradient(circle, ${glow}, transparent 70%)` }}
        />
        <div
          className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full opacity-20 blur-[110px]"
          style={{ background: `radial-gradient(circle, ${glow}, transparent 70%)` }}
        />

        <div className="grain-overlay opacity-[0.05]" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center p-10">
        <div
          className="relative flex h-40 w-40 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/60 shadow-2xl backdrop-blur-sm transition-transform duration-500 group-hover:scale-105 md:h-52 md:w-52"
          style={logoBg ? { backgroundColor: logoBg } : undefined}
        >
          <div className="relative h-24 w-24 md:h-32 md:w-32">
            <Image
              src={brand.logo}
              alt={`${brand.name} logo`}
              fill
              className="object-contain"
              sizes="(min-width: 768px) 128px, 96px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function BrandGrid() {
  const sorted = [...brands].sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section className="border-b border-border py-28 md:py-36">
      <div className="container-edit">
        <ScrollReveal>
          <SectionLabel>Markalarımız</SectionLabel>
          <h2 className="mt-4 max-w-xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            Bağımsız markalar. Ortak bir vizyon.
          </h2>
        </ScrollReveal>

        <div className="mt-16">
          {sorted.map((brand, i) => {
            const reversed = i % 2 === 1;

            return (
              <ScrollReveal key={brand.id} delay={i * 100}>
                <div className="group grid grid-cols-1 items-center gap-10 border-t border-border py-14 md:grid-cols-2 md:gap-16 md:py-20">
                  <div className={reversed ? "md:order-2" : ""}>
                    <BrandVisual brand={brand} />
                  </div>

                  <div className={reversed ? "md:order-1" : ""}>
                    <div className="flex items-center gap-3">
                      <span
                        className="text-sm font-medium"
                        style={{ color: BRAND_COLOR[brand.id] ?? GLOW[brand.accent] }}
                      >
                        {String(brand.displayOrder).padStart(2, "0")}
                      </span>
                      <span className="font-mono text-[13px] text-muted">
                        {brand.websiteUrl.replace(/^https?:\/\//, "")}
                      </span>
                    </div>

                    <h3 className="mt-5 text-4xl font-medium tracking-tight text-foreground md:text-5xl">
                      {brand.name}
                    </h3>

                    <span className="mt-4 block text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
                      {brand.category}
                    </span>

                    <p className="mt-5 max-w-md text-[16px] leading-relaxed text-slate-300">
                      {brand.shortDescription}
                    </p>

                    <a
                      href={brand.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-8 inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-foreground transition-colors ${ACCENT_HOVER_TEXT[brand.accent]}`}
                    >
                      {EXPLORE_LABEL[brand.id]}
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
