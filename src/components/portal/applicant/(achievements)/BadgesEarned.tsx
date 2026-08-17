import { badges } from "@/src/data/applicant/achievements";

export default function BadgesEarned() {
  return (
    <section className="w-full rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="mb-4 text-[10px] font-semibold uppercase text-[#5D5D61]">
        Badges Earned
      </p>

      <div className="flex flex-wrap gap-10">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className="flex w-[100px] flex-col items-center gap-3"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF2DE] text-[25px]">
              {badge.icon}
            </div>

            <p className="text-center text-[12px] font-semibold text-[#1F1F25]">
              {badge.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
