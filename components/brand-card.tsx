import Image from "next/image";
import Link from "next/link";
import type { Brand, BrandAccent } from "@/lib/content/types";

const ACCENT: Record<
  BrandAccent,
  { text: string; hoverText: string; soft: string; border: string; dot: string; glow: string }
> = {
  blue: {
    text: "text-blue-400",
    hoverText: "hover:text-blue-400",
    soft: "bg-blue-500/10",
    border: "group-hover:border-blue-500/50",
    dot: "bg-blue-500",
    glow: "from-blue-500/20",
  },
  purple: {
    text: "text-purple",
    hoverText: "hover:text-purple",
    soft: "bg-purple/10",
    border: "group-hover:border-purple/50",
    dot: "bg-purple",
    glow: "from-purple/20",
  },
  teal: {
    text: "text-teal",
    hoverText: "hover:text-teal",
    soft: "bg-teal/10",
    border: "group-hover:border-teal/50",
    dot: "bg-teal",
    glow: "from-teal/20",
  },
};

export function BrandCard({ brand }: { brand: Brand }) {
  const accent = ACCENT[brand.accent];

  return (
    <div
      className={`group relative flex h-full flex-col justify-between overflow-hidden border border-border p-8 transition-colors duration-300 ${accent.border} md:p-10`}
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute -right-4 -top-6 select-none text-[120px] font-semibold leading-none tracking-tight text-foreground opacity-[0.03] transition-opacity duration-300 group-hover:opacity-[0.06] md:text-[160px]`}
      >
        {String(brand.displayOrder).padStart(2, "0")}
      </span>
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${accent.glow} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div
            className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${accent.soft}`}
          >
            <span className={`text-lg font-semibold tracking-tight ${accent.text}`}>
              {brand.monogram}
            </span>
          </div>

          <span className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
            <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />
            {brand.status === "active" ? "Aktif" : "Keşfediyoruz"}
          </span>
        </div>

        <span className="mt-6 block text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
          {brand.category}
        </span>
        <div className="mt-4 flex items-center gap-3">
          <div className="relative h-8 w-8 shrink-0 opacity-90">
            <Image src={brand.logo} alt="" fill className="object-contain" sizes="32px" />
          </div>
          <h3 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            {brand.name}
          </h3>
        </div>
        <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
          {brand.shortDescription}
        </p>
      </div>

      <div className="relative mt-10 flex items-center gap-6 text-[13px]">
        <a
          href={brand.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-medium tracking-wide text-foreground"
        >
          <span>{brand.websiteUrl.replace(/^https?:\/\//, "")}</span>
          <span className={`transition-transform duration-300 group-hover:translate-x-1 ${accent.text}`}>
            →
          </span>
        </a>
        <Link
          href={`/markalar/${brand.slug}`}
          className={`text-muted transition-colors ${accent.hoverText}`}
        >
          Profili gör
        </Link>
      </div>

      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${accent.dot}`}
      />
    </div>
  );
}
