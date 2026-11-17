
"use client";

import { useState } from "react";
import BlogPostCard from "./BlogPostCard";
import BlogPagination from "./BlogPagination";
import BlogCategories from "./BlogCategories/BlogCategories";
import { blogPosts } from "./blog.data";
import { BlogCategory } from "./blog.types";

const POSTS_PER_PAGE = 6;

interface BlogPostsProps {
  selectedCategory: "All" | BlogCategory;
  currentPage: number;
  onPageChange: (page: number) => void;
  searchQuery: string;
  onCategoryChange: (category: "All" | BlogCategory) => void;
}

export default function BlogPosts({
  selectedCategory,
  currentPage,
  onPageChange,
  onCategoryChange,
   searchQuery,
}: BlogPostsProps) {
  const [sortOrder, setSortOrder] = useState("newest");

  // Filter posts by category
const query = searchQuery.trim().toLowerCase();

const filteredPosts = blogPosts.filter((post) => {
  const matchesCategory =
    selectedCategory === "All" || post.category === selectedCategory;

  const matchesSearch =
    !query ||
    post.title.toLowerCase().includes(query) ||
    post.excerpt.toLowerCase().includes(query) ||
    post.category.toLowerCase().includes(query) ||
    post.tags.some((tag) => tag.toLowerCase().includes(query));

  return matchesCategory && matchesSearch;
});

  // Sort posts
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    return sortOrder === "newest"
      ? dateB - dateA
      : dateA - dateB;
  });

  // Calculate pagination
  const totalPages = Math.ceil(
    sortedPosts.length / POSTS_PER_PAGE
  );

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;

  const visiblePosts = sortedPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  const startItem =
    sortedPosts.length === 0 ? 0 : startIndex + 1;

  const endItem = Math.min(
    startIndex + POSTS_PER_PAGE,
    sortedPosts.length
  );

  return (
   <section
  id="latest-insights"
  className="relative w-full overflow-hidden bg-[#F8F8F8] px-5 py-10 sm:px-8 lg:px-20"
  style={{
    backgroundImage: `
      linear-gradient(to right, rgba(31,31,37,0.045) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(31,31,37,0.045) 1px, transparent 1px)
    `,
    backgroundSize: "68px 68px",
  }}
>
      <div className="relative z-10 mx-auto max-w-[1760px]">

        {/* Section heading */}
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
          <div>
            <h2 className="text-[30px] font-bold leading-tight text-[#1F1F25] sm:text-[34px] lg:text-[36px]">
              Latest insights
            </h2>

            <p className="mt-2 text-[14px] leading-relaxed text-[#66666C] sm:text-[15px] lg:text-[16px]">
              Fresh advice, community stories and product updates from PN Africa.
            </p>
          </div>

          <p className="pt-2 text-[13px] text-[#66666C] sm:text-[14px] lg:text-[15px]">
            Showing {startItem}–{endItem} of {sortedPosts.length} articles
          </p>
        </div>

        {/* Filters and sorting */}
        <div className="mb-8 flex flex-col justify-between gap-4 rounded-[16px] border border-[#E5E0DB] bg-white/40 p-4 sm:p-5 lg:flex-row lg:items-center">
          <BlogCategories
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
          />

          {/* Sorting */}
          <select
            value={sortOrder}
            onChange={(e) => {
              setSortOrder(e.target.value);
              onPageChange(1);
            }}
            className="h-[48px] w-full cursor-pointer rounded-[12px] border border-[#E5E0DB] bg-white px-4 text-[14px] text-[#1F1F25] outline-none focus:border-[#00B6CE] sm:w-fit sm:min-w-[190px] sm:text-[15px]"
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </div>

        {/* Article grid */}
        {visiblePosts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {visiblePosts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[250px] items-center justify-center">
            <p className="text-[14px] text-[#77777D] sm:text-[15px]">
              No articles found in this category.
            </p>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10">
            <BlogPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </div>
        )}

      </div>
    </section>
  );
}
