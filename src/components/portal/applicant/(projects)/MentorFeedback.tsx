"use client";

import { Button } from "@/src/components/ui";

interface MentorFeedbackProps {
  feedback: string;
  onSubmit: () => void;
}

export default function MentorFeedback({
  feedback,
  onSubmit,
}: MentorFeedbackProps) {
  return (
    <section className="flex w-full flex-col gap-[14px] rounded-[14px] border border-[#E5E5EB] bg-white p-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Mentor Feedback
      </p>

      <p className="text-[12px] leading-[17px] text-[#1F1F25]">{feedback}</p>

      <Button
        variant="dark"
        onClick={onSubmit}
        className="w-fit  px-4 py-[10px] text-[12px] font-semibold"
      >
        Submit for Review
      </Button>
    </section>
  );
}
