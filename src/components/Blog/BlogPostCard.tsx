import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "./blog.types";

interface BlogPostCardProps {
  post: BlogPost;
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex w-full flex-col gap-4"
    >
      {/* Image */}
      <div className="relative h-[200px] w-full overflow-hidden rounded-[16px]">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Category */}
      <div className="w-fit rounded-[12px] bg-[#E0F8FA] px-3 py-[5px]">
        <span className="text-[12px] font-semibold leading-[100%] text-[#006D7C]">
          {post.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[17px] font-semibold leading-[130%] text-[#1F1F25] transition-colors group-hover:text-[#00B6CE]">
        {post.title}
      </h3>

      {/* Date */}
      <p className="text-[12px] leading-[100%] text-[#5D5D61]">
        {post.date} · {post.readTime}
      </p>
    </Link>
  );
}
