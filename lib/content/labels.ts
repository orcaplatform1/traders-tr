import type { Lang } from "@/lib/i18n";

export const INSIGHT_CATEGORY_EN: Record<string, string> = {
  Teknoloji: "Technology",
  Girişimcilik: "Entrepreneurship",
  "Dijital Ekonomi": "Digital Economy",
  Piyasalar: "Markets",
  Şirket: "Company",
};

export const NEWSROOM_CATEGORY_EN: Record<string, string> = {
  "Marka Lansmanı": "Brand Launch",
  "Ürün Duyurusu": "Product Announcement",
  Ortaklık: "Partnership",
  "Şirket Duyurusu": "Company Announcement",
  Etkinlik: "Event",
};

export function insightCategory(cat: string, lang: Lang) {
  return lang === "en" ? (INSIGHT_CATEGORY_EN[cat] ?? cat) : cat;
}

export function newsroomCategory(cat: string, lang: Lang) {
  return lang === "en" ? (NEWSROOM_CATEGORY_EN[cat] ?? cat) : cat;
}

// "7 dk" → EN "7 min"
export function readTimeLabel(readTime: string, lang: Lang) {
  return lang === "en" ? `${readTime.replace(/\D/g, "")} min` : readTime;
}
