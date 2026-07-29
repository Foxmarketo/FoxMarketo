"use client";

import Script from "next/script";
import { SITE } from "@/lib/site";

// Loads the Tidio live chat / chatbot widget on the LEFT side.
// Preconnect hints in the layout <head> warm up the connection so this
// loads quickly. Chatbot flows are configured in the Tidio dashboard.
export default function TidioChat() {
  if (!SITE.tidioKey) return null;
  return (
    <>
      <Script
        src={`https://code.tidio.co/${SITE.tidioKey}.js`}
        strategy="afterInteractive"
      />
      {/* Force the widget to the bottom-left so it doesn't clash with the
          WhatsApp button on the right. Tidio dashboard position setting also works. */}
      <Script id="tidio-position" strategy="afterInteractive">
        {`
          document.addEventListener("tidioChat-ready", function () {
            function place() {
              var el = document.getElementById("tidio-chat-iframe");
              if (el) { el.style.left = "16px"; el.style.right = "auto"; }
            }
            place();
            new MutationObserver(place).observe(document.body, { childList: true, subtree: true });
          });
        `}
      </Script>
    </>
  );
}
