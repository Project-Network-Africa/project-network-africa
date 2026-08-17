interface TimelineItem {
  title: string;
  date?: string;
  completed: boolean;
}

interface ApplicationTimelineProps {
  items: TimelineItem[];
}

export default function ApplicationTimeline({
  items,
}: ApplicationTimelineProps) {
  return (
    <section className="w-full rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="mb-[14px] text-[10px] font-semibold uppercase text-[#5D5D61]">
        Application Timeline
      </p>

      <div className="flex flex-col gap-3">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <div key={item.title} className="flex items-start gap-[14px]">
              {/* Status circle */}
              <div
                className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${
                  item.completed
                    ? "bg-[#00B6CE] text-white"
                    : "bg-[#F6F6F7] text-[#5D5D61]"
                }`}
              >
                {item.completed ? "✓" : ""}
              </div>

              {/* Content */}
              <div className="flex min-h-[31px] flex-1 flex-col gap-[2px]">
                <p
                  className={`text-[13px] ${
                    item.completed
                      ? "font-semibold text-[#1F1F25]"
                      : "font-normal text-[#5D5D61]"
                  }`}
                >
                  {item.title}
                </p>

                {item.date && (
                  <p className="text-[11px] text-[#5D5D61]">{item.date}</p>
                )}
              </div>

              {!isLast && <div className="absolute" />}
            </div>
          );
        })}
      </div>
    </section>
  );
}
