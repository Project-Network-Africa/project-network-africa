import { SectionHeaderProps } from "./section-header.types";

export default function SectionHeader({
  label,
  title,
  description,
  centered = false,
  titleClassName = "",
  labelClassName = "",
  descriptionClassName = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col gap-2 ${
        centered ? "items-center text-center" : ""
      }`}
    >
      {label && (
        <span
          className={`font-body text-[11px] font-bold uppercase tracking-[1px] text-[#4DD9E8]
            sm:text-[12px]
            md:text-[12px]
            lg:text-[12px]
            ${labelClassName}`}
        >
          {label}
        </span>
      )}

      <h2
        className={`font-body font-bold leading-[118%] text-[#1F1F25]
          text-[22px]
          sm:text-[24px]
          md:text-[28px]
          lg:text-[30px]
          ${titleClassName}`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`max-w-[650px] text-[#5D5D61]
            text-[14px]
            leading-6
            sm:text-[15px]
            md:text-[16px]
            md:leading-7
            ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
