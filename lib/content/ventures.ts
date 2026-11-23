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
    id: "secbird",
    name: "Secbird",
    slug: "secbird",
    category: "Gizlilik Odaklı E-posta",
    categoryEn: "Privacy-Focused Email",
    description: "Prizoma GmbH'nin İsviçre (Zug) merkezli, gizlilik odaklı e-posta servisi.",
    descriptionEn: "A privacy-focused email service by Prizoma GmbH, based in Zug, Switzerland.",
    detail:
      "Geliştirme aşamasında. Uçtan uca şifreleme (OpenPGP), dışarıdan gelen e-postalar için sıfır erişimli şifreleme, açık kaynak ve denetlenmiş şifreleme kütüphaneleri ve İsviçre'deki sunucular üzerine kuruluyor; e-posta paketine ek olarak uçtan uca şifreli canlı sohbet geliştiriliyor.",
    detailEn:
      "In development. Being built on end-to-end encryption (OpenPGP), zero-access encryption for incoming emails from outside senders, open source and audited cryptography libraries and servers in Switzerland; end-to-end encrypted live chat is being developed as an add-on to the email package.",
    stage: "developing",
    websiteUrl: "https://secbird.me",
  },
  {
    id: "ahenk",
    name: "Ahenk",
    slug: "ahenk",
    category: "Sosyal Platform",
    categoryEn: "Social Platform",
    description: "OCEAN Big Five uyumluluğuna dayalı haftalık sosyal buluşma platformu.",
    descriptionEn: "Weekly social meeting platform based on OCEAN Big Five personality compatibility.",
    detail:
      "Yabancılarla tanışmayı bilimsel bir temele oturtarak gerçek buluşmalara dönüştürür. Grup masası, baş başa masa ve Kankamla formatlarında haftalık organizasyon sunar.",
    detailEn:
      "Turns meeting strangers into real encounters on a scientific basis. Offers weekly organization in group table, one-on-one, and Kankamla formats.",
    stage: "developing",
    websiteUrl: "https://ahenk.co",
  },
];
