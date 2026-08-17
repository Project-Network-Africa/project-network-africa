const weeks = [
  [13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, 1, 2],
];

export default function MentorCalendar() {
  return (
    <div className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        July 2026
      </p>

      <div className="mt-4 grid grid-cols-7 gap-y-[10px] text-center">
        {weeks.flat().map((day, index) => {
          const isSelected = day === 16 && index === 3;

          return (
            <div
              key={`${day}-${index}`}
              className={`flex h-[28px] items-center justify-center text-[10px] ${
                isSelected
                  ? "rounded-[6px] bg-[#00B6CE] font-semibold text-white"
                  : "text-[#1F1F25]"
              }`}
            >
              {day}
            </div>
          );
        })}
      </div>
    </div>
  );
}
