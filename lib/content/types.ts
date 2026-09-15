export type BrandStatus = "active" | "exploring";

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  whyItExists: string;
  features: string[];
  websiteUrl: string;
  status: BrandStatus;
  featured: boolean;
  displayOrder: number;
}

export interface Venture {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  detail: string;
  stage: "active" | "exploring" | "coming-next";
  websiteUrl?: string;
}

export type InsightCategory =
  | "Teknoloji"
  | "Girişimcilik"
  | "Dijital Ekonomi"
  | "Piyasalar"
  | "Şirket";

export interface Insight {
  id: string;
  slug: string;
  title: string;
  category: InsightCategory;
  excerpt: string;
  content: string[];
  author: string;
  publishedAt: string;
  readTime: string;
}

export type NewsroomCategory =
  | "Marka Lansmanı"
  | "Ürün Duyurusu"
  | "Ortaklık"
  | "Şirket Duyurusu"
  | "Etkinlik";

export interface NewsroomPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  category: NewsroomCategory;
  publishedAt: string;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  status: "open" | "closed";
}
