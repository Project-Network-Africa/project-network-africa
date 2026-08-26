import { Mentee } from "@/src/types/mentor/mentees";
import { Button } from "@/src/components/ui";

interface MenteeProfileCardProps {
  mentee: Mentee;
}

export default function MenteeProfileCard({ mentee }: MenteeProfileCardProps) {
  return (
    <section className="w-full max-w-[385px] rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-[18px] shadow-[0px_2px_8px_0px_#0000000A]">
      <div className="flex items-center gap-[16px]">
        {/* Avatar */}
        <div className="flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#00B6CE] text-[24px] font-bold text-white">
          {mentee.initials}
        </div>

        {/* Details */}
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-[16px] font-semibold leading-[100%] text-[#1F1F25]">
            {mentee.name}
          </h2>

          <p className="mt-[6px] truncate text-[12px] leading-[100%] text-[#5D5D61]">
            {mentee.program} — {mentee.cohort}
          </p>
        </div>

        {/* Message */}
        <Button className="h-[35px] shrink-0 rounded-[8px] bg-[#00B6CE] px-[16px] text-[12px] font-semibold text-white hover:bg-[#00A8BD]">
          Message
        </Button>
      </div>
    </section>
  );
}
