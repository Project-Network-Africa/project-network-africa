type TeamMember = {
  initials: string;
  name: string;
  role: string;
  bg: string;
};

type TeamRosterProps = {
  members: TeamMember[];
};

export default function TeamRoster({ members }: TeamRosterProps) {
  return (
    <section className="flex w-full flex-col gap-[14px] rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Team Roster
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((member) => (
          <div key={member.initials} className="flex items-center gap-3">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[17px] font-bold text-white"
              style={{ backgroundColor: member.bg }}
            >
              {member.initials}
            </div>

            <div className="flex min-w-0 flex-col gap-[2px]">
              <p className="truncate text-[12px] font-semibold text-[#1F1F25]">
                {member.name}
              </p>

              <p className="text-[10px] text-[#5D5D61]">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
