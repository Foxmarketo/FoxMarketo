import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

// -----------------------------------------------------------------------------
//  MARKDOWN SOURCE (works out of the box, $0)
//  To switch to Sanity CMS later, see SANITY-SETUP.md, you replace the two
//  functions below with Sanity queries and everything else keeps working.
// -----------------------------------------------------------------------------

export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title || slug,
      excerpt: data.excerpt || "",
      date: data.date || "",
      author: data.author || "Fox Marketo",
      category: data.category || "Marketing",
      cover: data.cover || null,
      readingTime: readingTime(content).text,
    };
  });
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export async function getPostBySlug(slug) {
  const file = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  return {
    slug,
    title: data.title || slug,
    excerpt: data.excerpt || "",
    date: data.date || "",
    author: data.author || "Fox Marketo",
    category: data.category || "Marketing",
    cover: data.cover || null,
    readingTime: readingTime(content).text,
    contentHtml: processed.toString(),
  };
}
