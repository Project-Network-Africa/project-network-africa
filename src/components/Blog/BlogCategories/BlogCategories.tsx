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
  "Community",
  "Product",
  "Events",
];

export default function BlogCategories({
  selectedCategory,
  onCategoryChange,
}: BlogCategoriesProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category) => {
        const active = selectedCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onCategoryChange(category)}
            className={`rounded-[20px] px-[18px] py-[10px] text-[14px] font-medium leading-[100%] transition ${
              active
                ? "bg-[#1F1F25] text-white"
                : "border border-[#E5E1DC] bg-white text-[#1F1F25] hover:bg-[#F6F6F6]"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
