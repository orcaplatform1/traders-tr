"use client";

import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { useLang } from "@/lib/i18n";

export default function KvkkPage() {
  const { lang } = useLang();
  const isEn = lang === "en";

  if (isEn) {
    return (
      <LegalPage
        title="Data Protection Notice"
        updated="September 15, 2026"
        intro="This notice has been prepared pursuant to Article 10 of Law No. 6698 on the Protection of Personal Data ('KVKK') to explain the purpose, manner, and legal basis on which your personal data is processed when you contact us through traders.tr."
        sections={[
          {
            id: "veri-sorumlusu",
            title: "Identity of the Data Controller",
            content: (
              <p>
                TRADERS.TR ("Company") acts as the data controller under KVKK in respect of the personal data you share through the contact form on traders.tr. For requests regarding our data processing activities, you can reach us through our{" "}
                <Link href="/iletisim" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                  contact page
                </Link>.
              </p>
            ),
          },
          {
            id: "isleme-amaci",
            title: "Purpose of Processing Personal Data",
            content: (
              <>
                <p>Your personal data is processed solely for the following purposes:</p>
                <ul className="ml-5 list-disc space-y-2 marker:text-muted">
                  <li>To evaluate and respond to the request you submitted via the contact form,</li>
                  <li>To route your partnership, venture, or press requests to the relevant department,</li>
                  <li>To ensure the security of our company and users and prevent misuse,</li>
                  <li>To fulfill our legal obligations.</li>
                </ul>
              </>
            ),
          },
          {
            id: "veri-kategorileri",
            title: "Categories of Personal Data Processed",
            content: (
              <>
                <p>
                  <strong className="text-foreground">Identity data:</strong> full name.
                </p>
                <p>
                  <strong className="text-foreground">Contact data:</strong>{" "}
                  email address, company name (if shared).
                </p>
                <p>
                  <strong className="text-foreground">Transaction security data:</strong>{" "}
                  the timestamp generated at the moment of form submission and standard server log records (IP address, browser information).
                </p>
                <p>
                  <strong className="text-foreground">Request content:</strong>{" "}
                  your message subject, category (partnership, venture, press, general), and message text.
                </p>
              </>
            ),
          },
          {
            id: "toplama-yontemi",
            title: "Collection Method and Legal Basis",
            content: (
              <>
                <p>
                  Your personal data is collected directly from you, electronically, when you fill in and submit the form on the traders.tr/iletisim page.
                </p>
                <p>
                  Processing is primarily based on the legal ground under KVKK Art. 5/2 of "(f) processing being necessary for the legitimate interests pursued by the data controller, provided that this processing shall not violate the fundamental rights and freedoms of the data subject." Depending on the nature of your request, grounds "(c) processing being necessary for the performance of a contract to which the data subject is party or in order to take steps at the request of the data subject prior to entering into a contract" or "(ç) processing being necessary for compliance with a legal obligation" may also apply. In any case, the data we collect to respond to your request is limited to its purpose and proportionate.
                </p>
              </>
            ),
          },
          {
            id: "aktarim",
            title: "Transfer of Personal Data",
            content: (
              <p>
                Your personal data may be shared only with our hosting and database service providers that provide the technical infrastructure for the site (to the extent necessary to deliver the service) and with legally authorized public institutions and organizations, upon request. Your data is not sold or rented to third parties for marketing purposes.
              </p>
            ),
          },
          {
            id: "haklariniz",
            title: "Your Rights Under KVKK",
            content: (
              <>
                <p>Pursuant to Article 11 of KVKK, you may exercise the following rights by applying to us:</p>
                <ul className="ml-5 list-disc space-y-2 marker:text-muted">
                  <li>To learn whether your personal data is being processed,</li>
                  <li>To request information if it has been processed,</li>
                  <li>To learn the purpose of processing and whether it is being used in accordance with its purpose,</li>
                  <li>To know the third parties to whom it has been transferred domestically or abroad,</li>
                  <li>To request correction if it has been processed incompletely or inaccurately,</li>
                  <li>To request deletion or destruction within the framework of the conditions stipulated in KVKK,</li>
                  <li>To request that the transactions performed be notified to third parties to whom your data has been transferred,</li>
                  <li>To object to a result arising against you through analysis of the processed data exclusively by automated systems,</li>
                  <li>To demand compensation for damages in the event of unlawful processing.</li>
                </ul>
              </>
            ),
          },
          {
            id: "basvuru",
            title: "How to Apply",
            content: (
              <p>
                To exercise the rights above, you can submit your request by filling in the form on our{" "}
                <Link href="/iletisim" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                  contact page
                </Link>{" "}
                under the "General" category, or via the email address stated on the form. Your request must include information that will allow us to verify your identity. Your application will be concluded in the shortest possible time and within the maximum period of 30 days stipulated by KVKK; your request will be answered free of charge, however, if the transaction requires an additional cost, the fee in the tariff determined by the Personal Data Protection Board may be requested.
              </p>
            ),
          },
        ]}
      />
    );
  }

  return (
    <LegalPage
      title="KVKK Aydınlatma Metni"
      updated="15 Eylül 2026"
      intro={`Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun ("KVKK") 10. maddesi uyarınca, traders.tr üzerinden bizimle iletişime geçtiğinizde kişisel verilerinizin hangi amaçla, nasıl ve hangi hukuki sebeple işlendiğini açıklamak amacıyla hazırlanmıştır.`}
      sections={[
        {
          id: "veri-sorumlusu",
          title: "Veri Sorumlusunun Kimliği",
          content: (
            <p>
              TRADERS.TR ("Şirket"), traders.tr üzerinden iletişim formu
              aracılığıyla paylaştığınız kişisel verileriniz bakımından KVKK
              uyarınca veri sorumlusu sıfatıyla hareket eder. Veri işleme
              faaliyetlerimizle ilgili talepleriniz için{" "}
              <Link href="/iletisim" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                iletişim sayfamız
              </Link>{" "}
              üzerinden bize ulaşabilirsiniz.
            </p>
          ),
        },
        {
          id: "isleme-amaci",
          title: "Kişisel Verilerin İşlenme Amacı",
          content: (
            <>
              <p>Kişisel verileriniz aşağıdaki amaçlarla sınırlı olarak işlenir:</p>
              <ul className="ml-5 list-disc space-y-2 marker:text-muted">
                <li>İletişim formu üzerinden ilettiğiniz talebi değerlendirmek ve yanıtlamak,</li>
                <li>İş ortaklığı, girişim veya basın taleplerinizi ilgili birime yönlendirmek,</li>
                <li>Şirketimizin ve kullanıcılarımızın güvenliğini sağlamak, kötüye kullanımı önlemek,</li>
                <li>Yasal yükümlülüklerimizi yerine getirmek.</li>
              </ul>
            </>
          ),
        },
        {
          id: "veri-kategorileri",
          title: "İşlenen Kişisel Veri Kategorileri",
          content: (
            <>
              <p>
                <strong className="text-foreground">Kimlik verisi:</strong> ad
                soyad.
              </p>
              <p>
                <strong className="text-foreground">İletişim verisi:</strong>{" "}
                e-posta adresi, şirket adı (paylaşmanız hâlinde).
              </p>
              <p>
                <strong className="text-foreground">İşlem güvenliği verisi:</strong>{" "}
                formu gönderdiğiniz anda oluşan zaman damgası ve standart
                sunucu günlük kayıtları (IP adresi, tarayıcı bilgisi).
              </p>
              <p>
                <strong className="text-foreground">Talep içeriği:</strong>{" "}
                mesaj konunuz, kategoriniz (iş ortaklığı, girişim, basın,
                genel) ve mesaj metniniz.
              </p>
            </>
          ),
        },
        {
          id: "toplama-yontemi",
          title: "Toplanma Yöntemi ve Hukuki Sebebi",
          content: (
            <>
              <p>
                Kişisel verileriniz, traders.tr/iletisim sayfasındaki formu
                doldurup göndermeniz üzerine, elektronik ortamda doğrudan
                sizden toplanır.
              </p>
              <p>
                İşleme, KVKK m.5/2 kapsamında öncelikle "(f) ilgili kişinin
                temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri
                sorumlusunun meşru menfaati için veri işlenmesinin zorunlu
                olması" hukuki sebebine dayanır. Talebinizin niteliğine
                göre, "(c) bir sözleşmenin kurulması veya ifasıyla doğrudan
                doğruya ilgili olması" ya da "(ç) hukuki yükümlülüğün yerine
                getirilmesi" sebepleri de devreye girebilir. Her hâlükârda,
                talebinizi yanıtlayabilmemiz için topladığımız veriler,
                amaçla sınırlı ve ölçülüdür.
              </p>
            </>
          ),
        },
        {
          id: "aktarim",
          title: "Kişisel Verilerin Aktarılması",
          content: (
            <p>
              Kişisel verileriniz, yalnızca sitenin teknik altyapısını
              sağlayan barındırma ve veritabanı hizmet sağlayıcılarımızla
              (hizmeti sunabilmemiz için gerekli ölçüde) ve yasal olarak
              yetkili kamu kurum ve kuruluşlarıyla, talep edilmesi hâlinde,
              paylaşılabilir. Verileriniz pazarlama amacıyla üçüncü kişilere
              satılmaz veya kiralanmaz.
            </p>
          ),
        },
        {
          id: "haklariniz",
          title: "KVKK Kapsamındaki Haklarınız",
          content: (
            <>
              <p>KVKK'nın 11. maddesi uyarınca bize başvurarak aşağıdaki haklarınızı kullanabilirsiniz:</p>
              <ul className="ml-5 list-disc space-y-2 marker:text-muted">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                <li>İşlenmişse buna ilişkin bilgi talep etme,</li>
                <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme,</li>
                <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme,</li>
                <li>
                  KVKK'da öngörülen şartlar çerçevesinde silinmesini veya yok
                  edilmesini isteme,
                </li>
                <li>Yapılan işlemlerin, verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
                <li>
                  İşlenen verilerin münhasıran otomatik sistemler
                  vasıtasıyla analiz edilmesi suretiyle aleyhinize bir
                  sonucun ortaya çıkmasına itiraz etme,
                </li>
                <li>
                  Kanuna aykırı işleme sebebiyle zarara uğramanız hâlinde
                  zararın giderilmesini talep etme.
                </li>
              </ul>
            </>
          ),
        },
        {
          id: "basvuru",
          title: "Başvuru Yöntemi",
          content: (
            <p>
              Yukarıdaki haklarınızı kullanmak için talebinizi{" "}
              <Link href="/iletisim" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                iletişim sayfamızdaki
              </Link>{" "}
              formu "Genel" kategorisiyle doldurarak veya formda belirttiğiniz
              e-posta adresi üzerinden bize iletebilirsiniz. Talebinizde
              kimliğinizi doğrulayabilmemizi sağlayacak bilgilere yer
              vermeniz gerekir. Başvurunuz, niteliğine göre en kısa sürede
              ve KVKK'da öngörülen azami süre olan 30 gün içinde
              sonuçlandırılır; talebiniz ücretsiz olarak yanıtlanır, ancak
              işlemin ayrıca bir maliyet gerektirmesi hâlinde Kişisel
              Verileri Koruma Kurulu'nca belirlenen tarifedeki ücret talep
              edilebilir.
            </p>
          ),
        },
      ]}
    />
  );
}
