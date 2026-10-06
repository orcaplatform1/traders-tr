"use client";

import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedGrid } from "@/components/animated-grid";
import { useT } from "@/lib/i18n";

export function AboutPageContent() {
  const t = useT();

  const WHAT_WE_DO = [
    {
      n: "01",
      title: t("Fikirleri keşfediyoruz", "We discover ideas"),
      description: t(
        "Değişen teknoloji, tüketici davranışları ve yeni iş modellerinin ortaya çıkardığı fırsatları araştırıyoruz.",
        "We research opportunities arising from changing technology, consumer behaviour and new business models."
      ),
    },
    {
      n: "02",
      title: t("Markalar inşa ediyoruz", "We build brands"),
      description: t(
        "Bir fikri yalnızca bir isim ve logodan ibaret görmüyoruz. Markanın kimliğini, amacını, kullanıcı deneyimini ve uzun vadeli konumunu birlikte tasarlıyoruz.",
        "We don't see a brand as just a name and logo. We design the brand's identity, purpose, user experience and long-term positioning together."
      ),
    },
    {
      n: "03",
      title: t("Teknoloji geliştiriyoruz", "We develop technology"),
      description: t(
        "Teknolojiyi yalnızca destekleyici bir araç olarak değil, işletmenin temel yapı taşlarından biri olarak ele alıyoruz.",
        "We treat technology not merely as a supporting tool, but as one of the core building blocks of the business."
      ),
    },
    {
      n: "04",
      title: t("İşletiyoruz", "We operate"),
      description: t(
        "Kuruluş sonrasında da markaların gelişiminde aktif rol almaya devam ediyoruz. Verileri, kullanıcı davranışlarını ve değişen pazar koşullarını takip ederek işletmeleri sürekli geliştiriyoruz.",
        "We continue to play an active role in brand development after launch. We continuously improve businesses by tracking data, user behaviour and changing market conditions."
      ),
    },
    {
      n: "05",
      title: t("Yeni alanlara açılıyoruz", "We expand into new areas"),
      description: t(
        "Bugünün pazarlarıyla sınırlı kalmıyoruz. Yeni teknolojileri, yeni tüketici alışkanlıklarını ve ortaya çıkan iş modellerini takip ederek geleceğin fırsatlarını araştırıyoruz.",
        "We don't limit ourselves to today's markets. We research the opportunities of tomorrow by tracking new technologies, new consumer habits and emerging business models."
      ),
    },
  ];

  const HOW_WE_THINK = [
    {
      n: "01",
      title: t("Önce ihtiyaç, sonra fikir", "Need first, idea second"),
      description: t(
        "Bir fikrin heyecan verici olması bizim için yeterli değildir. Gerçek bir ihtiyaca karşılık veriyor mu? İnsanların hayatında anlamlı bir fark yaratıyor mu? Uzun vadede sürdürülebilir bir işletmeye dönüşebilir mi? Bu sorularla başlarız.",
        "An exciting idea isn't enough for us. Does it address a real need? Does it make a meaningful difference in people's lives? Can it become a sustainable business over the long term? These are the questions we start with."
      ),
    },
    {
      n: "02",
      title: t("Sadelik bir avantajdır", "Simplicity is an advantage"),
      description: t(
        "İyi teknoloji her zaman daha fazla özellik anlamına gelmez. Kullanıcının neye ihtiyacı olduğunu anlayıp gereksiz karmaşıklığı ortadan kaldırmaya çalışırız. Markalarımızın deneyimini mümkün olduğunca anlaşılır, hızlı ve erişilebilir tasarlarız.",
        "Good technology doesn't always mean more features. We try to understand what the user needs and eliminate unnecessary complexity. We design our brands' experiences to be as clear, fast and accessible as possible."
      ),
    },
    {
      n: "03",
      title: t("Teknoloji değişir, ihtiyaçlar değişir", "Technology changes, needs change"),
      description: t(
        "Bugünün doğru çözümü yarının çözümü olmayabilir. Bu nedenle markalarımızı değişime kapalı sistemler olarak değil, gelişebilen yapılar olarak tasarlarız.",
        "Today's right solution may not be tomorrow's. That's why we design our brands not as closed systems, but as evolving structures."
      ),
    },
    {
      n: "04",
      title: t("Uzun vadeyi düşünürüz", "We think long term"),
      description: t(
        "Kısa süreli trendlerin peşinden koşmak yerine kalıcı değer yaratabilecek markalar oluşturmaya odaklanırız. Bir markanın başarısını yalnızca ne kadar hızlı büyüdüğüyle değil, zaman içinde ne kadar güçlü ve anlamlı hale geldiğiyle değerlendiririz.",
        "Rather than chasing short-lived trends, we focus on building brands that can create lasting value. We evaluate a brand's success not only by how fast it grows, but by how strong and meaningful it becomes over time."
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border pb-20 pt-40 md:pb-28 md:pt-48">
        <AnimatedGrid />
        <div className="grain-overlay" />
        <div className="container-edit relative max-w-3xl">
          <ScrollReveal>
            <SectionLabel>{t("TRADERS.TR Hakkında", "About TRADERS.TR")}</SectionLabel>
            <h1 className="mt-6 text-[34px] font-medium leading-[1.15] tracking-tight text-foreground sm:text-[44px] md:text-[56px]">
              {t("Fikirlerden markalara.", "From ideas to brands.")}
              <br />
              {t("Markalardan kalıcı işletmelere.", "From brands to lasting businesses.")}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-10 space-y-5 text-[16px] leading-relaxed text-slate-200 md:text-[17px]">
              <p>
                {t(
                  "TRADERS.TR; teknoloji, ticaret ve finansın kesişiminde yeni nesil işletmeler geliştiren, kuran ve işleten çok markalı bir girişim şirketidir.",
                  "TRADERS.TR is a multi-brand venture company that develops, builds and operates next-generation businesses at the intersection of technology, commerce and finance."
                )}
              </p>
              <p>
                {t(
                  "Bizim için her girişim bir fikirle başlar. Ancak iyi bir fikrin tek başına yeterli olmadığına inanıyoruz. Bir fikrin gerçek bir işletmeye dönüşmesi; doğru stratejiye, güçlü bir marka anlayışına, doğru teknolojiye, iyi tasarlanmış sistemlere ve uzun vadeli bir bakış açısına ihtiyaç duyar.",
                  "For us, every venture starts with an idea. But we believe a good idea alone is not enough. Turning an idea into a real business requires the right strategy, a strong brand vision, the right technology, well-designed systems and a long-term perspective."
                )}
              </p>
              <p className="text-foreground">
                {t("TRADERS.TR'ın rolü tam olarak burada başlar.", "That's exactly where TRADERS.TR's role begins.")}
              </p>
              <p>
                {t(
                  "Fikirleri değerlendirir, potansiyel gördüğümüz alanları araştırır, markaları sıfırdan tasarlar ve onları gerçek kullanıcıların hayatına dokunan işletmelere dönüştürürüz. Lansmanla birlikte süreci tamamlanmış kabul etmeyiz; geliştirmeye, öğrenmeye, yeniden tasarlamaya ve büyütmeye devam ederiz.",
                  "We evaluate ideas, research areas where we see potential, design brands from scratch and turn them into businesses that touch real users' lives. We don't consider the process finished at launch — we keep developing, learning, redesigning and growing."
                )}
              </p>
              <p>
                {t(
                  "Bugün farklı sektörlerde faaliyet gösteren bağımsız markalarımız bulunuyor. Her biri kendi kimliğine, hedef kitlesine ve iş modeline sahip. Ancak hepsinin arkasında ortak bir yaklaşım var:",
                  "Today we have independent brands operating in different sectors. Each has its own identity, target audience and business model. But behind all of them is a shared approach:"
                )}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="mt-8 border-t border-border pt-8 text-xl font-medium leading-relaxed tracking-tight text-foreground md:text-2xl">
              {t(
                "Net bir fikir. Sade bir deneyim. Güçlü bir teknoloji altyapısı. Uzun vadeli bir bakış açısı.",
                "A clear idea. A simple experience. Strong technology. A long-term perspective."
              )}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Do */}
      <section className="border-b border-border py-28 md:py-36">
        <div className="container-edit">
          <ScrollReveal>
            <SectionLabel>{t("Ne Yapıyoruz?", "What Do We Do?")}</SectionLabel>
            <h2 className="mt-4 max-w-2xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
              {t(
                "TRADERS.TR'ı yalnızca bir yatırım veya marka çatısı olarak görmüyoruz.",
                "We don't see TRADERS.TR merely as an investment vehicle or brand umbrella."
              )}
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted">
              {t(
                "Biz inşa ediyoruz. Yeni bir fikir ortaya çıktığında önce problemi ve fırsatı anlamaya çalışıyoruz. Ardından iş modelini, marka konumlandırmasını, kullanıcı deneyimini ve teknoloji altyapısını birlikte ele alıyoruz. Bir girişimi yalnızca piyasaya çıkarmayı değil, sürdürülebilir bir işletme haline getirmeyi hedefliyoruz.",
                "We build. When a new idea emerges, we first try to understand the problem and the opportunity. Then we address the business model, brand positioning, user experience and technology infrastructure together. We aim not just to launch a venture, but to make it a sustainable business."
              )}
            </p>
          </ScrollReveal>

          <div className="mt-16">
            {WHAT_WE_DO.map((item, i) => (
              <ScrollReveal key={item.n} delay={i * 70}>
                <div className="group flex flex-col gap-3 border-t border-border py-8 transition-colors duration-300 hover:border-border-hover sm:flex-row sm:gap-10">
                  <span className="w-16 shrink-0 text-sm text-muted">{item.n}</span>
                  <span className="w-full shrink-0 text-xl font-medium tracking-tight text-foreground sm:w-72 md:text-2xl">
                    {item.title}
                  </span>
                  <p className="max-w-lg text-[15px] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
            <div className="border-t border-border" />
          </div>
        </div>
      </section>

      {/* Our Brands */}
      <section className="border-b border-border py-28 md:py-36">
        <div className="container-edit max-w-2xl">
          <ScrollReveal>
            <SectionLabel>{t("Markalarımız", "Our Brands")}</SectionLabel>
            <p className="mt-6 text-[17px] leading-relaxed text-slate-200 md:text-[19px]">
              {t(
                "TRADERS.TR çatısı altında yer alan her marka bağımsız bir işletme olarak kendi yolunu oluşturur.",
                "Each brand under the TRADERS.TR umbrella creates its own path as an independent business."
              )}
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              {t(
                "Orca Labs finans eğitimi alanında yeni nesil bir deneyim oluştururken, KriptoBeyan dijital varlıkların vergilendirilmesi ve beyan süreçlerine odaklanıyor. Zesta Art&Design özel siparişle hazırlanan el emeği ürünleri dijital ticaretle buluşturuyor. Mettlo ise sağlıklı yaşam ve koçluk alanında uzman koçlarla üyeleri tek platformda bir araya getiriyor.",
                "Orca Labs creates a next-generation experience in financial education, while KriptoBeyan focuses on the taxation and reporting of digital assets. Zesta Art&Design bridges custom handcrafted products with digital commerce. Mettlo brings together expert coaches and members on a single platform in the health and wellness coaching space."
              )}
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              {t(
                "Sektörleri farklı olsa da bu markaları bir araya getiren ortak bir anlayış var: farklı sektörlerde, gerçek ihtiyaçlara karşılık veren ve zaman içinde büyüyebilecek markalar oluşturmak.",
                "Although their sectors differ, a common understanding brings these brands together: to build brands that respond to real needs in different sectors and can grow over time."
              )}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* How We Think */}
      <section className="border-b border-border py-28 md:py-36">
        <div className="container-edit">
          <ScrollReveal>
            <SectionLabel>{t("Nasıl Düşünüyoruz?", "How Do We Think?")}</SectionLabel>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
            {HOW_WE_THINK.map((item, i) => (
              <ScrollReveal key={item.n} delay={i * 80}>
                <div className="border-t border-border pt-6">
                  <span className="text-[13px] font-medium tracking-[0.15em] text-accent">
                    {item.n} — {item.title.toUpperCase()}
                  </span>
                  <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Independent Brands */}
      <section className="border-b border-border py-28 md:py-36">
        <div className="container-edit max-w-2xl">
          <ScrollReveal>
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
              {t("Bağımsız markalar. Ortak bir yaklaşım.", "Independent brands. One shared approach.")}
            </h2>
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted">
              <p>
                {t(
                  "TRADERS.TR'ın büyüme modeli tek bir sektöre veya tek bir iş modeline bağlı değildir.",
                  "TRADERS.TR's growth model is not tied to a single sector or a single business model."
                )}
              </p>
              <p>
                {t(
                  "Her markanın kendi kimliğini ve operasyonunu oluşturmasına alan tanırken; strateji, teknoloji, tasarım, sistem geliştirme ve girişimcilik deneyimimizi ortak bir altyapı olarak kullanırız.",
                  "While giving each brand space to build its own identity and operations, we use our shared infrastructure of strategy, technology, design, systems development and entrepreneurship experience."
                )}
              </p>
              <p>{t("Bu yaklaşım bize iki şeyi aynı anda yapma imkânı verir:", "This approach gives us the ability to do two things at once:")}</p>
              <p className="text-foreground">
                {t(
                  "Bağımsız markalar oluşturmak. Ve birbirinden farklı alanlarda edindiğimiz deneyimi yeni girişimlere taşımak.",
                  "Build independent brands. And carry the experience we've gained across different fields into new ventures."
                )}
              </p>
              <p>
                {t(
                  "Bu nedenle TRADERS.TR'ın hikâyesi tek bir markanın hikâyesi değildir. Bir marka portföyünün nasıl oluştuğunun hikâyesidir.",
                  "That's why TRADERS.TR's story is not the story of a single brand. It's the story of how a brand portfolio is built."
                )}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Future Outlook */}
      <section className="border-b border-border py-28 md:py-36">
        <div className="container-edit max-w-2xl">
          <ScrollReveal>
            <SectionLabel>{t("Geleceğe Bakış", "Looking Ahead")}</SectionLabel>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-muted">
              <p>
                {t(
                  "Teknoloji yeni sektörler yaratıyor, mevcut iş modellerini değiştiriyor ve insanların ürünlerle, hizmetlerle ve markalarla kurduğu ilişkiyi yeniden şekillendiriyor.",
                  "Technology is creating new sectors, changing existing business models and reshaping the relationship people have with products, services and brands."
                )}
              </p>
              <p className="text-[17px] leading-relaxed text-slate-200 md:text-[19px]">
                {t(
                  "Biz bu değişimi yalnızca takip etmek istemiyoruz.",
                  "We don't just want to follow this change."
                )}
              </p>
              <p>
                {t(
                  "Değişimin oluşturduğu fırsatları keşfetmek ve o fırsatların üzerine yeni işletmeler inşa etmek istiyoruz.",
                  "We want to discover the opportunities that change creates and build new businesses on top of those opportunities."
                )}
              </p>
              <p>
                {t(
                  "Önümüzdeki dönemde teknoloji, dijital ticaret, finans ve yeni nesil tüketici deneyimleri etrafında yeni fikirleri araştırmaya ve yeni markalar geliştirmeye devam edeceğiz.",
                  "In the period ahead, we will continue researching new ideas and developing new brands around technology, digital commerce, finance and next-generation consumer experiences."
                )}
              </p>
              <p>{t("Bugün portföyümüzde bulunan markalar bunun başlangıç noktası.", "The brands in our portfolio today are just the starting point.")}</p>
              <p className="text-foreground">
                {t(
                  "Yarın hangi markaların TRADERS.TR çatısı altında olacağını ise henüz bilmiyoruz. Ama nasıl inşa edeceğimizi biliyoruz.",
                  "We don't yet know which brands will be under the TRADERS.TR umbrella tomorrow. But we know how we'll build them."
                )}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="border-b border-border py-28 md:py-36">
        <div className="container-edit grid grid-cols-1 gap-12 md:grid-cols-2">
          <ScrollReveal>
            <SectionLabel>{t("Misyon", "Mission")}</SectionLabel>
            <p className="mt-4 text-xl font-medium leading-relaxed tracking-tight text-foreground md:text-2xl">
              {t(
                "Umut vadeden fikirleri; insanların hayatında gerçek karşılığı olan, teknolojiyle güçlendirilmiş ve uzun vadede değer yaratabilen işletmelere dönüştürmek.",
                "To turn promising ideas into businesses that have real meaning in people's lives, are powered by technology and can create value over the long term."
              )}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <SectionLabel>{t("Vizyon", "Vision")}</SectionLabel>
            <p className="mt-4 text-xl font-medium leading-relaxed tracking-tight text-foreground md:text-2xl">
              {t(
                "Değişen teknoloji, pazarlar ve tüketici davranışlarıyla birlikte gelişebilen; farklı sektörlerde anlamlı değer yaratan bağımsız markalardan oluşan güçlü ve sürdürülebilir bir girişim portföyü oluşturmak.",
                "To build a strong and sustainable venture portfolio of independent brands that can evolve with changing technology, markets and consumer behaviour — creating meaningful value across different sectors."
              )}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-28 md:py-40">
        <div className="container-edit max-w-2xl">
          <ScrollReveal>
            <span className="block text-sm font-semibold tracking-[0.2em] text-foreground">
              TRADERS.TR
            </span>
            <p className="mt-6 text-2xl font-medium leading-snug tracking-tight text-foreground md:text-3xl">
              Think different. Build simple. Build to last.
            </p>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted">
              {t(
                "Farklı fikirleri keşfediyor, onları markalara dönüştürüyor ve geleceğe hazırlanabilecek işletmeler inşa ediyoruz.",
                "We discover different ideas, turn them into brands and build businesses ready for the future."
              )}
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
