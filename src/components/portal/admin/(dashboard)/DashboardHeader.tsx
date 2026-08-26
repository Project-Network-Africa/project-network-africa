import { Button } from "@/src/components/ui";

export default function DashboardHeader() {
  return (
    <header className="flex flex-col gap-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            className="flex h-9 min-w-[150px] items-center justify-between rounded-lg border border-[#D8DDE2] bg-white px-3 text-[12px] text-[#5D5D61]"
          >
            <span>All cohorts</span>
            <span>⌄</span>
          </button>

          <button
            type="button"
            className="flex h-9 min-w-[150px] items-center justify-between rounded-lg border border-[#D8DDE2] bg-white px-3 text-[12px] text-[#5D5D61]"
          >
            <span>Last 30 days</span>
            <span>⌄</span>
          </button>
        </div>

        <div className="flex items-center justify-between gap-4 lg:justify-end">
          <span className="text-[12px] text-[#737379]">
            Updated 5 minutes ago
          </span>

          <Button
            variant="primary"
            className="h-9 rounded-lg px-4 py-2 text-[12px] font-semibold"
          >
            Export report
          </Button>
        </div>
      </div>
    </header>
  );
}
