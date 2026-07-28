"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, Gift, Download, CheckCircle2 } from "lucide-react";
import { SITE } from "@/lib/site";
import { track } from "@/lib/analytics";

const COUPON = "FOX10";

export default function EbookPopup() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [email, setEmail] = useState("");

  // Show once per browser (uses a flag that survives reloads but not incognito).
  useEffect(() => {
    let shown = false;
    try {
      shown = window.localStorage.getItem("fm_ebook_seen") === "1";
    } catch {}
    if (shown) return;
    const t = setTimeout(() => {
      setOpen(true);
      track("ebook_popup_shown");
    }, 2500); // appear after 2.5s
    return () => clearTimeout(t);
  }, []);

  function dismiss(reason) {
    setOpen(false);
    track("ebook_popup_dismissed", { reason });
    try {
      window.localStorage.setItem("fm_ebook_seen", "1");
    } catch {}
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    track("ebook_submit");

    const data = new FormData();
    data.append("access_key", SITE.web3formsKey);
    data.append("subject", "New ebook + coupon signup (FOX10)");
    data.append("from_name", "Fox Marketo Popup");
    data.append("email", email);
    data.append("coupon_code", COUPON);
    // Web3Forms autoresponder: emails the VISITOR automatically.
    // Requires enabling "Autoresponder" once in your Web3Forms dashboard.
    data.append(
      "autoresponder_subject",
      "Your Fox Marketo ebook + 10% coupon (FOX10)"
    );
    data.append(
      "autoresponder_message",
      `Hi,\n\nThanks for grabbing our free growth ebook! Here it is: https://foxmarketo.com/fox-marketo-ebook.pdf\n\nAs promised, here's your exclusive discount code: ${COUPON}\nShare this code when you sign a contract to claim an extra 10% off your first engagement.\n\nWant to talk? Book a free call: https://foxmarketo.com/contact\nWhatsApp: +92 317 792 8052\n\nWhere cunning meets the market,\nThe Fox Marketo Team`
    );
    data.append(
      "message",
      `New lead captured the ebook popup.\nEmail: ${email}\nCoupon issued: ${COUPON} (10% off on contract).`
    );

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        track("ebook_success");
        try {
          window.localStorage.setItem("fm_ebook_seen", "1");
        } catch {}
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
        onClick={() => dismiss("backdrop")}
      />

      {/* modal */}
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* X close */}
        <button
          onClick={() => dismiss("x")}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-ink shadow transition hover:bg-white"
        >
          <X size={18} />
        </button>

        {status === "success" ? (
          <div className="p-8 text-center">
            <CheckCircle2 size={52} className="mx-auto text-teal" />
            <h3 className="mt-4 font-display text-2xl font-800 text-ink">You&apos;re all set!</h3>
            <p className="mt-2 text-slate-500">
              Your free ebook is ready, and here&apos;s your exclusive discount code:
            </p>
            <div className="mx-auto mt-5 inline-flex flex-col items-center rounded-2xl bg-fox-red px-8 py-4 text-white shadow-lg">
              <span className="font-display text-[11px] font-600 uppercase tracking-[2px] text-white/85">10% off your contract</span>
              <span className="font-display text-3xl font-900 tracking-widest">{COUPON}</span>
            </div>
            <p className="mt-4 text-xs text-slate-400">
              We&apos;ve emailed you a copy too. Share code {COUPON} when you sign to claim your discount.
            </p>
            <a
              href="/fox-marketo-ebook.pdf"
              download
              onClick={() => track("ebook_download")}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal px-7 py-3 font-display text-sm font-700 text-white transition-transform hover:scale-105"
            >
              <Download size={17} /> Download Your Ebook
            </a>
          </div>
        ) : (
          <div className="grid sm:grid-cols-5">
            {/* left visual */}
            <div className="relative hidden bg-gradient-to-br from-teal to-teal-deep sm:col-span-2 sm:block">
              <div className="stripes absolute right-0 top-0 h-20 w-20 opacity-40" />
              <div className="flex h-full flex-col items-center justify-center p-6 text-center text-white">
                <Gift size={40} className="text-fox-orange" />
                <p className="mt-3 font-display text-lg font-800 leading-tight">Free Ebook + 10% Off</p>
                <p className="mt-2 text-xs text-mist/90">7 marketing moves that grow revenue</p>
              </div>
            </div>

            {/* right form */}
            <div className="p-7 sm:col-span-3">
              <p className="font-display text-xs font-600 uppercase tracking-[2px] text-fox-red">Wait, before you go</p>
              <h3 className="mt-1 font-display text-xl font-800 leading-tight text-ink">
                Get our free growth ebook <span className="text-fox-red">+ 10% off</span>
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Drop your email and we&apos;ll send you the guide plus an exclusive discount code for your first contract.
              </p>

              <form onSubmit={onSubmit} className="mt-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-teal focus:ring-2 focus:ring-teal/20"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-3 w-full rounded-full bg-fox-red px-6 py-3 font-display text-sm font-700 text-white shadow-lg shadow-fox-red/25 transition-transform hover:scale-[1.02] disabled:opacity-60"
                >
                  {status === "loading" ? "Sending..." : "Send My Ebook + Coupon"}
                </button>
                {status === "error" && (
                  <p className="mt-2 text-xs text-fox-red">
                    Something went wrong. Please try again or email {SITE.email}.
                  </p>
                )}
              </form>

              {/* Not interested */}
              <div className="mt-3 text-right">
                <button
                  onClick={() => dismiss("not_interested")}
                  className="text-xs text-slate-400 underline-offset-2 hover:text-slate-600 hover:underline"
                >
                  Not interested
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
