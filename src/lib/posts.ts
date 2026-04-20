import { createServerFn } from "@tanstack/react-start";
import { nanoid } from "nanoid";
import fs from "node:fs/promises";
import path from "node:path";

export interface Post {
  id: string;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  status: "draft" | "published";
  category: string;
  language: "en" | "es";
  createdAt: string;
  updatedAt: string;
}

const DATA_FILE = path.join(process.cwd(), "src/data/posts.json");

// Helper to ensure data file exists and read it
async function readData(): Promise<Post[]> {
  console.log("Reading data from:", DATA_FILE);
  try {
    const data = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading data:", error);
    return [];
  }
}

async function writeData(posts: Post[]) {
  console.log("Writing data to:", DATA_FILE);
  await fs.writeFile(DATA_FILE, JSON.stringify(posts, null, 2), "utf-8");
}

export const getPosts = createServerFn({ method: "GET" }).handler(async () => {
  console.log("getPosts called");
  try {
    const data = await readData();
    console.log("getPosts returning", data.length, "posts");
    return data;
  } catch (err) {
    console.error("getPosts failed:", err);
    throw err;
  }
});

export const getPostBySlug = createServerFn({ method: "GET" })
  .inputValidator((slug: string) => slug)
  .handler(async ({ data: slug }) => {
    console.log("getPostBySlug called with slug:", slug);
    const posts = await readData();
    return posts.find((p) => p.slug === slug);
  });

export const getPostById = createServerFn({ method: "GET" })
  .inputValidator((id: string) => id)
  .handler(async ({ data: id }) => {
    console.log("getPostById called with id:", id);
    const posts = await readData();
    return posts.find((p) => p.id === id);
  });

export const upsertPost = createServerFn({ method: "POST" })
  .inputValidator((post: Partial<Post> & { title: string; slug: string }) => post)
  .handler(async ({ data: postData }) => {
    console.log("upsertPost called with data:", postData);
    const posts = await readData();
    const now = new Date().toISOString();

    if (postData.id) {
      const index = posts.findIndex((p) => p.id === postData.id);
      if (index !== -1) {
        posts[index] = {
          ...posts[index],
          ...postData,
          updatedAt: now,
        } as Post;
      }
    } else {
      const newPost: Post = {
        id: nanoid(),
        ...postData,
        excerpt: postData.excerpt || "",
        status: postData.status || "draft",
        category: postData.category || "General",
        language: postData.language || "en",
        createdAt: now,
        updatedAt: now,
      } as Post;
      posts.push(newPost);
    }

    await writeData(posts);
    return { success: true };
  });

export const deletePost = createServerFn({ method: "POST" })
  .inputValidator((id: string) => id)
  .handler(async ({ data: id }) => {
    console.log("deletePost called with id:", id);
    const posts = await readData();
    const filtered = posts.filter((p) => p.id !== id);
    await writeData(filtered);
    return { success: true };
  });
