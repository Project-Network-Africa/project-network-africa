import DashboardCard from "./DashboardCard";

function AlertRow({
  text,
  severity,
}: {
  text: string;
  severity: "High" | "Medium" | "Info";
}) {
  const styles = {
    High: "bg-[#C72E331F] text-[#C72E33]",
    Medium: "bg-[#E56B1A1F] text-[#E56B1A]",
    Info: "bg-[#00B6CE1F] text-[#00B6CE]",
  };

  return (
    <div className="flex items-center justify-between gap-3">
      <p className="text-[12px] text-[#303035]">{text}</p>

      <span
        className={`shrink-0 rounded-md px-2 py-1 text-[11px] font-semibold ${styles[severity]}`}
      >
        {severity}
      </span>
    </div>
  );
}

export default function OperationalAlerts() {
  const alerts = [
    {
      text: "34 applicants waiting for mentor assignment",
      severity: "High" as const,
    },
    {
      text: "12 overdue mentor feedback reviews",
      severity: "High" as const,
    },
    {
      text: "21 inactive learners for 7+ days",
      severity: "Medium" as const,
    },
    {
      text: "Cohort 6 application deadline in 3 days",
      severity: "Info" as const,
    },
  ];

  return (
    <DashboardCard className="p-5 font-body">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-[15px] font-semibold text-[#5D5D61]">
          OPERATIONAL ALERTS
        </h2>

        <span className="text-[12px] font-semibold text-[#00B6CE]">
          {alerts.length} open
        </span>
      </div>

      <div className="mt-3 space-y-3 text-[12px]">
        {alerts.map((alert) => (
          <AlertRow
            key={alert.text}
            text={alert.text}
            severity={alert.severity}
          />
        ))}
      </div>
    </DashboardCard>
  );
}
