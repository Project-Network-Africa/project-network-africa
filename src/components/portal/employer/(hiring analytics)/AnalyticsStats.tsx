import { hiringAnalyticsData } from "@/src/data/employer/hiring-analytics";

export default function AnalyticsStats() {
  return (
    <section className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {hiringAnalyticsData.stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]"
        >
          <p className="text-[24px] font-semibold leading-none text-[#00B6CE]">
            {stat.value}
          </p>

          <p className="mt-[10px] text-[12px] text-[#5D5D61]">{stat.label}</p>
        </div>
      ))}
    </section>
  );
}
