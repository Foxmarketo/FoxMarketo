"use client";

import Script from "next/script";
import { SITE } from "@/lib/site";

// Loads the Tidio live chat / chatbot widget.
// Position (left/right) is controlled in the Tidio dashboard:
// Settings > Channels > Live Chat > Appearance > Widget position.
// Preconnect hints in the layout <head> speed up loading.
export default function TidioChat() {
  if (!SITE.tidioKey) return null;
  return (
    <Script
      src={`https://code.tidio.co/${SITE.tidioKey}.js`}
      strategy="afterInteractive"
    />
  );
}
