import Link from "next/link";
import { BlogPost } from "../../blog.types";

interface BlogPostHeaderProps {
  post: BlogPost;
}

export default function BlogPostHeader({ post }: BlogPostHeaderProps) {
  return (
    <section className="w-full bg-white px-5 py-8 sm:px-8 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        {/* Breadcrumb */}
        <div className="mb-5 flex flex-wrap items-center gap-2 text-[11px] text-[#5D5D61]">
          <Link href="/">Home</Link>
          <span>/</span>

          <Link href="/blog">Blog</Link>
          <span>/</span>

          <span className="text-[#1F1F25]">{post.title}</span>
        </div>

        {/* Category */}
        <span className="inline-flex rounded-[12px] bg-[#E0F8FA] px-3 py-[5px] text-[10px] font-semibold uppercase text-[#006D7C]">
          {post.category}
        </span>

        {/* Title */}
        <h1 className="mt-3 max-w-[900px] text-[32px] font-bold leading-[1.2] text-[#1F1F25] lg:text-[36px]">
          {post.title}
        </h1>

        {/* Author + Share */}
        <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold text-white"
              style={{
                backgroundColor: post.author.avatarBg,
              }}
            >
              {post.author.initials}
            </div>

            <div>
              <p className="text-xs font-semibold text-[#1F1F25]">
                {post.author.name}
              </p>

              <p className="text-[11px] text-[#5D5D61]">
                {post.date} · {post.readTime}
              </p>
            </div>
          </div>

          {/* Share */}
          <div className="flex items-center gap-2">
            <span className="mr-2 text-[11px] text-[#5D5D61]">Share:</span>

            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E1DC] text-xs text-[#5D5D61]">
              X
            </button>

            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E1DC] text-xs text-[#5D5D61]">
              in
            </button>

            <button className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E5E1DC] text-xs text-[#5D5D61]">
              ↗
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
