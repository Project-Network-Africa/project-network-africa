"use client";

import { useMemo, useState } from "react";
import CohortCard from "./CohortCard";
import { CohortFinderProps } from "./CohortFinder.types";

export default function CohortFinder({
  eyebrow = "OPEN COHORTS",
  title = "Find the right cohort for your next step",
  description = "Compare programmes, schedules, tuition, and remaining seats before you apply.",
  categories = ["Design", "Engineering", "Product", "Data"],
  cohorts,
  backgroundClassName = "bg-white",
}: CohortFinderProps) {
  const [activeCategory, setActiveCategory] = useState("All Open Cohorts");

  const filteredCohorts = useMemo(() => {
    if (activeCategory === "All Open Cohorts") {
      return cohorts;
    }

    return cohorts.filter((cohort) => cohort.category === activeCategory);
  }, [activeCategory, cohorts]);

  const filters = ["All Open Cohorts", ...categories];

  return (
    <section className={`w-full ${backgroundClassName}`} id="explore-cohorts">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-8 lg:px-0 lg:py-[64px]">
        <div>
          <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
            {eyebrow}
          </p>

          <h2 className="mt-5 max-w-[700px] font-body text-[28px] font-bold leading-[120%] tracking-[-0.5px] text-[#1F1F25] lg:mt-5 lg:text-[38px] lg:leading-[115%] lg:tracking-[-1px]">
            {title}
          </h2>

          {description && (
            <p className="mt-5 max-w-[700px] font-body text-[14px] font-normal leading-[150%] text-[#5D5D61] lg:text-[15px]">
              {description}
            </p>
          )}
        </div>

        <div className="mt-6 flex gap-2.5 overflow-x-auto pb-1 scrollbar-hide lg:mt-7 lg:overflow-visible">
          {filters.map((filter) => {
            const isActive = activeCategory === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveCategory(filter)}
                className={`flex h-[40px] shrink-0 items-center justify-center rounded-full border px-4 font-body text-[13px] font-semibold transition lg:h-[42px] ${isActive ? "border-[#1F1F25] bg-[#1F1F25] text-white" : "border-[#DEDEE2] bg-white text-[#1F1F25] hover:border-[#1F1F25]"}`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {filteredCohorts.length > 0 ? (
          <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-5">
            {filteredCohorts.map((cohort) => (
              <CohortCard key={cohort.id} cohort={cohort} />
            ))}
          </div>
        ) : (
          <div className="mt-7 flex min-h-[220px] items-center justify-center rounded-[16px] border border-[#DEDEE2] bg-[#F8F8F8]">
            <p className="font-body text-[14px] font-medium text-[#5D5D61]">
              No cohort found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
