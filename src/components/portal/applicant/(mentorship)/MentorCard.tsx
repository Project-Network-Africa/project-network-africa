import { Button } from "@/src/components/ui";
import { MentorCardProps } from "./mentorship";

export default function MentorCard({
  initials,
  name,
  role,
  avatarBg,
  onSchedule,
}: MentorCardProps) {
  return (
    <div className="flex w-full max-w-[410px] flex-col gap-4 rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A] sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-[14px]">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-[20px] font-bold text-white"
          style={{ backgroundColor: avatarBg }}
        >
          {initials}
        </div>

        <div className="flex flex-col gap-[2px]">
          <p className="text-[15px] font-semibold text-[#1F1F25]">{name}</p>

          <p className="text-[12px] text-[#5D5D61]">{role}</p>
        </div>
      </div>

      <Button
        variant="dark"
        href="/applicant/mentorship/schedule-session"
        onClick={onSchedule}
        className="w-fit shrink-0 rounded-[8px] px-4 py-[10px] text-[12px] font-semibold"
      >
        Schedule Session
      </Button>
    </div>
  );
}
