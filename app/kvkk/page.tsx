import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında TRADERS.TR aydınlatma metni.",
  alternates: { canonical: "/kvkk" },
};

export default function KvkkPage() {
  return (
    <LegalPage
      title="KVKK Aydınlatma Metni"
      updated="15 Eylül 2026"
      intro="Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun (“KVKK”) 10. maddesi uyarınca, traders.tr üzerinden bizimle iletişime geçtiğinizde kişisel verilerinizin hangi amaçla, nasıl ve hangi hukuki sebeple işlendiğini açıklamak amacıyla hazırlanmıştır."
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
              <Link href="/contact" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
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
            <p>
              Kişisel verileriniz, traders.tr/contact sayfasındaki formu
              doldurup göndermeniz üzerine, elektronik ortamda doğrudan
              sizden toplanır. İşleme, KVKK m.5/2-(f) uyarınca "ilgili
              kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla,
              veri sorumlusunun meşru menfaati için veri işlenmesinin
              zorunlu olması" hukuki sebebine dayanır; talebinizi
              yanıtlayabilmemiz için bu veriler zorunludur.
            </p>
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
              <Link href="/contact" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                iletişim sayfamızdaki
              </Link>{" "}
              formu "Genel" kategorisiyle doldurarak veya formda belirttiğiniz
              e-posta adresi üzerinden bize iletebilirsiniz. Başvurunuz,
              kimliğinizi doğrulayabilmemiz kaydıyla, KVKK'da öngörülen
              süreler içinde sonuçlandırılır.
            </p>
          ),
        },
      ]}
    />
  );
}
