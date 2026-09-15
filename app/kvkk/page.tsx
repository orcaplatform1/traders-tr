import type { Metadata } from "next";
import { SectionLabel } from "@/components/section-label";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description: "TRADERS.TR KVKK aydınlatma metni.",
  alternates: { canonical: "/kvkk" },
};

export default function KvkkPage() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-edit max-w-2xl">
        <SectionLabel>Yasal</SectionLabel>
        <h1 className="mt-4 text-4xl font-medium tracking-tight text-foreground md:text-5xl">
          KVKK Aydınlatma Metni
        </h1>
        <p className="mt-6 text-[13px] text-muted">
          Bu metin taslak niteliğindedir ve 6698 sayılı Kişisel Verilerin Korunması
          Kanunu kapsamında hukuki inceleme sürecine tabidir.
        </p>

        <div className="mt-10 space-y-8 border-t border-border pt-10 text-[15px] leading-relaxed text-slate-200">
          <div>
            <h2 className="text-lg font-medium text-foreground">1. Veri Sorumlusu</h2>
            <p className="mt-2">
              TRADERS.TR, iletişim formu aracılığıyla paylaştığınız kişisel verileriniz
              bakımından 6698 sayılı Kanun uyarınca veri sorumlusu sıfatıyla hareket
              eder.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-medium text-foreground">2. İşlenen Veriler ve Amaç</h2>
            <p className="mt-2">
              Ad soyad, e-posta, şirket adı (opsiyonel) ve mesaj içeriğiniz; yalnızca
              talebinizi değerlendirmek ve tarafınıza geri dönüş yapmak amacıyla
              işlenir.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-medium text-foreground">3. Haklarınız</h2>
            <p className="mt-2">
              KVKK'nın 11. maddesi kapsamında; verilerinizin işlenip işlenmediğini
              öğrenme, işlenmişse buna ilişkin bilgi talep etme, düzeltilmesini veya
              silinmesini isteme haklarına sahipsiniz. Taleplerinizi{" "}
              <a href="/contact" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                iletişim
              </a>{" "}
              sayfamız üzerinden iletebilirsiniz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
