import { Quote } from "./quote.types";

interface QuoteCardProps extends Quote {
  showAuthor?: boolean;
}

export default function QuoteCard({
  quote,
  author,
  role,
  showAuthor = true,
}: QuoteCardProps) {
  return (
    <div className="rounded-[14px] bg-white p-[26px]">
      <p className="text-[15px] leading-7 text-[#1F1F25]">{quote}</p>

      {showAuthor && author && (
        <div className="mt-5">
          <p className="font-semibold text-[#1F1F25]">{author}</p>

          {role && <p className="text-sm text-[#5D5D61]">{role}</p>}
        </div>
      )}
    </div>
  );
}
