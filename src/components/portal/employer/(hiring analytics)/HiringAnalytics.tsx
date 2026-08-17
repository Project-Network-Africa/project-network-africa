import AnalyticsStats from "./AnalyticsStats";
import HiringFunnel from "./HiringFunnel";
import ApplicantsByRole from "./ApplicantsByRole";

export default function HiringAnalytics() {
  return (
    <div className="flex w-full flex-col gap-5">
      {/* Statistics */}
      <AnalyticsStats />

      {/* Hiring Funnel */}
      <HiringFunnel />

      {/* Applicants by Role */}
      <ApplicantsByRole />
    </div>
  );
}
