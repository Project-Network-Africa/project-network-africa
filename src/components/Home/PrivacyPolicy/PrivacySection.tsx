import { PrivacyPolicySection } from "@/src/types/public/privacy";

interface PrivacySectionProps {
  section: PrivacyPolicySection;
}

export default function PrivacySection({ section }: PrivacySectionProps) {
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
