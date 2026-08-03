import { StepCardProps } from "./step-card.types";

export default function StepCard({ step, title, iconBg }: StepCardProps) {
  return (
    <div className="flex w-[297px] items-center flex-col gap-[14px]">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-xl text-base font-bold leading-none text-white"
        style={{ backgroundColor: iconBg }}
      >
        {step}
      </div>

      <h3 className="font-body text-base font-semibold text-[#1F1F25]">
        {title}
      </h3>
    </div>
  );
}
