import Link from "next/link";
import { EventItemProps } from "./event.types";

export default function EventItem({ title, date, href }: EventItemProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-[#E5E5EB] bg-white p-5 sm:flex-row sm:items-center sm:justify-between">
      {/* Left */}
      <div className="space-y-1">
        <h3 className="text-sm font-semibold text-[#1F1F25]">{title}</h3>

        <p className="text-xs text-[#5D5D61]">{date}</p>
      </div>

      {/* Right */}
      <Link
        href={href}
        className="inline-flex w-full items-center justify-center rounded-[10px] border border-[#E5E5EB] px-6 py-3 text-sm font-semibold text-[#1F1F25] transition hover:bg-[#1F1F25] hover:text-white sm:w-auto"
      >
        RSVP
      </Link>
    </div>
  );
}
