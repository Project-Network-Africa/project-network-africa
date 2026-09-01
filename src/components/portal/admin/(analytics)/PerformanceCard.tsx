import AnalyticsCard from "./AnalyticsCard";

import { AnalyticsPerformance } from "./analytics.types";

interface PerformanceCardProps {
  data: AnalyticsPerformance;
}

export default function PerformanceCard({ data }: PerformanceCardProps) {
  return (
    <AnalyticsCard title={data.title} className="lg:col-span-1">
      <div className="mt-4 space-y-5">
        {data.metrics.map((metric) => (
          <div key={metric.label}>
            <p
              className={`text-[24px] font-bold leading-none ${
                metric.valueClassName ?? "text-[#1F1F25]"
              }`}
            >
              {metric.value}
            </p>

            <p className="mt-2 text-[12px] text-[#737379]">{metric.label}</p>
          </div>
        ))}
      </div>
    </AnalyticsCard>
  );
}
