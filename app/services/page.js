import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServicesGrid from "@/components/ServicesGrid";
import CtaBand from "@/components/CtaBand";
import { STEPS } from "@/lib/data";

export const metadata = {
  title: "Services",
  description:
    "Customized digital marketing solutions for your business, SEO, PPC, social media, web development, design, content, email, and video/YouTube. Plans from $199/month.",
};

const INCLUDED = [
  "Dedicated account manager",
  "Monthly performance reports",
  "Transparent, fixed pricing",
  "Quality assurance at every stage",
  "Cost-effective hourly rates",
  "One team for your whole project",
];

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-teal via-teal-deep to-teal-dark py-20 text-white md:py-24">
        <div className="stripes absolute right-0 top-0 h-40 w-36 opacity-40" />
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <p className="mb-3 font-display text-sm font-600 uppercase tracking-[4px] text-fox-orange">What We Do</p>
            <h1 className="font-display text-4xl font-900 md:text-5xl">
              Customized Solutions For Your Business
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-mist/90">
              We offer a wide range of digital marketing services designed to help you
              build brand awareness, generate leads, and drive sales, all starting
              from <span className="font-700 text-fox-orange">$199/month</span>.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading eyebrow="Our Services" title="Everything Under" highlight="One Roof" center />
          </Reveal>
          <div className="mt-12">
            <ServicesGrid />
          </div>
        </div>
      </section>

      <section className="section bg-slate-50/70">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Cost Effective" title="What Every Plan" highlight="Includes" />
            <p className="mt-4 text-slate-500">
              We take the time to understand the problem you&apos;re solving so we can
              build cost-effective solutions. Our rates are lower than competitors
              across the world, with no drop in quality.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {INCLUDED.map((t) => (
                <div key={t} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal text-white"><Check size={12} /></span>
                  <span className="text-sm text-slate-600">{t}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="rounded-3xl bg-gradient-to-br from-fox-red to-[#b02020] p-10 text-center text-white shadow-xl">
              <p className="font-display text-xs font-600 uppercase tracking-[2px] text-white/80">Plans start at</p>
              <p className="font-display text-6xl font-900">$199<span className="text-2xl font-600">/mo</span></p>
              <p className="mt-3 text-white/90">Flexible packages tailored to your goals and budget.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading eyebrow="How It Works" title="Our" highlight="Process" center /></Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal font-display text-lg font-800 text-white">{s.n}</div>
                  <h3 className="mt-4 font-display text-lg font-700 text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
