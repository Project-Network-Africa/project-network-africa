export default function NotificationChip() {
  return (
    <div className="flex items-center gap-[10px] rounded-[14px] bg-white px-4 py-3 shadow-[0_10px_24px_rgba(0,0,0,0.2)]">
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#4DD9E8] text-sm font-bold">
        ✓
      </div>

      <div>
        <p className="text-xs font-semibold text-[#1F1F25]">
          Mentor session confirmed
        </p>

        <p className="text-[11px] text-[#5D5D61]">Tomorrow, 10:00 AM</p>
      </div>
    </div>
  );
}
