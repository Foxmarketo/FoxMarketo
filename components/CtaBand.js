import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-teal-deep py-16 text-white">
      <div className="stripes absolute right-0 top-0 h-40 w-40 opacity-50" />
      <div className="absolute -bottom-16 -left-16 h-52 w-52 rounded-full bg-fox-orange/15" />
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <p className="mb-2 font-display text-xs font-600 uppercase tracking-[2px] text-fox-orange">
          Let&apos;s Talk
        </p>
        <h2 className="font-display text-3xl font-800 leading-tight md:text-4xl">
          Bring Your <span className="text-fox-orange">Ideas</span> To Life
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-mist/90">
          Jump-start your business with our finest solutions and talented team.
          Plans start at <span className="font-700 text-fox-orange">$199/month</span>.
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-fox-red px-8 py-3.5 font-display text-sm font-700 shadow-xl shadow-fox-red/30 transition-transform hover:scale-105"
        >
          Get a Free Consultation <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
