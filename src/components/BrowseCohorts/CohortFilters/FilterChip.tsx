import { FilterChipProps } from "./cohort-filters.types";

export default function FilterChip({
  label,
  active,
  onClick,
}: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={`
        rounded-full
        px-4
        py-[9px]
        text-[13px]
        font-semibold
        transition-colors
        ${
          active
            ? "bg-[#00B6CE] text-white"
            : "border border-[#E5E5EB] bg-white text-[#1F1F25] hover:bg-[#F6F6F7]"
        }
      `}
    >
      {label}
    </button>
  );
}
