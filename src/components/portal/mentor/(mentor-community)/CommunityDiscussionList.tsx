import { CommunityDiscussion } from "@/src/types/mentor/community";
import CommunityDiscussionItem from "./CommunityDiscussionItem";

interface CommunityDiscussionListProps {
  discussions: CommunityDiscussion[];
}

export default function CommunityDiscussionList({
  discussions,
}: CommunityDiscussionListProps) {
  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase leading-[100%] text-[#5D5D61]">
        Recent Discussions
      </p>

      <div className="mt-[10px]">
        {discussions.map((discussion, index) => (
          <CommunityDiscussionItem
            key={discussion.id}
            discussion={discussion}
            showDivider={index !== discussions.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
