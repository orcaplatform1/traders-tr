import type { BrandStatus } from "@/lib/content/types";

// Durum etiketi: seffaf zemin, 1px hairline, solda 6px nokta
export function StatusBadge({ status }: { status: BrandStatus }) {
  const active = status === "active";
  return (
    <span className="inline-flex shrink-0 items-center gap-2 rounded-[2px] border border-hairline px-2.5 py-1">
      <span
        aria-hidden
        className={`h-1.5 w-1.5 rounded-full ${active ? "bg-status-active" : "bg-status-dev"}`}
      />
      <span
        className={`font-mono text-[11px] uppercase leading-none tracking-[0.08em] ${
          active ? "text-ink-primary" : "text-ink-secondary"
        }`}
      >
        {active ? "Active" : "In development"}
      </span>
    </span>
  );
}
