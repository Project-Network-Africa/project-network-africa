interface SearchInputProps {
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
}

export default function SearchInput({
  placeholder,
  value,
  onChange,
}: SearchInputProps) {
  return (
    <input
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange?.(e.target.value)}
      className="
        h-11
        w-full
        flex-1
        rounded-[10px]
        border
        
        border-[#E5E5EB]
        bg-white
        px-[18px]
        text-[13px]
        text-[#1F1F25]
        placeholder:text-[#5D5D61]
        outline-none
        transition
        focus:border-[#00B6CE]
      "
    />
  );
}
