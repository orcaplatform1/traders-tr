import type { Brand } from "@/lib/content/types";
import { StatusBadge } from "@/components/status-badge";

// Marka karti: surface zemin, 1px hairline; kart yeni sekmede markanin sitesini acar
export function BrandCard({
  brand,
  index,
  featured = false,
}: {
  brand: Brand;
  index?: number;
  featured?: boolean;
}) {
  const no = String(index ?? brand.displayOrder).padStart(2, "0");
  const domain = brand.websiteUrl.replace(/^https?:\/\//, "");

  return (
    <a
      href={brand.websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col justify-between rounded-[2px] border border-hairline bg-surface p-6 transition-colors duration-300 ease-out hover:border-hairline-hover hover:bg-surface-hover md:p-8"
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <span className="meta-mono text-ink-secondary">
            <span className="text-ink-muted">{no} {"//"}</span> {brand.category}
          </span>
          <StatusBadge status={brand.status} />
        </div>
        <h3
          className={`mt-6 font-sans font-medium tracking-normal text-ink-primary ${featured ? "text-2xl" : "text-xl"}`}
        >
          {brand.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-secondary">{brand.shortDescription}</p>
      </div>

      <div className="mt-8 flex items-center justify-between border-t border-hairline pt-4">
        <span className="font-mono text-xs text-ink-secondary transition-colors duration-300 ease-out group-hover:text-ink-primary">
          {domain}
        </span>
        <span
          aria-hidden
          className="text-ink-secondary transition-[color,transform] duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        >
          ↗
        </span>
      </div>
    </a>
  );
}
