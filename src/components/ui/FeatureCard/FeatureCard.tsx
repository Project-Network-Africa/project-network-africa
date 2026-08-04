import { FeatureCardProps } from "./feature-card.types";

export default function FeatureCard({
  icon,
  iconBg,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-[0_4px_16px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">
      {/* Icon */}
      <div
        className="flex h-10 w-10 items-center justify-center rounded-xl text-base font-bold text-white sm:h-11 sm:w-11 sm:text-lg"
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </div>

      {/* Title */}
      <h3 className="mt-4 font-body text-[18px] font-semibold text-[#1F1F25] sm:text-[17px] lg:text-[18px]">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 flex-1 font-body text-[14px] leading-6 text-[#5D5D61] sm:text-[13px] sm:leading-5 lg:text-[14px] lg:leading-6">
        {description}
      </p>
    </div>
  );
}
