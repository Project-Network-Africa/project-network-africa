import { StepCardProps } from "./step-card.types";

export default function StepCard({ step, title, iconBg }: StepCardProps) {
  return (
    <div className="flex h-full flex-row items-center gap-[14px] text-left lg:flex-col lg:items-center lg:gap-0 lg:text-center">
      {/* Step Number */}
      <div
        className="flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full bg-[#1F1F25] text-[12px] font-normal  tracking-[1px] text-white lg:h-10 lg:w-10 lg:rounded-xl lg:text-base lg:font-bold lg:leading-normal lg:tracking-normal"
        style={{ backgroundColor: iconBg }}
      >
        {step}
      </div>

      {/* Title */}
      <h3 className="font-body text-[12px] font-semibold leading-[24px] text-[#1F1F25] lg:mt-4 lg:text-[18px] lg:leading-normal">
        {title}
      </h3>
    </div>
  );
}
