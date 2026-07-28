"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Landing pages use their own minimal header
  if (pathname?.startsWith("/get-started")) return null;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-mist/95 backdrop-blur shadow-sm" : "bg-mist"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Fox Marketo" width={160} height={42} priority className="h-9 w-auto" />
        </Link>

        {/* desktop */}
        <ul className="hidden items-center gap-7 md:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`font-display text-sm font-600 transition-colors ${
                  pathname === item.href
                    ? "text-fox-red"
                    : "text-teal-deep hover:text-fox-red"
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="hidden rounded-full bg-fox-red px-6 py-2.5 font-display text-sm font-700 text-white shadow-lg shadow-fox-red/25 transition-transform hover:scale-105 md:inline-block"
        >
          Hire Us
        </Link>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="text-teal-deep md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="border-t border-teal/10 bg-mist px-5 pb-5 md:hidden">
          <ul className="flex flex-col gap-1 pt-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded-lg px-3 py-2.5 font-display text-sm font-600 ${
                    pathname === item.href
                      ? "bg-teal/10 text-fox-red"
                      : "text-teal-deep"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/contact"
                className="block rounded-full bg-fox-red px-6 py-3 text-center font-display text-sm font-700 text-white"
              >
                Hire Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
