import { ReactNode } from "react";
import DataTableHeader from "./DataTableHeader";
import DataTableRow from "./DataTableRow";

interface DataTableProps {
  columns: string[];
  rows: ReactNode[][];
}

export default function DataTable({ columns, rows }: DataTableProps) {
  return (
    <div className="overflow-x-auto rounded-[14px] border border-[#E5E5EB] bg-white shadow-[0px_2px_8px_0px_#0000000A]">
      <div className="min-w-[700px]">
        <DataTableHeader columns={columns} />

        {rows.map((row, rowIndex) => (
          <DataTableRow key={rowIndex} cells={row} />
        ))}
      </div>
    </div>
  );
}
