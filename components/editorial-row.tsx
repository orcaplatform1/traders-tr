import Link from "next/link";

export function formatShortDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" });
}

// Editoryal liste satiri: yalniz alt kenarda hairline
export function EditorialRow({
  href,
  date,
  category,
  title,
  readTime,
}: {
  href: string;
  date: string;
  category: string;
  title: string;
  readTime: string;
}) {
  return (
    <Link
      href={href}
      className="group grid grid-cols-1 gap-4 border-b border-hairline py-5 md:grid-cols-[180px_1fr_auto] md:items-baseline md:gap-6"
    >
      <span className="meta-mono text-ink-secondary">
        {formatShortDate(date)} <span className="text-ink-muted">{"//"}</span> {category}
      </span>
      <span className="text-[15px] text-ink-primary transition-colors duration-300 ease-out group-hover:text-accent md:text-[17px]">
        {title}
      </span>
      <span className="meta-mono flex items-center gap-3 text-ink-secondary">
        {readTime}
        <span aria-hidden className="transition-colors duration-300 ease-out group-hover:text-accent">
          →
        </span>
      </span>
    </Link>
  );
}
