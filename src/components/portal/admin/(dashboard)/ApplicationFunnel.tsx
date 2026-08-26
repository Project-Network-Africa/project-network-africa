import DashboardCard from "./DashboardCard";
import { funnelStages } from "./dashboard-data";

export default function ApplicationFunnel() {
  return (
    <DashboardCard className="p-5 bg-[#F8F8F8]">
      <div>
        <h2 className="text-[15px] font-semibold leading-5 text-[#5D5D61] font-body">
          APPLICATION FUNNEL
        </h2>

        <p className="mt-1 text-[12px] leading-5 text-[#7A7D85] font-body">
          Current application cycle · Last 30 days
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {funnelStages.map((stage) => (
          <div
            key={stage.label}
            className="rounded-lg bg-[#F8F9FA] mb:pb-10 p-3.5"
          >
            <p className="text-[12px] font-semibold text-[#5D5D61]">
              {stage.label}
            </p>

            <p className="mt-1 text-[24px] font-bold text-[#1F1F25]">
              {stage.value}
            </p>

            <p className="mt-1 text-[12px] font-body text-[#73757D]">
              {stage.conversion}
            </p>

            <div className="mt-2 h-[5px] overflow-hidden rounded-full font-body bg-[#E5E8EA]">
              <div
                className="h-full rounded-full bg-[#00B6CE]"
                style={{ width: stage.width }}
              />
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
