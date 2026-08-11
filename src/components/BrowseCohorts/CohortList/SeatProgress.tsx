import { SeatProgressProps } from "./cohort-list.types";

export default function SeatProgress({
  seatsFilled,
  totalSeats,
}: SeatProgressProps) {
  const percentage = (seatsFilled / totalSeats) * 100;

  return (
    <div className="flex w-full flex-col gap-2">
      <p className="text-[11px] text-[#5D5D61]">
        {seatsFilled}/{totalSeats} seats filled
      </p>

      <div className="h-[6px] rounded-full bg-[#EBEBF0]">
        <div
          className="h-full rounded-full bg-[#00B6CE]"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
