import { SectionHeaderProps } from "./section-header.types";

export default function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-body text-[11px] font-semibold uppercase md:tracking-[1px] text-[#00B6CE] sm:text-xs md:text-sm lg:text-base">
        {label}
      </span>

      <h2 className="font-body text-[15px] font-bold leading-[118%] text-[#1F1F25] sm:text-[22px] md:text-[28px] lg:text-[34px]">
        {title}
      </h2>
    </div>
  );
}
