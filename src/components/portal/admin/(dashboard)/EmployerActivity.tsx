import DashboardCard from "./DashboardCard";

function MetricRow({
  label,
  value,
  valueColor = "text-[#159A68]",
}: {
  label: string;
  value: string;
  valueColor?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 text-[12px]">
      <span className="text-[#737379]">{label}</span>

      <span className={`font-semibold ${valueColor}`}>{value}</span>
    </div>
  );
}

export default function EmployerActivity() {
  return (
    <DashboardCard className="p-5 font-body">
      <h2 className="text-[15px] font-semibold text-[#73757D]">
        EMPLOYER ACTIVITY
      </h2>

      <p className="mt-2 text-[28px] font-bold leading-8 text-[#1F1F25]">18</p>

      <p className="mt-1 text-[12px] text-[#5D5D61]">Verified employers</p>

      <div className="mt-3 space-y-3 border-t border-[#E5E8EA] pt-3">
        <MetricRow
          label="Active projects & jobs"
          value="12"
          valueColor="text-[#178C59]"
        />

        <MetricRow
          label="Candidates under review"
          value="27"
          valueColor="text-[#F36A21]"
        />

        <MetricRow
          label="Successful placements"
          value="6"
          valueColor="text-[#00B6CE]"
        />
      </div>
    </DashboardCard>
  );
}
