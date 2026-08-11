interface MentorQuoteProps {
  initials: string;
  name: string;
  role: string;
  avatarBg: string;
  quote: string;
}

export default function MentorQuote({
  initials,
  name,
  role,
  avatarBg,
  quote,
}: MentorQuoteProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-[#E5E5EB] bg-[#F9F6F3] p-[18px]">
      <div className="flex items-center gap-3">
        <div
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[14px] font-bold text-white"
          style={{ backgroundColor: avatarBg }}
        >
          {initials}
        </div>

        <p className="text-[12px] font-semibold text-[#1F1F25]">
          {name}
          <span className="font-normal text-[#5D5D61]"> · {role}</span>
        </p>
      </div>

      <p className="text-[12px] leading-5 text-[#1F1F25]">“{quote}”</p>
    </div>
  );
}
