"use client";

import Script from "next/script";
import { SITE } from "@/lib/site";

// Loads the Tidio live chat / chatbot widget on the LEFT side.
// All chatbot flows (lead capture, WhatsApp routing, auto-messages) are
// configured in your Tidio dashboard, not here.
// Paste your key into SITE.tidioKey in lib/site.js to enable.
export default function TidioChat() {
  if (!SITE.tidioKey) return null;
  return (
    <>
      <Script
        src={`https://code.tidio.co/${SITE.tidioKey}.js`}
        strategy="afterInteractive"
      />
      {/* Force the widget to the bottom-left so it doesn't clash with the
          WhatsApp button on the right. */}
      <Script id="tidio-position" strategy="afterInteractive">
        {`
          function fmPositionTidio() {
            if (window.tidioChatApi) {
              try {
                document.documentElement.style.setProperty('--tidio-position', 'left');
              } catch (e) {}
            }
          }
          document.addEventListener("tidioChat-ready", function () {
            var s = document.getElementById("tidio-chat-iframe");
            function place() {
              var el = document.getElementById("tidio-chat-iframe");
              if (el) {
                el.style.left = "16px";
                el.style.right = "auto";
              }
            }
            place();
            var obs = new MutationObserver(place);
            obs.observe(document.body, { childList: true, subtree: true });
          });
        `}
      </Script>
    </>
  );
}
