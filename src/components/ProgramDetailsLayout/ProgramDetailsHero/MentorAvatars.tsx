import { MentorAvatar } from "../../../types/program";

interface MentorAvatarsProps {
  mentors: MentorAvatar[];

  text: string;
}

export default function MentorAvatars({ mentors, text }: MentorAvatarsProps) {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex -space-x-2">
        {mentors.map((mentor) => (
          <div
            key={mentor.initials}
            className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#1F1F25] text-[10px] font-bold text-white"
            style={{
              backgroundColor: mentor.avatarBg,
            }}
          >
            {mentor.initials}
          </div>
        ))}
      </div>

      <p className="text-xs text-[#1F1F25]">{text}</p>
    </div>
  );
}
