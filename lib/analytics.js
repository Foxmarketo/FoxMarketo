// Lightweight analytics dispatcher.
// Sends events to Google Analytics (gtag) and/or Vercel Analytics if they're
// loaded, and always logs to console so you can verify in dev.
// No hard dependency, safe to call anywhere.

export function track(event, data = {}) {
  if (typeof window === "undefined") return;

  // Google Analytics 4
  if (typeof window.gtag === "function") {
    window.gtag("event", event, data);
  }

  // Vercel Analytics custom events
  if (window.va && typeof window.va === "function") {
    window.va("event", { name: event, ...data });
  }

  // Always visible in the browser console during development
  if (process.env.NODE_ENV !== "production") {
    console.log("[track]", event, data);
  }
}
