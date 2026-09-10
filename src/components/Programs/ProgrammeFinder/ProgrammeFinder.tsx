"use client";

import { ProgrammeFinderProps } from "./ProgrammeFinder.types";

export default function ProgrammeFinder({
  programmeCount,
  totalProgrammeCount,
  categories,
  search,
  activeCategory,
  onSearch,
  onCategoryChange,
  backgroundClassName = "bg-[#F8F8F8]",
}: ProgrammeFinderProps) {
  const allCategories = ["All programmes", ...categories];

  return (
    <section
      className={`w-full ${backgroundClassName}`}
      id="explore-programmes"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-8 lg:px-0 lg:py-[48px] ">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-body text-[24px] font-bold leading-[120%] tracking-[-0.5px] text-[#1F1F25] lg:text-[28px] lg:leading-[100%]">
              Explore programmes
            </h2>

            <p className="mt-2 font-body text-[14px] font-normal leading-[150%] text-[#5D5D61] lg:text-[15px]">
              Search by skill, career goal or learning track.
            </p>
          </div>

          <p className="mt-3 text-right font-body text-[13px] font-semibold leading-[100%] text-[#5D5D61] lg:mt-0 lg:text-[14px]">
            {programmeCount === totalProgrammeCount
              ? `${totalProgrammeCount} programmes available`
              : `${programmeCount} programmes found`}
          </p>
        </div>

        <div className="relative mt-6 lg:mt-[22px]">
          <svg
            className="absolute left-5 top-1/2 h-[16px] w-[16px] -translate-y-1/2 text-[#5D5D61]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>

          <input
            type="text"
            value={search}
            onChange={(event) => onSearch(event.target.value)}
            placeholder="Search programmes, skills or roles"
            className="h-[44px] w-full rounded-[8px] border border-[#DEDEE2] bg-white pl-12 pr-4 font-body text-[14px] font-normal text-[#1F1F25] outline-none placeholder:text-[#6B6B72] focus:border-[#00B6CE] lg:h-[52px]"
          />
        </div>

        <div className="scrollbar-hide mt-5 w-full overflow-x-auto">
          <div className="flex w-max items-center gap-2.5">
            {allCategories.map((item) => {
              const isActive = activeCategory === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => onCategoryChange(item)}
                  className={`flex h-[44px] shrink-0 items-center justify-center whitespace-nowrap rounded-full border px-5 font-body text-[14px] font-semibold transition lg:h-[38px] lg:px-4 ${isActive ? "border-[#1F1F25] bg-[#1F1F25] text-white" : "border-[#DEDEE2] bg-white text-[#1F1F25] hover:border-[#1F1F25]"}`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
