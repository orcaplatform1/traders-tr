import type { Metadata } from "next";
import { SectionLabel } from "@/components/section-label";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Bir fikriniz mi var? Ne inşa ettiğinizi anlatın.",
  alternates: { canonical: "/iletisim" },
};

const CATEGORIES = [
  {
    title: "İş Ortaklığı",
    description:
      "Stratejik iş birlikleri, teknoloji ortaklıkları ve markalarımızla entegrasyon fırsatları.",
  },
  {
    title: "Girişim",
    description:
      "Birlikte inşa edilebilecek bir fikriniz mi var? Erken aşama girişim önerilerini değerlendiriyoruz.",
  },
  {
    title: "Basın",
    description:
      "Röportaj talepleri, basın kiti ihtiyaçları ve TRADERS.TR hakkında yazılı içerikler için.",
  },
  {
    title: "Genel",
    description:
      "Yukarıdakilerin dışında kalan tüm sorularınız, geri bildirimleriniz ve talepleriniz için.",
  },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;

  return (
    <>
      <section className="pb-4 pt-28 md:pt-36">
        <div className="container-edit">
          <SectionLabel>İletişim</SectionLabel>
          <h1 className="mt-4 max-w-xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            Nasıl yardımcı olabiliriz?
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted">
            Mesajınızı seçtiğiniz kategoriye göre doğru ekibe yönlendiriyoruz
            ve genellikle 2 iş günü içinde geri dönüş yapıyoruz.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-8 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((c) => (
              <div key={c.title}>
                <span className="text-[13px] font-medium tracking-[0.1em] text-accent">
                  {c.title.toLocaleUpperCase("tr-TR")}
                </span>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection defaultCategory={category} />
    </>
  );
}
