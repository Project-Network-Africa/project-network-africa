"use client";

import { useState } from "react";

import { savedCandidates as initialSavedCandidates } from "@/src/data/employer/saved-candidates";

import SavedCandidateRow from "./SavedCandidateRow";

export default function SavedCandidates() {
  const [candidates, setCandidates] = useState(initialSavedCandidates);

  const handleRemove = (id: string) => {
    setCandidates((current) =>
      current.filter((candidate) => candidate.id !== id),
    );
  };

  return (
    <section className="w-full rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      {/* Candidates */}
      <div className="mt-[14px] flex w-full flex-col gap-[14px]">
        {candidates.map((candidate) => (
          <SavedCandidateRow
            key={candidate.id}
            candidate={candidate}
            onRemove={handleRemove}
          />
        ))}
      </div>
    </section>
  );
}
