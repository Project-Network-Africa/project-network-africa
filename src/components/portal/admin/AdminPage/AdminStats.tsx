interface AdminStat {
  value: string;
  label: string;
  change?: string;
  valueColor?: string;
  changeColor?: string;
}

interface AdminStatsProps {
  stats: AdminStat[];
}

import AdminStatCard from "./AdminStatCard";

export default function AdminStats({ stats }: AdminStatsProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <AdminStatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}
