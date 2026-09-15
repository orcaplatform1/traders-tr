import type { Metadata } from "next";
import { SectionLabel } from "@/components/section-label";
import { ScrollReveal } from "@/components/scroll-reveal";
import { AnimatedGrid } from "@/components/animated-grid";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "TRADERS.TR; teknoloji, ticaret ve finansın kesişiminde yeni nesil işletmeler geliştiren, kuran ve işleten çok markalı bir girişim şirketidir.",
  alternates: { canonical: "/about" },
};

const WHAT_WE_DO = [
  {
    n: "01",
    title: "Fikirleri keşfediyoruz",
    description:
      "Değişen teknoloji, tüketici davranışları ve yeni iş modellerinin ortaya çıkardığı fırsatları araştırıyoruz.",
  },
  {
    n: "02",
    title: "Markalar inşa ediyoruz",
    description:
      "Bir fikri yalnızca bir isim ve logodan ibaret görmüyoruz. Markanın kimliğini, amacını, kullanıcı deneyimini ve uzun vadeli konumunu birlikte tasarlıyoruz.",
  },
  {
    n: "03",
    title: "Teknoloji geliştiriyoruz",
    description:
      "Teknolojiyi yalnızca destekleyici bir araç olarak değil, işletmenin temel yapı taşlarından biri olarak ele alıyoruz.",
  },
  {
    n: "04",
    title: "İşletiyoruz",
    description:
      "Kuruluş sonrasında da markaların gelişiminde aktif rol almaya devam ediyoruz. Verileri, kullanıcı davranışlarını ve değişen pazar koşullarını takip ederek işletmeleri sürekli geliştiriyoruz.",
  },
  {
    n: "05",
    title: "Yeni alanlara açılıyoruz",
    description:
      "Bugünün pazarlarıyla sınırlı kalmıyoruz. Yeni teknolojileri, yeni tüketici alışkanlıklarını ve ortaya çıkan iş modellerini takip ederek geleceğin fırsatlarını araştırıyoruz.",
  },
];

const HOW_WE_THINK = [
  {
    n: "01",
    title: "Önce ihtiyaç, sonra fikir",
    description:
      "Bir fikrin heyecan verici olması bizim için yeterli değildir. Gerçek bir ihtiyaca karşılık veriyor mu? İnsanların hayatında anlamlı bir fark yaratıyor mu? Uzun vadede sürdürülebilir bir işletmeye dönüşebilir mi? Bu sorularla başlarız.",
  },
  {
    n: "02",
    title: "Sadelik bir avantajdır",
    description:
      "İyi teknoloji her zaman daha fazla özellik anlamına gelmez. Kullanıcının neye ihtiyacı olduğunu anlayıp gereksiz karmaşıklığı ortadan kaldırmaya çalışırız. Markalarımızın deneyimini mümkün olduğunca anlaşılır, hızlı ve erişilebilir tasarlarız.",
  },
  {
    n: "03",
    title: "Teknoloji değişir, ihtiyaçlar değişir",
    description:
      "Bugünün doğru çözümü yarının çözümü olmayabilir. Bu nedenle markalarımızı değişime kapalı sistemler olarak değil, gelişebilen yapılar olarak tasarlarız.",
  },
  {
    n: "04",
    title: "Uzun vadeyi düşünürüz",
    description:
      "Kısa süreli trendlerin peşinden koşmak yerine kalıcı değer yaratabilecek markalar oluşturmaya odaklanırız. Bir markanın başarısını yalnızca ne kadar hızlı büyüdüğüyle değil, zaman içinde ne kadar güçlü ve anlamlı hale geldiğiyle değerlendiririz.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border pb-20 pt-40 md:pb-28 md:pt-48">
        <AnimatedGrid />
        <div className="grain-overlay" />
        <div className="container-edit relative max-w-3xl">
          <ScrollReveal>
            <SectionLabel>TRADERS.TR Hakkında</SectionLabel>
            <h1 className="mt-6 text-[34px] font-medium leading-[1.15] tracking-tight text-foreground sm:text-[44px] md:text-[56px]">
              Fikirlerden markalara.
              <br />
              Markalardan kalıcı işletmelere.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-10 space-y-5 text-[16px] leading-relaxed text-slate-200 md:text-[17px]">
              <p>
                TRADERS.TR; teknoloji, ticaret ve finansın kesişiminde yeni nesil
                işletmeler geliştiren, kuran ve işleten çok markalı bir girişim
                şirketidir.
              </p>
              <p>
                Bizim için her girişim bir fikirle başlar. Ancak iyi bir fikrin
                tek başına yeterli olmadığına inanıyoruz. Bir fikrin gerçek bir
                işletmeye dönüşmesi; doğru stratejiye, güçlü bir marka
                anlayışına, doğru teknolojiye, iyi tasarlanmış sistemlere ve
                uzun vadeli bir bakış açısına ihtiyaç duyar.
              </p>
              <p className="text-foreground">
                TRADERS.TR&apos;ın rolü tam olarak burada başlar.
              </p>
              <p>
                Fikirleri değerlendirir, potansiyel gördüğümüz alanları
                araştırır, markaları sıfırdan tasarlar ve onları gerçek
                kullanıcıların hayatına dokunan işletmelere dönüştürürüz.
                Lansmanla birlikte süreci tamamlanmış kabul etmeyiz;
                geliştirmeye, öğrenmeye, yeniden tasarlamaya ve büyütmeye devam
                ederiz.
              </p>
              <p>
                Bugün farklı sektörlerde faaliyet gösteren bağımsız
                markalarımız bulunuyor. Her biri kendi kimliğine, hedef
                kitlesine ve iş modeline sahip. Ancak hepsinin arkasında ortak
                bir yaklaşım var:
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={160}>
            <p className="mt-8 border-t border-border pt-8 text-xl font-medium leading-relaxed tracking-tight text-foreground md:text-2xl">
              Net bir fikir. Sade bir deneyim. Güçlü bir teknoloji altyapısı.
              Uzun vadeli bir bakış açısı.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Ne Yapıyoruz */}
      <section className="border-b border-border py-28 md:py-36">
        <div className="container-edit">
          <ScrollReveal>
            <SectionLabel>Ne Yapıyoruz?</SectionLabel>
            <h2 className="mt-4 max-w-2xl text-4xl font-medium tracking-tight text-foreground md:text-5xl">
              TRADERS.TR&apos;ı yalnızca bir yatırım veya marka çatısı olarak
              görmüyoruz.
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted">
              Biz inşa ediyoruz. Yeni bir fikir ortaya çıktığında önce problemi
              ve fırsatı anlamaya çalışıyoruz. Ardından iş modelini, marka
              konumlandırmasını, kullanıcı deneyimini ve teknoloji altyapısını
              birlikte ele alıyoruz. Bir girişimi yalnızca piyasaya çıkarmayı
              değil, sürdürülebilir bir işletme haline getirmeyi hedefliyoruz.
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

      {/* Markalarımız */}
      <section className="border-b border-border py-28 md:py-36">
        <div className="container-edit max-w-2xl">
          <ScrollReveal>
            <SectionLabel>Markalarımız</SectionLabel>
            <p className="mt-6 text-[17px] leading-relaxed text-slate-200 md:text-[19px]">
              TRADERS.TR çatısı altında yer alan her marka bağımsız bir işletme
              olarak kendi yolunu oluşturur.
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              ORCA finans eğitimi alanında yeni nesil bir deneyim oluştururken,
              KriptoBeyan dijital varlıkların vergilendirilmesi ve beyan
              süreçlerine odaklanıyor. Zesta ise özel siparişle hazırlanan el
              emeği ürünleri dijital ticaret deneyimiyle buluşturuyor.
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-muted">
              Sektörleri farklı olsa da bu markaları bir araya getiren ortak
              bir anlayış var: farklı sektörlerde, gerçek ihtiyaçlara karşılık
              veren ve zaman içinde büyüyebilecek markalar oluşturmak.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Nasıl Düşünüyoruz */}
      <section className="border-b border-border py-28 md:py-36">
        <div className="container-edit">
          <ScrollReveal>
            <SectionLabel>Nasıl Düşünüyoruz?</SectionLabel>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-2">
            {HOW_WE_THINK.map((item, i) => (
              <ScrollReveal key={item.n} delay={i * 80}>
                <div className="border-t border-border pt-6">
                  <span className="text-[13px] font-medium tracking-[0.15em] text-accent">
                    {item.n} — {item.title.toLocaleUpperCase("tr-TR")}
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

      {/* Bağımsız Markalar. Ortak Bir Yaklaşım. */}
      <section className="border-b border-border py-28 md:py-36">
        <div className="container-edit max-w-2xl">
          <ScrollReveal>
            <h2 className="text-3xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
              Bağımsız markalar. Ortak bir yaklaşım.
            </h2>
            <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted">
              <p>
                TRADERS.TR&apos;ın büyüme modeli tek bir sektöre veya tek bir iş
                modeline bağlı değildir.
              </p>
              <p>
                Her markanın kendi kimliğini ve operasyonunu oluşturmasına alan
                tanırken; strateji, teknoloji, tasarım, sistem geliştirme ve
                girişimcilik deneyimimizi ortak bir altyapı olarak kullanırız.
              </p>
              <p>Bu yaklaşım bize iki şeyi aynı anda yapma imkânı verir:</p>
              <p className="text-foreground">
                Bağımsız markalar oluşturmak. Ve birbirinden farklı alanlarda
                edindiğimiz deneyimi yeni girişimlere taşımak.
              </p>
              <p>
                Bu nedenle TRADERS.TR&apos;ın hikâyesi tek bir markanın hikâyesi
                değildir. Bir marka portföyünün nasıl oluştuğunun hikâyesidir.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Geleceğe Bakış */}
      <section className="border-b border-border py-28 md:py-36">
        <div className="container-edit max-w-2xl">
          <ScrollReveal>
            <SectionLabel>Geleceğe Bakış</SectionLabel>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-muted">
              <p>
                Teknoloji yeni sektörler yaratıyor, mevcut iş modellerini
                değiştiriyor ve insanların ürünlerle, hizmetlerle ve
                markalarla kurduğu ilişkiyi yeniden şekillendiriyor.
              </p>
              <p className="text-[17px] leading-relaxed text-slate-200 md:text-[19px]">
                Biz bu değişimi yalnızca takip etmek istemiyoruz.
              </p>
              <p>
                Değişimin oluşturduğu fırsatları keşfetmek ve o fırsatların
                üzerine yeni işletmeler inşa etmek istiyoruz.
              </p>
              <p>
                Önümüzdeki dönemde teknoloji, dijital ticaret, finans ve yeni
                nesil tüketici deneyimleri etrafında yeni fikirleri
                araştırmaya ve yeni markalar geliştirmeye devam edeceğiz.
              </p>
              <p>Bugün portföyümüzde bulunan markalar bunun başlangıç noktası.</p>
              <p className="text-foreground">
                Yarın hangi markaların TRADERS.TR çatısı altında olacağını ise
                henüz bilmiyoruz. Ama nasıl inşa edeceğimizi biliyoruz.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Misyon / Vizyon */}
      <section className="border-b border-border py-28 md:py-36">
        <div className="container-edit grid grid-cols-1 gap-12 md:grid-cols-2">
          <ScrollReveal>
            <SectionLabel>Misyon</SectionLabel>
            <p className="mt-4 text-xl font-medium leading-relaxed tracking-tight text-foreground md:text-2xl">
              Umut vadeden fikirleri; insanların hayatında gerçek karşılığı
              olan, teknolojiyle güçlendirilmiş ve uzun vadede değer
              yaratabilen işletmelere dönüştürmek.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <SectionLabel>Vizyon</SectionLabel>
            <p className="mt-4 text-xl font-medium leading-relaxed tracking-tight text-foreground md:text-2xl">
              Değişen teknoloji, pazarlar ve tüketici davranışlarıyla birlikte
              gelişebilen; farklı sektörlerde anlamlı değer yaratan bağımsız
              markalardan oluşan güçlü ve sürdürülebilir bir girişim portföyü
              oluşturmak.
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
              Farklı fikirleri keşfediyor, onları markalara dönüştürüyor ve
              geleceğe hazırlanabilecek işletmeler inşa ediyoruz.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
