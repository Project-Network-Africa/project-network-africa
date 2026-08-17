// src/components/portal/mentor/dashboard/RecentActivity.tsx

import { RecentActivity as RecentActivityType } from "@/src/types/mentor/dashboard";

interface RecentActivityProps {
  activities: RecentActivityType[];
}

export default function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <div className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Recent Activity
      </p>

      <div className="mt-3 space-y-[12px]">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center gap-[9px]">
            <span className="h-[6px] w-[6px] rounded-full bg-[#00B6CE]" />

            <p className="text-[12px] text-[#1F1F25]">{activity.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
