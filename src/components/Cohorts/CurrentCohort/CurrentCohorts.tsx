import SectionHeader from "../../ui/SectionHeader";
import CohortCard from "./cohort-card";
import { cohorts } from "./cohort-card.data";

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
      </div>
    </section>
  );
}
