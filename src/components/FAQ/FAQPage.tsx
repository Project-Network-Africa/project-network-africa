"use client";

import { faqCategories } from "@/src/data/faq/faq";
import { useState } from "react";
import FaqItem from "../Home/Faq/faq-item";

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const handleToggle = (question: string) => {
    setOpenItem((current) => (current === question ? null : question));
  };

  return (
    <main className="w-full bg-white">
      <section className="mx-auto w-full max-w-[1280px] px-5 pb-12 pt-6 sm:px-8 lg:px-0 lg:pb-[72px] lg:pt-8">
        <div className="mb-10 lg:mb-12">
          <p className="font-body text-[10px] font-medium leading-[100%] text-[#5D5D61]">
            Home / FAQ
          </p>

          <h1 className="mt-4 font-body text-[28px] font-bold leading-[120%] tracking-[-0.5px] text-[#1F1F25] lg:text-[32px]">
            Common questions
          </h1>

          <p className="mt-2 max-w-[650px] font-body text-[12px] font-normal leading-[150%] text-[#5D5D61] lg:text-[13px]">
            Everything you need to know about PN Africa, our programmes,
            application process, project experience, and how the PN Africa
            community works.
          </p>
        </div>

        <div className="flex flex-col">
          {faqCategories.map((category) => (
            <section
              key={category.title}
              className="border-t border-[#F0F0F1] py-8 lg:py-[42px]"
            >
              <div className="mb-5">
                <p className="font-body text-[9px] font-semibold uppercase leading-[100%] tracking-[0.5px] text-[#00B6CE] lg:text-[10px]">
                  {category.eyebrow}
                </p>

                <h2 className="mt-2 font-body text-[18px] font-bold leading-[120%] tracking-[-0.3px] text-[#1F1F25] lg:text-[20px]">
                  {category.title}
                </h2>
              </div>

              <div className="flex flex-col gap-2">
                {category.items.map((item) => (
                  <FaqItem
                    key={item.question}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openItem === item.question}
                    onToggle={() => handleToggle(item.question)}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="w-full border-t border-[#E5E5E8] bg-white px-5 py-12 text-center sm:px-8 lg:py-[58px]">
        <h2 className="font-body text-[18px] font-bold leading-[120%] text-[#1F1F25] lg:text-[20px]">
          Still have questions?
        </h2>

        <p className="mx-auto mt-2 max-w-[420px] font-body text-[12px] leading-[150%] text-[#5D5D61]">
          We&apos;re here to help. Reach out and our team will be happy to
          assist you.
        </p>

        <button
          type="button"
          className="mt-4 rounded-[6px] bg-[#00B6CE] px-5 py-2 font-body text-[11px] font-semibold text-[#1F1F25] transition hover:bg-[#009CB2]"
        >
          Contact us
        </button>
      </section>
    </main>
  );
}
