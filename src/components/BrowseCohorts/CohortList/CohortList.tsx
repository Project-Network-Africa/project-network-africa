import CohortCard from "./CohortCard";

import { CohortListProps } from "./cohort-list.types";

export default function CohortList({ cohorts }: CohortListProps) {
  if (cohorts.length === 0) {
    return (
      <section className="bg-white px-5 py-16 sm:px-8 lg:px-20">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-2 text-center">
          <h3 className="text-[16px] font-semibold text-[#1F1F25]">
            No cohorts match your search
          </h3>
          <p className="max-w-[420px] text-[13px] text-[#5D5D61]">
            Try adjusting your filters or search terms or clear them to see all
            open cohorts.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white px-5 py-5 sm:px-8 lg:px-20 lg:pb-[72px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4">
        {cohorts.map((cohort) => (
          <CohortCard key={cohort.id} cohort={cohort} />
        ))}
      </div>
    </section>
  );
}
