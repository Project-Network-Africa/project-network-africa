interface Mentor {
  initials: string;
  name: string;
  role: string;
}

interface MentorCardProps {
  mentor: Mentor;
}

export default function MentorCard({ mentor }: MentorCardProps) {
  return (
    <section className="flex w-full max-w-[220px] items-center gap-3 rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1F1F25] text-[16px] font-bold text-white">
        {mentor.initials}
      </div>

      <div className="flex flex-col gap-[2px]">
        <p className="text-[15px] font-semibold text-[#1F1F25]">
          {mentor.name}
        </p>

        <p className="text-[12px] text-[#5D5D61]">{mentor.role}</p>
      </div>
    </section>
  );
}
