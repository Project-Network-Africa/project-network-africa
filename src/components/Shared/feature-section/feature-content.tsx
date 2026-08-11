// import Button from "../../ui/Button";
// import SectionHeader from "../../ui/SectionHeader";
// import { FeatureContentProps } from "./feature-section.types";

// export default function FeatureContent({
//   label,
//   title,
//   description,
//   buttonText,
//   buttonHref,
//   buttonClassName,
// }: FeatureContentProps) {
//   return (
//     <div className="flex w-full flex-col justify-center gap-5 rounded-[20px] bg-white p-6 sm:p-8 lg:h-[340px] lg:p-8">
//       <SectionHeader label={label} title={title} />

//       <p className="text-sm leading-7 text-[#5D5D61] lg:text-[15px]">
//         {description}
//       </p>

//       <Button
//         href={buttonHref}
//         className={`mt-2 w-full rounded-[10px] px-6 py-[14px] text-sm font-semibold text-white sm:w-fit ${
//           buttonClassName ?? "bg-[#1F1F25] hover:bg-black"
//         }`}
//       >
//         {buttonText}
//       </Button>
//     </div>
//   );
// }
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
  details,
}: FeatureContentProps) {
  return (
    <div className="flex w-full flex-col justify-center gap-5 rounded-[20px] bg-white p-6 sm:p-8 lg:h-[340px] lg:p-8">
      <SectionHeader label={label} title={title} />

      <p className="text-sm leading-7 text-[#5D5D61] lg:text-[15px]">
        {description}
      </p>

      {/* Optional program details */}
      {details && details.length > 0 && (
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {details.map((detail) => (
            <div key={detail.label} className="flex flex-col gap-1">
              <span className="text-[10px] font-semibold uppercase tracking-[0.5px] text-[#5D5D61]">
                {detail.label}
              </span>

              <span className="text-[13px] font-semibold text-[#1F1F25]">
                {detail.value}
              </span>
            </div>
          ))}
        </div>
      )}

      <Button
        href={buttonHref}
        className={`mt-2 w-full rounded-[10px] px-6 py-[14px] text-sm font-semibold text-white sm:w-fit ${
          buttonClassName ?? "bg-[#1F1F25] hover:bg-black"
        }`}
      >
        {buttonText}
      </Button>
    </div>
  );
}
