import { CommunityDiscussion } from "@/src/types/mentor/community";

interface CommunityDiscussionItemProps {
  discussion: CommunityDiscussion;
  showDivider?: boolean;
}

export default function CommunityDiscussionItem({
  discussion,
  showDivider = true,
}: CommunityDiscussionItemProps) {
  return (
    <article
      className={`flex gap-[12px] py-[14px] ${
        showDivider ? "border-b border-[#E5E5EB]" : ""
      }`}
    >
      {/* Avatar */}
      <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#1F1F25] text-[10px] font-bold text-white">
        {discussion.initials}
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-[8px]">
          <p className="text-[12px] font-semibold text-[#1F1F25]">
            {discussion.author}
          </p>

          <span className="text-[10px] text-[#5D5D61]">
            {discussion.timeAgo}
          </span>
        </div>

        <p className="mt-[5px] text-[12px] leading-[150%] text-[#1F1F25]">
          {discussion.message}
        </p>
      </div>
    </article>
  );
}
