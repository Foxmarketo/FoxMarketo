import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { SITE } from "@/lib/site";
import CtaBand from "@/components/CtaBand";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `${SITE.url}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <article className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-20">
        <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-600 text-teal hover:text-fox-red">
          <ArrowLeft size={16} /> Back to blog
        </Link>

        <span className="rounded-full bg-fox-red/10 px-3 py-1 text-xs font-600 text-fox-red">{post.category}</span>
        <h1 className="mt-4 font-display text-3xl font-900 leading-tight text-ink md:text-4xl">{post.title}</h1>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-400">
          <span className="flex items-center gap-1.5"><User size={14} /> {post.author}</span>
          {post.date && <span className="flex items-center gap-1.5"><Calendar size={14} /> {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>}
          <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readingTime}</span>
        </div>

        <div
          className="prose-content mt-8"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>

      <CtaBand />
    </>
  );
}
