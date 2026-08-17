import { hiringAnalyticsData } from "@/src/data/employer/hiring-analytics";

export default function HiringFunnel() {
  const funnel = hiringAnalyticsData.funnel;

  const maxCount = Math.max(...funnel.map((item) => item.count));

  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Hiring Funnel
      </p>

      <div className="mt-[18px] flex flex-col gap-[20px]">
        {funnel.map((item) => {
          const percentage = (item.count / maxCount) * 100;

          return (
            <div key={item.stage} className="flex items-center gap-[14px]">
              {/* Stage */}
              <p className="w-[122px] shrink-0 text-[13px] font-semibold text-[#1F1F25]">
                {item.stage}
              </p>

              {/* Progress Bar */}
              <div className="h-[10px] flex-1 overflow-hidden rounded-full bg-[#E5E5EB]">
                <div
                  className="h-full rounded-full bg-[#00B6CE] transition-all duration-300"
                  style={{
                    width: `${percentage}%`,
                  }}
                />
              </div>

              {/* Count */}
              <p className="w-[24px] shrink-0 text-right text-[12px] font-semibold text-[#1F1F25]">
                {item.count}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
