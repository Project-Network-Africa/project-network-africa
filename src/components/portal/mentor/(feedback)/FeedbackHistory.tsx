import { Feedback } from "@/src/types/mentor/feedback";
import FeedbackHistoryItem from "./FeedbackHistoryItem";

interface FeedbackHistoryProps {
  feedback: Feedback[];
}

export default function FeedbackHistory({ feedback }: FeedbackHistoryProps) {
  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase leading-[100%] text-[#5D5D61]">
        Feedback History
      </p>

      <div className="mt-[14px] space-y-[16px]">
        {feedback.map((item) => (
          <FeedbackHistoryItem key={item.id} feedback={item} />
        ))}
      </div>
    </section>
  );
}
