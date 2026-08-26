export default function ProgressCard() {
  return (
    <section className="rounded-[5px] border border-[#E5E5EB] p-2 lg:p-3">
      <div className="flex items-center justify-between">
        <p className="text-[5px] font-semibold uppercase text-[#77777D] lg:text-[6px]">
          Course Progress
        </p>

        <span className="text-[5px] font-semibold text-[#00B6CE] lg:text-[6px]">
          68%
        </span>
      </div>

      {/* Progress bar */}
      <div className="mt-2 h-[4px] overflow-hidden rounded-full bg-[#E9E9EE] lg:h-[5px]">
        <div className="h-full w-[68%] rounded-full bg-[#00B6CE]" />
      </div>

      {/* Stages */}
      <div className="mt-2 flex items-center justify-between">
        <span className="text-[4px] text-[#5D5D61] lg:text-[5px]">Applied</span>

        <span className="text-[4px] text-[#5D5D61] lg:text-[5px]">
          Interview
        </span>

        <span className="text-[4px] text-[#5D5D61] lg:text-[5px]">
          Cohort Match
        </span>

        <span className="text-[4px] text-[#A0A0A5] lg:text-[5px]">
          Onboarding
        </span>
      </div>
    </section>
  );
}
