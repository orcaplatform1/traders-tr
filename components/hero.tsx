"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedGrid } from "@/components/animated-grid";
import { Magnetic } from "@/components/magnetic";
import { useIdeaWizard } from "@/components/idea-wizard";
import { useT } from "@/lib/i18n";

// `imageSrc` verilmediginde AnimatedGrid + grain fallback olarak kaliyor.
//
// Mobil ve masaustu icin AYRI gorsel kullanilir (art direction):
// `imageSrc` (yatay, ~16:9-21:9) masaustunde, `imageSrcMobile` (dikey,
// ~4:5) mobilde - ikisi de object-cover ile tam ekran (min-h-screen)
// kaplar, kirpilma olmadan. Tek bir yatay gorseli dar/uzun mobil
// viewport'ta object-cover ile kaplatmak agir kirpardi, object-contain
// ise bosluk birakirdi (bkz. sohbet gecmisi) - o yuzden dikey
// kompozisyonlu ayri bir mobil gorsel gerekiyor.
//
// Karartma yalnizca metnin oturdugu SOL alt bolgeye uygulanir (dikey +
// yatay gradyan birlikte) - gorselin sag tarafi metin/buton bittikten
// sonra tamamen kendi renginde, aydinlik kalir.
// Baslik kelimeleri sirayla asagidan gelir; her kelimenin arkasindan isik suzulur
function HeroWords({ lines }: { lines: string[] }) {
  let index = 0;
  return (
    <>
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.split(" ").map((word, wi) => {
            const delay = index++ * 110;
            return (
              <span key={wi}>
                <span className="hero-word" style={{ "--word-delay": `${delay}ms` } as React.CSSProperties}>
                  {word}
                </span>
                {wi < line.split(" ").length - 1 && " "}
              </span>
            );
          })}
        </span>
      ))}
    </>
  );
}

export function Hero({
  imageSrc,
  imageSrcMobile,
}: {
  imageSrc?: string;
  imageSrcMobile?: string;
}) {
  const t = useT();
  const { open: openWizard } = useIdeaWizard();
  return (
    <section data-hero className="relative flex min-h-screen flex-col overflow-hidden border-b border-border">
      {imageSrc ? (
        <>
          <div className="absolute inset-0">
            <div className="hero-pan absolute inset-0">
              {imageSrcMobile && (
                <Image
                  src={imageSrcMobile}
                  alt=""
                  fill
                  priority
                  quality={90}
                  sizes="100vw"
                  className="object-cover object-center md:hidden"
                />
              )}
              <Image
                src={imageSrc}
                alt=""
                fill
                priority
                quality={90}
                sizes="100vw"
                className={
                  imageSrcMobile
                    ? "hidden object-cover object-center md:block"
                    : "object-cover object-center"
                }
              />
              {/* Koyu baslik metni okunabilsin diye metin bolgesi acik zemine erir */}
              <div className="absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-t from-background from-0% via-background/90 via-55% to-transparent to-100% md:h-[60%]" />
              <div className="absolute inset-x-0 bottom-0 h-[75%] bg-gradient-to-r from-background/80 from-0% via-background/30 via-45% to-transparent to-70% md:h-[60%]" />

              {/* Atmospheric monokrom glow */}
              <div
                className="hero-glow pointer-events-none absolute -right-[10%] top-[10%] hidden h-[520px] w-[520px] rounded-full opacity-40 blur-[140px] md:block"
                style={{ background: "radial-gradient(circle, #ffffff, transparent 70%)" }}
              />

              {/* Cok ince grid + grain katmani */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.25]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(248,250,252,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(248,250,252,0.05) 1px, transparent 1px)",
                  backgroundSize: "56px 56px",
                  maskImage:
                    "linear-gradient(to top, black, transparent 75%)",
                }}
              />
              <div className="grain-overlay" />
            </div>

            {/* Karanlik 3D izgara */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="hero-grid-3d" />
            </div>

            {/* Coordinate-style dekoratif kose isaretleri */}
            <div className="pointer-events-none absolute inset-6 hidden md:block">
              <span className="absolute left-0 top-0 h-4 w-4 border-l border-t border-foreground/25" />
              <span className="absolute right-0 top-0 h-4 w-4 border-r border-t border-foreground/25" />
            </div>
          </div>
        </>
      ) : (
        <>
          <AnimatedGrid />
          <div className="grain-overlay" />
        </>
      )}

      <div className="container-edit relative z-10 flex flex-1 flex-col justify-end pb-16 pt-0 md:pb-40">
        <div className="max-w-5xl">
          <h1 className="text-[40px] font-medium leading-[1.02] tracking-tight text-foreground sm:text-[56px] md:text-[80px] lg:text-[104px]">
            <HeroWords
              key={t("tr", "en")}
              lines={[t("Sınırların ötesinde", "Building brands"), t("markalar inşa ediyoruz.", "beyond borders.")]}
            />
          </h1>

          <p className="mt-8 max-w-xl text-[16px] leading-relaxed text-muted md:mt-10 md:text-[19px]">
            {t(
              "Teknoloji, ticaret ve finansın kesişiminde işletmeler geliştiren çok markalı bir girişim şirketi.",
              "A multi-brand venture company building businesses at the intersection of technology, commerce and finance."
            )}
          </p>

          <button
            type="button"
            onClick={() => openWizard()}
            className="mt-10 h-12 w-full bg-foreground text-sm font-medium text-background transition-transform duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.97] sm:w-auto sm:px-10 md:mt-14"
          >
            {t("Bir Fikir Başlat →", "Start an Idea →")}
          </button>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Magnetic>
              <Link
                href="/markalar"
                className="btn-liquid group px-6 py-3 text-[13px] font-medium tracking-wide"
              >
                {t("Markalarımızı Keşfedin", "Explore Our Brands")}
                <span className="lux-ease group-hover:translate-x-1">→</span>
              </Link>
            </Magnetic>
            <Link
              href="/hakkimizda"
              className="btn-shine group relative inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-muted transition-colors hover:text-foreground"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                {t("Bizim Öykümüz", "Our Story")}
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
