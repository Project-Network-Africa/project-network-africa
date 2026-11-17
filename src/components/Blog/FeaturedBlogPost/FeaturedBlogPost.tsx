
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "../blog.types";

interface FeaturedBlogPostProps {
  post: BlogPost;
}

export default function FeaturedBlogPost({
  post,
}: FeaturedBlogPostProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[#EAEAEA] bg-white md:flex-row">
      {/* Article image */}
      <Link
        href={`/blog/${post.slug}`}
     className="relative min-h-[220px] w-full shrink-0 overflow-hidden md:min-h-[250px] md:w-[46%]"
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, 46vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>

      {/* Article details */}
      <div className="flex flex-1 flex-col justify-center gap-3 p-4 sm:p-5">
        <span className="w-fit rounded-full bg-[#E0F8FA] px-3 py-1 text-[10px] font-semibold text-[#006D7C]">
          {post.category}
        </span>

        <div>
          <Link href={`/blog/${post.slug}`}>
            <h3 className="text-[18px] font-bold leading-[1.3] text-[#1F1F25] transition-colors   sm:text-[24px] hover:text-[#00B6CE]">
              {post.title}
            </h3>
          </Link>

          <p className="mt-3 text-sm leading-[1.6] text-[#77777D]">
            {post.excerpt}
          </p>
        </div>

        <div>
          <p className="text-xs text-[#77777D]">
            {post.author.name} · {post.date} · {post.readTime}
          </p>

          <Link
            href={`/blog/${post.slug}`}
            className="mt-3 inline-block text-xs] font-semibold text-[#008B9D] hover:underline"
          >
            Read featured article →
          </Link>
        </div>
      </div>
    </article>
  );
}
