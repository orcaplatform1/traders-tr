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
            <Image
              src={imageSrc}
              alt=""
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 hidden bg-gradient-to-t from-background from-10% via-background/70 via-45% to-transparent to-70% md:block" />
            <div className="absolute inset-0 hidden bg-gradient-to-r from-background/75 from-0% via-background/25 via-35% to-transparent to-60% md:block" />
          </div>
        </>
      ) : (
        <>
          <AnimatedGrid />
          <div className="grain-overlay" />
        </>
      )}

      <div className="container-edit relative pb-16 pt-[280px] sm:pt-[340px] md:pb-20 md:pt-72">
        <h1 className="max-w-3xl text-[26px] font-medium leading-[1.12] tracking-tight text-foreground sm:text-[34px] md:text-[44px]">
          Building brands
          <br />
          beyond boundaries.
        </h1>

        <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-muted md:text-[18px]">
          Teknoloji, ticaret ve finansın kesişiminde işletmeler geliştiren
          çok markalı bir girişim şirketi.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link
            href="/markalar"
            className="btn-shine group relative rounded-sm border border-foreground bg-foreground px-6 py-3 text-[13px] font-medium tracking-wide text-slate-950 transition-colors hover:bg-transparent hover:text-foreground"
          >
            <span className="relative z-10">Markalarımızı Keşfedin</span>
          </Link>
          <Link
            href="/hakkimizda"
            className="text-[13px] font-medium tracking-wide text-muted underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-accent"
          >
            Bizim Öykümüz
          </Link>
        </div>
      </div>
    </section>
  );
}
