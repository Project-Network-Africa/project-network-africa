import SectionHeader from "../../ui/SectionHeader";
import BlogCategories from "../BlogCategories/BlogCategories";
import { BlogCategory } from "../blog.types";

interface BlogHeroProps {
  selectedCategory: "All" | BlogCategory;
  onCategoryChange: (category: "All" | BlogCategory) => void;
}

export default function BlogHero({
  selectedCategory,
  onCategoryChange,
}: BlogHeroProps) {
  return (
    <section className="w-full bg-white px-5 py-16 sm:px-8 lg:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6">
        <SectionHeader label="BLOG" title="Insights, Stories & Updates" />

        <p className="max-w-[560px] text-base leading-6 text-[#5D5D61]">
          Career tips, alumni journeys, and news from the PN Africa community.
        </p>

        <BlogCategories
          selectedCategory={selectedCategory}
          onCategoryChange={onCategoryChange}
        />
      </div>
    </section>
  );
}
