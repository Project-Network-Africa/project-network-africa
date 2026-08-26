export default function MentorCard() {
  return (
    <section className="h-full rounded-[5px] border border-[#E5E5EB] p-2 lg:p-3">
      <p className="text-[5px] font-semibold uppercase text-[#77777D] lg:text-[6px]">
        Assigned Mentor
      </p>

      <div className="mt-2 flex items-center gap-2">
        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1F1F25] text-[5px] font-bold text-white lg:h-7 lg:w-7 lg:text-[7px]">
          AO
        </div>

        <div className="min-w-0">
          <p className="truncate text-[6px] font-semibold text-[#1F1F25] lg:text-[8px]">
            Amara Okafor
          </p>

          <p className="truncate text-[4px] text-[#77777D] lg:text-[6px]">
            Mentor · Product Design
          </p>
        </div>
      </div>

      <button
        type="button"
        className="mt-2 rounded-[4px] border border-[#E5E5EB] px-2 py-1 text-[4px] font-semibold text-[#1F1F25] lg:text-[5px]"
      >
        Message Mentor
      </button>
    </section>
  );
}
