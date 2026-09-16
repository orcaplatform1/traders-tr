import Image from "next/image";
import Link from "next/link";
import { AnimatedGrid } from "@/components/animated-grid";

// Sabit tam ekran yükseklik yerine icerik kadar kisa bir hero (ORCA'daki
// gibi) - arkaya bir gorsel eklenecegi zaman `imageSrc` prop'u verilecek,
// simdilik verilmediginde AnimatedGrid + grain fallback olarak kaliyor.
//
// Mobilde gorsel cok genis oldugu icin (~16:9) section'un tam yuksekligini
// kaplayan object-cover kenarlardan (ör. gorselin solundaki/sagindaki
// figurler) agir kirpiyordu. ORCA'nin kendi HeroBackground'unda kullandigi
// desenle ayni cozum: mobilde gorsel navbar'in hemen altinda, sabit ve
// kisa bir bant (h-[240px]) olarak durur (tam genislik, kirpilmadan
// gorunur) - metin bu bandin ALTINDA, ayri bir alanda yer alir. md+'da
// gorsel section'in tamamini kaplar (inset-0), metin uzerine biner.
//
// Karartma yalnizca metnin oturdugu SOL alt bolgeye uygulanir (dikey +
// yatay gradyan birlikte) - gorselin sag tarafi metin/buton bittikten
// sonra tamamen kendi renginde, aydinlik kalir.
export function Hero({ imageSrc }: { imageSrc?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {imageSrc ? (
        <>
          <div className="absolute inset-x-0 top-0 h-[240px] overflow-hidden sm:h-[300px] md:inset-0 md:h-auto">
            <div className="hero-pan absolute inset-0">
              <Image
                src={imageSrc}
                alt=""
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 hidden bg-gradient-to-t from-background from-10% via-background/70 via-45% to-transparent to-70% md:block" />
              <div className="absolute inset-0 hidden bg-gradient-to-r from-background/75 from-0% via-background/25 via-35% to-transparent to-60% md:block" />

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

      <div className="container-edit relative pb-16 pt-[280px] sm:pt-[340px] md:pb-20 md:pt-72">
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
