import DashboardCard from "../(dashboard)/DashboardCard";

import { DetailStatsProps } from "./DetailPage.types";

export default function DetailStats({ stats }: DetailStatsProps) {
  return (
    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <DashboardCard key={stat.label} className="p-5">
          <p
            className={`text-[22px] font-bold leading-none text-[#00B6CE] ${
              stat.valueClassName ?? ""
            }`}
          >
            {stat.value}
          </p>

          <p className="mt-2 text-[11px] text-[#737379]">{stat.label}</p>
        </DashboardCard>
      ))}
    </div>
  );
}
