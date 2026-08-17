"use client";

import { useMemo, useState } from "react";

import { projectExamples } from "@/src/data/projectExamples";
import { ProjectCategory } from "@/src/types/project";
import ProjectExamplesHeader from "@/src/components/ProjectExamples/ProjectExamplesHeader";
import ProjectFilters from "@/src/components/ProjectExamples/ProjectFilters";
import ProjectGrid from "@/src/components/ProjectExamples/ProjectGrid";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

export default function ProjectExamplesPage() {
  const [activeCategory, setActiveCategory] = useState<"All" | ProjectCategory>(
    "All",
  );

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projectExamples;
    }

    return projectExamples.filter(
      (project) => project.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <ProjectExamplesHeader />

      <ProjectFilters
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <section className="bg-white px-5 pb-[72px] pt-8 md:px-10 lg:px-20">
        <div className="mx-auto max-w-[1280px]">
          <ProjectGrid projects={filteredProjects} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
