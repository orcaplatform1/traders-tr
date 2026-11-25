import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { getNewsroomPostBySlug, newsroomPosts } from "@/lib/content/newsroom";
import { SITE_URL } from "@/lib/constants";
import { NewsroomPostContent } from "./newsroom-post-content";

export function generateStaticParams() {
  return newsroomPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsroomPostBySlug(slug);
  if (!post) return {};

  return {
    ...pageMetadata({ title: post.title, description: post.excerpt, path: `/newsroom/${post.slug}` }),
  };
}

export default async function NewsroomPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getNewsroomPostBySlug(slug);
  if (!post) notFound();

  const moreNews = newsroomPosts.filter((n) => n.slug !== post.slug).slice(0, 2);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Newsroom", item: `${SITE_URL}/newsroom` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/newsroom/${post.slug}` },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: "PRIZOMA" },
    datePublished: post.publishedAt,
    mainEntityOfPage: `${SITE_URL}/newsroom/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={articleJsonLd} />
      <NewsroomPostContent post={post} moreNews={moreNews} />
    </>
  );
}
