import AnalyticsCard from "./AnalyticsCard";

import { RevenueItem, AnalyticsPerformance } from "./analytics.types";

interface RevenueTrendProps {
  data: RevenueItem[];
  summary: {
    total: string;
    helper: string;
  };
}

export default function RevenueTrend({ data, summary }: RevenueTrendProps) {
  const maxAmount = Math.max(...data.map((item) => item.amount));

  return (
    <AnalyticsCard title="Revenue trend">
      <div className="mt-3">
        <p className="lg:text-[28px] text-[20px] font-bold leading-none text-[#1F1F25]">
          {summary.total}
        </p>

        <p className="mt-3 text-[12px] font-semibold text-[#008F58]">
          {summary.helper}
        </p>

        <div className="mt-4 space-y-4">
          {data.map((item, index) => {
            const width = (item.amount / maxAmount) * 100;

            return (
              <div key={item.month}>
                <div className="mb-1.5 flex items-center justify-between">
                  <p className="text-[12px] font-semibold text-[#303035]">
                    {item.month}
                  </p>

                  <p className="text-[12px] text-[#737379]">{item.value}</p>
                </div>

                <div className="h-[7px] overflow-hidden rounded-full bg-[#F1F3F5]">
                  <div
                    className={`h-full rounded-full ${
                      index === data.length - 1
                        ? "bg-[#008F58]"
                        : "bg-[#00B6CE]"
                    }`}
                    style={{
                      width: `${width}%`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnalyticsCard>
  );
}
