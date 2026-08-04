import { LeadershipMember } from "./leadership.types";

export default function LeadershipCard({
  initials,
  name,
  role,
  avatarBg,
}: LeadershipMember) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-[#E5E5EB] bg-white px-6 py-8 text-center transition-shadow duration-200 hover:shadow-md">
      <div
        className="flex h-[72px] w-[72px] items-center justify-center rounded-full text-[26px] font-bold text-white"
        style={{ backgroundColor: avatarBg }}
      >
        {initials}
      </div>

      <h3 className="text-[15px] font-semibold text-[#1F1F25]">{name}</h3>

      <p className="text-xs text-[#5D5D61]">{role}</p>
    </div>
  );
}
