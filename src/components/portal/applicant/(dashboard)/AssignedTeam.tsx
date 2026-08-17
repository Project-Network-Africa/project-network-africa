import { AssignedTeamProps } from "./applicant-dashboard";

export default function AssignedTeam({ members }: AssignedTeamProps) {
  return (
    <div
      className="
        flex
        w-full
        min-w-0
        flex-col
        gap-[14px]
        rounded-[14px]
        border
        border-[#E5E5EB]
        px-5
        py-5
        shadow-[0px_2px_8px_0px_#0000000A]
        sm:px-[22px]
      "
    >
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Assigned Team
      </p>

      <div className="flex">
        {members.map((member, i) => (
          <div
            key={`${member.initials}-${i}`}
            className="
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-full
              border-2
              border-white
              text-[11.5px]
              font-bold
              text-white
            "
            style={{
              backgroundColor: member.avatarBg,
              marginLeft: i === 0 ? 0 : -8,
            }}
          >
            {member.initials}
          </div>
        ))}
      </div>
    </div>
  );
}
