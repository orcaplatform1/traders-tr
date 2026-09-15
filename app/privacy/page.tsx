import type { Metadata } from "next";
import { SectionLabel } from "@/components/section-label";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description: "TRADERS gizlilik politikası.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-edit max-w-2xl">
        <SectionLabel>Yasal</SectionLabel>
        <h1 className="mt-4 text-4xl font-medium tracking-tight text-foreground md:text-5xl">
          Gizlilik Politikası
        </h1>
        <p className="mt-6 text-[13px] text-muted">
          Bu metin taslak niteliğindedir ve hukuki inceleme sürecine tabidir. Nihai
          metin, ilgili mevzuata uygun şekilde güncellenecektir.
        </p>

        <div className="mt-10 space-y-8 border-t border-border pt-10 text-[15px] leading-relaxed text-slate-200">
          <div>
            <h2 className="text-lg font-medium text-foreground">1. Topladığımız Bilgiler</h2>
            <p className="mt-2">
              traders.tr üzerindeki iletişim formunu kullandığınızda; ad soyad, e-posta
              adresi, şirket adı (opsiyonel), konu, kategori ve mesaj içeriğinizi
              işleriz. Bunun dışında, site kullanımını anlamak amacıyla temel, kimliği
              tanımlamayan teknik günlük verileri (ör. sunucu erişim kayıtları)
              tutulabilir.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-medium text-foreground">2. Kullanım Amacı</h2>
            <p className="mt-2">
              Topladığımız bilgiler yalnızca tarafınıza geri dönüş yapmak, iş
              ortaklığı/girişim/basın taleplerini değerlendirmek ve sitenin güvenli
              şekilde çalışmasını sağlamak amacıyla kullanılır.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-medium text-foreground">3. Paylaşım</h2>
            <p className="mt-2">
              Bilgileriniz, yasal zorunluluklar dışında üçüncü taraflarla
              paylaşılmaz veya satılmaz.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-medium text-foreground">4. Haklarınız</h2>
            <p className="mt-2">
              Tarafınıza ait verilerin silinmesini veya düzeltilmesini talep etmek
              için{" "}
              <a href="/contact" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                iletişim
              </a>{" "}
              sayfamızdan bize ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
