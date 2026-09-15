import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/json-ld";
import { getNewsroomPostBySlug, newsroomPosts } from "@/lib/content/newsroom";
import { SITE_URL } from "@/lib/constants";

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
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/newsroom/${post.slug}` },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function NewsroomPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getNewsroomPostBySlug(slug);
  if (!post) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Haber Merkezi", item: `${SITE_URL}/newsroom` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/newsroom/${post.slug}` },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: "TRADERS.TR" },
    datePublished: post.publishedAt,
    mainEntityOfPage: `${SITE_URL}/newsroom/${post.slug}`,
  };

  return (
    <article className="py-28 md:py-36">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={articleJsonLd} />
      <div className="container-edit max-w-2xl">
        <Link
          href="/newsroom"
          className="text-[13px] font-medium tracking-wide text-muted transition-colors hover:text-foreground"
        >
          ← Haber Merkezi
        </Link>

        <div className="mt-8 flex items-center gap-3 text-[12px] text-muted">
          <span>{formatDate(post.publishedAt)}</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>{post.category}</span>
        </div>

        <h1 className="mt-4 text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl">
          {post.title}
        </h1>

        <div className="mt-10 space-y-6 border-t border-border pt-10">
          {post.content.map((paragraph, i) => (
            <p key={i} className="text-[17px] leading-relaxed text-slate-200">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}
