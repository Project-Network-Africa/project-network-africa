import { faqs } from "@/src/data/applicant/help";

export default function FrequentlyAskedQuestions() {
  return (
    <section className="w-full rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="mb-5 text-[10px] font-semibold uppercase text-[#5D5D61]">
        Frequently Asked Questions
      </p>

      <div className="flex flex-col">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            className={`py-4 ${
              index !== faqs.length - 1 ? "border-b border-[#E5E5EB]" : ""
            }`}
          >
            <p className="text-[13px] font-semibold text-[#1F1F25]">
              {faq.question}
            </p>

            <p className="mt-[6px] text-[12px] leading-[1.4] text-[#5D5D61]">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
