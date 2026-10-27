import type { ReactNode } from "react";

// Yuzen navigasyon ogesi: ikon + mono etiket + aktif alt cizgi
export function DockLabel({ icon, label, selected }: { icon: ReactNode; label: string; selected: boolean }) {
  return (
    <>
      <span
        aria-hidden
        className={`mb-1 flex h-5 items-center transition-all duration-200 ${selected ? "-translate-y-0.5 opacity-100" : "opacity-45"}`}
      >
        {icon}
      </span>
      <span
        className={`font-mono text-[9px] uppercase tracking-widest transition-colors duration-200 ${
          selected ? "font-bold text-foreground" : "text-text-tertiary"
        }`}
      >
        {label}
      </span>
      {/* Aktif cizgisi: brutalist dik kose */}
      {selected && <span className="absolute bottom-0 h-[2px] w-8 bg-foreground" />}
    </>
  );
}
