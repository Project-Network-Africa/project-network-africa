
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "./blog.types";

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[18px] border border-[#E5E0DB] bg-white transition-shadow duration-300 hover:shadow-md">

      {/* Article image */}
      <Link
        href={`/blog/${post.slug}`}
        className="relative block h-[190px] w-full shrink-0 overflow-hidden sm:h-[210px] lg:h-[220px]"
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-[1.03]"
        />
      </Link>

      {/* Article details */}
      <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">

        {/* Category */}
        <span className="mb-4 flex min-h-[34px] w-fit min-w-[125px] items-center justify-center rounded-full bg-[#DDF7F9] px-5 py-2 text-center text-[12px] font-semibold text-[#007B8A] sm:text-[12px]">
          {post.category}
        </span>

        {/* Title */}
        <Link href={`/blog/${post.slug}`}>
          <h3 className="text-[16px] font-semibold leading-[1.4] text-[#1F1F25] transition-colors hover:text-[#008B9D] sm:text-[12px] lg:text-[20px]">
            {post.title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="mt-3 text-[14px] leading-[1.6] text-[#66666C] sm:text-[14px] lg:text-[14px]">
          {post.excerpt}
        </p>

        {/* Author and date */}
        <div className="mt-4">
          <p className="text-[14px] font-medium text-[#1F1F25] ">
            {post.author.name}
          </p>

          <p className="mt-1 text-[13px] text-[#66666C] ">
            {post.date} · {post.readTime}
          </p>
        </div>

        {/* Read article */}
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-[#007F90] transition-colors hover:text-[#00B6CE] "
        >
          Read article
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
