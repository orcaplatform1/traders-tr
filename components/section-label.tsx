export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
      {children}
    </span>
  );
}
