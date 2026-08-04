interface ProgramFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export default function ProgramFilter({
  categories,
  selectedCategory,
  onSelect,
}: ProgramFilterProps) {
  return (
    <div className="flex flex-wrap gap-[10px]">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`rounded-full px-4 py-[9px] text-[13px] font-semibold transition-all ${
            selectedCategory === category
              ? "bg-[#00B6CE] text-white"
              : "border border-[#E5E1DC] bg-white text-[#1F1F25] hover:bg-[#F5F5F5]"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
