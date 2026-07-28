"use client";

import { useEffect } from "react";
import { SITE } from "@/lib/site";

export default function Calendly() {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
    return () => {
      document.body.removeChild(s);
    };
  }, []);

  return (
    <div
      className="calendly-inline-widget rounded-2xl overflow-hidden"
      data-url={SITE.calendlyUrl}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
