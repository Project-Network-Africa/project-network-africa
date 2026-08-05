import SectionHeader from "../../ui/SectionHeader";
import PastCohortTable from "./past-cohort-table";
import { pastCohorts } from "./past-cohort.data";

export default function PastCohorts() {
  return (
    <section className="bg-white px-5 py-14 sm:px-8 lg:px-20 lg:py-[72px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-7">
        <SectionHeader
          label="PAST COHORTS"
          title="Graduated cohorts and outcomes"
        />

        <PastCohortTable cohorts={pastCohorts} />
      </div>
    </section>
  );
}
