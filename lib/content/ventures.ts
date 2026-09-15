import type { Venture } from "./types";

export const ventures: Venture[] = [
  {
    id: "orca",
    name: "ORCA",
    slug: "orca",
    category: "Finans / Eğitim",
    description: "Yeni nesil finans eğitim platformu.",
    detail:
      "Yapılandırılmış müfredatı, canlı bir topluluğu, yapay zekâ destekli mentorluğu ve gerçek piyasa verisiyle pratik yapma imkânını tek platformda birleştiriyor.",
    stage: "active",
    websiteUrl: "https://traders.tr/orca",
  },
  {
    id: "kriptobeyan",
    name: "KriptoBeyan",
    slug: "kriptobeyan",
    category: "Dijital Finans / Vergi",
    description: "Kripto varlık vergilendirme ve beyan platformu.",
    detail:
      "Kripto varlık işlemlerinin Türkiye'deki vergi ve beyan yükümlülükleri açısından anlaşılmasını ve yönetilmesini kolaylaştırıyor — bireyler ve mali müşavirler için.",
    stage: "active",
    websiteUrl: "https://kriptobeyan.com",
  },
  {
    id: "zesta",
    name: "Zesta",
    slug: "zesta",
    category: "Ticaret / El Yapımı",
    description: "Özel siparişle hazırlanan el yapımı ürün platformu.",
    detail:
      "El yapımı ürünleri özenli üretim süreciyle, özel sipariş modeliyle ve modern bir alışveriş deneyimiyle bir araya getiriyor.",
    stage: "active",
    websiteUrl: "https://zesta.tr",
  },
];
