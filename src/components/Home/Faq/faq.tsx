"use client";
import { useState } from "react";
import SectionHeader from "../../ui/SectionHeader";
import FaqItem from "./faq-item";
import { FAQProps } from "./faq-item.types";

export default function FAQ({
  label = "FAQ",
  title = "Common questions",
  items,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 md:px-8 lg:px-20 lg:py-[88px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-8 lg:gap-9">
        <SectionHeader label={label} title={title} />

        <div className="flex flex-col gap-4">
          {items.map((item, index) => (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// "use client";

// import { useState } from "react";
// import SectionHeader from "../../ui/SectionHeader";
// import FaqItem from "./faq-item";
// import { faqData } from "./faq.data";

// export default function FAQ() {
//   const [openIndex, setOpenIndex] = useState<number | null>(0);

//   return (
//     <section className="w-full bg-white px-4 py-10 sm:px-6 md:px-8 lg:px-20 lg:py-[88px]">
//       <div className="mx-auto flex max-w-[1280px] flex-col gap-8 lg:gap-9">
//         <SectionHeader label="FAQ" title="Common questions" />

//         <div className="flex flex-col gap-4">
//           {faqData.map((item, index) => (
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
