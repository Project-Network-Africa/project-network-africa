// import Button from "../../ui/Button";
// import SectionHeader from "../../ui/SectionHeader";
// import { FeatureContentProps } from "./feature-section.types";

// export default function FeatureContent({
//   label,
//   title,
//   description,
//   buttonText,
//   buttonHref,
//   details,
// }: FeatureContentProps) {
//   return (
//     <div className="flex w-full flex-col gap-4  bg-white md:gap-5 lg:h-[415px] xl:w-[546px] lg:justify-center lg:gap-[30px] lg:p-5 xl:shrink-0">
//       <SectionHeader
//         label={label}
//         title={title}
//         labelClassName="text-[22px] font-semibold leading-[30px] tracking-normal lg:text-[20px]"
//         titleClassName="text-[22px] font-semibold leading-[30px] tracking-normal md:text-[28px] lg:text-[40px]"
//       />

//       <p className="max-w-[650px] text-[12px] font-normal leading-[18px] tracking-[1px] text-[#5D5D61] md:text-[13px] lg:text-[15px] lg:leading-7 lg:tracking-normal">
//         {description}
//       </p>

//       {details && details.length > 0 && (
//         <div className="flex flex-wrap gap-x-8 gap-y-4">
//           {details.map((detail) => (
//             <div key={detail.label} className="flex flex-col gap-1">
//               <span className="text-[10px] font-semibold uppercase tracking-[0.5px] text-[#5D5D61]">
//                 {detail.label}
//               </span>

//               <span className="text-[13px] font-semibold text-[#1F1F25]">
//                 {detail.value}
//               </span>
//             </div>
//           ))}
//         </div>
//       )}

//       {buttonText && buttonHref && (
//         <Button
//           href={buttonHref}
//           variant="linkBlack"
//           className="mt-0 w-fit text-[12px] font-normal leading-[18px] tracking-[1px] md:text-[13px] lg:mt-2 lg:text-sm lg:font-semibold lg:leading-normal lg:tracking-normal"
//         >
//           {buttonText}
//         </Button>
//       )}
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
  details,
}: FeatureContentProps) {
  return (
    <div className="flex w-full flex-col gap-4 bg-white md:gap-5 xl:h-[415px] xl:w-[546px] xl:shrink-0 xl:justify-center xl:gap-[30px] xl:p-5">
      <SectionHeader
        label={label}
        title={title}
        labelClassName="text-[22px] font-semibold leading-[30px] tracking-normal lg:text-[20px]"
        titleClassName="text-[22px] font-semibold leading-[30px] tracking-normal md:text-[28px] lg:text-[40px]"
      />

      <p className="max-w-[650px] text-[12px] font-normal leading-[18px] tracking-[1px] text-[#5D5D61] md:text-[13px] lg:text-[15px] lg:leading-7 lg:tracking-normal">
        {description}
      </p>

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

      {buttonText && buttonHref && (
        <Button
          href={buttonHref}
          variant="linkBlack"
          className="mt-0 w-fit text-[12px] font-normal leading-[18px] tracking-[1px] md:text-[13px] xl:mt-2 xl:text-sm xl:font-semibold xl:leading-normal xl:tracking-normal"
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
}
