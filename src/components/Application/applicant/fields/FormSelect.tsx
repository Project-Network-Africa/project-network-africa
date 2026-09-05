interface FormSelectProps {
  label: string;
  placeholder: string;
  value: string;
  options: string[];
  error?: string;
  onChange: (value: string) => void;
}

export default function FormSelect({
  label,
  placeholder,
  value,
  options,
  error,
  onChange,
}: FormSelectProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[12px] font-semibold leading-none text-[#1F1F25]">
        {label}
      </label>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="
          h-[42px]
          w-full
          appearance-none
          rounded-[10px]
          border
          border-[#E5E5EB]
          bg-white
          px-4
          text-[13px]
          text-[#1F1F25]
          outline-none
          focus:border-[#00B6CE]
        "
      >
        <option value="">{placeholder}</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}
