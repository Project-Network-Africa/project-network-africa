"use client";

import BlogPostCard from "./BlogPostCard";
import BlogPagination from "./BlogPagination";
import { blogPosts } from "./blog.data";
import { BlogCategory } from "./blog.types";

const POSTS_PER_PAGE = 6;

interface BlogPostsProps {
  selectedCategory: "All" | BlogCategory;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function BlogPosts({
  selectedCategory,
  currentPage,
  onPageChange,
}: BlogPostsProps) {
  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / POSTS_PER_PAGE),
  );

  const visiblePosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE,
  );

  return (
    <>
      <section className="w-full bg-[#F8F8F8] px-5 py-[60px] sm:px-8 lg:px-20">
        <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-x-[50px] gap-y-20 md:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>

        {visiblePosts.length === 0 && (
          <div className="flex min-h-[300px] items-center justify-center">
            <p className="text-sm text-[#5D5D61]">
              No posts found in this category.
            </p>
          </div>
        )}
      </section>

      <BlogPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </>
  );
}
