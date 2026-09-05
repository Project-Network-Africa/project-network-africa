interface MentorFormInputProps {
  label: string;
  placeholder: string;
  value: string;
  type?: string;
  error?: string;
  required?: boolean;
  onChange: (value: string) => void;
}

export default function MentorFormInput({
  label,
  placeholder,
  value,
  type = "text",
  error,
  required = false,
  onChange,
}: MentorFormInputProps) {
  return (
    <div className="flex flex-col gap-2 font-body">
      <label className="text-[12px]  lg:font-semibold font-medium leading-tight text-[#1F1F25]">
        {label}

        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className={`
          h-[42px]
          w-full
          rounded-[10px]
          border
          bg-white
          px-4
          lg:text-[13px]
          text-[14px]
          font-normal
          text-[#1F1F25]
          outline-none
          placeholder:text-[#7A7A80]
          transition-colors
          ${
            error
              ? "border-red-400 focus:border-red-500"
              : "border-[#E5E5EB] focus:border-[#00B6CE]"
          }
        `}
      />

      {error && <p className="text-[11px] font-medium text-red-500">{error}</p>}
    </div>
  );
}
