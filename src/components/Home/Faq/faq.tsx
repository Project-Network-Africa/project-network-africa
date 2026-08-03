"use client";

import { useState } from "react";
import SectionHeader from "../../ui/SectionHeader";
import FaqItem from "./faq-item";
import { faqData } from "./faq.data";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full bg-white px-20 py-[88px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-9">
        <SectionHeader label="FAQ" title="Common questions" />

        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => (
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
