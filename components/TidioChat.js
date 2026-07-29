"use client";

import Script from "next/script";
import { SITE } from "@/lib/site";

// Loads the Tidio live chat / chatbot widget.
// All chatbot flows (lead capture, WhatsApp routing, auto-messages) are
// configured in your Tidio dashboard, not here.
// Paste your key into SITE.tidioKey in lib/site.js to enable.
export default function TidioChat() {
  if (!SITE.tidioKey) return null;
  return (
    <Script
      src={`//code.tidio.co/${SITE.tidioKey}.js`}
      strategy="lazyOnload"
    />
  );
}
