"use client";

import { ReactNode } from "react";

export interface DataTableColumn<T> {
  key: string;
  header: string;
  width?: string;
  render: (item: T) => ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: DataTableColumn<T>[];
  getRowKey: (item: T) => string;
  onRowClick?: (item: T) => void;
}

export default function DataTable<T>({
  data,
  columns,
  getRowKey,
  onRowClick,
}: DataTableProps<T>) {
  const gridTemplateColumns = columns
    .map((column) => column.width ?? "1fr")
    .join(" ");

  return (
    <div className="overflow-visible rounded-[14px] border border-[#E5E5EB] bg-white shadow-[0px_2px_8px_0px_#0000000A]">
      {/* Header */}
      <div
        className="grid h-[41px] items-center bg-[#F6F6F7] px-[22px]"
        style={{
          gridTemplateColumns,
        }}
      >
        {columns.map((column) => (
          <p
            key={column.key}
            className="text-[11px] font-semibold text-[#1F1F25]"
          >
            {column.header}
          </p>
        ))}
      </div>

      {/* Rows */}
      {data.map((item) => (
        <div
          key={getRowKey(item)}
          role={onRowClick ? "link" : undefined}
          tabIndex={onRowClick ? 0 : undefined}
          onClick={() => onRowClick?.(item)}
          onKeyDown={(event) => {
            if (!onRowClick) return;

            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              onRowClick(item);
            }
          }}
          className={`grid min-h-[48px] items-center border-t border-[#E5E5EB] px-[22px] transition ${
            onRowClick ? "cursor-pointer hover:bg-[#FAFAFA]" : ""
          }`}
          style={{
            gridTemplateColumns,
          }}
        >
          {columns.map((column) => (
            <div key={column.key}>{column.render(item)}</div>
          ))}
        </div>
      ))}

      {/* Empty state */}
      {data.length === 0 && (
        <div className="flex min-h-[100px] items-center justify-center border-t border-[#E5E5EB]">
          <p className="text-[12px] text-[#5D5D61]">No data available</p>
        </div>
      )}
    </div>
  );
}
