import SectionHeader from "../../ui/SectionHeader";
import CohortCard from "./cohort-card";
import { cohorts } from "./cohort-card.data";
import Link from "next/link";

export default function CurrentCohorts() {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 lg:px-20 lg:py-[72px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-7">
        <SectionHeader
          label="CURRENT COHORTS"
          title="Cohorts currently in progress"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cohorts.map((cohort) => (
            <CohortCard key={cohort.title} {...cohort} />
          ))}
        </div>
        {/* Browse All Button */}
        <Link
          href="/browse-cohorts"
          className="
            inline-flex
            h-[43px]
            w-fit
            items-center
            justify-center
            rounded-[10px]
            border
            border-[#E5E5EB]
            bg-white
            px-[22px]
            text-[14px]
            font-semibold
            text-[#1F1F25]
            transition-colors
            hover:bg-[#F8F8F8]
          "
        >
          Browse All Open Cohorts →
        </Link>
      </div>
    </section>
  );
}
