"use client";

import FeedbackForm from "@/src/components/portal/mentor/(feedback)/FeedbackForm";
import FeedbackHistory from "@/src/components/portal/mentor/(feedback)/FeedbackHistory";

import { feedbackHistory, feedbackMentees } from "@/src/data/mentor/feedback";

export default function MentorFeedbackPage() {
  const handleSubmit = (menteeId: string, feedback: string) => {
    // Replace this with the backend API call later.
    console.log({
      menteeId,
      feedback,
    });
  };

  return (
    <div className="w-full space-y-[20px]">
      <FeedbackForm mentees={feedbackMentees} onSubmit={handleSubmit} />

      <FeedbackHistory feedback={feedbackHistory} />
    </div>
  );
}
