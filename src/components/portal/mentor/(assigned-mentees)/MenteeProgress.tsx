import { Mentee } from "@/src/types/mentor/mentees";

interface MenteeProgressProps {
  mentee: Mentee;
}

export default function MenteeProgress({ mentee }: MenteeProgressProps) {
  const percentage = Math.round((mentee.currentWeek / mentee.totalWeeks) * 100);

  return (
    <section className="w-full rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase leading-[100%] text-[#5D5D61]">
        Progress
      </p>

      <div className="mt-[16px] h-[10px] w-full overflow-hidden rounded-full bg-[#F1F1F3]">
        <div
          className="h-full rounded-full bg-[#00B6CE] transition-all"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <p className="mt-[14px] text-[12px] leading-[100%] text-[#5D5D61]">
        Week {mentee.currentWeek} of {mentee.totalWeeks} — {percentage}%
        complete
      </p>
    </section>
  );
}
