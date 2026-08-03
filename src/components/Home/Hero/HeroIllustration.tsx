import ProgressCard from "./ProgressCard";
import NotificationChip from "./NotificationChip";
import StatChip from "./StatChip";
import DotGrid from "./DotGrid";

export default function HeroIllustration() {
  return (
    <div className="relative h-[440px] w-full overflow-hidden rounded-[28px] bg-[linear-gradient(45deg,#00B6CE_14.29%,#007585_85.71%)]">
      {/* Top Right Circle */}
      <div className="absolute -right-20 -top-24 h-[300px] w-[300px] rounded-full bg-white/10" />

      {/* Bottom Left Circle */}
      <div className="absolute -bottom-24 -left-20 h-[300px] w-[300px] rounded-full bg-white/10" />

      {/* Dot Grid */}
      <DotGrid />

      {/* Dashboard Card */}
      <div className="absolute left-[120px] top-[90px] z-10">
        <ProgressCard />
      </div>

      {/* Notification */}
      <div className="absolute left-[610px] top-[60px] z-10">
        <NotificationChip />
      </div>

      {/* Stat */}
      <div className="absolute left-[640px] top-[300px] z-10">
        <StatChip />
      </div>
    </div>
  );
}
