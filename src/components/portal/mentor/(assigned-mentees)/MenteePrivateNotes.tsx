import { Mentee } from "@/src/types/mentor/mentees";

interface MenteePrivateNotesProps {
  mentee: Mentee;
}

export default function MenteePrivateNotes({
  mentee,
}: MenteePrivateNotesProps) {
  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase leading-[100%] text-[#5D5D61]">
        Private Notes
      </p>

      <p className="mt-[14px] text-[12px] leading-[150%] text-[#1F1F25]">
        {mentee.privateNotes || "No private notes added yet."}
      </p>
    </section>
  );
}
