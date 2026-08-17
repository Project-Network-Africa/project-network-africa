import { talentStats } from "@/src/data/employer/talent-search";

export default function TalentStats() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {talentStats.map((stat) => (
        <section
          key={stat.id}
          className="flex min-h-[88px] flex-col justify-center rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-4 shadow-[0px_2px_8px_0px_#0000000A]"
        >
          <p
            className={`text-[24px] font-bold leading-none ${
              stat.highlighted ? "text-[#00B6CE]" : "text-[#1F1F25]"
            }`}
          >
            {stat.value}
          </p>

          <p className="mt-2 text-[11px] text-[#5D5D61]">{stat.label}</p>
        </section>
      ))}
    </div>
  );
}
