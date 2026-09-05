"use client";

import { ContentEditorStepsProps } from "./content-editor.types";

const steps = ["Details", "Write content", "Media & SEO", "Review & publish"];

export default function ContentEditorSteps({
  activeStep = 1,
}: ContentEditorStepsProps) {
  return (
    <div className="mt-5 grid grid-cols-2 gap-1 rounded-lg border border-[#DDE1E5] bg-white p-1 md:grid-cols-4">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const active = stepNumber === activeStep;

        return (
          <div
            key={step}
            className={`flex h-8 items-center justify-center rounded-md px-2 text-[12px] ${
              active
                ? "bg-[#E5FAFC] font-semibold text-[#00B6CE]"
                : "text-[#5D5D61]"
            }`}
          >
            {stepNumber} {step}
          </div>
        );
      })}
    </div>
  );
}
