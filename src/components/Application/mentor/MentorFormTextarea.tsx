interface MentorFormTextareaProps {
  label: string;
  placeholder: string;
  value: string;
  error?: string;
  required?: boolean;
  onChange: (value: string) => void;
}

export default function MentorFormTextarea({
  label,
  placeholder,
  value,
  error,
  required = false,
  onChange,
}: MentorFormTextareaProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[11px] font-semibold leading-tight text-[#1F1F25]">
        {label}

        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <textarea
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className={`
          min-h-[88px]
          w-full
          resize-none
          rounded-[10px]
          border
          bg-white
          px-4
          py-3
          text-[12px]
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
