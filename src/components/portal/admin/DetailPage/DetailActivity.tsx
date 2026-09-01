import DashboardCard from "../(dashboard)/DashboardCard";

import { DetailActivityProps } from "./DetailPage.types";

export default function DetailActivity({
  activities,
  auditLabel = "View full audit log",
}: DetailActivityProps) {
  return (
    <DashboardCard className="mt-4 p-5">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-[12px] font-semibold uppercase text-[#737379]">
          Activity & Status History
        </h3>

        <button
          type="button"
          className="text-[12px] font-medium text-[#00B6CE] transition hover:text-[#009CB2]"
        >
          {auditLabel}
        </button>
      </div>

      <div className="mt-5 space-y-5">
        {activities.length > 0 ? (
          activities.map((activity, index) => (
            <div
              key={`${activity.text}-${index}`}
              className="flex items-center justify-between gap-4"
            >
              <div className="flex min-w-0 items-center gap-3">
                <span
                  className={`h-2 w-2 shrink-0 rounded-full ${
                    index === 0 ? "bg-[#00B6CE]" : "bg-[#DDE1E5]"
                  }`}
                />

                <p className="text-[12px] text-[#303035]">
                  {activity.text}

                  {activity.time && (
                    <span className="ml-1">· {activity.time}</span>
                  )}
                </p>
              </div>

              {index === 0 && (
                <span className="shrink-0 text-[12px] text-[#737379]">
                  Newest
                </span>
              )}
            </div>
          ))
        ) : (
          <p className="py-5 text-[12px] text-[#737379]">
            No activity available.
          </p>
        )}
      </div>
    </DashboardCard>
  );
}
