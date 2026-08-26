import { ReactNode } from "react";

interface DataTableRowProps {
  cells: ReactNode[];
}

export default function DataTableRow({ cells }: DataTableRowProps) {
  return (
    <div
      className="grid min-h-[51px] items-center border-t border-[#E5E5EB] px-[22px]"
      style={{
        gridTemplateColumns: `repeat(${cells.length}, minmax(0, 1fr))`,
      }}
    >
      {cells.map((cell, index) => (
        <div key={index}>{cell}</div>
      ))}
    </div>
  );
}
