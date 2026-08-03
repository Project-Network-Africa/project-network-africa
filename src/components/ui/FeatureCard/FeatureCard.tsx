import { FeatureCardProps } from "./feature-card.types";

export default function FeatureCard({
  icon,
  iconBg,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="flex w-[297px] flex-col gap-[14px] rounded-2xl bg-white px-6 py-7 shadow-[0_4px_16px_rgba(0,0,0,0.05)]">
      <div
        className="flex h-11 w-11 items-center justify-center rounded-xl text-lg font-bold text-white"
        style={{ backgroundColor: iconBg }}
      >
        {icon}
      </div>

      <h3 className="font-body text-[17px] font-semibold text-[#1F1F25]">
        {title}
      </h3>

      <p className="font-body text-[13px] leading-5 text-[#5D5D61]">
        {description}
      </p>
    </div>
  );
}
