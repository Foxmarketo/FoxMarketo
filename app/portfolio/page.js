import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { PORTFOLIO } from "@/lib/data";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Portfolio",
  description:
    "Selected work from Fox Marketo, branding, social media, video, and web projects across health, food, finance, retail, and more. View live on Behance.",
};

export default function Portfolio() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal via-teal-deep to-teal-dark py-20 text-white md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <p className="mb-3 font-display text-sm font-600 uppercase tracking-[4px] text-fox-orange">Our Work</p>
            <h1 className="font-display text-4xl font-900 md:text-5xl">Portfolio</h1>
            <p className="mx-auto mt-5 max-w-2xl text-mist/90">
              A selection of branding, social media, video, and web projects we&apos;ve
              delivered for clients across industries. Tap any project to view it live
              on Behance.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading eyebrow="Selected Projects" title="Recent" highlight="Work" center /></Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PORTFOLIO.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.08}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-100 transition hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <Image
                      src={p.img}
                      alt={p.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-600 text-teal-deep backdrop-blur">
                      {p.cat}
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-white p-5">
                    <h3 className="font-display text-base font-700 text-ink">{p.title}</h3>
                    <ExternalLink size={16} className="text-slate-300 transition group-hover:text-fox-red" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={SITE.social.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-teal/30 px-7 py-3 font-display text-sm font-700 text-teal-deep transition hover:bg-teal hover:text-white"
            >
              View full portfolio on Behance <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
