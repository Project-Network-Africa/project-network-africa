import ProgressCard from "./ProgressCard";
import NotificationChip from "./NotificationChip";
import StatChip from "./StatChip";
import DotGrid from "./DotGrid";

export default function HeroIllustration() {
  return (
    <div
      className="
        relative
        h-[320px]
        w-full
        overflow-hidden
        rounded-[24px]
        bg-[linear-gradient(45deg,#00B6CE_14.29%,#007585_85.71%)]

        sm:h-[380px]
        lg:h-[440px]
      "
    >
      {/* Top Circle */}
      <div className="absolute -right-12 -top-16 h-40 w-40 rounded-full bg-white/10 sm:h-56 sm:w-56 lg:-right-20 lg:-top-24 lg:h-[300px] lg:w-[300px]" />

      {/* Bottom Circle */}
      <div className="absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-white/10 sm:h-56 sm:w-56 lg:-bottom-24 lg:-left-20 lg:h-[300px] lg:w-[300px]" />

      <DotGrid />

      {/* Dashboard */}
      <div className="absolute left-[8%] top-[20%] z-10 w-[65%] max-w-[420px]">
        <ProgressCard />
      </div>

      {/* Notification */}
      <div className="absolute right-[6%] top-[10%] z-20">
        <NotificationChip />
      </div>

      {/* Stats */}
      <div className="absolute bottom-[10%] right-[8%] z-20">
        <StatChip />
      </div>
    </div>
  );
}
