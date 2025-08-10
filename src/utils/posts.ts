// src/utils/posts.ts
import { server$ } from "@builder.io/qwik-city";
import type { Post } from "~/types";

// Server-only function to read files
const readPosts = server$(async () => {
  const fs = await import("fs").catch(() => null);
  if (!fs) {
    throw new Error("File system module is not available. Ensure this runs in a Node.js environment.");
  }

  const BLOG_DIR = "src/content/post";
  try {
    const files = fs.readdirSync(BLOG_DIR);
    return files.filter((filename) => filename.endsWith(".md")).map((filename) => filename.replace(".md", ""));
  } catch (error) {
    console.error("Error reading post directory:", error);
    return [];
  }
});

// Server-only function to parse a single post
export const findPostBySlug = server$(async (slug: string): Promise<Post | null> => {
  if (!slug) return null;

  const fs = await import("fs").catch(() => null);
  const matter = await import("gray-matter").then((module) => module.default).catch(() => null);
  if (!fs || !matter) {
    throw new Error("Required modules (fs or gray-matter) are not available.");
  }

  try {
    const readFile = fs.readFileSync(`src/content/post/${slug}.md`, "utf-8");
    const { data, content } = matter(readFile);

    const {
      publishDate: rawPublishDate = new Date(),
      updateDate: rawUpdateDate,
      title,
      excerpt,
      image,
      tags = [],
      category,
      author,
      draft = false,
      metadata = {},
    } = data;

    const publishDate = new Date(rawPublishDate);
    const updateDate = rawUpdateDate ? new Date(rawUpdateDate) : undefined;

    return {
      id: slug,
      slug: slug,
      publishDate: publishDate,
      updateDate: updateDate,
      title: title,
      excerpt: excerpt,
      image: image,
      category: category,
      tags: tags,
      author: author,
      draft: draft,
      metadata,
      content,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
});

// Server-only function to fetch all posts
export const fetchPosts = server$(async (): Promise<Post[]> => {
  const slugs = await readPosts();
  const posts = await Promise.all(slugs.map(async (slug) => await findPostBySlug(slug)));
  return posts.filter((post): post is Post => post !== null && !post.draft);
});

// Server-only function to fetch latest posts
export const findLatestPosts = server$(async ({ count, page }: { count?: number; page?: number } = {}): Promise<Post[]> => {
  const _count = count || 4;
  const _page = page || 1;
  const posts = await fetchPosts();
  return posts.slice((_page - 1) * _count, (_page - 1) * _count + _count);
});

// Server-only function to fetch posts by IDs
export const findPostsByIds = server$(async (ids: string[]): Promise<Post[]> => {
  if (!Array.isArray(ids)) return [];
  const posts = await fetchPosts();
  return ids.reduce((result: Post[], id: string) => {
    const post = posts.find((post) => post.id === id);
    if (post) result.push(post);
    return result;
  }, []);
});