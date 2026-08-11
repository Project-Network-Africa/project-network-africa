"use client";

import { useState } from "react";

import FeaturedBlogPost from "./FeaturedBlogPost/FeaturedBlogPost";
import BlogHeader from "./BlogCategories/BlogHeader";
import BlogPosts from "./BlogPosts";
import { BlogCategory } from "./blog.types";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | BlogCategory
  >("All");

  const [currentPage, setCurrentPage] = useState(1);

  function handleCategoryChange(category: "All" | BlogCategory) {
    setSelectedCategory(category);

    setCurrentPage(1);
  }
  return (
    <>
      <main className="bg-[#F8F8F8]">
        <BlogHeader
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <FeaturedBlogPost
          slug="how-to-build-a-portfolio-that-gets-you-hired"
          image="/images/blog/blog.jpg"
          category="Community"
          title="How to Build a Portfolio That Gets You Hired"
          excerpt="A practical, step-by-step guide to putting together a portfolio that stands out to employers — even if you’re just starting out."
          initials="AO"
          author="Amara Okafor"
          date="Jul 12, 2026"
          readTime="5 min read"
          avatarBg="#1F1F25"
        />
        <BlogPosts
          selectedCategory={selectedCategory}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </main>
    </>
  );
}
