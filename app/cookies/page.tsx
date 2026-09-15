import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: "TRADERS.TR çerez ve benzeri depolama teknolojileri politikası.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Çerez Politikası"
      updated="15 Eylül 2026"
      intro="traders.tr'yi mümkün olduğunca sade ve izlemeden uzak tutmaya özen gösteriyoruz. Bu sayfa, sitenin çalışması sırasında tarayıcınızda hangi bilgilerin tutulduğunu ve bunları nasıl kontrol edebileceğinizi açıklar."
      sections={[
        {
          id: "cerez-nedir",
          title: "Çerez Nedir",
          content: (
            <p>
              Çerez (cookie), bir web sitesini ziyaret ettiğinizde
              tarayıcınıza kaydedilen küçük bir metin dosyasıdır. Çerezler
              genellikle oturum bilgisini hatırlamak, tercihleri saklamak
              veya kullanım istatistiği toplamak için kullanılır.
            </p>
          ),
        },
        {
          id: "kullandiklarimiz",
          title: "traders.tr'de Kullanılan Depolama Türleri",
          content: (
            <>
              <p>
                traders.tr, üyelik gerektirmeyen bir kurumsal sitedir; bu
                nedenle oturum açma çerezi, sepet çerezi veya reklam takip
                çerezi kullanmıyoruz. Sitede kullanılan tek istemci tarafı
                depolama, tarayıcınızın{" "}
                <strong className="text-foreground">localStorage</strong>{" "}
                alanıdır ve yalnızca arayüz tercihlerinizi (örneğin bir
                bölümün açık/kapalı durumu) hatırlamak için, tamamen
                cihazınızda tutulur — bize veya üçüncü bir tarafa
                gönderilmez.
              </p>
              <p>
                Sunucu tarafında, sitenin çalışması için gerekli olan zorunlu
                teknik başlıklar (ör. güvenlik başlıkları) dışında herhangi
                bir izleme mekanizması bulunmuyor.
              </p>
            </>
          ),
        },
        {
          id: "ucuncu-taraf",
          title: "Üçüncü Taraf Çerezleri",
          content: (
            <p>
              Şu anda traders.tr üzerinde Google Analytics, Meta Pixel gibi
              üçüncü taraf analitik veya reklam izleme araçları
              kullanılmamaktadır. Bu durum ileride değişirse, bu sayfa
              güncellenecek ve kullanılan araçlar burada açıkça
              listelenecektir.
            </p>
          ),
        },
        {
          id: "yonetim",
          title: "Depolamayı Nasıl Yönetebilirsiniz",
          content: (
            <p>
              Tarayıcınızın ayarlarından, sitelerin cihazınızda tuttuğu
              yerel verileri (localStorage dahil) istediğiniz zaman
              görüntüleyebilir ve temizleyebilirsiniz. Bu işlem, yalnızca
              arayüz tercihlerinizin sıfırlanmasına yol açar; sitenin temel
              işlevselliğini etkilemez.
            </p>
          ),
        },
        {
          id: "guncellemeler",
          title: "Politika Güncellemeleri",
          content: (
            <p>
              Bu politikayı, sitede kullanılan teknolojilerdeki
              değişikliklere göre güncelleyebiliriz. Güncel sürüm her zaman
              bu sayfada, "son güncelleme" tarihiyle birlikte yer alır. Daha
              genel gizlilik uygulamalarımız için{" "}
              <Link href="/privacy" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                Gizlilik Politikası
              </Link>{" "}
              sayfamıza bakabilirsiniz.
            </p>
          ),
        },
      ]}
    />
  );
}
