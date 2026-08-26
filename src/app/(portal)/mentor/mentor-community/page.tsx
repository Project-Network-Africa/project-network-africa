"use client";

import CommunityDiscussionList from "@/src/components/portal/mentor/(mentor-community)/CommunityDiscussionList";
import CommunityPostForm from "@/src/components/portal/mentor/(mentor-community)/CommunityPostForm";
import { communityDiscussions } from "@/src/data/mentor/community";

export default function MentorCommunityPage() {
  const handlePost = (message: string) => {
    // Replace with backend API call later.
    console.log("New community post:", message);
  };

  return (
    <div className="w-full space-y-[20px]">
      <CommunityPostForm onSubmit={handlePost} />

      <CommunityDiscussionList discussions={communityDiscussions} />
    </div>
  );
}
