import AnalyticsCard from "./AnalyticsCard";

import { CohortPerformanceItem } from "./analytics.types";

interface CohortPerformanceProps {
  data: CohortPerformanceItem[];
}

export default function CohortPerformance({ data }: CohortPerformanceProps) {
  return (
    <AnalyticsCard title="Cohort performance" className="lg:col-span-2">
      <div className="mt-4 space-y-4">
        {data.map((cohort) => {
          const isLow = cohort.completion < 60;
          const isMedium = cohort.completion >= 60 && cohort.completion < 75;

          const barColor = isLow
            ? "bg-[#DC2727]"
            : isMedium
              ? "bg-[#F26B21]"
              : "bg-[#008F58]";

          return (
            <div key={cohort.label}>
              <div className="mb-1.5 flex items-center justify-between gap-4">
                <p className="text-[12px] font-semibold text-[#303035]">
                  {cohort.label}
                </p>

                <p className="text-[12px] text-[#737379]">
                  {cohort.completionLabel} · {cohort.atRisk} at risk
                </p>
              </div>

              <div className="h-[7px] overflow-hidden rounded-full bg-[#F1F3F5]">
                <div
                  className={`h-full rounded-full ${barColor}`}
                  style={{
                    width: `${cohort.completion}%`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </AnalyticsCard>
  );
}
