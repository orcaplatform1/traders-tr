import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "TRADERS.TR gizlilik politikası — hangi bilgileri topladığımız, nasıl kullandığımız ve haklarınız.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Gizlilik Politikası"
      updated="15 Eylül 2026"
      intro="Bu politika, traders.tr üzerinden bizimle etkileşime geçtiğinizde hangi bilgileri topladığımızı, bu bilgileri neden ve nasıl kullandığımızı, kimlerle paylaştığımızı ve haklarınızı açıklar. TRADERS.TR olarak, yalnızca gerçekten ihtiyaç duyduğumuz bilgiyi topluyor ve bunu her zaman belirli, açık bir amaçla sınırlı tutuyoruz."
      sections={[
        {
          id: "kapsam",
          title: "Kapsam",
          content: (
            <>
              <p>
                Bu politika yalnızca traders.tr alan adı ve bu alan adı
                altındaki sayfalar için geçerlidir. ORCA, KriptoBeyan ve Zesta
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
                <Link href="/cookies" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
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
              <Link href="/contact" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
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
              <Link href="/contact" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
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
