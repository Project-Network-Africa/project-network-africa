import { Check } from "lucide-react";
import { LearningOutcome } from "../../../types/program";

export default function OutcomeCard({ text }: LearningOutcome) {
  return (
    <div className="flex items-start gap-3 rounded-[10px] bg-white p-[10px]">
      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#E0F7ED]">
        <Check className="h-3 w-3 text-[#00B66D]" strokeWidth={3} />
      </div>

      <p className="text-[13px] leading-6 text-[#1F1F25]">{text}</p>
    </div>
  );
}
