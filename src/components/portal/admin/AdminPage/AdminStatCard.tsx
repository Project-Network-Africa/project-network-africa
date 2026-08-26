interface AdminStatCardProps {
  value: string;
  label: string;
  change?: string;
  valueColor?: string;
  changeColor?: string;
}

export default function AdminStatCard({
  value,
  label,
  change,
  valueColor = "text-[#1F1F25]",
  changeColor = "text-[#00B6CE]",
}: AdminStatCardProps) {
  return (
    <div className="rounded-[12px] border border-[#DDE1E5] bg-white p-4">
      <p className={`text-[25px] font-bold leading-8 ${valueColor}`}>{value}</p>

      <p className="mt-1 text-[12px] text-[#737379]">{label}</p>

      {change && (
        <p className={`mt-1 text-[12px] font-semibold ${changeColor}`}>
          {change}
        </p>
      )}
    </div>
  );
}
