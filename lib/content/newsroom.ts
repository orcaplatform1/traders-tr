import type { NewsroomPost } from "./types";

export const newsroomPosts: NewsroomPost[] = [
  {
    id: "1",
    slug: "traders-yeni-bir-girisim-icin-calismalara-basladi",
    title: "TRADERS yeni bir girişim için çalışmalara başladı",
    excerpt:
      "TRADERS, teknoloji ve ticaretin kesişiminde yeni bir fırsat alanını değerlendirmeye başladı.",
    content: [
      "TRADERS, portföyündeki markalardan bağımsız olarak yeni bir girişim alanı üzerinde erken aşama çalışmalara başladığını duyurdu.",
      "Detaylar, girişim daha olgun bir aşamaya geldiğinde paylaşılacak.",
    ],
    category: "Şirket Duyurusu",
    publishedAt: "2026-09-01",
  },
  {
    id: "2",
    slug: "orca-platformunu-genisletiyor",
    title: "ORCA platformunu genişletiyor",
    excerpt:
      "ORCA, eğitim müfredatına ve araç setine yeni eklemeler yaptı.",
    content: [
      "ORCA, kullanıcılarına sunduğu araç setini ve eğitim içeriğini genişletmeye devam ediyor.",
      "Yeni özellikler, platformun mevcut kullanıcı deneyimini geliştirmeyi hedefliyor.",
    ],
    category: "Ürün Duyurusu",
    publishedAt: "2026-08-20",
  },
  {
    id: "3",
    slug: "kriptobeyan-yeni-bir-faza-giriyor",
    title: "KriptoBeyan yeni bir faza giriyor",
    excerpt:
      "KriptoBeyan, mali müşavirlere yönelik yeni bir modülü kullanıma sundu.",
    content: [
      "KriptoBeyan, kripto varlık beyan süreçlerini mali müşavirler için kolaylaştıran yeni bir modülü kullanıma sundu.",
    ],
    category: "Ürün Duyurusu",
    publishedAt: "2026-08-05",
  },
  {
    id: "4",
    slug: "zesta-ozel-siparis-pazaryerini-baslatti",
    title: "Zesta özel sipariş pazaryerini başlattı",
    excerpt:
      "Zesta, el yapımı üreticileri alıcılarla buluşturan özel sipariş modelini duyurdu.",
    content: [
      "Zesta, el yapımı ürün üreticilerinin özel sipariş alabildiği yeni pazaryeri modelini kullanıma açtı.",
    ],
    category: "Marka Lansmanı",
    publishedAt: "2026-07-18",
  },
];

export function getNewsroomPostBySlug(slug: string): NewsroomPost | undefined {
  return newsroomPosts.find((p) => p.slug === slug);
}
