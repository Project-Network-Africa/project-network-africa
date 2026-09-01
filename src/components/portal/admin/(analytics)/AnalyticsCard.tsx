import { ReactNode } from "react";

import DashboardCard from "../(dashboard)/DashboardCard";

interface AnalyticsCardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export default function AnalyticsCard({
  title,
  children,
  className = "",
}: AnalyticsCardProps) {
  return (
    <DashboardCard className={`p-5 ${className}`}>
      {title && (
        <h2 className="text-[12px] font-semibold uppercase text-[#737379]">
          {title}
        </h2>
      )}

      {children}
    </DashboardCard>
  );
}
