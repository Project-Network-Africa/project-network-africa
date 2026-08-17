interface TeamMember {
  initials: string;
  background: string;
}

interface ProjectTeamProps {
  members: TeamMember[];
}

export default function ProjectTeam({ members }: ProjectTeamProps) {
  return (
    <section className="flex w-full flex-col gap-[14px] rounded-[14px] border border-[#E5E5EB] bg-white p-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">Team</p>

      <div className="grid grid-cols-2 gap-2">
        {members.map((member) => (
          <div
            key={member.initials}
            className="flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-white text-[10.8px] font-bold text-white"
            style={{
              backgroundColor: member.background,
            }}
          >
            {member.initials}
          </div>
        ))}
      </div>
    </section>
  );
}
