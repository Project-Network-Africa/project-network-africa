interface AuthCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  children: React.ReactNode;
}

export default function AuthCheckbox({
  checked,
  onChange,
  children,
}: AuthCheckboxProps) {
  return (
    <label className="flex cursor-pointer items-start gap-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        className="peer sr-only"
      />

      <span
        className={`
          flex
          h-4
          w-4
          shrink-0
          items-center
          justify-center
          rounded-[4px]
          border
          transition
          ${
            checked
              ? "border-[#00B6CE] bg-[#00B6CE]"
              : "border-[#E5E5EB] bg-white"
          }
        `}
      >
        {checked && (
          <span className="text-[10px] font-bold leading-none text-white">
            ✓
          </span>
        )}
      </span>

      <span className="text-[11px] leading-[13px] text-[#5D5D61]">
        {children}
      </span>
    </label>
  );
}
