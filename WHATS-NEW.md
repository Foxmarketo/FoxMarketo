# What's New, and What You Need to Do

This update added: a Testimonials page (video + Upwork reviews), a team slider,
the ebook/coupon popup, Calendly on Contact, GA4 tracking, updated WhatsApp and
social links, and removed all em-dashes.

Below is everything that needs a value from you to go fully live.

---

## 1. One Web3Forms key powers everything
Get a free key at https://web3forms.com (enter Info.foxmarketo@gmail.com).
Paste it into `lib/site.js` as `web3formsKey`.

That single key runs ALL of these:
- Contact form
- Landing page form (/get-started)
- Form abandonment alerts
- Ebook + coupon popup signups

No key = forms and popup still display, but no emails are delivered.

## 2. Google Analytics (already set)
Your GA4 ID `G-R49HHC9G50` is already in `lib/site.js`. Once the site is live,
you'll see traffic and the form funnel events (form_start, form_abandon,
ebook_popup_shown, ebook_success, etc.) in your GA4 dashboard.

## 3. Calendly (already set)
Your link `calendly.com/foxmarketo/30min` is embedded on the Contact page.
Nothing to do, just make sure that Calendly event is public.

## 4. WhatsApp + socials (already set)
- WhatsApp everywhere: +92 317 792 8052
- Facebook, Instagram, LinkedIn, YouTube, Behance, Upwork all linked.

---

## The ebook + coupon flow (popup)

When a visitor enters their email in the popup:
1. They instantly see coupon code **FOX10** on screen and can download the ebook
   (`/public/fox-marketo-ebook.pdf`).
2. Web3Forms emails YOU their email address + the issued coupon code, so you have
   a record of every lead and the discount promised.
3. The visitor is also told the coupon was emailed to them.

**About "both parties" getting the coupon email:**
- YOU are notified automatically (via Web3Forms) for every signup.
- To also auto-send the visitor a branded copy with the ebook attached, connect a
  free autoresponder. Two easy options:
  - **Web3Forms + its free autoresponder feature** (toggle in your Web3Forms
    dashboard, add a reply template with the coupon + ebook link).
  - **Brevo / MailerLite free tier** for a proper welcome email with the PDF.
- The coupon (FOX10 = 10% off on contract) is honored when the client shares the
  code at signing. Change the code anytime in `components/EbookPopup.js` and in the
  ebook PDF source.

To change ebook content: edit `ebook.html` (in project root notes) or replace
`public/fox-marketo-ebook.pdf` with your own.

---

## Adding real content later

- **Upwork reviews:** paste real review text into `lib/testimonials.js`
  (WRITTEN_REVIEWS). Upwork blocks live fetching, so this is a copy-paste update.
- **Portfolio projects:** add a 4-line entry in `lib/data.js` (PORTFOLIO). Each
  links out to its live Behance project.
- **Zaryab's photo:** replace `public/team/zaryab.jpg` (currently a placeholder).
- **New team members:** edit the TEAM array in `components/TeamSlider.js`.

---

## Deploy
Same as before, see README.md: push to GitHub, import to Vercel, connect
foxmarketo.com. All new assets (videos, ebook, photos) are in `/public` and ship
automatically.
