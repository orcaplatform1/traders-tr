"use client";

import { SectionLabel } from "@/components/section-label";
import { ContactSection } from "@/components/contact-section";
import { useT } from "@/lib/i18n";

export function ContactPageContent({ defaultCategory }: { defaultCategory?: string }) {
  const t = useT();

  const CATEGORIES = [
    {
      title: t("İş Ortaklığı", "Partnership"),
      description: t(
        "Stratejik iş birlikleri, teknoloji ortaklıkları ve markalarımızla entegrasyon fırsatları.",
        "Strategic collaborations, technology partnerships and integration opportunities with our brands."
      ),
    },
    {
      title: t("Girişim", "Venture"),
      description: t(
        "Birlikte inşa edilebilecek bir fikriniz mi var? Erken aşama girişim önerilerini değerlendiriyoruz.",
        "Have an idea worth building together? We evaluate early-stage venture proposals."
      ),
    },
    {
      title: t("Basın", "Press"),
      description: t(
        "Röportaj talepleri, basın kiti ihtiyaçları ve TRADERS.TR hakkında yazılı içerikler için.",
        "For interview requests, press kit needs and written content about TRADERS.TR."
      ),
    },
    {
      title: t("Genel", "General"),
      description: t(
        "Yukarıdakilerin dışında kalan tüm sorularınız, geri bildirimleriniz ve talepleriniz için.",
        "For any questions, feedback or requests that don't fit the categories above."
      ),
    },
  ];

  return (
    <>
      <section className="pb-4 pt-28 md:pt-36">
        <div className="container-edit">
          <SectionLabel>{t("İletişim", "Contact")}</SectionLabel>
          <h1 className="mt-4 max-w-xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
            {t("Nasıl yardımcı olabiliriz?", "How can we help?")}
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted">
            {t(
              "Mesajınızı seçtiğiniz kategoriye göre doğru ekibe yönlendiriyoruz ve genellikle 2 iş günü içinde geri dönüş yapıyoruz.",
              "We route your message to the right team based on the category you choose and typically respond within 2 business days."
            )}
          </p>

          <div className="mt-14 grid grid-cols-1 gap-8 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {CATEGORIES.map((c) => (
              <div key={c.title}>
                <span className="text-[13px] font-medium tracking-[0.1em] text-accent">
                  {c.title.toUpperCase()}
                </span>
                <p className="mt-3 text-[14px] leading-relaxed text-muted">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection defaultCategory={defaultCategory} />
    </>
  );
}
