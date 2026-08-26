interface MonthlyCapacityProps {
  booked: number;
  capacity: number;
}

export default function MonthlyCapacity({
  booked,
  capacity,
}: MonthlyCapacityProps) {
  const percentage =
    capacity > 0 ? Math.min((booked / capacity) * 100, 100) : 0;

  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase leading-[100%] text-[#5D5D61]">
        Monthly Capacity
      </p>

      <div className="mt-[14px] flex items-center gap-3">
        <div className="h-[10px] flex-1 overflow-hidden rounded-full bg-[#E5E5EB]">
          <div
            className="h-full rounded-full bg-[#00B6CE] transition-all duration-300"
            style={{ width: `${percentage}%` }}
          />
        </div>

        <p className="shrink-0 text-[12px] font-semibold text-[#1F1F25]">
          {booked} of {capacity} booked
        </p>
      </div>
    </section>
  );
}
