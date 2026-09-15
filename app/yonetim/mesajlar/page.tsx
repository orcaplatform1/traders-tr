import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";
import { LogoutButton } from "@/components/admin/logout-button";

export const metadata: Metadata = {
  title: "Gelen Mesajlar",
  robots: { index: false, follow: false },
};

const CATEGORY_LABELS: Record<string, string> = {
  Partnership: "İş Ortaklığı",
  Venture: "Girişim",
  Press: "Basın",
  General: "Genel",
};

function formatDate(d: Date) {
  return new Intl.DateTimeFormat("tr-TR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(d);
}

export default async function AdminMessagesPage() {
  if (!(await isAuthenticated())) {
    redirect("/yonetim");
  }

  const messages = await prisma.contactSubmission.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <section className="py-28 md:py-32">
      <div className="container-edit">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-medium tracking-tight text-foreground">
              Gelen Mesajlar
            </h1>
            <p className="mt-1 text-[13px] text-muted">{messages.length} mesaj</p>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/yonetim/ayarlar"
              className="text-[13px] font-medium tracking-wide text-muted transition-colors hover:text-foreground"
            >
              Ayarlar
            </Link>
            <LogoutButton />
          </div>
        </div>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {messages.length === 0 && (
            <p className="py-10 text-[14px] text-muted">Henüz mesaj yok.</p>
          )}
          {messages.map((m) => (
            <div key={m.id} className="py-6">
              <div className="flex flex-wrap items-center gap-3 text-[12px] text-muted">
                <span>{formatDate(m.createdAt)}</span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span className="font-medium uppercase tracking-wide text-accent">
                  {CATEGORY_LABELS[m.category] ?? m.category}
                </span>
              </div>

              <p className="mt-2 text-[15px] font-medium text-foreground">
                {m.name}
                {m.company && <span className="text-muted"> · {m.company}</span>} —{" "}
                <a
                  href={`mailto:${m.email}`}
                  className="text-blue-400 underline underline-offset-4 hover:text-blue-300"
                >
                  {m.email}
                </a>{" "}
                ·{" "}
                <a
                  href={`tel:${m.phone}`}
                  className="text-blue-400 underline underline-offset-4 hover:text-blue-300"
                >
                  {m.phone}
                </a>
              </p>

              <p className="mt-2 text-[14px] font-medium text-slate-200">{m.subject}</p>
              <p className="mt-2 max-w-2xl whitespace-pre-wrap text-[14px] leading-relaxed text-muted">
                {m.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
