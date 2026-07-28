import Image from "next/image";
import Link from "next/link";
import { Check, Star, Shield, Clock, Award, Zap, Users, MessageCircle } from "lucide-react";
import TrackedForm from "@/components/TrackedForm";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Get Started, Free Marketing Proposal",
  description:
    "Stop guessing at marketing. Get a full-stack digital marketing team from $199/month. Free proposal, no long-term contracts. Book your free strategy call with Fox Marketo.",
  robots: { index: true, follow: true },
};

const FOR_WHO = [
  "Business owners tired of DIY marketing",
  "Brands with inconsistent or no online presence",
  "Companies that want more leads and sales",
  "Founders who need one team for everything",
  "Anyone wanting reliable, responsive support",
];

const WHY = [
  { icon: Award, t: "Full-Stack Expert Team" },
  { icon: Clock, t: "Fast Response (24–48 hrs)" },
  { icon: Shield, t: "100% Transparent Reporting" },
  { icon: Zap, t: "Fixed Pricing from $199/mo" },
  { icon: Users, t: "No Long-Term Contracts" },
];

const GET = [
  "Dedicated account manager",
  "SEO & content that ranks",
  "Paid ads (Google & Meta)",
  "Social media management",
  "Website design & development",
  "Video editing & YouTube growth",
];

const FAQ = [
  ["How much does it cost?", "Plans start at $199/month. After a free strategy call we recommend a package scoped to your goals and budget, no obligation."],
  ["Do I need a contract?", "No long-term contracts. We earn your business month to month."],
  ["How fast will I see results?", "Paid ads and social can move within weeks; SEO compounds over a few months. We report progress transparently the whole way."],
  ["What industries do you work with?", "Health, food, finance, retail, automotive, e-commerce, and more, 12+ industries across the USA, UAE, KSA, and worldwide."],
];

export default function GetStarted() {
  const waHref = `https://wa.me/${SITE.whatsappPrimary}?text=${encodeURIComponent("Hi Fox Marketo, I'd like a free marketing proposal.")}`;

  return (
    <div className="bg-white">
      {/* minimal top bar */}
      <header className="border-b border-slate-100">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
          <Link href="/"><Image src="/logo.png" alt="Fox Marketo" width={150} height={40} className="h-9 w-auto" priority /></Link>
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 font-display text-sm font-700 text-white">
            <MessageCircle size={16} /> WhatsApp Us
          </a>
        </div>
      </header>

      {/* HERO + FORM */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal via-teal-deep to-teal-dark text-white">
        <div className="stripes absolute right-0 top-0 h-48 w-40 opacity-40" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-fox-orange/10" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:px-8 md:py-20">
          <div>
            <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-600">
              <Star size={13} className="fill-fox-orange text-fox-orange" /> Trusted by 12+ industries worldwide
            </div>
            <h1 className="font-display text-4xl font-900 leading-[1.08] md:text-5xl">
              Stop Guessing At Marketing. <span className="text-fox-orange">Start Growing.</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-mist/90">
              Your complete digital marketing handled by one expert team, SEO, ads,
              social, web, and video. More leads. More sales. From{" "}
              <span className="font-700 text-fox-orange">$199/month</span>.
            </p>
            <ul className="mt-6 space-y-2.5">
              {["No long-term contracts", "Transparent monthly reporting", "Free strategy call & proposal"].map((t) => (
                <li key={t} className="flex items-center gap-2.5 text-mist/90">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-fox-orange text-white"><Check size={12} /></span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div id="form">
            <Reveal>
              <div className="mb-3 text-center">
                <p className="font-display text-lg font-800 text-white">Get Your Free Proposal</p>
                <p className="text-sm text-mist/80">Takes 60 seconds, no obligation.</p>
              </div>
              <TrackedForm source="landing" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="section">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 font-display text-xs font-600 uppercase tracking-[2px] text-fox-red">Who This Is For</p>
          <h2 className="font-display text-3xl font-800 text-teal-deep">Is Fox Marketo Right For You?</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {FOR_WHO.map((t) => (
              <div key={t} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-4 text-left shadow-sm">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal text-white"><Check size={14} /></span>
                <span className="text-sm font-500 text-ink">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section bg-slate-50/70">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-3xl font-800 text-teal-deep">Why Choose Us</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {WHY.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.t} className="rounded-2xl bg-white p-5 text-center shadow-sm">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal"><Icon size={22} /></div>
                  <p className="font-display text-sm font-700 text-ink">{w.t}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="section">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-2 font-display text-xs font-600 uppercase tracking-[2px] text-fox-red">What You Get</p>
            <h2 className="font-display text-3xl font-800 text-teal-deep">Everything Your Brand Needs</h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {GET.map((t) => (
                <div key={t} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-fox-red text-white"><Check size={12} /></span>
                  <span className="text-sm text-slate-600">{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-fox-red to-[#b02020] p-10 text-center text-white shadow-xl">
            <p className="font-display text-xs font-600 uppercase tracking-[2px] text-white/80">Plans start at</p>
            <p className="font-display text-6xl font-900">$199<span className="text-2xl font-600">/mo</span></p>
            <p className="mt-3 text-white/90">One team. Every service. No contracts.</p>
            <a href="#form" className="mt-6 inline-block rounded-full bg-white px-7 py-3 font-display text-sm font-700 text-fox-red">Get My Free Proposal</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-slate-50/70">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-800 text-teal-deep">Common Questions</h2>
          <div className="mt-8 space-y-4">
            {FAQ.map(([q, a]) => (
              <div key={q} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-display text-base font-700 text-ink">{q}</h3>
                <p className="mt-2 text-sm text-slate-500">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-teal-deep py-16 text-center text-white">
        <div className="stripes absolute right-0 top-0 h-40 w-40 opacity-40" />
        <div className="relative mx-auto max-w-2xl px-5">
          <h2 className="font-display text-3xl font-900 md:text-4xl">Ready To Grow Your Brand?</h2>
          <p className="mt-3 text-mist/90">Book your free strategy call today. Plans start at $199/month.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#form" className="rounded-full bg-fox-red px-8 py-3.5 font-display text-sm font-700 shadow-xl shadow-fox-red/30">Get My Free Proposal</a>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/25 px-8 py-3.5 font-display text-sm font-700">WhatsApp Us</a>
          </div>
        </div>
      </section>

      <footer className="bg-ink py-6 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {SITE.name}. {SITE.tagline}.
      </footer>
    </div>
  );
}
