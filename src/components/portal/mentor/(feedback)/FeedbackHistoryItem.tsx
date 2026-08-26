import { Feedback } from "@/src/types/mentor/feedback";

interface FeedbackHistoryItemProps {
  feedback: Feedback;
}

export default function FeedbackHistoryItem({
  feedback,
}: FeedbackHistoryItemProps) {
  return (
    <div className="flex items-start justify-between gap-5">
      <div className="min-w-0">
        <p className="text-[13px] font-semibold leading-[100%] text-[#1F1F25]">
          {feedback.menteeName}
        </p>

        <p className="mt-[6px] text-[12px] leading-[140%] text-[#5D5D61]">
          {feedback.message}
        </p>
      </div>

      <p className="shrink-0 text-[11px] text-[#5D5D61]">{feedback.date}</p>
    </div>
  );
}
