export default function MentorSessionNotification() {
  return (
    <div
      className="
        absolute
        bottom-4
        right-4
        z-30
        hidden
        min-h-[64px]
        w-[270px]
        items-center
        gap-3
        rounded-[16px]
        bg-white
        px-4
        py-3
        shadow-[0px_12px_30px_0px_#00000025]
        md:flex
        lg:bottom-[30px]
        lg:right-[30px]
        lg:w-[300px]
      "
    >
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E5FAFC] text-[#00B6CE]">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3.5 8L6.5 11L12.5 5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="min-w-0">
        <p className="truncate text-[12px] font-semibold text-[#1F1F25] lg:text-[13px]">
          Mentor session confirmed
        </p>

        <p className="mt-0.5 text-[10px] text-[#5D5D61] lg:text-[11px]">
          Tomorrow, 10:00 AM
        </p>
      </div>
    </div>
  );
}
