import type { Brand } from "./types";

export const brands: Brand[] = [
  {
    id: "zesta",
    name: "Zesta Art&Design",
    slug: "zesta",
    logo: "/brand-logos/zesta.png",
    monogram: "ZS",
    accent: "earth",
    category: "Sanat Ürünleri",
    categoryEn: "Art & Design Products",
    shortDescription:
      "Küçük Detaylar. Büyük Hikâyeler. Her parça elde, sipariş üzerine, özenle üretilir — Türkiye'nin dört bir yanındaki ustaların atölyesinden evinize.",
    shortDescriptionEn:
      "Small Details. Big Stories. Every piece is made by hand, on demand, with care — from the workshops of artisans across Turkey to your home.",
    longDescription:
      "Zesta, el yapımı ürünleri; özenli üretim süreciyle, özel sipariş modeliyle ve modern bir alışveriş deneyimiyle bir araya getirir.",
    whyItExists:
      "El emeği ürünlerin dijital ticarette hak ettiği kaliteyi bulamadığını gördük. Zesta, üretici ile alıcıyı doğrudan ve güvenilir bir deneyimle buluşturuyor.",
    features: [
      "Tasarımcı başvuru ve onay süreciyle küratörlü bir üretici topluluğu",
      "Her tasarımcı için kendi ürün kataloğunu yönetebildiği özel bir panel",
      "Özel sipariş modeli: ürünler üretici tarafından talep üzerine hazırlanır",
      "Tasarımcılar için gerçek satış istatistikleri ve ödeme (payout) talep akışı",
      "Modern, mobil öncelikli bir alışveriş deneyimi ve merkezi mağaza yönetimi",
    ],
    longDescriptionEn:
      "Zesta brings handmade products together with a meticulous production process, a custom-order model and a modern shopping experience.",
    whyItExistsEn:
      "We saw that handcrafted products were not getting the quality they deserve in digital commerce. Zesta connects makers and buyers through a direct and trustworthy experience.",
    featuresEn: [
      "A curated maker community with a designer application and approval process",
      "A dedicated panel where each designer manages their own product catalogue",
      "Custom-order model: products are made by the maker on demand",
      "Real sales statistics and a payout request flow for designers",
      "A modern, mobile-first shopping experience and central store management",
    ],
    websiteUrl: "https://zesta.tr",
    status: "active",
    featured: true,
    displayOrder: 1,
  },
  {
    id: "kriptobeyan",
    name: "KriptoBeyan",
    slug: "kriptobeyan",
    logo: "/brand-logos/kriptobeyan.png",
    monogram: "KB",
    accent: "emerald",
    category: "Dijital Vergi",
    categoryEn: "Digital Tax",
    shortDescription:
      "KriptoBeyan ile kripto vergi hesaplama otomatikleşir: borsa hesaplarınızı ve cüzdanlarınızı bağlayın, işlemleriniz FIFO yöntemiyle hesaplansın. Kripto beyan dönemi geldiğinde taslak raporunuz hazır olsun.",
    shortDescriptionEn:
      "KriptoBeyan automates crypto tax calculation: connect your exchange accounts and wallets, have your transactions calculated with the FIFO method. Your draft report is ready when crypto tax season arrives.",
    longDescription:
      "KriptoBeyan, kripto varlık işlemlerinin Türkiye'deki vergi ve beyan yükümlülükleri açısından anlaşılmasını ve yönetilmesini kolaylaştırır — bireyler ve mali müşavirler için.",
    whyItExists:
      "Kripto varlıklar hızla yaygınlaştı, ama vergi ve beyan tarafı büyük ölçüde belirsiz kaldı. KriptoBeyan bu boşluğu dolduruyor.",
    features: [
      "İşlem geçmişini içe aktarıp otomatik olarak vergiye tabi kâr/zarar hesaplaması",
      "Bireysel kullanıcılar için kendi kendine beyan akışı, mali müşavirler için ayrı bir profesyonel panel",
      "Mali müşavir–müvekkil eşleştirmesi: müşavirler, davet ettikleri müvekkillerin hesaplarını tek panelden yönetebilir",
      "DeFi işlemleri dahil farklı gelir türlerini ayrıştırabilen kapsamlı raporlama",
      "Abonelik tabanlı erişim ve kurumsal kullanım için ölçeklenebilir yapı",
    ],
    longDescriptionEn:
      "KriptoBeyan makes it easy to understand and manage the tax and declaration obligations of crypto asset transactions in Turkey, for individuals and financial advisors.",
    whyItExistsEn:
      "Crypto assets spread quickly, but the tax and declaration side remained largely unclear. KriptoBeyan fills this gap.",
    featuresEn: [
      "Import transaction history and automatically calculate taxable profit and loss",
      "A self-service declaration flow for individuals and a separate professional panel for financial advisors",
      "Advisor–client matching: advisors can manage the accounts of the clients they invite from a single panel",
      "Comprehensive reporting that separates different income types, including DeFi transactions",
      "Subscription-based access and a scalable structure for corporate use",
    ],
    websiteUrl: "https://kriptobeyan.com",
    status: "active",
    featured: true,
    displayOrder: 2,
  },
  {
    id: "orca",
    name: "Orca Labs",
    slug: "orca",
    logo: "/brand-logos/orca.png",
    monogram: "OR",
    accent: "ocean",
    category: "Finans Eğitimi",
    categoryEn: "Financial Education",
    shortDescription:
      "Yapay zeka destekli kişiselleştirilmiş öğrenme programları, uygulamalı dersler, canlı piyasa simülasyonları ve akıllı anlık veri araçlarını tek bir ekosistemde buluşturan benzersiz eğitim platformu.",
    shortDescriptionEn:
      "A unique education platform that brings together AI-powered personalized learning programs, hands-on courses, live market simulations and smart real-time data tools in a single ecosystem.",
    longDescription:
      "ORCA, finansal okuryazarlıktan ileri seviye teknik analize uzanan yapılandırılmış bir müfredatı; canlı bir topluluk, yapay zekâ mentorluk ve gerçek piyasa verisiyle pratik yapma imkânıyla birleştirir.",
    whyItExists:
      "Finansal eğitimin çoğunlukla dağınık, teşvik uyumsuz ve pratikten kopuk olduğunu gördük. ORCA, öğrenmeyi ölçülebilir ilerlemeye bağlayan tek bir platformda topluyor.",
    features: [
      "Başlangıçtan uzman seviyeye yapılandırılmış müfredat: dersler, sınavlar ve tamamlanma sonunda doğrulanabilir sertifikalar",
      "7/24 erişilebilir yapay zekâ mentor — kişiselleştirilmiş soru-cevap ve konu anlatımı",
      "AI destekli piyasa tarayıcı, backtest simülatörü ve gerçek piyasa verisiyle risk almadan pratik yapma imkânı",
      "Kripto, forex, BIST100 ve ekonomik takvimi tek panelde toplayan canlı piyasa araçları",
      "TradingView tarzı aktif bir topluluk: analiz paylaşımı, canlı dersler ve öğrenci etkileşimi",
    ],
    longDescriptionEn:
      "ORCA combines a structured curriculum, from financial literacy to advanced technical analysis, with a live community, AI mentorship and the ability to practise with real market data.",
    whyItExistsEn:
      "We saw that financial education is mostly fragmented, poorly aligned with learners' interests and disconnected from practice. ORCA brings learning together on a single platform tied to measurable progress.",
    featuresEn: [
      "A structured curriculum from beginner to expert: lessons, quizzes and verifiable certificates on completion",
      "An AI mentor available 24/7, with personalised Q&A and topic explanations",
      "An AI-powered market scanner, a backtest simulator and risk-free practice with real market data",
      "Live market tools bringing crypto, forex, BIST100 and the economic calendar together in one panel",
      "An active TradingView-style community: analysis sharing, live lessons and student interaction",
    ],
    websiteUrl: "https://orcalabs.tr",
    status: "developing",
    featured: true,
    displayOrder: 3,
  },
  {
    id: "ahenk",
    name: "Ahenk",
    slug: "ahenk",
    logo: "/brand-logos/ahenk.png",
    monogram: "AH",
    accent: "wine",
    category: "Sosyal Platform",
    categoryEn: "Social Platform",
    shortDescription:
      "Sana uygun insanlarla, gerçek buluşmalar. OCEAN Big Five kişilik uyumluluğuyla haftalık grup ve birebir masalar; mekan, randevu ve rezervasyon Ahenk tarafından ayarlanır.",
    shortDescriptionEn:
      "Compatible people, real meetings. Weekly group and one-on-one tables built on OCEAN Big Five personality matching — venue, time and reservation all arranged by Ahenk.",
    longDescription:
      "Ahenk, yabancılarla tanışmayı bilimsel bir temele oturtarak gerçek buluşmalara dönüştürür. Kullanıcılar OCEAN (Big Five) kişilik testi ile profillerini oluşturur; algoritma onları haftalık olarak uyumlu kişilerle eşleştirir ve grup ya da birebir masalar kurar. Randevu, mekan ve rezervasyon tamamen Ahenk tarafından ayarlanır — kullanıcının tek yapması gereken gitmek.",
    whyItExists:
      "Kaliteli bir çevre şans değil, seçimdir. Dijital hayatın getirdiği yüzeysel bağlantı kültürüne karşı Ahenk, gerçek hayatta gerçek insanlarla buluşmayı kolaylaştırıyor — şansı değil, uyumluluğu esas alarak.",
    features: [
      "OCEAN Big Five kişilik testine dayalı algoritmik eşleştirme: rastgele değil, gerçekten uyumlu insanlar",
      "Üç masa formatı: Grup Masası (yeni yüzler), Baş Başa Masa (birebir tanışma) ve Kankamla Masası (arkadaşınla git)",
      "Haftalık organizasyon: mekan, saat ve rezervasyon tamamen Ahenk tarafından ayarlanır — senin tek işin gitmek",
      "Doğrulanmış profiller ve masa garantisi: masa kurulamazsa ücret iade edilir",
      "İstanbul, Ankara, İzmir ve 5 şehirde daha her hafta aktif masalar; 180 günde bir profil yenileme",
    ],
    longDescriptionEn:
      "Ahenk turns meeting strangers into real encounters on a scientific basis. Users build their profiles with the OCEAN (Big Five) personality test; the algorithm matches them weekly with compatible people and sets up group or one-on-one tables. Time, venue and reservation are arranged entirely by Ahenk, so all the user has to do is show up.",
    whyItExistsEn:
      "A good social circle is a choice, not luck. Against the shallow connection culture of digital life, Ahenk makes it easier to meet real people in real life, based on compatibility rather than chance.",
    featuresEn: [
      "Algorithmic matching based on the OCEAN Big Five personality test: genuinely compatible people, not random ones",
      "Three table formats: Group Table (new faces), Duo Table (one-on-one) and Bring a Buddy Table (go with your friend)",
      "Weekly organisation: venue, time and reservation arranged entirely by Ahenk, your only job is to show up",
      "Verified profiles and a table guarantee: if a table cannot be set up, the fee is refunded",
      "Active tables every week in Istanbul, Ankara, Izmir and 5 more cities; profile renewal every 180 days",
    ],
    websiteUrl: "https://ahenk.co",
    status: "developing",
    featured: true,
    displayOrder: 4,
  },
  {
    id: "secbird",
    name: "Secbird",
    slug: "secbird",
    logo: "/brand-logos/secbird.svg",
    monogram: "SB",
    accent: "orange",
    category: "Gizlilik Odaklı E-posta",
    categoryEn: "Privacy-Focused Email",
    shortDescription:
      "Prizoma GmbH'nin İsviçre (Zug) merkezli, gizlilik odaklı e-posta servisi. Uçtan uca şifreleme ve sunucuları İsviçre'de olan altyapısıyla geliştirme aşamasında.",
    shortDescriptionEn:
      "A privacy-focused email service by Prizoma GmbH, based in Zug, Switzerland. In development, with end-to-end encryption and servers located in Switzerland.",
    longDescription:
      "Secbird, Prizoma GmbH tarafından İsviçre'nin Zug kantonunda geliştirilen, gizlilik odaklı bir e-posta servisidir. Servis şu anda geliştirme aşamasında; e-postaların uçtan uca şifrelenmesi (OpenPGP) ve dışarıdan gelen e-postaların sıfır erişimli şifrelemeyle saklanması üzerine kuruluyor. Sunucular İsviçre'de konumlanacak.",
    whyItExists:
      "E-posta, iş ve özel hayatın en hassas yazışmalarını taşımasına rağmen çoğu zaman bu hassasiyete uygun bir korumayla sunulmuyor. Secbird, e-postayı varsayılan olarak şifreli, açık kaynak ve denetlenmiş kütüphanelere dayanan, İsviçre'de barındırılan bir altyapıyla sunmak amacıyla geliştiriliyor.",
    features: [
      "Uçtan uca şifreleme (OpenPGP) geliştiriliyor: e-postalar gönderen ve alıcı dışında kimsenin okuyamayacağı şekilde şifrelenecek",
      "Dışarıdan gelen e-postalar için sıfır erişimli şifreleme geliştiriliyor: gelen e-postalar alındıktan sonra yalnız kullanıcının anahtarıyla açılabilecek şekilde saklanacak",
      "Şifreleme açık kaynak ve denetlenmiş şifreleme kütüphaneleri üzerine kuruluyor",
      "Sunucular İsviçre'de konumlanacak",
      "E-posta paketine ek özellik olarak uçtan uca şifreli canlı sohbet geliştiriliyor",
    ],
    longDescriptionEn:
      "Secbird is a privacy-focused email service developed by Prizoma GmbH in the canton of Zug, Switzerland. The service is currently in development and is being built around end-to-end email encryption (OpenPGP) and zero-access encryption for incoming emails from outside senders. Its servers will be located in Switzerland.",
    whyItExistsEn:
      "Email carries some of the most sensitive correspondence in business and private life, yet it is often not offered with protection that matches that sensitivity. Secbird is being developed to provide email that is encrypted by default, built on open source and audited libraries, and hosted in Switzerland.",
    featuresEn: [
      "End-to-end encryption (OpenPGP) in development: emails will be encrypted so that no one but the sender and the recipient can read them",
      "Zero-access encryption for incoming emails in development: emails from outside senders will be stored so that only the user's key can open them",
      "Encryption is being built on open source and audited cryptography libraries",
      "Servers will be located in Switzerland",
      "End-to-end encrypted live chat is being developed as an add-on to the email package",
    ],
    websiteUrl: "https://secbird.me",
    status: "developing",
    featured: true,
    displayOrder: 5,
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}
