import { ReactNode } from "react";

export interface DataTableColumn<T> {
  key: keyof T | string;
  header: string;
  className?: string;
  render?: (row: T) => ReactNode;
}

export interface DataTableProps<T> {
  columns: DataTableColumn<T>[];
  data: T[];
  rowKey: keyof T;
  emptyMessage?: string;
  className?: string;
  pageSize?: number;
  selectable?: boolean;
  totalRecords?: number;
  onSelectionChange?: (selectedRows: T[]) => void;
  serverSide?: boolean;
  currentPage?: number;

  onPageChange?: (page: number) => void;
}
