import DashboardCard from "../(dashboard)/DashboardCard";

import { NotificationStat } from "./notifications.types";

interface NotificationStatsProps {
  stats: NotificationStat[];
}

export default function NotificationStats({ stats }: NotificationStatsProps) {
  return (
    <section className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <DashboardCard key={stat.label} className="p-5">
          <p
            className={`text-[22px] font-bold leading-none ${
              stat.valueClassName ?? "text-[#00B6CE]"
            }`}
          >
            {stat.value}
          </p>

          <p className="mt-2 text-[11px] text-[#737379]">{stat.label}</p>
        </DashboardCard>
      ))}
    </section>
  );
}
