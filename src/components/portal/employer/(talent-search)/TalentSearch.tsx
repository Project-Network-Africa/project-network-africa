"use client";

import { useState } from "react";

import TalentStats from "./TalentStats";
import SearchFilters from "./SearchFilters";
import TalentCard from "./TalentCard";

import { candidates } from "@/src/data/employer/candidates";

export default function TalentSearch() {
  const [search, setSearch] = useState("");

  const filteredTalent = candidates.filter((candidate) => {
    const query = search.toLowerCase().trim();

    if (!query) return true;

    return (
      candidate.name.toLowerCase().includes(query) ||
      candidate.role.toLowerCase().includes(query) ||
      candidate.cohort.toLowerCase().includes(query)
    );
  });

  return (
    <div className="flex w-full flex-col gap-5">
      {/* Search + Filters */}
      <SearchFilters search={search} onSearchChange={setSearch} />

      {/* Statistics */}
      <TalentStats />

      {/* Recommended Talent */}
      <section>
        <p className="mb-4 text-[10px] font-semibold uppercase text-[#5D5D61]">
          Recommended Talent
        </p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredTalent.map((candidate) => (
            <TalentCard key={candidate.id} talent={candidate} />
          ))}
        </div>

        {filteredTalent.length === 0 && (
          <div className="rounded-[14px] border border-[#E5E5EB] bg-white px-5 py-10 text-center">
            <p className="text-[14px] font-semibold text-[#1F1F25]">
              No talent found
            </p>

            <p className="mt-1 text-[12px] text-[#5D5D61]">
              Try searching for a different name or role.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
