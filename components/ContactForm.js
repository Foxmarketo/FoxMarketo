"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export default function ContactForm() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    const form = e.target;
    const data = new FormData(form);
    data.append("access_key", SITE.web3formsKey);
    data.append("subject", "New enquiry from foxmarketo.com");
    data.append("from_name", "Fox Marketo Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl bg-white p-10 text-center shadow-sm">
        <CheckCircle2 size={48} className="text-teal" />
        <h3 className="mt-4 font-display text-xl font-800 text-ink">Message sent!</h3>
        <p className="mt-2 text-slate-500">
          Thanks for reaching out. We&apos;ll get back to you shortly. For anything
          urgent, message us on WhatsApp.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full bg-teal px-6 py-2.5 font-display text-sm font-700 text-white"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <input name="first_name" required placeholder="First Name" className={field} />
        <input name="last_name" placeholder="Last Name" className={field} />
        <input name="email" type="email" required placeholder="Email Address" className={field} />
        <input name="phone" placeholder="Phone Number" className={field} />
        <input name="subject_line" placeholder="Subject" className={`${field} sm:col-span-1`} />
        <input name="company" placeholder="Company Name" className={field} />
      </div>
      <textarea name="message" required rows={5} placeholder="Share a message" className={`${field} mt-4 resize-none`} />

      {/* honeypot spam trap */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-fox-red px-7 py-3.5 font-display text-sm font-700 text-white shadow-lg shadow-fox-red/25 transition-transform hover:scale-105 disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : <>Get in Touch <Send size={16} /></>}
      </button>

      {status === "error" && (
        <p className="mt-4 flex items-center gap-2 text-sm text-fox-red">
          <AlertCircle size={16} /> Something went wrong. Please email us directly at {SITE.email}.
        </p>
      )}
    </form>
  );
}
