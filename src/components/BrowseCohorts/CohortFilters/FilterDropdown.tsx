import { FilterDropdownProps } from "./cohort-filters.types";

export default function FilterDropdown({
  label,
  value,
  options,
  onChange,
}: FilterDropdownProps) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="
        rounded-lg
        bg-[#F6F6F7]
        px-[14px]
        py-2
        text-[12px]
        font-semibold
        text-[#1F1F25]
        outline-none
        cursor-pointer
      "
    >
      <option value="">{label}</option>

      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
