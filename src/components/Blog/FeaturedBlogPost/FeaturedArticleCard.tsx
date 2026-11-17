
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "../blog.types";

interface FeaturedArticleCardProps {
  post: BlogPost;
}

export default function FeaturedArticleCard({
  post,
}: FeaturedArticleCardProps) {
  return (
    <article className="flex overflow-hidden rounded-xl border border-[#EAEAEA] bg-white">
      {/* Article image */}
      <Link
        href={`/blog/${post.slug}`}
        className="relative h-[130px] w-[42%] shrink-0 overflow-hidden sm:h-[145px]"
      >
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 40vw, 200px"
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </Link>

      {/* Article details */}
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-4 p-3 sm:p-4">
        <span className="w-fit rounded-full bg-[#E0F8FA] px-2 py-1 text-[10px] font-medium text-[#006D7C]">
          {post.category}
        </span>

        <Link href={`/blog/${post.slug}`}>
          <h3 className="line-clamp-2 text-[16px] font-bold leading-snug sm:text-[16px] hover:text-[#00B6CE]">
            {post.title}
          </h3>
        </Link>

        <p className="text-[10px] text-[#77777D]">
          {post.date} · {post.readTime}
        </p>
      </div>
    </article>
  );
}
