# Blog: Markdown now, Sanity CMS later

Your blog **works right now** using Markdown files in `content/blog/`. To add a
post today, copy an existing `.md` file, change the front-matter and text, done.

When you want a **login dashboard** to write posts (no code), switch to Sanity —
a generous free tier. Here's the one-time setup.

## 1. Create a Sanity project (free)
1. Go to https://www.sanity.io and sign up.
2. Install the CLI and init a studio (run in a separate folder, not this project):
   ```bash
   npm create sanity@latest -- --template clean --create-project "Fox Marketo Blog" --dataset production
   ```
3. Note your **Project ID** and **dataset** (`production`).

## 2. Add a "post" schema
In the studio, create a `post` document type with fields:
`title` (string), `slug` (slug), `excerpt` (text), `date` (datetime),
`author` (string), `category` (string), `cover` (image), `body` (array / portable text).

Deploy the studio:
```bash
npx sanity deploy
```
You'll get a URL like `foxmarketo.sanity.studio` — that's your login dashboard.

## 3. Connect the website
In this project:
```bash
npm install next-sanity @portabletext/react
```
Create `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

## 4. Swap the data source
Open `lib/blog.js`. Replace the two functions `getAllPosts()` and
`getPostBySlug()` with Sanity queries (example below). **Everything else — the
blog listing page, the post page, SEO, sitemap — keeps working unchanged**,
because they only call those two functions.

```js
import { createClient } from "next-sanity";
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: true,
});

export async function getAllPosts() {
  return client.fetch(`*[_type=="post"]|order(date desc){
    "slug":slug.current, title, excerpt, date, author, category
  }`);
}

export async function getPostBySlug(slug) {
  return client.fetch(`*[_type=="post" && slug.current==$slug][0]`, { slug });
}
```
(For the post body you'll render Portable Text instead of `contentHtml` — the
`@portabletext/react` package handles this.)

## Recommendation
Keep the Markdown version live now so your site launches. Set up Sanity when you
have 30 minutes — nothing breaks in the meantime.
