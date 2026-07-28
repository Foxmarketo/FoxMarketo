import { SITE, NAV } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";

export default function sitemap() {
  const staticPages = [...NAV, { href: "/get-started" }].map((n) => ({
    url: `${SITE.url}${n.href === "/" ? "" : n.href}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: n.href === "/" ? 1 : 0.8,
  }));

  const posts = getAllPosts().map((p) => ({
    url: `${SITE.url}/blog/${p.slug}`,
    lastModified: p.date ? new Date(p.date) : new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...posts];
}
