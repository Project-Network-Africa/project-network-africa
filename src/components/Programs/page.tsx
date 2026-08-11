"use client";

import { useMemo, useState } from "react";

import SectionHeader from "../ui/SectionHeader";
import ProgramFilter from "../Programs/program-filter";
import ProgramGrid from "../Shared/program-grid";

import { programCategories, programs } from "../../constants/programs";
import ProgramPreview from "./program-preview/program-preview";

export default function ProgramsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPrograms = useMemo(() => {
    if (selectedCategory === "All") {
      return programs;
    }

    return programs.filter((program) => program.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <main className="bg-[#F8F8F8]">
        {/* Program Listing */}
        <section className="px-4 py-12 sm:px-6 md:px-8 lg:px-20 lg:py-[72px]">
          <div className="mx-auto flex max-w-[1280px] flex-col gap-6 lg:gap-7">
            <SectionHeader
              label="PROGRAMS"
              title="Choose the path that fits your goals"
            />

            <ProgramFilter
              categories={programCategories}
              selectedCategory={selectedCategory}
              onSelect={setSelectedCategory}
            />

            <ProgramGrid programs={filteredPrograms} />
            <ProgramPreview />
          </div>
        </section>
      </main>
    </>
  );
}
