// "use client";

// import { useState } from "react";
// import SectionHeader from "../../ui/SectionHeader";
// import FaqItem from "./faq-item";
// import { FAQProps } from "@/src/types/faq";

// export default function FAQ({
//   label = "FAQ",
//   title = "Common questions",
//   items,
// }: FAQProps) {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   return (
//     <section className="w-full bg-white px-4 py-10 sm:px-6 md:px-8 lg:px-20 lg:py-[88px]">
//       <div className="mx-auto flex max-w-[1280px] flex-col gap-8 lg:gap-9">
//         <SectionHeader
//           label={label}
//           title={title}
//           titleClassName="lg:text-[34px] text-[22px] md:text-[28px]"
//           labelClassName="text-[22px] md:text-[20px]"
//         />

//         <div className="flex flex-col gap-4">
//           {items.map((item, index) => (
//             <FaqItem
//               key={item.question}
//               question={item.question}
//               answer={item.answer}
//               isOpen={openIndex === index}
//               onToggle={() => setOpenIndex(openIndex === index ? null : index)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import Link from "next/link";
import FaqItem from "./faq-item";
import { FAQProps } from "@/src/types/faq";

export default function FAQ({
  label = "FAQ",
  title = "Common questions",
  description,
  items,
  helper,
  viewAllLabel,
  viewAllHref,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const hasIntro = Boolean(description || helper);

  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 md:px-8 lg:px-20 lg:py-[88px]">
      <div className="mx-auto max-w-[1280px]">
        {hasIntro ? (
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-[80px]">
            <div className="w-full lg:w-[390px] lg:shrink-0">
              <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
                {label}
              </p>

              <h2 className="mt-4 font-body text-[28px] font-bold leading-[115%] tracking-[-0.5px] text-[#1F1F25] lg:mt-5 lg:text-[34px] lg:leading-[120%]">
                {title}
              </h2>

              {description && (
                <p className="mt-5 font-body text-[14px] font-normal leading-[150%] text-[#5D5D61] lg:text-[15px]">
                  {description}
                </p>
              )}

              {helper && (
                <div className="mt-5 rounded-[16px] bg-[#F8F8F8] p-4 lg:p-5">
                  <h3 className="font-body text-[15px] font-bold leading-[120%] text-[#1F1F25] lg:text-[16px]">
                    {helper.title}
                  </h3>

                  <p className="mt-3 font-body text-[13px] font-normal leading-[150%] text-[#5D5D61]">
                    {helper.description}
                  </p>

                  <Link
                    href={helper.href}
                    className="mt-3 flex w-fit items-center gap-2 font-body text-[13px] font-bold leading-[100%] text-[#1F1F25] transition hover:text-[#00B6CE]"
                  >
                    {helper.linkText}
                    <span
                      aria-hidden="true"
                      className="text-[17px] leading-none"
                    >
                      →
                    </span>
                  </Link>
                </div>
              )}
            </div>

            <div className="flex w-full flex-col gap-3 lg:flex-1 lg:gap-4">
              {items.map((item, index) => (
                <FaqItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
              {label}
            </p>

            <h2 className="mt-4 font-body text-[28px] font-bold leading-[115%] tracking-[-0.5px] text-[#1F1F25] lg:mt-5 lg:text-[34px] lg:leading-[120%]">
              {title}
            </h2>

            {description && (
              <p className="mt-4 font-body text-[14px] font-normal leading-[150%] text-[#5D5D61] lg:text-[15px]">
                {description}
              </p>
            )}

            <div className="mt-8 flex flex-col gap-4">
              {items.map((item, index) => (
                <FaqItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </div>

            {viewAllLabel && viewAllHref && (
              <Link
                href={viewAllHref}
                className="mt-7 flex w-fit items-center gap-2 font-body text-[13px] font-semibold text-[#00B6CE] transition hover:text-[#009CB2]"
              >
                {viewAllLabel}
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
