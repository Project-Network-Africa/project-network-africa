// import Image from "next/image";
// import Link from "next/link";
// import { PageHeroProps } from "./PageHero.types";

// export default function PageHero({
//   eyebrow,
//   title,
//   description,
//   buttons,
//   stats,
//   image,
//   imageAlt = "",
//   floatingCard,
//   backgroundClassName = "bg-white",
//   titleClassName = "text-[#1F1F25]",
//   descriptionClassName = "text-[#5D5D61]",
//   eyebrowClassName = "text-[#00B6CE]",
//   imageClassName = "",
//   children,
// }: PageHeroProps) {
//   return (
//     <section className={`w-full ${backgroundClassName}`}>
//       <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-4 py-8 sm:px-8 lg:flex-row lg:items-center lg:gap-[80px] lg:px-0 lg:py-[64px]">
//         {/* Content */}
//         <div className="flex w-full flex-col lg:w-[568px]">
//           {eyebrow && (
//             <div
//               className={`mb-7 w-fit font-body text-[13px] font-semibold leading-[100%] lg:mb-6 lg:rounded-full lg:px-4 lg:py-2 lg:text-[13px] ${eyebrowClassName}`}
//             >
//               {eyebrow}
//             </div>
//           )}

//           <h1
//             className={`font-body text-[38px] font-bold leading-[130%] tracking-[-1px] lg:text-[58px] lg:leading-[105%] lg:tracking-[-2px] ${titleClassName}`}
//           >
//             {title}
//           </h1>

//           {description && (
//             <p
//               className={`mt-6 max-w-[540px] font-body text-[15px] font-normal leading-[130%] lg:mt-7 lg:text-[18px] lg:leading-[150%] ${descriptionClassName}`}
//             >
//               {description}
//             </p>
//           )}

//           {buttons && buttons.length > 0 && (
//             <div className="mt-7 flex w-full items-center gap-2.5 lg:gap-3">
//               {buttons.map((button) => (
//                 <Link
//                   key={button.label}
//                   href={button.href}
//                   className={`flex h-[49px] flex-1 items-center justify-center rounded-[10px] px-3 text-center font-body text-[13px] font-semibold transition lg:h-[50px] lg:flex-none lg:px-6 lg:text-[14px] ${
//                     button.variant === "outline"
//                       ? "border border-[#1F1F25] text-[#1F1F25] hover:bg-[#1F1F25] hover:text-white"
//                       : button.variant === "light"
//                         ? "bg-white text-[#1F1F25] hover:bg-[#F8F8F8]"
//                         : "bg-[#1F1F25] text-white hover:bg-[#00B6CE]"
//                   }`}
//                 >
//                   {button.label}
//                 </Link>
//               ))}
//             </div>
//           )}

//           {stats && stats.length > 0 && (
//             <div className="mt-7 grid w-full grid-cols-2 gap-8 lg:mt-8 lg:flex lg:flex-wrap lg:items-start lg:gap-10">
//               {stats.map((stat) => (
//                 <div key={stat.value} className="flex flex-col gap-1">
//                   <p className="font-body text-[20px] font-bold leading-[100%] text-[#1F1F25] lg:text-[24px]">
//                     {stat.value}
//                   </p>

//                   <p className="font-body text-[12px] font-normal leading-[150%] text-[#5D5D61] lg:text-[13px]">
//                     {stat.label}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           )}

//           {children}
//         </div>

//         {/* Visual */}
//         <div className="relative mt-1 w-full lg:mt-0 lg:w-[616px]">
//           <div
//             className={`relative h-[268px] w-full overflow-hidden rounded-[20px] lg:h-[468px] lg:rounded-[24px] ${imageClassName}`}
//           >
//             <Image
//               src={image}
//               alt={imageAlt}
//               fill
//               priority
//               className="object-cover"
//             />
//           </div>

//           {floatingCard && (
//             <div className="absolute bottom-[-30px] left-1/2 w-[310px] -translate-x-1/2 rounded-[16px] bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.12)] md:left-auto md:right-0 md:w-[300px] md:translate-x-0 lg:bottom-[-48px] lg:w-[250px] lg:p-5">
//               <p className="font-body text-[15px] font-semibold leading-[140%] text-[#1F1F25]">
//                 {floatingCard.title}
//               </p>

//               <p className="mt-1 font-body text-[13px] font-normal leading-[140%] text-[#5D5D61] lg:mt-2 lg:leading-[150%]">
//                 {floatingCard.description}
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }
import Image from "next/image";
import Link from "next/link";
import { PageHeroProps } from "./PageHero.types";

export default function PageHero({
  eyebrow,
  title,
  description,
  buttons,
  stats,
  image,
  imageAlt = "",
  floatingCard,
  backgroundClassName = "bg-white",
  titleClassName = "text-[#1F1F25]",
  descriptionClassName = "text-[#5D5D61]",
  eyebrowClassName = "text-[#00B6CE]",
  imageClassName = "",
  children,
}: PageHeroProps) {
  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-12 px-4 py-8 sm:px-8 lg:flex-row lg:items-center lg:gap-10 lg:px-0 lg:py-[64px] xl:gap-[80px]">
        {/* Content */}
        <div className="flex w-full flex-col lg:w-[45%] lg:min-w-0 lg:shrink xl:w-[568px] xl:shrink-0">
          {eyebrow && (
            <div
              className={`mb-7 w-fit font-body text-[13px] font-semibold leading-[100%] lg:mb-6 lg:rounded-full lg:px-4 lg:py-2 lg:text-[13px] ${eyebrowClassName}`}
            >
              {eyebrow}
            </div>
          )}

          <h1
            className={`font-body text-[38px] font-bold leading-[130%] tracking-[-1px] lg:text-[58px] lg:leading-[105%] lg:tracking-[-2px] ${titleClassName}`}
          >
            {title}
          </h1>

          {description && (
            <p
              className={`mt-6 max-w-[540px] font-body text-[15px] font-normal leading-[130%] lg:mt-7 lg:text-[18px] lg:leading-[150%] ${descriptionClassName}`}
            >
              {description}
            </p>
          )}

          {buttons && buttons.length > 0 && (
            <div className="mt-7 flex w-full items-center gap-2.5 lg:gap-3">
              {buttons.map((button) => (
                <Link
                  key={button.label}
                  href={button.href}
                  className={`flex h-[49px] flex-1 items-center justify-center rounded-[10px] px-3 text-center font-body text-[13px] font-semibold transition lg:h-[50px] lg:flex-none lg:px-6 lg:text-[14px] ${
                    button.variant === "outline"
                      ? "border border-[#1F1F25] text-[#1F1F25] hover:bg-[#1F1F25] hover:text-white"
                      : button.variant === "light"
                        ? "bg-white text-[#1F1F25] hover:bg-[#F8F8F8]"
                        : "bg-[#1F1F25] text-white hover:bg-[#00B6CE]"
                  }`}
                >
                  {button.label}
                </Link>
              ))}
            </div>
          )}

          {stats && stats.length > 0 && (
            <div className="mt-7 grid w-full grid-cols-2 gap-8 lg:mt-8 lg:flex lg:flex-wrap lg:items-start lg:gap-10">
              {stats.map((stat) => (
                <div key={stat.value} className="flex flex-col gap-1">
                  <p className="font-body text-[20px] font-bold leading-[100%] text-[#1F1F25] lg:text-[24px]">
                    {stat.value}
                  </p>

                  <p className="font-body text-[12px] font-normal leading-[150%] text-[#5D5D61] lg:text-[13px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {children}
        </div>

        {/* Visual */}
        <div className="relative mt-1 w-full lg:mt-0 lg:w-[55%] lg:min-w-0 xl:w-[616px]">
          <div
            className={`relative h-[268px] w-full overflow-hidden rounded-[20px] lg:h-[468px] lg:rounded-[24px] ${imageClassName}`}
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              priority
              className="object-cover"
            />
          </div>

          {floatingCard && (
            <div className="absolute bottom-[-30px] left-1/2 w-[310px] -translate-x-1/2 rounded-[16px] bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.12)] md:left-auto md:right-0 md:w-[300px] md:translate-x-0 lg:bottom-[-48px] lg:w-[250px] lg:p-5">
              <p className="font-body text-[15px] font-semibold leading-[140%] text-[#1F1F25]">
                {floatingCard.title}
              </p>

              <p className="mt-1 font-body text-[13px] font-normal leading-[140%] text-[#5D5D61] lg:mt-2 lg:leading-[150%]">
                {floatingCard.description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
