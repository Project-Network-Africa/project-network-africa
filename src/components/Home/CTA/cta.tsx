// import Button from "../../ui/Button";

// interface CTAProps {
//   title: string;
//   primaryText: string;
//   primaryHref: string;
//   secondaryText?: string;
//   secondaryHref?: string;
// }

// export default function CTA({
//   title,
//   primaryText,
//   primaryHref,
//   secondaryText,
//   secondaryHref,
// }: CTAProps) {
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-br from-[#00B6CE] to-[#007585] px-4 py-6 sm:px-6 md:px-8 lg:px-20 lg:py-[88px]">
//       {/* Ellipse */}
//       <div className="absolute -top-20 -right-16 h-[180px] w-[180px] rounded-full bg-white/10 sm:h-[220px] sm:w-[220px] lg:-top-[90px] lg:right-[-42px] lg:h-[300px] lg:w-[300px]" />

//       <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-8 lg:gap-[38px]">
//         <h2 className="max-w-[650px] text-center font-heading text-[20px] font-semibold leading-tight text-white md:text-[30px] lg:text-[32px] lg:leading-10">
//           {title}
//         </h2>

//         <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-[14px]">
//           <Button
//             href={primaryHref}
//             variant="dark"
//             className="w-full rounded-[10px]   px-[26px] py-[15px] text-center text-[15px] font-semibold  hover:text-white sm:w-auto"
//           >
//             {primaryText}
//           </Button>

//           {secondaryText && secondaryHref && (
//             <Button href={secondaryHref} variant="outline" className="...">
//               {secondaryText}
//             </Button>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }
import Button from "../../ui/Button";

interface CTAProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryText?: string;
  primaryHref?: string;
  secondaryText?: string;
  secondaryHref?: string;
  backgroundClassName?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  primaryButtonClassName?: string;
  secondaryButtonClassName?: string;
  showEyebrow?: boolean;
  showDescription?: boolean;
  showPrimaryButton?: boolean;
  showSecondaryButton?: boolean;
}

export default function CTA({
  eyebrow,
  title,
  description,
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
  backgroundClassName = "bg-[#00B6CE]",
  eyebrowClassName = "text-[#1F1F25]",
  titleClassName = "text-[#1F1F25]",
  descriptionClassName = "text-[#1F1F25]",
  primaryButtonClassName = "bg-[#1F1F25] text-white",
  secondaryButtonClassName = "border-white bg-white text-[#1F1F25] hover:bg-white hover:text-[#1F1F25]",
  showEyebrow = true,
  showDescription = true,
  showPrimaryButton = true,
  showSecondaryButton = true,
}: CTAProps) {
  console.log({
    primaryButtonClassName,
    secondaryButtonClassName,
  });
  return (
    <section
      className={`w-full px-4 py-10 sm:px-6 md:px-8 lg:px-20 lg:py-[54px] ${backgroundClassName}`}
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-7 lg:gap-8">
        {showEyebrow && eyebrow && (
          <p
            className={`font-body text-[11px] font-semibold leading-[100%] lg:text-[12px] ${eyebrowClassName}`}
          >
            {eyebrow}
          </p>
        )}

        {title && (
          <h2
            className={`max-w-[760px] text-center font-heading text-[28px] font-bold leading-[120%] tracking-[-0.5px] sm:text-[32px] lg:text-[38px] lg:leading-[115%] lg:tracking-[-1px] ${titleClassName}`}
          >
            {title}
          </h2>
        )}

        {showDescription && description && (
          <p
            className={`max-w-[700px] text-center font-body text-[14px] font-normal leading-[150%] lg:text-[15px] ${descriptionClassName}`}
          >
            {description}
          </p>
        )}

        {(showPrimaryButton || showSecondaryButton) && (
          <div className="flex w-full flex-row items-center justify-center gap-3 lg:gap-3">
            {showPrimaryButton && primaryText && primaryHref && (
              <Button
                href={primaryHref}
                variant="dark"
                className={`w-full rounded-[8px] px-5 py-3.5 text-center text-[14px] font-semibold sm:w-[170px] lg:h-[48px] lg:w-[170px] ${primaryButtonClassName}`}
              >
                {primaryText}
              </Button>
            )}

            {showSecondaryButton && secondaryText && secondaryHref && (
              <Button
                href={secondaryHref}
                variant="outline"
                className={`w-full rounded-[8px] px-5 py-3.5 text-center text-[14px] font-semibold sm:w-[170px] lg:h-[48px] lg:w-[180px] ${secondaryButtonClassName}`}
              >
                {secondaryText}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
