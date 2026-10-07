import type { Venture } from "./types";

export const ventures: Venture[] = [
  {
    id: "orca",
    name: "Orca Labs",
    slug: "orca",
    category: "Finans Eğitimi",
    categoryEn: "Financial Education",
    description: "Yeni nesil finans eğitim platformu.",
    descriptionEn: "Next-generation financial education platform.",
    detail:
      "Yapılandırılmış müfredatı, canlı bir topluluğu, yapay zekâ destekli mentorluğu ve gerçek piyasa verisiyle pratik yapma imkânını tek platformda birleştiriyor.",
    detailEn:
      "Combines a structured curriculum, a live community, AI-powered mentorship, and the ability to practice with real market data in a single platform.",
    stage: "developing",
    websiteUrl: "https://orcalabs.tr",
  },
  {
    id: "kriptobeyan",
    name: "KriptoBeyan",
    slug: "kriptobeyan",
    category: "Dijital Vergi",
    categoryEn: "Digital Tax",
    description: "Kripto varlık vergilendirme ve beyan platformu.",
    descriptionEn: "Crypto asset taxation and declaration platform.",
    detail:
      "Kripto varlık işlemlerinin Türkiye'deki vergi ve beyan yükümlülükleri açısından anlaşılmasını ve yönetilmesini kolaylaştırıyor — bireyler ve mali müşavirler için.",
    detailEn:
      "Makes it easy to understand and manage the tax and declaration obligations of crypto asset transactions in Turkey — for individuals and financial advisors.",
    stage: "active",
    websiteUrl: "https://kriptobeyan.com",
  },
  {
    id: "zesta",
    name: "Zesta Art&Design",
    slug: "zesta",
    category: "Sanat Ürünleri",
    categoryEn: "Art & Design Products",
    description: "Özel siparişle hazırlanan el yapımı ürün platformu.",
    descriptionEn: "Custom-order handmade product platform.",
    detail:
      "El yapımı ürünleri özenli üretim süreciyle, özel sipariş modeliyle ve modern bir alışveriş deneyimiyle bir araya getiriyor.",
    detailEn:
      "Brings handmade products together with a meticulous production process, a custom-order model, and a modern shopping experience.",
    stage: "active",
    websiteUrl: "https://zesta.tr",
  },
  {
    id: "mettlo",
    name: "Mettlo",
    slug: "mettlo",
    category: "Spor ve Sağlık",
    categoryEn: "Sports & Health",
    description: "Fitness ve wellness koçluk platformu.",
    descriptionEn: "Fitness and wellness coaching platform.",
    detail:
      "Uzman koçlarla üyeleri tek platformda buluşturuyor; program satışı, birebir koçluk, ilerleme takibi ve topluluk tek bir ekosistemde.",
    detailEn:
      "Connects expert coaches with members on a single platform; program sales, one-on-one coaching, progress tracking, and community — all in one ecosystem.",
    stage: "developing",
    websiteUrl: "https://mettlo.tr",
  },
];
