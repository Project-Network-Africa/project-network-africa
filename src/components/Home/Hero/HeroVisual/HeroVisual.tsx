import DashboardPreview from "./DashboardPreview";
import JobPlacementBadge from "./JobPlacementBadge";
import MentorSessionNotification from "./MentorSessionNotification";

export default function HeroVisual() {
  return (
    <div className="relative w-full overflow-hidden rounded-[24px] bg-[linear-gradient(45deg,#00B6CE_14.29%,#007585_85.71%)] px-2 py-2 sm:px-4 sm:py-4 lg:min-h-[440px] lg:rounded-[30px] lg:px-8 lg:py-8">
      <div
        aria-hidden="true"
        className="absolute -top-[120px] -right-[120px] h-[399px] w-[397px] rounded-full bg-[#007585] sm:-right-[140px] lg:left-[923px] lg:right-auto"
      />

      <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-14 grid-rows-5 opacity-[0.18]">
        {Array.from({ length: 70 }).map((_, index) => (
          <span key={index} className="flex items-center justify-center">
            <span className="h-[2px] w-[2px] rounded-full bg-white" />
          </span>
        ))}
      </div>

      {/* Dashboard */}
      {/* <div className="relative z-10">
        <DashboardPreview />
      </div> */}
      <div className="absolute left-1/2 top-[12px] z-10 w-[342px] -translate-x-1/2 overflow-hidden rounded-[9.8px] shadow-[0px_13.72px_27.44px_0px_#1F1F2547] lg:top-[41px] lg:w-[698px] lg:rounded-[20px] lg:shadow-[0px_28px_56px_0px_#1F1F2547]">
        <DashboardPreview />
      </div>

      <JobPlacementBadge />

      <MentorSessionNotification />
    </div>
  );
}
