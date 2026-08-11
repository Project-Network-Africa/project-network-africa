import Button from "../../ui/Button";

interface SearchBarProps {
  placeholder: string;
  buttonText: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
}

export default function SearchBar({
  placeholder,
  buttonText,
  value,
  onChange,
  onSubmit,
}: SearchBarProps) {
  return (
    <form
      className="flex flex-col gap-3 sm:flex-row"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit?.();
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          h-11
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
          focus:border-[#00B6CE]
        "
      />

      <Button className="h-11 px-[22px]">{buttonText}</Button>
    </form>
  );
}
