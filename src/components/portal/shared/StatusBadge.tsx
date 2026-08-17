interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const styles: Record<string, string> = {
    Pending: "bg-[#FFF7E6] text-[#A66A00]",
    Approved: "bg-[#E0F7ED] text-[#1A804D]",
    Rejected: "bg-[#FDECEC] text-[#C0392B]",
    Active: "bg-[#E5FAFC] text-[#00A5BB]",
    Completed: "bg-[#E0F7ED] text-[#1A804D]",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold ${
        styles[status] ?? "bg-[#F6F6F7] text-[#5D5D61]"
      }`}
    >
      {status}
    </span>
  );
}
