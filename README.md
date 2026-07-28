# Fox Marketo — Website

A full-stack, multi-page marketing site built with **Next.js 14 + Tailwind CSS + Framer Motion**.
Pages: Home, About, Services, Portfolio, Contact. Includes a working contact form
(Web3Forms → your Gmail), a floating WhatsApp button, scroll animations, and full SEO.

Hosting is **free forever** on Vercel, Netlify, or Cloudflare Pages.

---

## 1. Run it locally first (optional but recommended)

You need **Node.js 18+** installed (https://nodejs.org).

```bash
npm install
npm run dev
```

Open http://localhost:3000 — you should see the site.

---

## 2. Two things to fill in before going live

Open **`lib/site.js`** and edit:

1. **`web3formsKey`** — go to https://web3forms.com, enter your Gmail
   (`Info.foxmarketo@gmail.com`), and it emails you a free Access Key. Paste it here.
   The contact form will then send every submission straight to your inbox.
   *(Until you do this, the form UI works but won't deliver emails.)*

2. **`social`** links — replace the `#` placeholders with your real LinkedIn,
   Instagram, and Facebook URLs. (Behance is already set.)

Everything else — logo, phone numbers, email, pricing, domain — is already wired in.

---

## 3. Deploy free on Vercel (easiest, ~10 min)

### a) Put the code on GitHub
1. Create a free account at https://github.com and a new **empty** repository
   called `foxmarketo`.
2. In this project folder, run:
   ```bash
   git init
   git add .
   git commit -m "Fox Marketo website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/foxmarketo.git
   git push -u origin main
   ```

### b) Connect Vercel
1. Sign up free at https://vercel.com with your GitHub account.
2. Click **Add New → Project**, pick the `foxmarketo` repo, click **Deploy**.
   Vercel auto-detects Next.js — no config needed.
3. In ~1 minute you get a live URL like `foxmarketo.vercel.app`.

### c) Connect your domain (foxmarketo.com)
1. In the Vercel project → **Settings → Domains** → add `foxmarketo.com`.
2. Vercel shows you DNS records. Log in to wherever you bought the domain and
   either:
   - point the domain's **nameservers** to Vercel, **or**
   - add the **A / CNAME records** Vercel gives you.
3. Wait for DNS to propagate (minutes to a couple hours). Free SSL is automatic.

Done — your site is live at https://foxmarketo.com.

---

## Alternative hosts (also free)
- **Netlify** — same GitHub flow, drag-and-drop also supported.
- **Cloudflare Pages** — connect GitHub, build command `npm run build`,
  framework preset **Next.js**.

---

## Editing content later
- **Text/services/industries** → `lib/data.js`
- **Contact details, phones, pricing, links** → `lib/site.js`
- **Colors/fonts** → `tailwind.config.js`
- **Individual pages** → `app/<page>/page.js`

Push any change to GitHub and Vercel redeploys automatically.

---

## Pages
- `/` Home · `/about` · `/services` · `/portfolio` (links to your Behance) · `/blog` + posts · `/contact`
- `/get-started` — a distraction-free **landing page** for ad campaigns, with the tracked lead form. Point your Google/Meta ads here.

## Portfolio
Cards pull real thumbnails from your Behance CDN and link straight to each live project (Behance has no public API, so this is the reliable approach). To add/reorder, edit the `PORTFOLIO` array in `lib/data.js`.

## Forms & lead tracking
Both forms email you on submit **and** on abandonment, plus fire funnel analytics. Full setup in **FORM-TRACKING.md**.

## Blog / CMS
Works now with Markdown in `content/blog/`. For a login dashboard, follow **SANITY-SETUP.md**.

## Extra guides included
- `FORM-TRACKING.md` — abandonment alerts + analytics setup
- `SANITY-SETUP.md` — optional CMS for the blog
