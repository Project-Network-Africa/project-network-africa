import SectionHeader from "../../ui/SectionHeader";
import StatCard from "./StatCard";
import { StatsSectionProps } from "./stats.types";

export default function StatsSection({
  label,
  title,
  stats,
  backgroundClass = "bg-white",
  columns = 4,
}: StatsSectionProps) {
  const gridCols = {
    2: "xl:grid-cols-2",
    3: "xl:grid-cols-3",
    4: "xl:grid-cols-4",
  };

  return (
    <section
      className={`w-full px-5 py-10 sm:px-8 lg:px-20 lg:py-[88px] ${backgroundClass}`}
    >
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-10">
        <SectionHeader
          title={title}
          label={label}
          centered
          labelClassName="
    text-[22px] text-[#00B6CE]
    
    md:text-[27px]
    lg:text-[32px]
  "
          titleClassName="
    text-[14px] 
    md:text-[16px]
    lg:text-[18px] lg:font-bold
    font-body
  "
        />
        <div
          className={`grid w-full grid-cols-1 lg:gap-10  gap-[20px] sm:grid-cols-2 ${gridCols[columns]}`}
        >
          {stats.slice(0, columns).map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
