"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Linkedin, Instagram, Facebook, Youtube, Mail, MapPin, Phone } from "lucide-react";
import { SITE, NAV } from "@/lib/site";

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/get-started")) return null;

  return (
    <footer className="bg-teal text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <Image src="/logo-white.png" alt="Fox Marketo" width={170} height={45} className="h-10 w-auto" />
          <p className="mt-4 text-sm leading-relaxed text-mist/90">
            A full-stack digital marketing agency helping brands grow their traffic,
            sales, and presence worldwide.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={SITE.social.linkedin} aria-label="LinkedIn" className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"><Linkedin size={18} /></a>
            <a href={SITE.social.instagram} aria-label="Instagram" className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"><Instagram size={18} /></a>
            <a href={SITE.social.facebook} aria-label="Facebook" className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"><Facebook size={18} /></a>
            <a href={SITE.social.youtube} aria-label="YouTube" className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"><Youtube size={18} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-base font-700">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-mist/90">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="transition hover:text-fox-orange">{n.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-700">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-mist/90">
            <li>SEO &amp; Content</li>
            <li>Paid Ads / PPC</li>
            <li>Social Media</li>
            <li>Web Development</li>
            <li>Video &amp; YouTube</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-700">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-mist/90">
            <li className="flex items-start gap-2.5"><Mail size={17} className="mt-0.5 shrink-0" /><a href={`mailto:${SITE.email}`} className="break-all hover:text-fox-orange">{SITE.email}</a></li>
            <li className="flex items-start gap-2.5"><Phone size={17} className="mt-0.5 shrink-0" /><span>{SITE.phones[0].label}</span></li>
            <li className="flex items-start gap-2.5"><MapPin size={17} className="mt-0.5 shrink-0" /><span>Serving US · Europe · Middle East · Pakistan · Worldwide</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-mist/70 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>{SITE.tagline}.</p>
        </div>
      </div>
    </footer>
  );
}
