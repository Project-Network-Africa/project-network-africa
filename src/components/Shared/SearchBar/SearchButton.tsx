interface SearchButtonProps {
  text: string;
  onClick?: () => void;
}

export default function SearchButton({ text, onClick }: SearchButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        h-11
        w-full
        rounded-[10px]
        bg-[#00B6CE]
        px-[22px]
        text-[13px]
        font-semibold
        text-white
        transition
        hover:bg-[#009DB3]
        sm:w-auto
        sm:min-w-[100px]
      "
    >
      {text}
    </button>
  );
}
