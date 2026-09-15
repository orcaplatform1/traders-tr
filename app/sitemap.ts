import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { brands } from "@/lib/content/brands";
import { insights } from "@/lib/content/insights";
import { newsroomPosts } from "@/lib/content/newsroom";

const STATIC_ROUTES = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/brands", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/ventures", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/insights", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/newsroom", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/careers", priority: 0.4, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/cookies", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/kvkk", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/site-haritasi", priority: 0.2, changeFrequency: "monthly" as const },
];

// Bu dosya build/request aninda içerik dizilerinden (brands, insights,
// newsroom) otomatik uretilir — yeni bir marka/icerik eklendiginde sitemap
// elle guncellenmeden kendiliğinden genişler.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const brandEntries: MetadataRoute.Sitemap = brands.map((b) => ({
    url: `${SITE_URL}/brands/${b.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const insightEntries: MetadataRoute.Sitemap = insights.map((i) => ({
    url: `${SITE_URL}/insights/${i.slug}`,
    lastModified: new Date(i.publishedAt),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  const newsroomEntries: MetadataRoute.Sitemap = newsroomPosts.map((p) => ({
    url: `${SITE_URL}/newsroom/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticEntries, ...brandEntries, ...insightEntries, ...newsroomEntries];
}
