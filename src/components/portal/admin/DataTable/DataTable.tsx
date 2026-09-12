"use client";

import { useMemo, useState } from "react";

import { DataTableProps } from "./DataTable.types";
import DataTablePagination from "./DataTablePagination";

export default function DataTable<T>({
  columns,
  data,
  rowKey,
  emptyMessage = "No records found.",
  className = "",
  pageSize = 10,
  selectable = false,
  totalRecords,
  onSelectionChange,
  serverSide = false,
  currentPage: controlledPage,
  onPageChange,
}: DataTableProps<T>) {
  const [internalPage, setInternalPage] = useState(1);

  const currentPage = controlledPage ?? internalPage;

  const total = totalRecords ?? data.length;

  /**
   * IMPORTANT:
   *
   * totalRecords should be used to calculate
   * the number of pages.
   */
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  const safeCurrentPage = Math.min(currentPage, totalPages);

  /**
   * CLIENT-SIDE PAGINATION
   *
   * If serverSide=true, don't slice the data.
   *
   * The backend has already returned the
   * correct records for this page.
   */
  const paginatedData = useMemo(() => {
    if (serverSide) {
      return data;
    }

    const startIndex = (safeCurrentPage - 1) * pageSize;

    const endIndex = startIndex + pageSize;

    return data.slice(startIndex, endIndex);
  }, [data, safeCurrentPage, pageSize, serverSide]);

  /*
   * Current page row keys
   */
  const currentPageKeys = paginatedData.map(
    (row) => row[rowKey] as string | number,
  );

  /*
   * Selected rows
   */
  const [selectedKeys, setSelectedKeys] = useState<Set<string | number>>(
    new Set(),
  );

  /*
   * Check if every visible row is selected
   */
  const allCurrentRowsSelected =
    paginatedData.length > 0 &&
    currentPageKeys.every((key) => selectedKeys.has(key));

  /*
   * Select / deselect one row
   */
  const handleRowSelection = (row: T) => {
    const key = row[rowKey] as string | number;

    setSelectedKeys((previous) => {
      const next = new Set(previous);

      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }

      if (onSelectionChange) {
        const selectedRows = data.filter((item) => {
          const itemKey = item[rowKey] as string | number;

          return next.has(itemKey);
        });

        onSelectionChange(selectedRows);
      }

      return next;
    });
  };

  /*
   * Select / deselect all visible rows
   */
  const handleSelectAll = () => {
    setSelectedKeys((previous) => {
      const next = new Set(previous);

      if (allCurrentRowsSelected) {
        currentPageKeys.forEach((key) => {
          next.delete(key);
        });
      } else {
        currentPageKeys.forEach((key) => {
          next.add(key);
        });
      }

      if (onSelectionChange) {
        const selectedRows = data.filter((row) => {
          const key = row[rowKey] as string | number;

          return next.has(key);
        });

        onSelectionChange(selectedRows);
      }

      return next;
    });
  };

  /*
   * Change page
   */
  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) {
      return;
    }

    if (onPageChange) {
      onPageChange(page);
    } else {
      setInternalPage(page);
    }
  };

  /*
   * Display range
   */
  const firstRecord = total === 0 ? 0 : (safeCurrentPage - 1) * pageSize + 1;

  const lastRecord = Math.min(safeCurrentPage * pageSize, total);

  return (
    <div
      className={`overflow-hidden rounded-[14px] border border-[#DDE1E5] bg-white ${className}`}
    >
      {/* Table top */}
      <div className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12px] text-[#5D5D61]">
          Showing {firstRecord}–{lastRecord} of {total.toLocaleString()} records
        </p>

        {selectable && (
          <p className="text-[12px] text-[#85858A]">
            {selectedKeys.size > 0
              ? `${selectedKeys.size} row${
                  selectedKeys.size > 1 ? "s" : ""
                } selected`
              : "Select rows for bulk actions"}
          </p>
        )}
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto px-5">
        <table className="w-full min-w-[1000px] border-collapse">
          <thead>
            <tr className="bg-[#F7F8F9]">
              {selectable && (
                <th className="w-[45px] px-3 py-3 text-left">
                  <input
                    type="checkbox"
                    checked={allCurrentRowsSelected}
                    onChange={handleSelectAll}
                    className="h-4 w-4 cursor-pointer accent-[#00B6CE]"
                    aria-label="Select all rows"
                  />
                </th>
              )}

              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className={`px-3 py-3 text-left text-[11px] font-semibold uppercase text-[#737379] ${
                    column.className ?? ""
                  }`}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row) => {
                const key = row[rowKey] as string | number;

                const isSelected = selectedKeys.has(key);

                return (
                  <tr
                    key={String(key)}
                    className={`border-b border-[#DDE1E5] last:border-b-0 ${
                      isSelected ? "bg-[#F0FCFD]" : ""
                    }`}
                  >
                    {selectable && (
                      <td className="px-3 py-4">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleRowSelection(row)}
                          className="h-4 w-4 cursor-pointer accent-[#00B6CE]"
                          aria-label={`Select row ${String(key)}`}
                        />
                      </td>
                    )}

                    {columns.map((column) => (
                      <td
                        key={String(column.key)}
                        className={`px-3 py-4 text-[12px] text-[#303035] ${
                          column.className ?? ""
                        }`}
                      >
                        {column.render
                          ? column.render(row)
                          : String(row[column.key as keyof T] ?? "")}
                      </td>
                    ))}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td
                  colSpan={columns.length + (selectable ? 1 : 0)}
                  className="px-4 py-10 text-center text-sm text-[#85858A]"
                >
                  {emptyMessage}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {total > 0 && (
        <DataTablePagination
          currentPage={safeCurrentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
