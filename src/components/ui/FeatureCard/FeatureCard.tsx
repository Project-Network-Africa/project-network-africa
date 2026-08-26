import { FeatureCardProps } from "./feature-card.types";

export default function FeatureCard({
  icon,
  iconBg,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="flex h-full flex-row items-start gap-[14px] rounded-none bg-transparent p-0 text-left md:text-left  lg:text-center shadow-none sm:p-7 sm:shadow-[0_4px_16px_rgba(0,0,0,0.05)] lg:flex-col lg:items-center lg:rounded-2xl lg:bg-white lg:p-6 lg:shadow-[0_4px_16px_rgba(0,0,0,0.05)]">
      {/* Icon */}
      <div
        className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-[6px] text-[18px] font-bold text-white sm:h-11 sm:w-11 sm:text-lg lg:h-10 lg:w-10 lg:rounded-xl"
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col gap-[3px] lg:w-full">
        {/* Title */}
        <h3 className="font-heading text-[18px] font-semibold leading-[26px] text-[#1F1F25] lg:mt-4 lg:font-body lg:text-[18px] lg:font-semibold lg:leading-normal">
          {title}
        </h3>

        {/* Description */}
        <p className="font-body text-[12px] font-normal leading-[18px] tracking-[1px] text-[#5D5D61] lg:mt-3 lg:flex-1 lg:text-[14px] lg:leading-6 lg:tracking-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
