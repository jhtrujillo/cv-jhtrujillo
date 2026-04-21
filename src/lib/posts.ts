import { nanoid } from "nanoid";
import postsData from "../data/posts.json";

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

const posts: Post[] = postsData as Post[];

export const getPosts = async () => {
  return posts;
};

export const getPostBySlug = async (slug: string) => {
  return posts.find((p) => p.slug === slug);
};

export const getPostById = async (id: string) => {
  return posts.find((p) => p.id === id);
};

// These will only work during local development if we were using a real backend.
// In the SPA build, they just log an error or we can implement local-only persistence.
export const upsertPost = async (postData: Partial<Post> & { title: string; slug: string }) => {
  console.warn("upsertPost: Writing to file is not supported in the static SPA version.");
  return { success: false, message: "Not supported in production" };
};

export const deletePost = async (id: string) => {
  console.warn("deletePost: Writing to file is not supported in the static SPA version.");
  return { success: false, message: "Not supported in production" };
};
