import type { Brand } from "./types";

export const brands: Brand[] = [
  {
    id: "orca",
    name: "ORCA",
    slug: "orca",
    category: "Finans / Eğitim",
    shortDescription:
      "Yapılandırılmış eğitim, teknoloji ve yapay zekâ destekli pratiği bir araya getiren yeni nesil finans eğitim platformu.",
    longDescription:
      "ORCA, finansal okuryazarlıktan ileri seviye teknik analize uzanan yapılandırılmış bir müfredatı; canlı bir topluluk, yapay zekâ mentorluk ve gerçek piyasa verisiyle pratik yapma imkânıyla birleştirir.",
    whyItExists:
      "Finansal eğitimin çoğunlukla dağınık, teşvik uyumsuz ve pratikten kopuk olduğunu gördük. ORCA, öğrenmeyi ölçülebilir ilerlemeye bağlayan tek bir platformda topluyor.",
    websiteUrl: "https://traders.tr/orca",
    status: "active",
    featured: true,
    displayOrder: 1,
  },
  {
    id: "kriptobeyan",
    name: "KriptoBeyan",
    slug: "kriptobeyan",
    category: "Dijital Finans / Vergi",
    shortDescription:
      "Kripto varlık vergilendirmesi ve beyan süreçlerine odaklanan bir platform.",
    longDescription:
      "KriptoBeyan, kripto varlık işlemlerinin Türkiye'deki vergi ve beyan yükümlülükleri açısından anlaşılmasını ve yönetilmesini kolaylaştırır — bireyler ve mali müşavirler için.",
    whyItExists:
      "Kripto varlıklar hızla yaygınlaştı, ama vergi ve beyan tarafı büyük ölçüde belirsiz kaldı. KriptoBeyan bu boşluğu dolduruyor.",
    websiteUrl: "https://kriptobeyan.com",
    status: "active",
    featured: true,
    displayOrder: 2,
  },
  {
    id: "zesta",
    name: "ZESTA",
    slug: "zesta",
    category: "Ticaret / El Yapımı",
    shortDescription:
      "El yapımı ürünlerin özel sipariş üzerinden hazırlandığı ve sunulduğu bir platform.",
    longDescription:
      "Zesta, el yapımı ürünleri; özenli üretim süreciyle, özel sipariş modeliyle ve modern bir alışveriş deneyimiyle bir araya getirir.",
    whyItExists:
      "El emeği ürünlerin dijital ticarette hak ettiği kaliteyi bulamadığını gördük. Zesta, üretici ile alıcıyı doğrudan ve güvenilir bir deneyimle buluşturuyor.",
    websiteUrl: "https://zesta.tr",
    status: "active",
    featured: true,
    displayOrder: 3,
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}
