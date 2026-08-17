import Link from "next/link";

interface NextStepsProps {
  description: string;
  href: string;
}

export default function NextSteps({ description, href }: NextStepsProps) {
  return (
    <section className="w-full rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="mb-[14px] text-[10px] font-semibold uppercase text-[#5D5D61]">
        Next Steps
      </p>

      <div className="flex flex-col gap-4">
        <p className="text-[13px] text-[#1F1F25]">{description}</p>

        <Link
          href={href}
          className="w-fit rounded-[8px] bg-[#1F1F25] px-4 py-[10px] text-[12px] font-semibold text-white transition hover:bg-[#33333A]"
        >
          Go to Onboarding Checklist
        </Link>
      </div>
    </section>
  );
}
