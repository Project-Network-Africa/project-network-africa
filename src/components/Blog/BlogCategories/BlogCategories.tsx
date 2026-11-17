
"use client";

import { BlogCategory } from "../blog.types";

export type BlogCategoryFilter = "All" | BlogCategory;

interface BlogCategoriesProps {
  selectedCategory: BlogCategoryFilter;
  onCategoryChange: (category: BlogCategoryFilter) => void;
}

const categories: BlogCategoryFilter[] = [
  "All",
  "Career Tips",
  "Alumni Stories",
  "Product",
  "Community",
  "Events",
];

export default function BlogCategories({
  selectedCategory,
  onCategoryChange,
}: BlogCategoriesProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
      {categories.map((category) => {
        const active = selectedCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            className={`min-h-[42px] rounded-[13px] px-4 py-2.5 text-[13px] font-medium transition sm:min-h-[46px] sm:px-5 sm:text-[14px] ${
              active
                ? "bg-[#1F1F25] text-white"
                : "border border-[#E5E0DB] bg-white text-[#1F1F25] hover:bg-[#F5F5F5]"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
