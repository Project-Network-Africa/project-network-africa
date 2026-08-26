import { CalendarEvent } from "@/src/types/shared/calendar";

interface AgendaItemProps {
  event: CalendarEvent;
}

const eventStyles: Record<
  CalendarEvent["type"],
  {
    badge: string;
    label: string;
  }
> = {
  meeting: {
    badge: "bg-[#E5FAFC] text-[#00B6CE]",
    label: "MEETING",
  },
  review: {
    badge: "bg-[#FFF0E0] text-[#C85C00]",
    label: "REVIEW DUE",
  },
  event: {
    badge: "bg-[#EEEAFE] text-[#635BDB]",
    label: "EVENT",
  },
  session: {
    badge: "bg-[#E5FAFC] text-[#00B6CE]",
    label: "SESSION",
  },

  deadline: {
    badge: "bg-[#FEF2E0] text-[#C9851D]",
    label: "DEADLINE",
  },

  payment: {
    badge: "bg-[#F9E8E8] text-[#C83C3C]",
    label: "PAYMENT",
  },
};

export default function AgendaItem({ event }: AgendaItemProps) {
  const style = eventStyles[event.type];

  return (
    <div className="flex min-h-[40px] items-center gap-3 rounded-[9px] bg-[#F7F7F8] px-3 sm:px-4">
      <span
        className={`inline-flex h-[20px] shrink-0 items-center rounded-full px-[10px] text-[9px] font-semibold leading-none ${style.badge}`}
      >
        {style.label}
      </span>

      <p className="min-w-0 flex-1 truncate text-[12px] font-semibold text-[#1F1F25]">
        {event.title}
      </p>

      <span className="shrink-0 text-[11px] text-[#5D5D61]">{event.time}</span>
    </div>
  );
}
