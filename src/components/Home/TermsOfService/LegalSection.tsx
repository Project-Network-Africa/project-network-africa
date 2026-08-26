import { LegalSection as LegalSectionType } from "@/src/types/public/legal";

interface LegalSectionProps {
  section: LegalSectionType;
}

export default function LegalSection({ section }: LegalSectionProps) {
  return (
    <section>
      <h2 className="text-[16px] font-semibold leading-[100%] text-[#1F1F25]">
        {section.title}
      </h2>

      <p className="mt-[20px] text-[13px] leading-[145%] text-[#5D5D61]">
        {section.content}
      </p>
    </section>
  );
}
