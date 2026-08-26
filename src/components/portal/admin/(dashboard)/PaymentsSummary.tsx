import DashboardCard from "./DashboardCard";

function SummaryBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg bg-[#F7F8F9] p-3">
      <p className="text-[17px] font-semibold text-[#00B6CE]">{value}</p>

      <p className="mt-1 text-[11px] text-[#737379]">{label}</p>
    </div>
  );
}

export default function PaymentsSummary() {
  return (
    <DashboardCard className="p-5 font-body">
      <h2 className="text-[12px] font-semibold text-[#73757D]">
        PAYMENTS SUMMARY
      </h2>

      <div className="mt-2 flex flex-wrap items-end gap-2">
        <p className="text-[30px] text-[#1F1F25] font-bold leading-8">₦48.2M</p>

        <p className="pb-0.5 text-[12px] text-[#5D5D61]">
          collected year to date
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
        <SummaryBox value="₦6.4M" label="Outstanding" />
        <SummaryBox value="7" label="Failed" />
        <SummaryBox value="₦820K" label="Refunds" />
      </div>
    </DashboardCard>
  );
}
