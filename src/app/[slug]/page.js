import { redirect, notFound } from "next/navigation";
import { getBlogPostBySlug, getAllBlogPosts } from "@/data/blogPosts";

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function RootSlugPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (post) {
    redirect(`/blog/${slug}`);
  }

  notFound();
}

