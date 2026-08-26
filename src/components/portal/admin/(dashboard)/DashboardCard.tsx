interface DashboardCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function DashboardCard({
  children,
  className = "",
}: DashboardCardProps) {
  return (
    <div
      className={`rounded-[14px] border border-[#DDE1E5] bg-white ${className}`}
    >
      {children}
    </div>
  );
}
