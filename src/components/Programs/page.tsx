"use client";

import { useMemo, useState } from "react";

import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

import SectionHeader from "../ui/SectionHeader";
import ProgramFilter from "../Programs/program-filter";
import ProgramGrid from "../Shared/program-grid";
import ProgramDetails from "../Programs/program-details";

import { programCategories, programs } from "../../constants/programs";

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
      <Navbar />

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
          </div>
        </section>

        {/* Featured Program */}
        {filteredPrograms.length > 0 && (
          <ProgramDetails program={filteredPrograms[0]} />
        )}
      </main>

      <Footer />
    </>
  );
}
