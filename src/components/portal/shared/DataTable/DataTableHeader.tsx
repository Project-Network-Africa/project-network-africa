interface DataTableHeaderProps {
  columns: string[];
}

export default function DataTableHeader({ columns }: DataTableHeaderProps) {
  return (
    <div
      className="grid h-[41px] items-center bg-[#F6F6F7] px-[22px]"
      style={{
        gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
      }}
    >
      {columns.map((column) => (
        <p key={column} className="text-[11px] font-semibold text-[#1F1F25]">
          {column}
        </p>
      ))}
    </div>
  );
}
