interface CompanyAboutProps {
  company: string;
  description: string;
}

export default function CompanyAbout({
  company,
  description,
}: CompanyAboutProps) {
  return (
    <section className="w-full rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="mb-4 text-[10px] font-semibold uppercase text-[#5D5D61]">
        About {company}
      </p>

      <p className="text-[13px] leading-[1.6] text-[#1F1F25]">{description}</p>
    </section>
  );
}
