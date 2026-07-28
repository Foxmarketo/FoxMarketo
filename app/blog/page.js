import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";

export const metadata = {
  title: "Blog",
  description:
    "Digital marketing tips, SEO guides, and growth strategies from the Fox Marketo team. Practical advice for growing brands.",
};

const catColor = {
  Strategy: "bg-teal/10 text-teal",
  SEO: "bg-fox-red/10 text-fox-red",
  Video: "bg-fox-orange/15 text-fox-orange",
  Marketing: "bg-teal/10 text-teal",
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <>
      <section className="bg-gradient-to-br from-teal via-teal-deep to-teal-dark py-20 text-white md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <p className="mb-3 font-display text-sm font-600 uppercase tracking-[4px] text-fox-orange">Insights</p>
            <h1 className="font-display text-4xl font-900 md:text-5xl">The Fox Marketo Blog</h1>
            <p className="mx-auto mt-5 max-w-2xl text-mist/90">
              Practical digital marketing tips, SEO guides, and growth strategies to
              help your brand win online.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl">
          {posts.length === 0 ? (
            <p className="text-center text-slate-500">No posts yet, check back soon.</p>
          ) : (
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 3) * 0.08}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative flex h-40 items-end bg-gradient-to-br from-teal to-teal-deep p-5">
                      <div className="stripes absolute right-0 top-0 h-16 w-16 opacity-30" />
                      <span className={`rounded-full px-3 py-1 text-xs font-600 ${catColor[p.category] || catColor.Marketing} bg-white/90`}>
                        {p.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="font-display text-lg font-700 leading-snug text-ink group-hover:text-fox-red">{p.title}</h2>
                      <p className="mt-2 flex-1 text-sm text-slate-500">{p.excerpt}</p>
                      <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                        <span className="flex items-center gap-1"><Clock size={13} /> {p.readingTime}</span>
                        <span className="flex items-center gap-1 font-600 text-fox-red">Read <ArrowRight size={13} /></span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
