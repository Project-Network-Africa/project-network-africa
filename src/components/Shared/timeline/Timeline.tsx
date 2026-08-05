import SectionHeader from "../../ui/SectionHeader";
import TimelineCard from "./timeline-card";
import { TimelineProps } from "./timeline.types";

export default function Timeline({
  label,
  title,
  items,
  columns = 5,
}: TimelineProps) {
  const gridCols = {
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
    5: "lg:grid-cols-5",
  };

  return (
    <section className="bg-[#F9F6F3] px-5 py-14 sm:px-8 lg:px-20 lg:py-[72px]">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-7">
        <SectionHeader label={label} title={title} />

        <div
          className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${gridCols[columns]}`}
        >
          {items.map((item) => (
            <TimelineCard key={item.step} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
