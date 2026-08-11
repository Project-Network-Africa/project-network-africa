interface FormInputProps {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}

export default function FormInput({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[12px] font-semibold leading-none text-[#1F1F25]">
        {label}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="
          h-[42px]
          w-full
          rounded-[10px]
          border
          border-[#E5E5EB]
          bg-white
          px-4
          text-[13px]
          text-[#1F1F25]
          outline-none
          placeholder:text-[#5D5D61]
          focus:border-[#00B6CE]
        "
      />
    </div>
  );
}
