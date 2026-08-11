interface FormCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function FormCheckbox({ checked, onChange }: FormCheckboxProps) {
  return (
    <label className="flex cursor-pointer items-center gap-2">
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
          transition-colors
          ${
            checked
              ? "border-[#00B6CE] bg-[#00B6CE]"
              : "border-[#E5E5EB] bg-white"
          }
        `}
      >
        {checked && (
          <span className="text-[11px] font-bold leading-none text-white">
            ✓
          </span>
        )}
      </span>

      <span className="text-[12px] text-[#5D5D61]">
        I agree to the Privacy Policy and Terms of Service
      </span>
    </label>
  );
}
