"use client";

import { ProjectCategory } from "@/src/types/project";

interface ProjectFiltersProps {
  activeCategory: "All" | ProjectCategory;
  onCategoryChange: (category: "All" | ProjectCategory) => void;
}

const categories: Array<"All" | ProjectCategory> = [
  "All",
  "Design",
  "Engineering",
  "Product",
  "Data",
  "Security",
  "Cloud",
  "Marketing",
  "Mobile",
];

export default function ProjectFilters({
  activeCategory,
  onCategoryChange,
}: ProjectFiltersProps) {
  return (
    <div className="border-b border-[#E5E5EB] bg-white px-5 pb-2 pt-8 md:px-10 lg:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-wrap gap-[10px]">
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={`h-[34px] rounded-full px-4 text-[13px] font-semibold transition ${
                isActive
                  ? "bg-[#00B6CE] text-white"
                  : "border border-[#E5E5EB] bg-white text-[#1F1F25] hover:border-[#00B6CE] hover:text-[#00B6CE]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}
