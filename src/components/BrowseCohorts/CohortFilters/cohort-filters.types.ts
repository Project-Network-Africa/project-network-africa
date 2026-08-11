export type StartDateFilter =
  | "Any time"
  | "This month"
  | "Next month"
  | "Next 3 months";

export type SortOption = "Soonest Starting" | "Latest Starting";

export interface FilterChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export interface FilterDropdownProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

export interface CohortFiltersProps {
  categories: string[];

  selectedCategory: string;
  onCategoryChange: (category: string) => void;

  selectedFormat: string;
  onFormatChange: (format: string) => void;

  selectedStartDate: StartDateFilter;
  onStartDateChange: (date: StartDateFilter) => void;

  selectedStatus: string;
  onStatusChange: (status: string) => void;

  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;

  totalCohorts: number;
}
