"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

import ProjectSubmission from "@/src/components/portal/mentor/(project-validation)/ProjectSubmission";
import ReviewCriteria from "@/src/components/portal/mentor/(project-validation)/ReviewCriteria";
import ReviewDecision from "@/src/components/portal/mentor/(project-validation)/ReviewDecision";

import { projectValidationData } from "@/src/data/mentor/project-validation";

import {
  ReviewCriterion,
  ValidationDecision,
} from "@/src/types/mentor/project-validation";

export default function ReviewDetailsPage() {
  const params = useParams();

  const reviewId = params.reviewId as string;

  const submission =
    projectValidationData.id === reviewId ? projectValidationData : null;

  const [criteria, setCriteria] = useState<ReviewCriterion[]>(
    submission?.criteria ?? [],
  );

  const [decision, setDecision] = useState<ValidationDecision>(
    submission?.decision ?? "pending",
  );

  if (!submission) {
    return (
      <div className="w-full">
        <h1 className="text-[24px] font-bold text-[#1F1F25]">
          Project Validation
        </h1>

        <div className="mt-[26px] rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px]">
          <p className="text-[12px] text-[#5D5D61]">Review not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h1 className="text-[24px] font-bold leading-[100%] text-[#1F1F25]">
        Project Validation — {submission.title}
      </h1>

      <div className="mt-[26px] grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_340px]">
        <ProjectSubmission submission={submission} />

        <div className="space-y-4">
          <ReviewCriteria criteria={criteria} onChange={setCriteria} />

          <ReviewDecision decision={decision} onDecision={setDecision} />
        </div>
      </div>
    </div>
  );
}
