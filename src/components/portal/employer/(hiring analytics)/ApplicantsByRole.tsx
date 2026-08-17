import { hiringAnalyticsData } from "@/src/data/employer/hiring-analytics";

export default function ApplicantsByRole() {
  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Applicants by Role
      </p>

      <div className="mt-[14px] flex flex-col gap-[16px]">
        {hiringAnalyticsData.applicantsByRole.map((item) => (
          <div
            key={item.role}
            className="flex items-center justify-between gap-5"
          >
            <p className="text-[13px] text-[#1F1F25]">{item.role}</p>

            <p className="shrink-0 text-[12px] font-semibold text-[#5D5D61]">
              {item.applicants} applicants
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
