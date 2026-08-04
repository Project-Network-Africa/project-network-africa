export default function NotificationChip() {
  return (
    <div
      className="
        flex
        items-center
        gap-2
        rounded-xl
        bg-white
        px-3
        py-2
        shadow-lg

        sm:px-4
        sm:py-3
      "
    >
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4DD9E8] text-xs font-bold sm:h-7 sm:w-7 sm:text-sm">
        ✓
      </div>

      <div>
        <p className="text-[11px] font-semibold text-[#1F1F25] sm:text-xs">
          Mentor session confirmed
        </p>

        <p className="text-[10px] text-[#5D5D61] sm:text-[11px]">
          Tomorrow, 10:00 AM
        </p>
      </div>
    </div>
  );
}
