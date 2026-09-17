import Image from "next/image";
import Link from "next/link";
import { AnimatedGrid } from "@/components/animated-grid";

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
export function Hero({
  imageSrc,
  imageSrcMobile,
}: {
  imageSrc?: string;
  imageSrcMobile?: string;
}) {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden border-b border-border">
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
              <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-background from-0% via-background/85 via-35% to-transparent to-100%" />
              <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-r from-background/70 from-0% via-background/20 via-40% to-transparent to-65%" />

              {/* Atmospheric mavi glow */}
              <div
                className="hero-glow pointer-events-none absolute -right-[10%] top-[10%] hidden h-[520px] w-[520px] rounded-full blur-[140px] md:block"
                style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }}
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

      <div className="container-edit relative flex flex-1 flex-col justify-end pb-16 pt-0 md:pb-40">
        <div className="max-w-3xl">
          <h1 className="text-[26px] font-medium leading-[1.12] tracking-tight text-foreground sm:text-[34px] md:text-[44px]">
            Sınırların ötesinde
            <br />
            markalar inşa ediyoruz.
          </h1>

          <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-muted md:text-[18px]">
            Teknoloji, ticaret ve finansın kesişiminde işletmeler geliştiren
            çok markalı bir girişim şirketi.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/markalar"
              className="btn-shine group relative rounded-sm border border-foreground bg-foreground px-6 py-3 text-[13px] font-medium tracking-wide text-slate-950 transition-colors hover:bg-transparent hover:text-foreground"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                Markalarımızı Keşfedin
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
            <Link
              href="/hakkimizda"
              className="btn-shine group relative inline-flex items-center gap-2 text-[13px] font-medium tracking-wide text-muted transition-colors hover:text-foreground"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                Bizim Öykümüz
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
