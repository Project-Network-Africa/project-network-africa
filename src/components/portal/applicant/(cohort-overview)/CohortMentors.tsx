interface Mentor {
  id: string;
  name: string;
  initials: string;
  role: string;
}

interface CohortMentorsProps {
  mentors: Mentor[];
}

export default function CohortMentors({ mentors }: CohortMentorsProps) {
  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="mb-4 text-[10px] font-semibold uppercase text-[#5D5D61]">
        Cohort Mentors
      </p>

      <div className="flex flex-wrap gap-8">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1F1F25] text-[11px] font-bold text-white">
              {mentor.initials}
            </div>

            <div>
              <p className="text-[13px] font-semibold text-[#1F1F25]">
                {mentor.name}
              </p>

              <p className="text-[11px] text-[#5D5D61]">{mentor.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
