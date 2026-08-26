"use client";

import { MenteeStatus } from "@/src/types/mentor/mentees";

export type MenteeFilter = "All" | MenteeStatus;

interface MenteeFiltersProps {
  value: MenteeFilter;
  onChange: (value: MenteeFilter) => void;
}

const filters: MenteeFilter[] = ["All", "On Track", "Needs Attention"];

export default function MenteeFilters({ value, onChange }: MenteeFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-[10px]">
      {filters.map((filter) => {
        const isActive = value === filter;

        return (
          <button
            key={filter}
            type="button"
            onClick={() => onChange(filter)}
            className={`h-[31px] rounded-full px-[14px] text-[11px] font-semibold transition ${
              isActive
                ? "bg-[#00B6CE] text-white"
                : "border border-[#E5E5EB] bg-white text-[#1F1F25] hover:border-[#00B6CE]"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
