import Button from "../../ui/Button";
import SectionHeader from "../../ui/SectionHeader";
import { FeatureContentProps } from "./feature-section.types";

export default function FeatureContent({
  label,
  title,
  description,
  buttonText,
  buttonHref,
  buttonClassName,
}: FeatureContentProps) {
  return (
    <div className="flex h-[340px] w-[676px] flex-col justify-center gap-[18px] rounded-[20px] bg-white p-5">
      <SectionHeader label={label} title={title} />

      <p className="ont-body text-[15px] leading-7 text-[#5D5D61]">
        {description}
      </p>

      <Button
        href={buttonHref}
        className={`mt-2 w-fit rounded-[10px] px-6 py-[14px] text-sm font-semibold text-white ${
          buttonClassName ?? "bg-[#1F1F25] hover:bg-black"
        }`}
      >
        {buttonText}
      </Button>
    </div>
  );
}
