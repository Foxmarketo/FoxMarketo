import { Mail, MessageCircle, Globe } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/TrackedForm";
import Calendly from "@/components/Calendly";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Fox Marketo for a free consultation. WhatsApp us in the USA, UAE, KSA, or Pakistan, we serve clients worldwide.",
};

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-teal via-teal-deep to-teal-dark py-20 text-white md:py-24">
        <div className="stripes absolute right-0 top-0 h-40 w-36 opacity-40" />
        <div className="mx-auto max-w-4xl px-5 text-center md:px-8">
          <Reveal>
            <p className="mb-3 font-display text-sm font-600 uppercase tracking-[4px] text-fox-orange">Contact Us</p>
            <h1 className="font-display text-4xl font-900 md:text-5xl">Let&apos;s Get In Touch Today</h1>
            <p className="mx-auto mt-5 max-w-xl text-mist/90">
              Use the enquiry form for a quick response, or message us on WhatsApp in
              your region. Plans start at <span className="font-700 text-fox-orange">$199/month</span>.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">
          {/* left: info */}
          <div className="lg:col-span-2">
            <Reveal>
              <SectionHeading eyebrow="Reach Us" title="Talk To" highlight="Fox Marketo" />
              <p className="mt-4 text-slate-500">
                We&apos;ll get back to you as soon as possible. Prefer chat? Tap any
                number below to open WhatsApp.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-fox-red/10 text-fox-red"><Mail size={20} /></span>
                  <div>
                    <p className="font-display text-sm font-700 text-ink">Email</p>
                    <a href={`mailto:${SITE.email}`} className="break-all text-sm text-slate-500 hover:text-fox-red">{SITE.email}</a>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 text-teal"><Globe size={20} /></span>
                  <div>
                    <p className="font-display text-sm font-700 text-ink">Serving</p>
                    <p className="text-sm text-slate-500">UAE · KSA · Pakistan · Worldwide</p>
                  </div>
                </div>

                <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                  <p className="mb-3 flex items-center gap-2 font-display text-sm font-700 text-ink">
                    <MessageCircle size={18} className="text-[#25D366]" /> WhatsApp / Call
                  </p>
                  <ul className="space-y-2">
                    {SITE.phones.map((p) => (
                      <li key={p.flag}>
                        <a
                          href={`https://wa.me/${p.wa}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between border-b border-dashed border-slate-100 py-1.5 text-sm last:border-0 hover:text-fox-red"
                        >
                          <span className="font-700 text-fox-orange">{p.flag}</span>
                          <span className="text-slate-600">{p.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>

          {/* right: form */}
          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <ContactForm source="contact" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* CALENDLY BOOKING */}
      <section className="section bg-slate-50/70 pt-0">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <SectionHeading eyebrow="Prefer To Book Directly?" title="Schedule a" highlight="Free Call" center />
            <p className="mx-auto mt-4 max-w-xl text-center text-slate-500">
              Pick a time that works for you and we'll talk through your goals, no obligation.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 rounded-2xl bg-white p-2 shadow-sm ring-1 ring-slate-100">
              <Calendly />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
