interface SearchFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export default function SearchFilters({
  search,
  onSearchChange,
}: SearchFiltersProps) {
  return (
    <div className="flex w-full flex-col gap-3 lg:flex-row">
      {/* Search */}
      <div className="flex-1">
        <input
          type="text"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search by name, skill, or role..."
          className="h-10 w-full rounded-[8px] border border-[#E5E5EB] bg-white px-4 text-[12px] text-[#1F1F25] outline-none placeholder:text-[#5D5D61] focus:border-[#00B6CE]"
        />
      </div>

      {/* Filters */}
      <div className="flex gap-3">
        <button
          type="button"
          className="h-10 rounded-[8px] border border-[#E5E5EB] bg-white px-4 text-[12px] font-semibold text-[#1F1F25] transition hover:bg-[#F8F8F8]"
        >
          Program⌄
        </button>

        <button
          type="button"
          className="h-10 rounded-[8px] border border-[#E5E5EB] bg-white px-4 text-[12px] font-semibold text-[#1F1F25] transition hover:bg-[#F8F8F8]"
        >
          Location⌄
        </button>

        <button
          type="button"
          className="h-10 rounded-[8px] border border-[#E5E5EB] bg-white px-4 text-[12px] font-semibold text-[#1F1F25] transition hover:bg-[#F8F8F8]"
        >
          Availability⌄
        </button>
      </div>
    </div>
  );
}
