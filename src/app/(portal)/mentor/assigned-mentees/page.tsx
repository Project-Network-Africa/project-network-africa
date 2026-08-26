"use client";

import { useMemo, useState } from "react";

import MenteeFilters, {
  MenteeFilter,
} from "@/src/components/portal/mentor/(assigned-mentees)/MenteeFilters";
import MenteeTable from "@/src/components/portal/mentor/(assigned-mentees)/MenteeTable";

import { getMentees } from "@/src/data/mentor/mentees";

export default function AssignedMenteesPage() {
  const [filter, setFilter] = useState<MenteeFilter>("All");
  const allMentees = useMemo(() => getMentees(), []);
  const filteredMentees = useMemo(() => {
    if (filter === "All") {
      return allMentees;
    }

    return allMentees.filter((mentee) => mentee.status === filter);
  }, [filter, allMentees]);

  return (
    <main className="min-h-screen bg-white">
      <div className="pb-10  ">
        <div className=" max-w-[1120px]">
          <div className="mt-[20px]">
            <MenteeFilters value={filter} onChange={setFilter} />
          </div>

          {/* Table */}
          <div className="mt-[20px]">
            <MenteeTable mentees={filteredMentees} />
          </div>
        </div>
      </div>
    </main>
  );
}
