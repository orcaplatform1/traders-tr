import Link from "next/link";
import type { Brand } from "@/lib/content/types";

export function BrandCard({ brand }: { brand: Brand }) {
  return (
    <div className="group relative flex flex-col justify-between border border-border p-8 transition-colors duration-300 hover:border-border-hover md:p-10">
      <div>
        <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
          {brand.category}
        </span>
        <h3 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          {brand.name}
        </h3>
        <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted">
          {brand.shortDescription}
        </p>
      </div>

      <div className="mt-10 flex items-center gap-6 text-[13px]">
        <a
          href={brand.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-medium tracking-wide text-foreground"
        >
          <span>{brand.websiteUrl.replace(/^https?:\/\//, "")}</span>
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </a>
        <Link
          href={`/brands/${brand.slug}`}
          className="text-muted transition-colors hover:text-accent"
        >
          Profili gör
        </Link>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
    </div>
  );
}
