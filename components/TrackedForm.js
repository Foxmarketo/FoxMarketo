"use client";

import { useState, useRef, useEffect } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { SITE } from "@/lib/site";
import { track } from "@/lib/analytics";

const FIELDS = [
  { name: "first_name", placeholder: "First Name", required: true, half: true },
  { name: "last_name", placeholder: "Last Name", half: true },
  { name: "email", placeholder: "Email Address", type: "email", required: true, half: true },
  { name: "phone", placeholder: "Phone Number", half: true },
  { name: "company", placeholder: "Company Name", half: true },
  { name: "budget", placeholder: "Monthly Budget (e.g. $199+)", half: true },
];

export default function TrackedForm({ source = "landing" }) {
  const [status, setStatus] = useState("idle");
  const [values, setValues] = useState({});
  const submittedRef = useRef(false);
  const notifiedRef = useRef(false);
  const lastFieldRef = useRef(null);
  const startedRef = useRef(false);

  // keep a ref copy of values for use in unload handlers
  const valuesRef = useRef({});
  useEffect(() => { valuesRef.current = values; }, [values]);

  function onFocus(name) {
    lastFieldRef.current = name;
    if (!startedRef.current) {
      startedRef.current = true;
      track("form_start", { source });
    }
    track("form_field_focus", { source, field: name });
  }

  function onChange(e) {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  }

  // Fire a partial-capture email + analytics when the user abandons the form.
  function sendAbandon(reason) {
    if (submittedRef.current || notifiedRef.current) return;
    const data = valuesRef.current;
    const hasData = data.email || data.first_name || data.phone;
    // analytics drop-off always fires (even with no data) so you see the funnel
    track("form_abandon", { source, last_field: lastFieldRef.current, reason, had_data: !!hasData });
    if (!hasData) return;
    notifiedRef.current = true;

    const payload = {
      access_key: SITE.web3formsKey,
      subject: `⚠️ Abandoned form (${source}), partial lead`,
      from_name: "Fox Marketo, Abandoned Form",
      _template: "table",
      note: `User started the ${source} form and left (${reason}). Last field: ${lastFieldRef.current || "n/a"}.`,
      ...data,
    };

    // sendBeacon survives the page unloading, this is the key to catching exits
    try {
      const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
      navigator.sendBeacon("https://api.web3forms.com/submit", blob);
    } catch {
      // fallback: fire-and-forget fetch with keepalive
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      }).catch(() => {});
    }
  }

  useEffect(() => {
    const onHide = () => {
      if (document.visibilityState === "hidden") sendAbandon("tab_hidden");
    };
    const onBeforeUnload = () => sendAbandon("page_unload");
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("beforeunload", onBeforeUnload);
    window.addEventListener("pagehide", onBeforeUnload);
    return () => {
      document.removeEventListener("visibilitychange", onHide);
      window.removeEventListener("beforeunload", onBeforeUnload);
      window.removeEventListener("pagehide", onBeforeUnload);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    submittedRef.current = true; // stop abandon-notify from firing
    track("form_submit", { source });

    const form = e.target;
    const data = new FormData(form);
    data.append("access_key", SITE.web3formsKey);
    data.append("subject", `New lead from ${source}, foxmarketo.com`);
    data.append("from_name", "Fox Marketo Website");
    data.append("lead_source", source);
    // Web3Forms autoresponder: sends the visitor a confirmation automatically.
    // Requires enabling "Autoresponder" once in your Web3Forms dashboard.
    data.append("autoresponder_subject", "We received your message, Fox Marketo");
    data.append(
      "autoresponder_message",
      "Hi,\n\nThanks for reaching out to Fox Marketo! We've received your message and will get back to you within one business day.\n\nNeed something urgent? WhatsApp us at +92 317 792 8052 or book a free call at https://foxmarketo.com/contact\n\nWhere cunning meets the market,\nThe Fox Marketo Team"
    );

    try {
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        track("form_success", { source });
        form.reset();
        setValues({});
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
      <div className="flex flex-col items-center rounded-2xl bg-white p-10 text-center shadow-lg">
        <CheckCircle2 size={48} className="text-teal" />
        <h3 className="mt-4 font-display text-xl font-800 text-ink">You&apos;re in!</h3>
        <p className="mt-2 text-slate-500">
          Thanks, we&apos;ll reach out shortly. For anything urgent, message us on WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl bg-white p-6 shadow-lg md:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        {FIELDS.map((f) => (
          <input
            key={f.name}
            name={f.name}
            type={f.type || "text"}
            required={f.required}
            placeholder={f.placeholder + (f.required ? " *" : "")}
            className={`${field} ${f.half ? "" : "sm:col-span-2"}`}
            onFocus={() => onFocus(f.name)}
            onChange={onChange}
          />
        ))}
      </div>
      <textarea
        name="message"
        rows={4}
        placeholder="Tell us about your project"
        className={`${field} mt-4 resize-none`}
        onFocus={() => onFocus("message")}
        onChange={onChange}
      />
      {/* honeypot */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} />

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-fox-red px-7 py-4 font-display text-base font-700 text-white shadow-lg shadow-fox-red/25 transition-transform hover:scale-[1.02] disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : <>Get My Free Proposal <Send size={18} /></>}
      </button>

      {status === "error" && (
        <p className="mt-4 flex items-center gap-2 text-sm text-fox-red">
          <AlertCircle size={16} /> Something went wrong. Email us at {SITE.email}.
        </p>
      )}
      <p className="mt-3 text-center text-xs text-slate-400">
        No spam. We reply within one business day.
      </p>
    </form>
  );
}
// Add lead to Brevo (fire-and-forget; won't block the user)
try {
  await fetch("/api/brevo-subscribe", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, name }),
  });
} catch (e) {
  console.error("Brevo subscribe failed:", e);
}
