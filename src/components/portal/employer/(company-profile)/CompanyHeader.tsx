import { employerCompanyProfileData } from "@/src/data/employer/company-profile";

export default function CompanyHeader() {
  const { company } = employerCompanyProfileData;

  return (
    <section className="flex w-fit items-center gap-4 rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[18px] shadow-[0px_2px_8px_0px_#0000000A]">
      <div className="flex h-[64px] w-[64px] items-center justify-center rounded-[14px] bg-[#1F1F25] text-[24px] font-semibold text-white">
        {company.initial}
      </div>

      <div>
        <p className="text-[16px] font-semibold text-[#1F1F25]">
          {company.name}
        </p>

        <p className="mt-1 text-[12px] text-[#5D5D61]">
          {company.industry} · {company.location}
        </p>
      </div>
    </section>
  );
}
