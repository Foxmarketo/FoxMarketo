import { Star, ExternalLink, Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import VideoTestimonial from "@/components/VideoTestimonial";
import CtaBand from "@/components/CtaBand";
import { UPWORK_STATS, VIDEO_TESTIMONIALS, WRITTEN_REVIEWS } from "@/lib/testimonials";

export const metadata = {
  title: "Testimonials",
  description:
    "Real client testimonials for Fox Marketo. Watch video reviews and read verified feedback from our Top Rated Upwork profile.",
};

export default function Testimonials() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-teal via-teal-deep to-teal-dark py-20 text-white md:py-24">
        <div className="stripes absolute right-0 top-0 h-40 w-36 opacity-40" />
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <p className="mb-3 font-display text-sm font-600 uppercase tracking-[4px] text-fox-orange">Client Feedback</p>
            <h1 className="font-display text-4xl font-900 md:text-5xl">Hear What Our Clients Say</h1>
            <p className="mx-auto mt-5 max-w-xl text-mist/90">
              Real words from real clients. Watch their stories below, or read our
              verified reviews from Upwork.
            </p>
          </Reveal>

          {/* Upwork stat bar */}
          <Reveal delay={0.15}>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                [`${UPWORK_STATS.rating}★`, `${UPWORK_STATS.reviews} reviews`],
                [UPWORK_STATS.jobSuccess, "Job Success"],
                [UPWORK_STATS.badge, "on Upwork"],
                [UPWORK_STATS.totalHours, "Hours Worked"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                  <div className="font-display text-2xl font-900 text-fox-orange">{n}</div>
                  <div className="mt-1 text-xs text-mist/80">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* VIDEO TESTIMONIALS */}
      <section className="section">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading eyebrow="Watch" title="Video" highlight="Testimonials" center />
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate-500">
              Tap any video to hear directly from the people we've worked with.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VIDEO_TESTIMONIALS.map((v, i) => (
              <Reveal key={v.file} delay={(i % 3) * 0.08}>
                <VideoTestimonial {...v} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WRITTEN REVIEWS */}
      <section className="section bg-slate-50/70">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading eyebrow="From Upwork" title="Verified" highlight="Reviews" center />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {WRITTEN_REVIEWS.map((r, i) => (
              <Reveal key={i} delay={(i % 3) * 0.08}>
                <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                  <Quote size={28} className="text-fox-red/20" />
                  <div className="mt-2 flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, k) => (
                      <Star key={k} size={15} className="fill-fox-orange text-fox-orange" />
                    ))}
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                  <div className="mt-4 border-t border-slate-100 pt-3">
                    <p className="font-display text-sm font-700 text-ink">{r.author}</p>
                    <p className="text-xs text-teal">{r.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <a
              href={UPWORK_STATS.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-teal/30 px-7 py-3 font-display text-sm font-700 text-teal-deep transition hover:bg-teal hover:text-white"
            >
              See all reviews on Upwork <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
