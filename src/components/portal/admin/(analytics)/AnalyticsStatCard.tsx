import DashboardCard from "../(dashboard)/DashboardCard";

import { AnalyticsStat } from "./analytics.types";

interface AnalyticsStatCardProps {
  stat: AnalyticsStat;
}

export default function AnalyticsStatCard({ stat }: AnalyticsStatCardProps) {
  return (
    <DashboardCard className="p-5">
      <p className="text-[24px] font-bold leading-none text-[#1F1F25]">
        {stat.value}
      </p>

      <p className="mt-2 text-[12px] text-[#737379]">{stat.label}</p>

      <p className="mt-1 text-[12px] font-semibold text-[#008F58]">
        {stat.helper}
      </p>
    </DashboardCard>
  );
}
