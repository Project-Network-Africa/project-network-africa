interface StatCardProps {
  label: string;
  value: string;
  description?: string;
}

export default function StatCard({ label, value, description }: StatCardProps) {
  return (
    <div className="rounded-[12px] border border-[#E5E5EB] bg-white p-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.5px] text-[#5D5D61]">
        {label}
      </p>

      <p className="mt-3 text-[24px] font-bold text-[#1F1F25]">{value}</p>

      {description && (
        <p className="mt-1 text-[11px] text-[#5D5D61]">{description}</p>
      )}
    </div>
  );
}
