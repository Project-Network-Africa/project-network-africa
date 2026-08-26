interface DashboardStatCardProps {
  value: string;
  label: string;
}

export default function DashboardStatCard({
  value,
  label,
}: DashboardStatCardProps) {
  return (
    <section className="min-w-0 rounded-[5px] border border-[#E5E5EB] p-2 lg:p-3">
      <div className="flex items-center gap-1.5">
        <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-[3px] bg-[#E5FAFC] text-[5px] font-bold text-[#00B6CE] lg:h-5 lg:w-5 lg:text-[6px]">
          {value}
        </div>

        <p className="truncate text-[5px] font-semibold text-[#1F1F25] lg:text-[7px]">
          {label}
        </p>
      </div>

      <p className="mt-1 text-[4px] text-[#77777D] lg:text-[5px]">
        View details
      </p>
    </section>
  );
}
