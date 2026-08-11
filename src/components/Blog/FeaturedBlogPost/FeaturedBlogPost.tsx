import Image from "next/image";
import Link from "next/link";

export interface FeaturedBlogPostProps {
  slug: string;
  image: string;
  category: string;
  title: string;
  excerpt: string;
  initials: string;
  author: string;
  date: string;
  readTime: string;
  avatarBg?: string;
}

export default function FeaturedBlogPost({
  slug,
  image,
  category,
  title,
  excerpt,
  initials,
  author,
  date,
  readTime,
  avatarBg = "#1F1F25",
}: FeaturedBlogPostProps) {
  return (
    <section className="w-full bg-white px-5 py-[50px] pb-[150px] sm:px-8 lg:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        {/* Image */}
        <Link
          href={`/blog/${slug}`}
          className="relative block h-[310px] w-full overflow-hidden rounded-[20px] lg:w-[628px]"
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 628px"
          />
        </Link>

        {/* Content */}
        <div className="flex w-full flex-col gap-[26px] p-[10px] lg:w-[560px]">
          {/* Category */}
          <div className="w-fit rounded-[12px] bg-[#E0F8FA] px-3 py-[5px]">
            <span className="text-[12px] font-semibold text-[#006D7C]">
              {category}
            </span>
          </div>

          {/* Title + excerpt */}
          <div className="flex flex-col gap-[19px]">
            <Link href={`/blog/${slug}`}>
              <h2 className="text-[28px] font-bold leading-[122%] text-[#1F1F25] transition-colors hover:text-[#00B6CE]">
                {title}
              </h2>
            </Link>

            <p className="text-base leading-[150%] text-[#5D5D61]">{excerpt}</p>
          </div>

          {/* Author */}
          <div className="flex items-center gap-3">
            <div
              className="flex h-[37px] w-[41px] items-center justify-center rounded-full px-[10px] py-[10px] text-[14px] font-semibold text-white"
              style={{ backgroundColor: avatarBg }}
            >
              {initials}
            </div>

            <div className="flex flex-col gap-[2px]">
              <p className="text-[14px] font-semibold leading-[100%] text-[#1F1F25]">
                {author}
              </p>

              <p className="text-[13px] font-normal leading-[100%] text-[#5D5D61]">
                {date} · {readTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
