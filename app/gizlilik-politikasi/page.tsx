"use client";

import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { useLang } from "@/lib/i18n";

export default function PrivacyPage() {
  const { lang } = useLang();
  const isEn = lang === "en";

  if (isEn) {
    return (
      <LegalPage
        title="Privacy Policy"
        updated="September 15, 2026"
        intro="This policy explains what information we collect when you interact with us through traders.tr, why and how we use it, who we share it with, and your rights. At TRADERS.TR, we only collect information we genuinely need, and we always limit it to a specific, clear purpose."
        sections={[
          {
            id: "veri-sorumlusu",
            title: "Data Controller",
            content: (
              <p>
                Under this policy, your personal data is processed by TRADERS.TR as the data controller. For all questions and requests regarding this policy, you can reach us through our{" "}
                <Link href="/iletisim" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                  contact page
                </Link>.
              </p>
            ),
          },
          {
            id: "kapsam",
            title: "Scope",
            content: (
              <>
                <p>
                  This policy applies only to the traders.tr domain and pages under it. Orca Labs, KriptoBeyan, and Zesta Art&amp;Design are independent brands; they apply their own privacy policies on their respective platforms. For those pages, we recommend referring to the privacy text on that brand's own site.
                </p>
                <p>
                  traders.tr is not an e-commerce or membership platform; it does not create accounts, accept payments, or conduct cookie-based ad tracking. The only mechanism that collects personal data on the site is the contact form.
                </p>
              </>
            ),
          },
          {
            id: "topladigimiz-bilgiler",
            title: "Information We Collect",
            content: (
              <>
                <p>
                  <strong className="text-foreground">Information you share via the contact form:</strong>{" "}
                  full name, email address, company name (optional), message subject, your request category (partnership, venture, press, or general), and message content. This information is collected only when you fill in and submit the form, at your own initiative.
                </p>
                <p>
                  <strong className="text-foreground">Technical data collected automatically:</strong>{" "}
                  our servers maintain standard web server logs for security and fault detection purposes (IP address, browser information, request time, page requested). These records are not processed to directly target individuals and are not used for advertising or marketing purposes.
                </p>
                <p>
                  No third-party analytics or ad tracking tools (e.g., Google Analytics, Meta Pixel) are currently in use on the site. If this changes, this page and the{" "}
                  <Link href="/cerez-politikasi" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                    Cookie Policy
                  </Link>{" "}
                  will be updated and announced.
                </p>
              </>
            ),
          },
          {
            id: "kullanim-amaci",
            title: "How We Use Your Information",
            content: (
              <>
                <p>We use the information we collect only for the following purposes:</p>
                <ul className="ml-5 list-disc space-y-2 marker:text-muted">
                  <li>To evaluate the request you submitted via the contact form and get back to you,</li>
                  <li>To route partnership, venture, or press requests to the appropriate team,</li>
                  <li>To ensure the security of the site and prevent misuse and spam,</li>
                  <li>To fulfill a legal obligation (such as providing information to authorized authorities when required).</li>
                </ul>
                <p>
                  We do not use your information to create profiles, make automated decisions, or build marketing lists.
                </p>
              </>
            ),
          },
          {
            id: "paylasim",
            title: "Information Sharing",
            content: (
              <>
                <p>
                  We do not sell your personal data. Your data may be shared in limited circumstances only in the following situations:
                </p>
                <ul className="ml-5 list-disc space-y-2 marker:text-muted">
                  <li>
                    Infrastructure providers we use to operate the site (server hosting, database) — only to provide the technical service, without using the data on their own behalf,
                  </li>
                  <li>In case of a legal obligation, court order, or official authority request,</li>
                  <li>In another situation where we have obtained your explicit consent.</li>
                </ul>
              </>
            ),
          },
          {
            id: "saklama-suresi",
            title: "Data Retention Period",
            content: (
              <p>
                We retain the information you provide via the contact form for a reasonable period to conclude your request and maintain any follow-up correspondence. Once your request is concluded and there is no legal retention obligation, your data is deleted or anonymized. You can request deletion at any time by{" "}
                <Link href="/iletisim" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                  contacting us
                </Link>.
              </p>
            ),
          },
          {
            id: "guvenlik",
            title: "Data Security",
            content: (
              <>
                <p>
                  traders.tr serves all traffic over encrypted connections (HTTPS/TLS). Standard security measures are applied on the server side, including content security policy (CSP), headers blocking clickjacking, and MIME type validation.
                </p>
                <p>
                  No system is one hundred percent risk-free; however, we protect your data with reasonable technical and administrative measures and limit access to only those who need to process this information.
                </p>
              </>
            ),
          },
          {
            id: "haklariniz",
            title: "Your Rights",
            content: (
              <p>
                If you reside in Turkey, you can find the full list of your rights regarding your personal data on our{" "}
                <Link href="/kvkk" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                  KVKK Notice
                </Link>{" "}
                page. In summary, you have the right to learn whether your data is being processed, request information, request correction or deletion, and object to processing.
              </p>
            ),
          },
          {
            id: "cocuklarin-gizliligi",
            title: "Children's Privacy",
            content: (
              <p>
                traders.tr does not provide services aimed at individuals under 18 years of age and does not knowingly collect personal data from children. If we become aware that a child has provided us with personal data, we will delete it within a reasonable period.
              </p>
            ),
          },
          {
            id: "degisiklikler",
            title: "Policy Changes",
            content: (
              <p>
                We may update this policy in response to changes in our services or legal requirements. Significant changes will be published on this page along with the "last updated" date.
              </p>
            ),
          },
          {
            id: "iletisim",
            title: "Contact Us",
            content: (
              <p>
                For questions or requests regarding this policy, you can reach us by filling in the form on our{" "}
                <Link href="/iletisim" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                  contact page
                </Link>.
              </p>
            ),
          },
        ]}
      />
    );
  }

  return (
    <LegalPage
      title="Gizlilik Politikası"
      updated="15 Eylül 2026"
      intro="Bu politika, traders.tr üzerinden bizimle etkileşime geçtiğinizde hangi bilgileri topladığımızı, bu bilgileri neden ve nasıl kullandığımızı, kimlerle paylaştığımızı ve haklarınızı açıklar. TRADERS.TR olarak, yalnızca gerçekten ihtiyaç duyduğumuz bilgiyi topluyor ve bunu her zaman belirli, açık bir amaçla sınırlı tutuyoruz."
      sections={[
        {
          id: "veri-sorumlusu",
          title: "Veri Sorumlusu",
          content: (
            <p>
              Bu politika kapsamında kişisel verileriniz, TRADERS.TR
              tarafından veri sorumlusu sıfatıyla işlenir. Bu politikayla
              ilgili tüm sorularınız ve talepleriniz için{" "}
              <Link href="/iletisim" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                iletişim sayfamız
              </Link>{" "}
              üzerinden bize ulaşabilirsiniz.
            </p>
          ),
        },
        {
          id: "kapsam",
          title: "Kapsam",
          content: (
            <>
              <p>
                Bu politika yalnızca traders.tr alan adı ve bu alan adı
                altındaki sayfalar için geçerlidir. Orca Labs, KriptoBeyan ve Zesta Art&amp;Design
                bağımsız markalarımızdır; kendi platformlarında kendi
                gizlilik politikalarını uygularlar. Bu sayfaların
                bağlantıları için ilgili markanın kendi sitesindeki gizlilik
                metnine bakmanızı öneririz.
              </p>
              <p>
                traders.tr bir e-ticaret veya üyelik platformu değildir;
                hesap oluşturmaz, ödeme almaz ve çerez tabanlı reklam
                takibi yapmaz. Site üzerinde kişisel veri toplayan tek
                mekanizma iletişim formudur.
              </p>
            </>
          ),
        },
        {
          id: "topladigimiz-bilgiler",
          title: "Topladığımız Bilgiler",
          content: (
            <>
              <p>
                <strong className="text-foreground">
                  İletişim formu aracılığıyla paylaştığınız bilgiler:
                </strong>{" "}
                ad soyad, e-posta adresi, şirket adı (opsiyonel), mesaj
                konusu, talep kategoriniz (iş ortaklığı, girişim, basın veya
                genel) ve mesaj içeriğiniz. Bu bilgiler yalnızca formu
                doldurup gönderdiğinizde, sizin isteğinizle toplanır.
              </p>
              <p>
                <strong className="text-foreground">
                  Otomatik olarak toplanan teknik veriler:
                </strong>{" "}
                sunucularımız, güvenlik ve arıza tespiti amacıyla standart
                web sunucu günlükleri tutar (IP adresi, tarayıcı bilgisi,
                istek zamanı, talep edilen sayfa). Bu kayıtlar kişiyi doğrudan
                hedefleyecek şekilde işlenmez ve reklam/pazarlama amacıyla
                kullanılmaz.
              </p>
              <p>
                Şu anda sitede üçüncü taraf analitik veya reklam izleme
                aracı (ör. Google Analytics, Meta Pixel) kullanılmamaktadır.
                Bu durum değişirse, bu sayfa ve{" "}
                <Link href="/cerez-politikasi" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                  Çerez Politikası
                </Link>{" "}
                güncellenerek duyurulacaktır.
              </p>
            </>
          ),
        },
        {
          id: "kullanim-amaci",
          title: "Bilgilerinizi Nasıl Kullanıyoruz",
          content: (
            <>
              <p>Topladığımız bilgileri yalnızca aşağıdaki amaçlarla kullanırız:</p>
              <ul className="ml-5 list-disc space-y-2 marker:text-muted">
                <li>İletişim formuyla ilettiğiniz talebi değerlendirmek ve size geri dönüş yapmak,</li>
                <li>İş ortaklığı, girişim veya basın taleplerini doğru ekibe yönlendirmek,</li>
                <li>Sitenin güvenliğini sağlamak, kötüye kullanımı ve spam'i önlemek,</li>
                <li>Yasal bir yükümlülüğü yerine getirmek (talep edilmesi hâlinde yetkili mercilere bilgi sağlamak gibi).</li>
              </ul>
              <p>
                Bilgilerinizi profil oluşturmak, otomatik karar vermek veya
                pazarlama listesi oluşturmak için kullanmıyoruz.
              </p>
            </>
          ),
        },
        {
          id: "paylasim",
          title: "Bilgi Paylaşımı",
          content: (
            <>
              <p>
                Kişisel verilerinizi satmıyoruz. Verileriniz yalnızca
                aşağıdaki durumlarda, sınırlı ölçüde paylaşılabilir:
              </p>
              <ul className="ml-5 list-disc space-y-2 marker:text-muted">
                <li>
                  Sitenin çalışması için kullandığımız altyapı sağlayıcıları
                  (sunucu barındırma, veritabanı) — yalnızca teknik hizmeti
                  sağlamak amacıyla, veriyi kendi adlarına kullanmadan,
                </li>
                <li>Yasal bir zorunluluk, mahkeme kararı veya resmi makam talebi hâlinde,</li>
                <li>Açık rızanızı aldığımız başka bir durumda.</li>
              </ul>
            </>
          ),
        },
        {
          id: "saklama-suresi",
          title: "Veri Saklama Süresi",
          content: (
            <p>
              İletişim formu üzerinden ilettiğiniz bilgileri, talebinizi
              sonuçlandırmak ve olası takip yazışmalarını sürdürebilmek için
              makul bir süre boyunca saklarız. Talebiniz sonuçlandıktan ve
              yasal bir saklama zorunluluğu bulunmadığı sürece, verileriniz
              silinir veya anonim hâle getirilir. Silinmesini istediğiniz her
              an{" "}
              <Link href="/iletisim" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                bize ulaşarak
              </Link>{" "}
              talep edebilirsiniz.
            </p>
          ),
        },
        {
          id: "guvenlik",
          title: "Veri Güvenliği",
          content: (
            <>
              <p>
                traders.tr, tüm trafiği şifrelenmiş bağlantı (HTTPS/TLS)
                üzerinden sunar. Sunucu tarafında; içerik güvenlik politikası
                (CSP), tıklama korumasını engelleyen başlıklar ve MIME tipi
                doğrulaması gibi standart güvenlik önlemleri uygulanır.
              </p>
              <p>
                Hiçbir sistem yüzde yüz risksiz değildir; ancak verilerinizi
                makul teknik ve idari tedbirlerle koruruz ve erişimi yalnızca
                bu bilgiyi işlemesi gereken kişilerle sınırlı tutarız.
              </p>
            </>
          ),
        },
        {
          id: "haklariniz",
          title: "Haklarınız",
          content: (
            <p>
              Türkiye'de ikamet ediyorsanız, kişisel verilerinizle ilgili
              haklarınızın tam listesini{" "}
              <Link href="/kvkk" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                KVKK Aydınlatma Metni
              </Link>{" "}
              sayfamızda bulabilirsiniz. Özetle; verilerinizin işlenip
              işlenmediğini öğrenme, bilgi talep etme, düzeltilmesini veya
              silinmesini isteme ve işlemeye itiraz etme hakkına sahipsiniz.
            </p>
          ),
        },
        {
          id: "cocuklarin-gizliligi",
          title: "Çocukların Gizliliği",
          content: (
            <p>
              traders.tr, 18 yaşın altındaki kişilere yönelik bir hizmet
              sunmamaktadır ve bilerek çocuklardan kişisel veri toplamaz. Bir
              çocuğun bize kişisel veri sağladığını fark edersek, bu veriyi
              makul bir süre içinde sileriz.
            </p>
          ),
        },
        {
          id: "degisiklikler",
          title: "Politika Değişiklikleri",
          content: (
            <p>
              Bu politikayı, hizmetlerimizdeki değişikliklere veya yasal
              gerekliliklere göre güncelleyebiliriz. Önemli değişiklikler bu
              sayfada "son güncelleme" tarihiyle birlikte yayımlanır.
            </p>
          ),
        },
        {
          id: "iletisim",
          title: "Bize Ulaşın",
          content: (
            <p>
              Bu politikayla ilgili sorularınız veya talepleriniz için{" "}
              <Link href="/iletisim" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                iletişim sayfamız
              </Link>{" "}
              üzerinden bize ulaşabilirsiniz.
            </p>
          ),
        },
      ]}
    />
  );
}
