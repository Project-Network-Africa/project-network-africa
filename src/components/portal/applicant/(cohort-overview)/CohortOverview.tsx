import Button from "@/src/components/ui/Button";
import { cohortOverviewData } from "@/src/data/applicant/cohort-overview";

import CohortProgress from "./CohortProgress";
import CurriculumSchedule from "./CurriculumSchedule";
import CohortMentors from "./CohortMentors";

export default function CohortOverview() {
  const { cohort, modules, mentors } = cohortOverviewData;

  return (
    <div className="flex w-full flex-col gap-5">
      {/* Progress */}
      <CohortProgress
        program={cohort.program}
        cohort={cohort.cohort}
        currentWeek={cohort.currentWeek}
        totalWeeks={cohort.totalWeeks}
      />

      {/* Curriculum */}
      <CurriculumSchedule modules={modules} />

      {/* Mentors */}
      <CohortMentors mentors={mentors} />

      {/* Back */}
      <Button
        variant="light"
        href="/applicant/dashboard"
        className="w-fit rounded-[8px] px-4 py-[10px] text-[12px] font-semibold"
      >
        ← Back to Dashboard
      </Button>
    </div>
  );
}
