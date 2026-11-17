"use client";

import { useState } from "react";

import FeaturedSection from "./FeaturedBlogPost/FeaturedSection";
import BlogHeader from "./BlogCategories/BlogHeader";
import BlogPosts from "./BlogPosts";
import { BlogCategory } from "./blog.types";
import ExploreByGoal from "./ExploreByGoal/ExploreByGoal";
import NewsletterCTA from "./NewsletterCTA/NewsletterCTA";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    "All" | BlogCategory
  >("All");

  const [currentPage, setCurrentPage] = useState(1);

  const [searchQuery, setSearchQuery] = useState("");

  function handleCategoryChange(category: "All" | BlogCategory) {
    setSelectedCategory(category);

    setCurrentPage(1);
  }

  function handleSearchChange(value: string) {
  setSearchQuery(value);
  setCurrentPage(1);
}
  return (
    <>
      <main className="bg-[#F8F8F8]">
        <BlogHeader
        searchQuery={searchQuery}
onSearchChange={handleSearchChange}
         
        />
       
<FeaturedSection />

        <BlogPosts
          selectedCategory={selectedCategory}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
           onCategoryChange={handleCategoryChange}
           searchQuery={searchQuery}
        />

        <ExploreByGoal />
        <NewsletterCTA />
      </main>
    </>
  );
}
