import type { ReactNode } from "react";
import { SectionLabel } from "@/components/section-label";

export type LegalSection = { id: string; title: string; content: ReactNode };

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <section className="py-28 md:py-36">
      <div className="container-edit">
        <SectionLabel>Yasal</SectionLabel>
        <h1 className="mt-4 text-4xl font-medium tracking-tight text-foreground md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-[13px] text-muted">Son güncelleme: {updated}</p>
        <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-slate-200 md:text-[17px]">
          {intro}
        </p>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-[220px_1fr] md:gap-20">
          <nav aria-label="İçindekiler" className="hidden md:block">
            <div className="sticky top-28 space-y-1">
              <span className="mb-4 block text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
                İçindekiler
              </span>
              {sections.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="block border-l border-border py-1.5 pl-4 text-[13px] text-muted transition-colors hover:border-blue-500 hover:text-foreground"
                >
                  {i + 1}. {s.title}
                </a>
              ))}
            </div>
          </nav>

          <div className="max-w-2xl">
            {sections.map((s, i) => (
              <div key={s.id} id={s.id} className="scroll-mt-28 border-t border-border py-8 first:pt-0 first:border-t-0 md:py-10">
                <h2 className="text-xl font-medium text-foreground md:text-2xl">
                  {i + 1}. {s.title}
                </h2>
                <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-slate-200">
                  {s.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
