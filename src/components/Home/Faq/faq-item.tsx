"use client";

import { FaqItemProps } from "./faq-item.types";

export default function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FaqItemProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-white transition-all">
      <button
        onClick={onToggle}
        className="flex h-[60px] w-full items-center justify-between px-6"
      >
        <h3 className="text-left text-[15px] font-semibold text-[#1F1F25]">
          {question}
        </h3>

        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#E5FAFC]">
          <span className="text-base font-semibold text-[#00B6CE]">
            {isOpen ? "−" : "+"}
          </span>
        </div>
      </button>

      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-40 px-6 pb-6 opacity-100"
            : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
        <p className="text-[14px] leading-7 text-[#5D5D61]">{answer}</p>
      </div>
    </div>
  );
}
