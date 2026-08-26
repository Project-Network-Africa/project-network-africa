export default function ProjectPreview() {
  return (
    <section className="rounded-[5px] border border-[#E5E5EB] p-2 lg:p-3">
      <div className="flex items-center justify-between">
        <p className="text-[5px] font-semibold uppercase text-[#77777D] lg:text-[6px]">
          Current Project
        </p>

        <span className="rounded-full bg-[#E5FAFC] px-1.5 py-0.5 text-[4px] font-semibold text-[#00B6CE] lg:text-[5px]">
          In Progress
        </span>
      </div>

      {/* Project visual */}
      <div className="mt-2 h-[55px] overflow-hidden rounded-[5px] bg-[#17171D] sm:h-[65px] lg:h-[88px]">
        <div className="flex h-full items-center justify-center">
          <div className="relative h-[70%] w-[55%] rounded-[3px] border border-[#383841] bg-[#202027]">
            <div className="absolute left-[8%] top-[15%] h-1 w-[35%] rounded-full bg-[#55555F]" />

            <div className="absolute left-[8%] top-[28%] h-1 w-[55%] rounded-full bg-[#34343D]" />

            <div className="absolute bottom-[15%] left-[8%] h-[20%] w-[25%] rounded-[2px] bg-[#00B6CE]" />

            <div className="absolute bottom-[15%] left-[38%] h-[20%] w-[25%] rounded-[2px] bg-[#393941]" />

            <div className="absolute bottom-[15%] left-[68%] h-[20%] w-[20%] rounded-[2px] bg-[#393941]" />
          </div>
        </div>
      </div>

      <p className="mt-2 text-[5px] font-semibold text-[#1F1F25] lg:text-[7px]">
        Project Alpha — Fintech Onboarding Flow
      </p>

      <p className="mt-0.5 truncate text-[4px] text-[#77777D] lg:text-[5px]">
        Redesigning the onboarding experience for a faster application flow.
      </p>
    </section>
  );
}
