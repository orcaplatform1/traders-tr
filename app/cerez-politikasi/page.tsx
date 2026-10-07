"use client";

import Link from "next/link";
import { LegalPage } from "@/components/legal-page";
import { useLang } from "@/lib/i18n";

export default function CookiesPage() {
  const { lang } = useLang();
  const isEn = lang === "en";

  if (isEn) {
    return (
      <LegalPage
        title="Cookie Policy"
        updated="September 17, 2026"
        intro="We take care to keep traders.tr as minimal and tracking-free as possible. This page explains what information is stored in your browser while using the site and how you can control it."
        sections={[
          {
            id: "cerez-nedir",
            title: "What Is a Cookie",
            content: (
              <p>
                A cookie is a small text file saved to your browser when you visit a website. Cookies are typically used to remember session information, store preferences, or collect usage statistics.
              </p>
            ),
          },
          {
            id: "kullandiklarimiz",
            title: "Storage Types Used on traders.tr",
            content: (
              <>
                <p>
                  traders.tr is a corporate site that does not require membership; therefore, we do not use session cookies, cart cookies, or ad tracking cookies. The table below summarizes the only client-side storage type used on the site:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left text-[14px]">
                    <thead>
                      <tr className="border-b border-border text-[11px] uppercase tracking-[0.1em] text-muted">
                        <th className="py-2 pr-4 font-medium">Type</th>
                        <th className="py-2 pr-4 font-medium">Purpose</th>
                        <th className="py-2 font-medium">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-200">
                      <tr className="border-b border-border">
                        <td className="py-3 pr-4">Preference (localStorage)</td>
                        <td className="py-3 pr-4">
                          To remember interface preferences (e.g., language selection) entirely on your device
                        </td>
                        <td className="py-3">Until you delete it, only on your device</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4">Essential / Analytics / Advertising</td>
                        <td className="py-3 pr-4 text-muted">Not used</td>
                        <td className="py-3 text-muted">—</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  Data stored in localStorage is never sent to us or any third party. On the server side, there is no tracking mechanism other than the essential technical headers (e.g., security headers) required for the site to function.
                </p>
              </>
            ),
          },
          {
            id: "ucuncu-taraf",
            title: "Third-Party Cookies",
            content: (
              <p>
                Third-party analytics or ad tracking tools such as Google Analytics or Meta Pixel are not currently used on traders.tr. If this changes in the future, this page will be updated and the tools used will be explicitly listed here.
              </p>
            ),
          },
          {
            id: "cerez-onayi-kategoriler",
            title: "Cookie Consent and Categories",
            content: (
              <>
                <p>
                  On your first visit to the site, you will see an information banner at the bottom of the screen. From there you can choose &quot;Accept All Cookies&quot;, &quot;Reject&quot;, or use &quot;Manage Preferences&quot; to toggle the three categories below individually. Your choice is remembered only on your device (localStorage) and can be withdrawn at any time.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <strong className="text-foreground">
                      Essential Cookies (Always Active):
                    </strong>{" "}
                    Technically required for the TRADERS.TR corporate homepage to load securely and for partnership and contact forms to work reliably; cannot be disabled by the user.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Performance and Analytics Cookies (On/Off):
                    </strong>{" "}
                    Help us improve our corporate platform by analyzing how visitors explore content in the &quot;Insights,&quot; &quot;Our Brands,&quot; and &quot;Ventures&quot; sections.
                  </li>
                  <li>
                    <strong className="text-foreground">
                      Marketing and Advertising Cookies (On/Off):
                    </strong>{" "}
                    Allow us to optimize corporate notifications regarding launches of new independent brands in our portfolio, ecosystem announcements, and strategic partnership processes according to your interests.
                  </li>
                </ul>
                <p>
                  The three categories above are currently stored as user preferences; traders.tr does not use any third-party analytics or advertising tool that operates based on these preferences (see the section above). When this changes, the relevant tool will be activated only according to the category the user has selected.
                </p>
              </>
            ),
          },
          {
            id: "yonetim",
            title: "How to Manage Storage",
            content: (
              <p>
                From your browser settings, you can view and clear local data (including localStorage) stored by sites on your device at any time. This action only resets your interface preferences; it does not affect the core functionality of the site.
              </p>
            ),
          },
          {
            id: "guncellemeler",
            title: "Policy Updates",
            content: (
              <p>
                We may update this policy in response to changes in the technologies used on the site. The current version is always available on this page with the "last updated" date. For our more general privacy practices, see our{" "}
                <Link href="/gizlilik-politikasi" className="text-blue-400 underline underline-offset-4 hover:text-blue-300">
                  Privacy Policy
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
                        Arayüz tercihlerini (ör. dil seçimi) tamamen
                        cihazınızda hatırlamak
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
