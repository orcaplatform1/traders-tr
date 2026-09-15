import type { Metadata } from "next";
import { SectionLabel } from "@/components/section-label";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: "TRADERS.TR çerez politikası.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-edit max-w-2xl">
        <SectionLabel>Yasal</SectionLabel>
        <h1 className="mt-4 text-4xl font-medium tracking-tight text-foreground md:text-5xl">
          Çerez Politikası
        </h1>
        <p className="mt-6 text-[13px] text-muted">
          Bu metin taslak niteliğindedir ve hukuki inceleme sürecine tabidir.
        </p>

        <div className="mt-10 space-y-8 border-t border-border pt-10 text-[15px] leading-relaxed text-slate-200">
          <div>
            <h2 className="text-lg font-medium text-foreground">1. Çerez Kullanımı</h2>
            <p className="mt-2">
              traders.tr, sitenin temel işlevlerini yerine getirmek dışında pazarlama
              veya reklam amaçlı üçüncü taraf izleme çerezi kullanmaz. Tarayıcınızın
              yerel depolama alanı (localStorage), yalnızca arayüz tercihlerinizi
              (ör. menü durumu) hatırlamak için kullanılabilir.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-medium text-foreground">2. Kontrol</h2>
            <p className="mt-2">
              Tarayıcı ayarlarınız üzerinden yerel depolama verilerini istediğiniz
              zaman temizleyebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
