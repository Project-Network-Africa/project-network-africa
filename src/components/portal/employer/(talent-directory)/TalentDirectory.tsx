"use client";

import { useState } from "react";
import { candidates } from "@/src/data/employer/candidates";
import CandidateCard from "./CandidateCard";
import SearchFilters from "../(talent-search)/SearchFilters";

export default function TalentDirectory() {
  const [search, setSearch] = useState("");

  const filteredCandidates = candidates.filter((candidate) => {
    const query = search.toLowerCase().trim();

    if (!query) return true;

    return (
      candidate.name.toLowerCase().includes(query) ||
      candidate.role.toLowerCase().includes(query) ||
      candidate.cohort.toLowerCase().includes(query)
    );
  });

  return (
    <section className="w-full bg-white">
      <SearchFilters search={search} onSearchChange={setSearch} />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {filteredCandidates.map((candidate) => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))}
      </div>
    </section>
  );
}
