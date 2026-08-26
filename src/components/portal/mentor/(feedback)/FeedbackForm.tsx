"use client";

import { useState } from "react";

import { Button } from "@/src/components/ui";
import { FeedbackMentee } from "@/src/types/mentor/feedback";

interface FeedbackFormProps {
  mentees: FeedbackMentee[];
  onSubmit?: (menteeId: string, feedback: string) => void;
}

export default function FeedbackForm({ mentees, onSubmit }: FeedbackFormProps) {
  const [menteeId, setMenteeId] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = () => {
    if (!menteeId || !feedback.trim()) {
      return;
    }

    onSubmit?.(menteeId, feedback.trim());

    setMenteeId("");
    setFeedback("");
  };

  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      {/* Mentee */}
      <div className="mt-[14px]">
        <label
          htmlFor="feedback-mentee"
          className="text-[12px] font-semibold text-[#1F1F25]"
        >
          Mentee
        </label>

        <select
          id="feedback-mentee"
          value={menteeId}
          onChange={(event) => setMenteeId(event.target.value)}
          className="mt-1 h-[38px] w-full rounded-[8px] border border-[#E5E5EB] bg-white px-[13px] text-[12px] text-[#5D5D61] outline-none transition focus:border-[#00B6CE]"
        >
          <option value="">Select mentee...</option>

          {mentees.map((mentee) => (
            <option key={mentee.id} value={mentee.id}>
              {mentee.name}
            </option>
          ))}
        </select>
      </div>

      {/* Feedback */}
      <div className="mt-[14px]">
        <label
          htmlFor="feedback"
          className="text-[12px] font-semibold text-[#1F1F25]"
        >
          Feedback
        </label>

        <textarea
          id="feedback"
          value={feedback}
          onChange={(event) => setFeedback(event.target.value)}
          placeholder="Write your feedback..."
          className="mt-1 min-h-[77px] w-full resize-none rounded-[8px] border border-[#E5E5EB] px-[13px] py-[12px] text-[12px] text-[#1F1F25] outline-none transition placeholder:text-[#8A8A90] focus:border-[#00B6CE]"
        />
      </div>

      <Button
        onClick={handleSubmit}
        className="mt-[14px] h-[35px] rounded-[8px] bg-[#00B6CE] px-4 text-[11px] font-semibold text-white hover:opacity-90"
      >
        Send Feedback
      </Button>
    </section>
  );
}
