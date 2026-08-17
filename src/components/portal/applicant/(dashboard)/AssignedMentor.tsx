import { Button } from "@/src/components/ui";
import { AssignedMentorProps } from "./applicant-dashboard";

export default function AssignedMentor({
  initials,
  avatarBg,
  name,
  role,
  onMessageClick,
}: AssignedMentorProps) {
  return (
    <div
      className=" flex
        w-full
        flex-col
        gap-4
        rounded-[14px]
        border
        border-[#E5E5EB]
        px-5
        py-5
        shadow-[0px_2px_8px_0px_#0000000A]
        sm:px-[22px]"
    >
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Assigned Mentor
      </p>

      <div className="flex min-w-0 items-center gap-3">
        <div
          className=" flex
            h-[42px]
            w-[42px]
            shrink-0
            items-center
            justify-center
            rounded-full
            text-[15px]
            font-bold
            text-white"
          style={{ backgroundColor: avatarBg }}
        >
          {initials}
        </div>

        <div className="flex min-w-0 flex-col gap-[2px]">
          <p className="truncate text-[14px] font-semibold text-[#1F1F25]">
            {name}
          </p>

          <p className="truncate text-[11px] text-[#5D5D61]">{role}</p>
        </div>
      </div>

      <Button
        variant="light"
        onClick={onMessageClick}
        className="w-fit rounded-lg px-[14px] py-[9px] text-[11px] font-semibold"
      >
        Message Mentor
      </Button>
    </div>
  );
}
