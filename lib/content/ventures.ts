import type { Venture } from "./types";

export const ventures: Venture[] = [
  {
    id: "orca",
    name: "Orca Labs",
    slug: "orca",
    category: "Finans Eğitimi",
    description: "Yeni nesil finans eğitim platformu.",
    detail:
      "Yapılandırılmış müfredatı, canlı bir topluluğu, yapay zekâ destekli mentorluğu ve gerçek piyasa verisiyle pratik yapma imkânını tek platformda birleştiriyor.",
    stage: "developing",
    websiteUrl: "https://orcalabs.tr",
  },
  {
    id: "kriptobeyan",
    name: "KriptoBeyan",
    slug: "kriptobeyan",
    category: "Dijital Vergi",
    description: "Kripto varlık vergilendirme ve beyan platformu.",
    detail:
      "Kripto varlık işlemlerinin Türkiye'deki vergi ve beyan yükümlülükleri açısından anlaşılmasını ve yönetilmesini kolaylaştırıyor — bireyler ve mali müşavirler için.",
    stage: "active",
    websiteUrl: "https://kriptobeyan.com",
  },
  {
    id: "zesta",
    name: "Zesta Art&Design",
    slug: "zesta",
    category: "Sanat Ürünleri",
    description: "Özel siparişle hazırlanan el yapımı ürün platformu.",
    detail:
      "El yapımı ürünleri özenli üretim süreciyle, özel sipariş modeliyle ve modern bir alışveriş deneyimiyle bir araya getiriyor.",
    stage: "active",
    websiteUrl: "https://zesta.tr",
  },
  {
    id: "mettlo",
    name: "Mettlo",
    slug: "mettlo",
    category: "Spor ve Sağlık",
    description: "Fitness ve wellness koçluk platformu.",
    detail:
      "Uzman koçlarla üyeleri tek platformda buluşturuyor; program satışı, birebir koçluk, ilerleme takibi ve topluluk tek bir ekosistemde.",
    stage: "developing",
    websiteUrl: "https://mettlo.tr",
  },
];
