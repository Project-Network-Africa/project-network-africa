// "use client";

// import { FaqItemProps } from "./faq-item.types";

// export default function FaqItem({
//   question,
//   answer,
//   isOpen,
//   onToggle,
// }: FaqItemProps) {
//   return (
//     <div className="overflow-hidden rounded-xl bg-white shadow-sm border border-[#5D5D61]transition-all">
//       <button
//         onClick={onToggle}
//         className="flex w-full items-center justify-between gap-4 px-4 py-5 text-left transition-colors hover:bg-gray-50 sm:px-6"
//       >
//         <h3 className="flex-1 text-[14px] font-semibold leading-6 text-[#1F1F25] sm:text-[15px] lg:text-[16px]">
//           {question}
//         </h3>

//         <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full  sm:h-8 sm:w-8">
//           <span className="text-lg font-semibold leading-none text-[#1F1F25]">
//             {isOpen ? "−" : "+"}
//           </span>
//         </div>
//       </button>

//       <div
//         className={`overflow-hidden transition-all duration-300 ease-in-out ${
//           isOpen
//             ? "max-h-48 px-4 pb-5 opacity-100 sm:px-6 sm:pb-6"
//             : "max-h-0 px-4 opacity-0 sm:px-6"
//         }`}
//       >
//         <p className="text-[13px] leading-6 text-[#5D5D61] sm:text-[14px] sm:leading-7">
//           {answer}
//         </p>
//       </div>
//     </div>
//   );
// }
"use client";

import { FaqItemProps } from "./faq-item.types";

export default function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FaqItemProps) {
  return (
    <div className="overflow-hidden rounded-[10px] border border-[#5D5D61] bg-white transition-all">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-3 py-3 text-left lg:px-3 lg:py-3.5"
        aria-expanded={isOpen}
      >
        <h3 className="flex-1 font-body text-[14px] font-bold leading-[120%] text-[#1F1F25] lg:text-[14px]">
          {question}
        </h3>

        <span className="shrink-0 font-body text-[20px] font-normal leading-none text-[#1F1F25]">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <p className="px-3 pb-3 font-body text-[13px] font-normal leading-[150%] text-[#1F1F25] lg:pb-3.5 lg:text-[14px]">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
