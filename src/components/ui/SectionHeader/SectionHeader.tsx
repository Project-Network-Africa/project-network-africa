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
          className={`font-heading font-bold uppercase tracking-[1px] text-[#4DD9E8]
            sm:text-[22px]
            md:text-[21px]
            lg:text-[20px]
            ${labelClassName}`}
        >
          {label}
        </span>
      )}

      <h2
        className={`font-heading leading-[118%] text-[#1F1F25]
         font-semibold
          sm:text-[22px]
          md:text-[28px]
          lg:text-[40px]
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
