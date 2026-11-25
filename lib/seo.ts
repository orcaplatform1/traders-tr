import type { Metadata } from "next";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";

// Ortak SEO ve sosyal paylasim karti degerleri (Open Graph + Twitter Card)
export const HOME_TITLE = "Prizoma | Building Brands Beyond Borders";
// Arama sonuçlarındaki site adı: og:site_name ve WebSite JSON-LD (başlıklardaki SITE_NAME değişmez)
export const OG_SITE_NAME = "Prizoma";
export const OG_IMAGE = {
  url: `${SITE_URL}/og-image.png`,
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} logo`,
};

const clip = (text: string, max: number) =>
  text.length <= max ? text : `${text.slice(0, max - 1).trimEnd()}…`;

type PageSeo = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "product";
  absoluteTitle?: boolean;
};

export function pageMetadata({ title, description, path, type = "website", absoluteTitle }: PageSeo): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  const desc = clip(description, 160);
  const fullTitle = clip(absoluteTitle ? title : `${title} — ${SITE_NAME}`, 60);
  return {
    title: absoluteTitle ? { absolute: fullTitle } : clip(title, 60 - ` — ${SITE_NAME}`.length),
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      ...(type === "website" ? { type: "website" as const } : {}),
      locale: "en_US",
      url,
      siteName: OG_SITE_NAME,
      title: fullTitle,
      description: desc,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [OG_IMAGE.url],
    },
    ...(type === "product" ? { other: { "og:type": "product" } } : {}),
  };
}

// Giris gerektiren sayfalar ve varsayilan: site geneli kart
export const defaultMetadata = pageMetadata({
  title: HOME_TITLE,
  description: SITE_DESCRIPTION,
  path: "/",
  absoluteTitle: true,
});
