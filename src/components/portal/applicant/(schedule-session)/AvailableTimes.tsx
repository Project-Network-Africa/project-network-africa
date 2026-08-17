interface TimeSlot {
  id: string;
  date: string;
  time: string;
}

interface AvailableTimesProps {
  availableTimes: TimeSlot[];
  selectedTime: TimeSlot;
  onSelect: (slot: TimeSlot) => void;
}

export default function AvailableTimes({
  availableTimes,
  selectedTime,
  onSelect,
}: AvailableTimesProps) {
  return (
    <section className="w-full rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="mb-[14px] text-[10px] font-semibold uppercase text-[#5D5D61]">
        Available Times
      </p>

      <div className="flex flex-col gap-2">
        {availableTimes.map((slot) => {
          const isSelected = selectedTime.id === slot.id;

          return (
            <button
              key={slot.id}
              type="button"
              onClick={() => onSelect(slot)}
              className={`flex h-10 w-full items-center justify-between rounded-[8px] px-4 text-left ${
                isSelected
                  ? "border border-[#00B6CE] bg-[#E5FAFC]"
                  : "bg-[#F9F9FA]"
              }`}
            >
              <span className="text-[13px] font-semibold text-[#1F1F25]">
                {slot.date} · {slot.time}
              </span>

              <span
                className={`text-[11px] font-semibold ${
                  isSelected ? "text-[#00B6CE]" : "text-[#5D5D61]"
                }`}
              >
                {isSelected ? "SELECTED" : "Select"}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
