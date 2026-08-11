import BlogPostCard from "../../BlogPostCard";
import { BlogPost } from "../../blog.types";

interface RelatedArticlesProps {
  posts: BlogPost[];
}

export default function RelatedArticles({ posts }: RelatedArticlesProps) {
  const relatedPosts = posts.slice(0, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[1px] text-[#5D5D61]">
          MORE FROM THE BLOG
        </p>

        <h2 className="mb-8 text-xl font-bold text-[#1F1F25]">
          Related Articles
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {relatedPosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
