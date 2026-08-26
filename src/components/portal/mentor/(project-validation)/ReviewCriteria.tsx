"use client";

import { ReviewCriterion } from "@/src/types/mentor/project-validation";

interface ReviewCriteriaProps {
  criteria: ReviewCriterion[];
  onChange: (criteria: ReviewCriterion[]) => void;
}

export default function ReviewCriteria({
  criteria,
  onChange,
}: ReviewCriteriaProps) {
  const handleToggle = (criterionId: string) => {
    const updatedCriteria = criteria.map((criterion) =>
      criterion.id === criterionId
        ? {
            ...criterion,
            checked: !criterion.checked,
          }
        : criterion,
    );

    onChange(updatedCriteria);
  };

  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase leading-[100%] text-[#5D5D61]">
        Review Criteria
      </p>

      <div className="mt-[13px] space-y-[12px]">
        {criteria.map((criterion) => (
          <label
            key={criterion.id}
            className="flex cursor-pointer items-center gap-[10px]"
          >
            <input
              type="checkbox"
              checked={criterion.checked}
              onChange={() => handleToggle(criterion.id)}
              className="peer sr-only"
            />

            <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[4px] border border-[#D9D9DF] bg-white transition peer-checked:border-[#00B6CE] peer-checked:bg-[#00B6CE]">
              {criterion.checked && (
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 5.5L4.3 7.8L9 3"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>

            <span className="text-[12px] text-[#1F1F25]">
              {criterion.label}
            </span>
          </label>
        ))}
      </div>
    </section>
  );
}
