# Form Tracking & Abandonment Alerts

Your forms (Contact + Landing) do two things automatically:

## 1. Abandonment email alerts
If someone fills in **any** of email / name / phone and then leaves the page or
switches away **without submitting**, the site sends you a partial-lead email
via Web3Forms — subject line **"⚠️ Abandoned form"**. It includes whatever they
typed and which field they stopped on.

- This uses the browser's `sendBeacon` API, which reliably fires even as the
  page is closing.
- It only fires once per visitor, and never after a successful submit.
- **Requires your Web3Forms key** set in `lib/site.js` (same key as the normal
  form). No key = no emails.

**Limitation to know:** it can only capture what the person actually typed
before leaving. If they leave the form blank, there's nothing to send (but the
drop-off is still recorded in analytics — see below).

## 2. Drop-off analytics (funnel)
Every step is tracked as an analytics event:
`form_start`, `form_field_focus` (with field name), `form_abandon` (with the
last field + reason), `form_submit`, `form_success`.

These flow to **Google Analytics 4** automatically once you add your GA ID.

### Turn on Google Analytics (free)
1. Create a GA4 property at https://analytics.google.com — copy the
   Measurement ID (looks like `G-XXXXXXXXXX`).
2. In Vercel → your project → **Settings → Environment Variables**, add:
   ```
   NEXT_PUBLIC_GA_ID = G-XXXXXXXXXX
   ```
3. Redeploy. Done — events start flowing.

In GA4, go to **Reports → Engagement → Events** to see the funnel. You'll see
exactly which field people stop at, so you can shorten or fix it.

### Prefer Vercel Analytics instead?
Run `npm install @vercel/analytics`, add `<Analytics />` from
`@vercel/analytics/react` to `app/layout.js`, and the same events appear in
Vercel's dashboard. The tracking code already calls both — no other changes
needed.

## Where the logic lives
- `components/TrackedForm.js` — the form + abandonment + event firing
- `lib/analytics.js` — the event dispatcher (GA + Vercel + console)
- `components/Analytics.js` — loads GA when the env var is present

During local development, open the browser console to watch every event log in
real time (`[track] form_field_focus …`).
