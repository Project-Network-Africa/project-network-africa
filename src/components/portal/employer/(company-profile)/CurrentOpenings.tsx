import { initialJobs } from "@/src/data/employer/job";

export default function CurrentOpenings() {
  const activeJobs = initialJobs.filter((job) => job.status === "Active");

  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Current Openings
      </p>

      <div className="mt-[14px] flex flex-col gap-[12px]">
        {activeJobs.map((job) => (
          <div key={job.id} className="flex items-center gap-[10px]">
            <span className="h-[6px] w-[6px] rounded-full bg-[#00B6CE]" />

            <p className="text-[12px] text-[#1F1F25]">{job.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
