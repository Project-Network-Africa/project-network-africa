import DashboardCard from "./DashboardCard";
import { activities } from "./dashboard-data";

export default function RecentActivity() {
  return (
    <DashboardCard className="p-5">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[15px] font-semibold text-[#5D5D61]">
          RECENT ACTIVITY
        </h2>

        <button
          type="button"
          className="text-[12px] font-semibold text-[#00B6CE]"
        >
          View audit log
        </button>
      </div>

      <div className="mt-3 space-y-3">
        {activities.map((activity) => (
          <div
            key={activity.text}
            className="flex items-start justify-between gap-4"
          >
            <div className="flex min-w-0 items-start gap-2">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#00B6CE]" />

              <p className="text-[12px] text-[#303035]">{activity.text}</p>
            </div>

            <span className="shrink-0 text-[11px] text-[#85858A]">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
