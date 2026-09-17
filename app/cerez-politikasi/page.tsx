import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Çerez Politikası",
  description: "TRADERS.TR çerez ve benzeri depolama teknolojileri politikası.",
  alternates: { canonical: "/cerez-politikasi" },
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Çerez Politikası"
      updated="17 Eylül 2026"
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
                çerezi kullanmıyoruz. Aşağıdaki tablo, sitede kullanılan tek
                istemci tarafı depolama türünü özetliyor:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left text-[14px]">
                  <thead>
                    <tr className="border-b border-border text-[11px] uppercase tracking-[0.1em] text-muted">
                      <th className="py-2 pr-4 font-medium">Tür</th>
                      <th className="py-2 pr-4 font-medium">Amaç</th>
                      <th className="py-2 font-medium">Süre</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-200">
                    <tr className="border-b border-border">
                      <td className="py-3 pr-4">Tercih (localStorage)</td>
                      <td className="py-3 pr-4">
                        Arayüz tercihlerini (ör. bir bölümün açık/kapalı
                        durumu) tamamen cihazınızda hatırlamak
                      </td>
                      <td className="py-3">Siz silene kadar, yalnızca cihazınızda</td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4">Zorunlu / Analitik / Reklam</td>
                      <td className="py-3 pr-4 text-muted">Kullanılmıyor</td>
                      <td className="py-3 text-muted">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                localStorage'da tutulan veriler bize veya üçüncü bir tarafa
                hiçbir şekilde gönderilmez. Sunucu tarafında, sitenin
                çalışması için gerekli olan zorunlu teknik başlıklar (ör.
                güvenlik başlıkları) dışında herhangi bir izleme mekanizması
                bulunmuyor.
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
          id: "cerez-onayi-kategoriler",
          title: "Çerez Onayı ve Kategoriler",
          content: (
            <>
              <p>
                Siteyi ilk ziyaretinizde ekranın altında bir bilgilendirme
                kutusu görürsünüz. Buradan &quot;Tüm Çerezleri Kabul Et&quot;,
                &quot;Reddet&quot; seçeneklerinden birini seçebilir, veya
                &quot;Tercihleri Yönet&quot; ile aşağıdaki üç kategoriyi ayrı
                ayrı açıp kapatabilirsiniz. Seçiminiz yalnızca cihazınızda
                (localStorage) hatırlanır ve dilediğiniz zaman geri
                çekilebilir.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  <strong className="text-foreground">
                    Zorunlu Çerezler (Her Zaman Aktif):
                  </strong>{" "}
                  TRADERS.TR kurumsal ana sayfasının güvenle yüklenmesi, iş
                  ortaklığı ve iletişim formlarının kararlı çalışması için
                  teknik olarak zorunludur; kullanıcı tarafından kapatılamaz.
                </li>
                <li>
                  <strong className="text-foreground">
                    Performans ve Analiz Çerezleri (Açık/Kapalı):
                  </strong>{" "}
                  Ziyaretçilerin &quot;İçgörüler&quot;, &quot;Markalarımız&quot;
                  ve &quot;Girişimler&quot; bölümlerindeki içerikleri nasıl
                  incelediğini analiz ederek kurumsal platformumuzu
                  geliştirmemize yardımcı olur.
                </li>
                <li>
                  <strong className="text-foreground">
                    Pazarlama ve Reklam Çerezleri (Açık/Kapalı):
                  </strong>{" "}
                  Bünyemizde geliştirilen yeni bağımsız markaların
                  lansmanları, ekosistem duyuruları ve stratejik iş ortaklığı
                  süreçlerine yönelik kurumsal bildirimleri ilgi alanlarınıza
                  göre optimize etmemizi sağlar.
                </li>
              </ul>
              <p>
                Yukarıdaki üç kategori bugün için birer kullanıcı tercihi
                olarak saklanır; traders.tr şu an bu tercihlere bağlı çalışan
                herhangi bir üçüncü taraf analiz veya reklam aracı
                kullanmamaktadır (bkz. bir üstteki bölüm). Bu durum
                değiştiğinde, ilgili araç yalnızca kullanıcının seçtiği
                kategoriye göre etkinleştirilecektir.
              </p>
            </>
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
              <Link href="/gizlilik-politikasi" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
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
