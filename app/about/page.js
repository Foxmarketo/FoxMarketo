import { Target, Eye, Heart, Handshake } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import TeamSlider from "@/components/TeamSlider";

export const metadata = {
  title: "About",
  description:
    "Fox Marketo is a full-stack digital marketing agency built around the idea of the fox, cunning, strategy, and agility. Meet the team and our core values.",
};

const VALUES = [
  { icon: Target, title: "Client Value Creation", desc: "We put the customer first and build everything around your goals." },
  { icon: Eye, title: "Focus on Growth", desc: "Creative marketing strategies aimed squarely at measurable growth." },
  { icon: Heart, title: "Honesty & Transparency", desc: "Open, honest communication with clients at every stage." },
  { icon: Handshake, title: "Teamwork", desc: "One collaborative team staying ahead of the competition." },
];

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-br from-teal via-teal-deep to-teal-dark py-20 text-white md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <p className="mb-3 font-display text-sm font-600 uppercase tracking-[4px] text-fox-orange">Welcome to Fox Marketo</p>
            <h1 className="font-display text-4xl font-900 md:text-5xl">Where cunning meets the market</h1>
            <p className="mx-auto mt-5 max-w-2xl text-mist/90">
              We understand that the business world can be a tricky, competitive
              landscape. That&apos;s why we built our company around the idea of the
              fox, a symbol of cunning, strategy, and agility.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Our Story" title="Something to" highlight="Know About Us" />
            <p className="mt-5 text-slate-500">
              Fox Marketo is a full-stack digital marketing firm assisting companies
              of all sizes to accomplish their digital objectives. Whether you aim to
              enhance your website&apos;s traffic, escalate your e-commerce sales, or
              elevate your brand&apos;s prominence, our team has the skills and
              proficiency to support your success.
            </p>
            <p className="mt-4 text-slate-500">
              We specialize in a full stack of digital marketing services, market
              research, brand development, advertising campaigns, social media, video,
              and more, with a focus on agility and adapting fast to change.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-fox-red to-teal p-10 text-white shadow-xl">
                <div className="grid grid-cols-2 gap-6 text-center">
                  {[["10+", "Services"], ["12", "Industries"], ["4", "Regions"], ["$199", "Starting"]].map(([n, l]) => (
                    <div key={l}>
                      <div className="font-display text-4xl font-900">{n}</div>
                      <div className="mt-1 text-xs uppercase tracking-wide text-white/80">{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-slate-50/70">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading eyebrow="What Drives Us" title="Our Core" highlight="Values" center /></Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <Reveal key={v.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl bg-white p-6 text-center shadow-sm">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal/10 text-teal">
                      <Icon size={26} />
                    </div>
                    <h3 className="font-display text-base font-700 text-ink">{v.title}</h3>
                    <p className="mt-2 text-sm text-slate-500">{v.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-6xl">
          <Reveal><SectionHeading eyebrow="Our Leadership" title="Meet The" highlight="Team" center /></Reveal>
          <p className="mx-auto mt-4 max-w-xl text-center text-slate-500">
            The people behind Fox Marketo, blending strategy, creativity, and operations to grow your brand.
          </p>
          <div className="mt-12">
            <TeamSlider />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
