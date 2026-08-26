import DashboardCard from "./DashboardCard";
import { cohorts } from "./dashboard-data";

export default function CohortHealth() {
  return (
    <DashboardCard className="p-5 font-body">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[15px] font-semibold text-[#5D5D61]">
          COHORT HEALTH
        </h2>

        <button
          type="button"
          className="text-[12px] font-semibold text-[#00B6CE]"
        >
          View cohorts
        </button>
      </div>

      <div className="mt-3 space-y-2">
        {cohorts.map((cohort) => (
          <div key={cohort.name} className="rounded-lg bg-[#FAFBFC] px-3 py-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-[12px] font-semibold text-[#303035]">
                {cohort.name}
              </p>

              <span className="text-[12px] font-semibold text-[#00B6CE]">
                {cohort.progress}
              </span>
            </div>

            <div className="mt-1 flex items-center justify-between gap-3">
              <p className="text-[11px] text-[#85858A]">{cohort.enrolled}</p>

              <p className="text-[11px] text-[#737379]">{cohort.risk}</p>
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
