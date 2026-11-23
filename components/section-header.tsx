// Bolum basligi: mono accent etiket, serif baslik, istege bagli sagda mono meta
export function SectionHeader({
  label,
  title,
  meta,
  as: Tag = "h2",
}: {
  label: string;
  title: string;
  meta?: string;
  as?: "h1" | "h2";
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        <span className="meta-mono block text-accent">{label}</span>
        <Tag className="font-serif mt-4 text-3xl text-ink-primary md:text-5xl">{title}</Tag>
      </div>
      {meta && <span className="meta-mono text-ink-secondary">{meta}</span>}
    </div>
  );
}
