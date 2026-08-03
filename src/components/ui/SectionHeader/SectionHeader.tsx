import { SectionHeaderProps } from "./section-header.types";

export default function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-body text-base font-semibold uppercase text-[#00B6CE]">
        {label}
      </span>

      <h2 className="font-body text-[34px] font-bold leading-[118%] text-[#1F1F25]">
        {title}
      </h2>
    </div>
  );
}
