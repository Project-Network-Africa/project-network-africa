import AnalyticsCard from "./AnalyticsCard";
import { FunnelItem } from "./analytics.types";

interface FunnelChartProps {
  data: FunnelItem[];
}

export default function FunnelChart({ data }: FunnelChartProps) {
  return (
    <AnalyticsCard title="Application funnel">
      <div className="mt-3 space-y-4">
        {data.map((item, index) => {
          const isGreen = index >= 2;

          return (
            <div key={item.label}>
              <div className="mb-1.5 flex items-center justify-between gap-4">
                <p className="text-[12px] font-semibold text-[#303035]">
                  {item.label}
                </p>

                <p className="text-[12px] text-[#737379]">
                  {item.value.toLocaleString()} · {item.percentage}
                </p>
              </div>

              <div className="h-[7px] overflow-hidden rounded-full bg-[#F1F3F5]">
                <div
                  className={`h-full rounded-full ${
                    isGreen ? "bg-[#008F58]" : "bg-[#00B6CE]"
                  }`}
                  style={{
                    width: item.percentage,
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
