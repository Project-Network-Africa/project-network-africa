import Button from "../../ui/Button";

import CohortMeta from "./CohortMeta";
import SeatProgress from "./SeatProgress";

import { CohortCardProps } from "./cohort-list.types";
import { toProgramSlug } from "@/src/lib/toProgramSlug";
export default function CohortCard({ cohort }: CohortCardProps) {
  const statusStyles = {
    Open: "bg-[#E0F7ED] text-[#1A804D]",
    "Filling Fast": "bg-[#FFF4D6] text-[#A66A00]",
    "Waitlist Only": "bg-[#FDE8E8] text-[#C62828]",
    "Starting Soon": "bg-[#E8F0FE] text-[#2457A6]",
    Closed: "bg-[#EBEBF0] text-[#5D5D61]",
  };
  const programSlug = toProgramSlug(cohort.program);
  return (
    <div className="flex flex-col gap-[14px] rounded-[14px] border border-[#E5E5EB] bg-white p-6">
      {/* Header */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <h3 className="text-[16px] font-semibold text-[#1F1F25]">
            {cohort.program}
          </h3>

          <span
            className={`rounded-full px-[10px] py-1 text-[10px] font-semibold ${
              statusStyles[cohort.status]
            }`}
          >
            {cohort.status}
          </span>
        </div>

        <div className="flex gap-3">
          <Button
            variant="light"
            href={`/programs/${programSlug}`}
            className="text-[12px]"
          >
            View Details
          </Button>

          <Button href={`/apply`} className="text-[12px]">
            Apply Now
          </Button>
        </div>
      </div>

      {/* Description */}

      <p className="text-[13px] text-[#5D5D61]">{cohort.shortDescription}</p>

      {/* Footer */}

      <div className="grid gap-5 border-t border-[#E5E5EB] pt-5 lg:grid-cols-5">
        <div className="flex items-center gap-2">
          <div
            className="flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-semibold text-white"
            style={{
              backgroundColor: cohort.mentor.avatarBg,
            }}
          >
            {cohort.mentor.initials}
          </div>

          <div>
            <p className="text-[8px] font-semibold uppercase text-[#5D5D61]">
              {cohort.mentor.role}
            </p>

            <p className="text-[12px] font-semibold text-[#1F1F25]">
              {cohort.mentor.name}
            </p>
          </div>
        </div>

        <CohortMeta label="Format" value={cohort.format} />

        <CohortMeta label="Apply By" value={cohort.applyBy} />

        <CohortMeta label="Tuition" value={cohort.tuition} />

        <SeatProgress
          seatsFilled={cohort.seatsFilled}
          totalSeats={cohort.totalSeats}
        />
      </div>
    </div>
  );
}
