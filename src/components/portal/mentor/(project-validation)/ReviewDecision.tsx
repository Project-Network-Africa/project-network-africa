"use client";

import { Button } from "@/src/components/ui";
import { ValidationDecision } from "@/src/types/mentor/project-validation";

interface ReviewDecisionProps {
  decision: ValidationDecision;
  onDecision: (decision: ValidationDecision) => void;
}

export default function ReviewDecision({
  decision,
  onDecision,
}: ReviewDecisionProps) {
  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase leading-[100%] text-[#5D5D61]">
        Decision
      </p>

      <div className="mt-[14px] flex flex-col gap-[14px]">
        <Button
          onClick={() => onDecision("approved")}
          className={`h-[35px] w-full rounded-[8px] px-4 text-[11px] font-semibold text-white transition ${
            decision === "approved"
              ? "bg-[#00B6CE]"
              : "bg-[#00B6CE] hover:opacity-90"
          }`}
        >
          Approve
        </Button>

        <Button
          variant="light"
          onClick={() => onDecision("changes_requested")}
          className={`h-[35px] w-full rounded-[8px] border border-[#E5E5EB] px-4 text-[11px] font-semibold transition ${
            decision === "changes_requested"
              ? "border-[#E5E5EB] bg-[#F6F6F7]"
              : ""
          }`}
        >
          Request Changes
        </Button>
      </div>
    </section>
  );
}
