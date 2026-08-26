export default function DashboardHeader() {
  return (
    <header>
      <div className="flex items-center justify-between">
        <h3 className="text-[11px] font-bold text-[#1F1F25] sm:text-[13px] lg:text-[16px]">
          Dashboard
        </h3>

        <div className="flex items-center gap-2">
          {/* Notification */}
          <span className="text-[6px] text-[#9A9A9F] lg:text-[8px]">🔔</span>

          {/* Avatar */}
          <div className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#00B6CE] text-[5px] font-bold text-white sm:h-4 sm:w-4 lg:h-5 lg:w-5 lg:text-[7px]">
            AO
          </div>
        </div>
      </div>

      {/* Welcome bar */}
      <div className="mt-2 flex items-center justify-between rounded-[5px] border border-[#E5E5EB] px-2 py-1.5 lg:mt-3 lg:px-3 lg:py-2">
        <div className="min-w-0">
          <p className="truncate text-[6px] font-semibold text-[#1F1F25] lg:text-[8px]">
            Welcome back, Amara 👋
          </p>

          <p className="mt-0.5 truncate text-[4px] text-[#8A8A91] lg:text-[6px]">
            You&apos;re making great progress toward your goals.
          </p>
        </div>

        <button
          type="button"
          className="shrink-0 rounded-[3px] bg-[#00B6CE] px-1.5 py-1 text-[4px] font-semibold text-white lg:px-2 lg:text-[5px]"
        >
          View Cohort
        </button>
      </div>
    </header>
  );
}
