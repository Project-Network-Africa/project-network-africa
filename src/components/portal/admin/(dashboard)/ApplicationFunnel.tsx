import DashboardCard from "./DashboardCard";

interface ApplicationFunnelProps {
  funnelData: {
    submitted: number;
    pending: number;
    admitted: number;
    rejected: number;
    paid: number;
  };
}

export default function ApplicationFunnel({
  funnelData,
}: ApplicationFunnelProps) {
  const funnelStages = [
    {
      label: "Submitted",
      value: String(funnelData.submitted),
      conversion: "100% of submissions",
      width: "100%",
    },
    {
      label: "Pending",
      value: String(funnelData.pending),
      conversion: `${funnelData.submitted ? Math.round((funnelData.pending / funnelData.submitted) * 100) : 0}% of submissions`,
      width: `${funnelData.submitted ? (funnelData.pending / funnelData.submitted) * 100 : 0}%`,
    },
    {
      label: "Paid",
      value: String(funnelData.paid),
      conversion: `${funnelData.submitted ? Math.round((funnelData.paid / funnelData.submitted) * 100) : 0}% of submissions`,
      width: `${funnelData.submitted ? (funnelData.paid / funnelData.submitted) * 100 : 0}%`,
    },
    {
      label: "Admitted",
      value: String(funnelData.admitted),
      conversion: `${funnelData.submitted ? Math.round((funnelData.admitted / funnelData.submitted) * 100) : 0}% of submissions`,
      width: `${funnelData.submitted ? (funnelData.admitted / funnelData.submitted) * 100 : 0}%`,
    },
    {
      label: "Rejected",
      value: String(funnelData.rejected),
      conversion: `${funnelData.submitted ? Math.round((funnelData.rejected / funnelData.submitted) * 100) : 0}% of submissions`,
      width: `${funnelData.submitted ? (funnelData.rejected / funnelData.submitted) * 100 : 0}%`,
    },
  ];

  return (
    <DashboardCard className="bg-[#F8F8F8] p-5">
      <div>
        <h2 className="font-body text-[15px] font-semibold leading-5 text-[#5D5D61]">
          APPLICATION FUNNEL
        </h2>
        <p className="mt-1 font-body text-[12px] leading-5 text-[#7A7D85]">
          Current application cycle · Live data
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {funnelStages.map((stage) => (
          <div
            key={stage.label}
            className="mb-10 rounded-lg bg-[#F8F9FA] p-3.5"
          >
            <p className="text-[12px] font-semibold text-[#5D5D61]">
              {stage.label}
            </p>

            <p className="mt-1 text-[24px] font-bold text-[#1F1F25]">
              {stage.value}
            </p>

            <p className="mt-1 font-body text-[12px] text-[#73757D]">
              {stage.conversion}
            </p>

            <div className="mt-2 h-[5px] overflow-hidden rounded-full bg-[#E5E8EA]">
              <div
                className="h-full rounded-full bg-[#00B6CE]"
                style={{ width: stage.width }}
              />
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
