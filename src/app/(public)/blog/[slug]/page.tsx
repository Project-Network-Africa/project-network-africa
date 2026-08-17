import { notFound } from "next/navigation";

import BlogArticle from "@/src/components/Blog/BlogPostDetails/Article Content/BlogArticle";
import BlogAuthor from "@/src/components/Blog/BlogPostDetails/Author/BlogAuthor";
import BlogSubscribe from "@/src/components/Blog/BlogPostDetails/NewsLetterCTA/NewLetterCTA";
import BlogPostHeader from "@/src/components/Blog/BlogPostDetails/Post Header/BlogPostHeader";
import BlogPostImage from "@/src/components/Blog/BlogPostDetails/Post Header/BlogPostImage";
import RelatedArticles from "@/src/components/Blog/BlogPostDetails/RelatedArticles/RelatedArticles";
import { blogPosts } from "@/src/components/Blog/blog.data";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts.filter(
    (item) => item.category === post.category && item.id !== post.id,
  );

  return (
    <main>
      <BlogPostHeader post={post} />

      <BlogPostImage src={post.image} alt={post.title} />

      <BlogArticle content={post.content} />

      <BlogAuthor author={post.author} />

      <BlogSubscribe />

      <RelatedArticles posts={relatedPosts} />
    </main>
  );
}
