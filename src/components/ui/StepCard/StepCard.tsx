import { StepCardProps } from "./step-card.types";

export default function StepCard({ step, title, iconBg }: StepCardProps) {
  return (
    <div className="flex h-full flex-col items-center text-center">
      {/* Step Number */}
      <div
        className="flex h-10 w-10 items-center justify-center rounded-xl text-base font-bold text-white sm:h-11 sm:w-11 sm:text-lg"
        style={{ backgroundColor: iconBg }}
      >
        {step}
      </div>

      {/* Title */}
      <h3 className="mt-4 font-body text-[18px] font-semibold text-[#1F1F25] sm:text-[17px] lg:text-base">
        {title}
      </h3>
    </div>
  );
}
