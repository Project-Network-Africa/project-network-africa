interface MentorRadioGroupProps {
  label: string;
  options: string[];
  value: string;
  error?: string;
  onChange: (value: string) => void;
}

export default function MentorRadioGroup({
  label,
  options,
  value,
  error,
  onChange,
}: MentorRadioGroupProps) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-[11px] font-semibold leading-tight text-[#1F1F25]">
        {label}
      </p>

      <div className="flex flex-col gap-2">
        {options.map((option) => {
          const isSelected = value === option;

          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              className={`
                flex
                min-h-[42px]
                w-full
                items-center
                gap-3
                rounded-[10px]
                border
                bg-white
                px-3
                text-left
                transition-colors
                ${
                  isSelected
                    ? "border-[#00B6CE]"
                    : "border-[#E5E5EB] hover:border-[#CFCFD6]"
                }
              `}
            >
              <span
                className={`
                  flex
                  h-[14px]
                  w-[14px]
                  flex-shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  ${isSelected ? "border-[#00B6CE]" : "border-[#D9D9E0]"}
                `}
              >
                {isSelected && (
                  <span className="h-[7px] w-[7px] rounded-full bg-[#00B6CE]" />
                )}
              </span>

              <span className="text-[11px] font-normal text-[#5D5D61]">
                {option}
              </span>
            </button>
          );
        })}
      </div>

      {error && <p className="text-[11px] font-medium text-red-500">{error}</p>}
    </div>
  );
}
