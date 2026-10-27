import type { ReactNode } from "react";

// Yuzen navigasyon ogesi: ikon + mono etiket + aktif alt cizgi
export function DockLabel({ icon, label, selected }: { icon: ReactNode; label: string; selected: boolean }) {
  return (
    <>
      <span
        aria-hidden
        className={`mb-0.5 flex h-5 items-center text-base transition-transform duration-200 ${selected ? "-translate-y-0.5 scale-110" : "opacity-70"}`}
      >
        {icon}
      </span>
      <span
        className={`font-mono text-[9px] uppercase tracking-widest transition-colors duration-200 ${
          selected ? "font-bold text-foreground" : "text-[#A1A1AA]"
        }`}
      >
        {label}
      </span>
      {/* Aktif cizgisi: brutalist dik kose */}
      {selected && <span className="absolute bottom-0 h-[2px] w-8 bg-foreground" />}
    </>
  );
}
