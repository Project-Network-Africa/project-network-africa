import { MentorNotesProps } from "./mentorship";

export default function MentorNotes({ note }: MentorNotesProps) {
  return (
    <div className="flex w-full flex-col gap-[14px] rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Mentor Notes
      </p>

      <p className="text-[13px] text-[#1F1F25]">{note}</p>
    </div>
  );
}
