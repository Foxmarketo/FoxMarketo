import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SITE } from "@/lib/site";
import { INDUSTRIES, STEPS } from "@/lib/data";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServicesGrid from "@/components/ServicesGrid";
import LogoAnimation from "@/components/LogoAnimation";
import CtaBand from "@/components/CtaBand";

const WHY = [
  ["Cost-effective", "Lower hourly rates than competitors, without cutting corners."],
  ["One team, every service", "Outsource your whole project to a single partner."],
  ["Quality assurance", "Work reviewed against your goals at every stage."],
  ["Results-driven", "Everything we do points back to leads and sales."],
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal via-teal-deep to-teal-dark text-white">
        <div className="stripes absolute right-0 top-0 h-48 w-40 opacity-40" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-fox-orange/10" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-2 md:px-8 md:py-28">
          <Reveal>
            <p className="mb-3 font-display text-sm font-600 uppercase tracking-[4px] text-fox-orange">
              Digital Marketing Agency
            </p>
            <h1 className="font-display text-5xl font-900 leading-[1.05] md:text-6xl">
              Grow Your <span className="text-fox-orange">Brand</span>
            </h1>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-mist/90">
              Full-stack digital marketing, from SEO and paid ads to video editing
              and YouTube management.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-fox-red px-7 py-3.5 font-display text-sm font-700 shadow-xl shadow-fox-red/30 transition-transform hover:scale-105">
                Get Started <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-display text-sm font-700 transition hover:bg-white/10">
                Our Services
              </Link>
            </div>
            <div className="mt-8 inline-flex flex-col items-start rounded-2xl bg-fox-red px-6 py-3 shadow-xl shadow-fox-red/30">
              <span className="font-display text-[10px] font-600 uppercase tracking-[1.5px] text-white/90">Services starting from</span>
              <span className="font-display text-3xl font-900">$199<span className="text-base font-600">/month</span></span>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative mx-auto max-w-sm">
              <div className="animate-float rounded-3xl bg-white/10 p-8 backdrop-blur-sm ring-1 ring-white/15">
                <div className="grid grid-cols-2 gap-4 text-center">
                  {[["Full", "Stack Service"], ["Global", "Worldwide Reach"], ["100%", "Custom Work"], ["24/7", "Support"]].map(([n, l]) => (
                    <div key={l} className="rounded-xl bg-white/90 p-4 text-teal-deep">
                      <div className="font-display text-2xl font-900 text-fox-red">{n}</div>
                      <div className="mt-1 text-[11px] font-600 uppercase tracking-wide text-slate-500">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WELCOME */}
      <section className="section">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-100">
              <LogoAnimation className="h-auto w-full" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <SectionHeading eyebrow="Who We Are" title="A Full-Stack" highlight="Digital Marketing Firm" />
            <p className="mt-5 text-slate-500">
              We help brands of all sizes grow their traffic, sales, and presence , 
              blending strategy, design, and technology to deliver measurable results.
              At Fox Marketo, cunning meets the market.
            </p>
            <p className="mt-4 text-slate-500">
              From SEO and paid ads to video editing and YouTube management, one agile
              team handles your whole digital presence, starting at{" "}
              <span className="font-700 text-fox-red">$199/month</span>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section bg-slate-50/70">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading eyebrow="What We Do" title="Our" highlight="Services" center />
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate-500">
              A complete digital marketing toolkit under one roof, built to grow
              awareness, leads, and sales.
            </p>
          </Reveal>
          <div className="mt-12">
            <ServicesGrid limit={6} />
          </div>
          <div className="mt-10 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 font-display text-sm font-700 text-fox-red hover:gap-3 transition-all">
              View all services <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Why Choose Us" title="Why" highlight="Fox Marketo" />
            <p className="mt-4 text-slate-500">
              We combine the agility of a boutique studio with the range of a full
              agency, one team that can take your whole project end to end.
            </p>
            <div className="mt-8 space-y-4">
              {WHY.map(([t, d]) => (
                <div key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                    <Check size={14} />
                  </span>
                  <p className="text-slate-600"><b className="font-display text-ink">{t}.</b> {d}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-3xl bg-gradient-to-br from-teal to-teal-deep p-8 text-white shadow-xl">
              <h3 className="font-display text-xl font-800">New &amp; In-Demand</h3>
              <p className="mt-1 font-display text-2xl font-900 text-fox-orange">Video Editing & YouTube Management</p>
              <p className="mt-3 text-mist/90">
                From raw footage to polished, scroll-stopping videos, plus full
                channel management: uploads, thumbnails, SEO, and growth.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[["10+", "Services"], ["12", "Industries"], ["$199", "Starting"]].map(([n, l]) => (
                  <div key={l} className="rounded-xl bg-white/10 p-3">
                    <div className="font-display text-xl font-900">{n}</div>
                    <div className="text-[10px] uppercase tracking-wide text-mist/80">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section bg-slate-50/70">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading eyebrow="How It Works" title="Our" highlight="Process" center />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal font-display text-lg font-800 text-white">{s.n}</div>
                  <h3 className="mt-4 font-display text-lg font-700 text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="section">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading eyebrow="Experience" title="Industries We've" highlight="Worked With" center />
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {INDUSTRIES.map((ind, i) => {
              const Icon = ind.icon;
              return (
                <Reveal key={ind.name} delay={(i % 4) * 0.06}>
                  <div className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition hover:border-teal/30 hover:shadow-md">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal/10 text-teal">
                      <Icon size={18} />
                    </span>
                    <span className="font-display text-sm font-600 text-ink">{ind.name}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
