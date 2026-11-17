
import Link from "next/link";
import { blogPosts } from "../blog.data";
import FeaturedBlogPost from "./FeaturedBlogPost";
import FeaturedArticleCard from "./FeaturedArticleCard";
import { BlogPost } from "../blog.types";

const featuredSlugs = [
  "how-to-build-a-portfolio-that-gets-you-hired",
  "five-lessons-from-our-cohort-5-graduates",
  "what-we-shipped-this-quarter",
];

export default function FeaturedSection() {
  const featuredPosts = featuredSlugs
    .map((slug) => blogPosts.find((post) => post.slug === slug))
    .filter((post): post is BlogPost => post !== undefined);

  if (featuredPosts.length === 0) {
    return null;
  }

  const [mainPost, ...otherPosts] = featuredPosts;

  return (
   <section
  className="relative w-full overflow-hidden bg-white px-5 py-12 sm:px-8 lg:px-[6.25%]"
  style={{
    backgroundImage: `
      linear-gradient(to right, rgba(31,31,37,0.045) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(31,31,37,0.045) 1px, transparent 1px)
    `,
    backgroundSize: "68px 68px",
  }}
>
 <div className="relative z-10 mx-auto max-w-[1600px]">

        {/* Section heading */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#008B9D]">
              Editor's Pick
            </span>

          <h2 className="mt-1 text-[24px] font-bold text-[#1F1F25] sm:text-[28px]">
              Featured this week
            </h2>
          </div>

          <Link
            href="#latest-insights"
            className="text-xs font-semibold text-[#008B9D] transition hover:underline"
          >
            View all stories →
          </Link>
        </div>

        {/* Featured articles */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.8fr_0.9fr]">

          {/* Main featured article */}
          <FeaturedBlogPost post={mainPost} />

          {/* Smaller featured articles */}
          <div className="flex flex-col gap-4">
            {otherPosts.slice(0, 2).map((post) => (
              <FeaturedArticleCard key={post.id} post={post} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
