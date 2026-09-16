import type { Brand } from "./types";

export const brands: Brand[] = [
  {
    id: "orca",
    name: "ORCA",
    slug: "orca",
    logo: "/brand-logos/orca.png",
    monogram: "OR",
    accent: "blue",
    category: "Finans / Eğitim",
    shortDescription:
      "Yapılandırılmış eğitim, teknoloji ve yapay zekâ destekli pratiği bir araya getiren yeni nesil finans eğitim platformu.",
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
    websiteUrl: "https://traders.tr/orca",
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
    accent: "purple",
    category: "Dijital Finans / Vergi",
    shortDescription:
      "Kripto varlık vergilendirmesi ve beyan süreçlerine odaklanan bir platform.",
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
    websiteUrl: "https://kriptobeyan.com",
    status: "active",
    featured: true,
    displayOrder: 2,
  },
  {
    id: "zesta",
    name: "ZESTA",
    slug: "zesta",
    logo: "/brand-logos/zesta.png",
    monogram: "ZS",
    accent: "teal",
    category: "Ticaret / El Yapımı",
    shortDescription:
      "El yapımı ürünlerin özel sipariş üzerinden hazırlandığı ve sunulduğu bir platform.",
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
    websiteUrl: "https://zesta.tr",
    status: "active",
    featured: true,
    displayOrder: 3,
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}
