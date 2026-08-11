// "use client";

// import FilterChip from "./FilterChip";
// import FilterDropdown from "./FilterDropdown";

// import {
//   formatOptions,
//   startDateOptions,
//   statusOptions,
// } from "./cohort-filters.data";

// import { CohortFiltersProps } from "./cohort-filters.types";

// export default function CohortFilters({
//   categories,
//   selectedCategory,
//   onCategoryChange,
//   selectedFormat,
//   onFormatChange,
//   selectedStartDate,
//   onStartDateChange,
//   selectedStatus,
//   onStatusChange,
//   totalCohorts,
// }: CohortFiltersProps) {
//   return (
//     <section className="bg-white px-5 py-7 lg:px-20">
//       <div className="mx-auto flex max-w-[1280px] flex-col gap-3">
//         {/* Categories */}
//         <div className="flex flex-wrap gap-[10px]">
//           {categories.map((category) => (
//             <FilterChip
//               key={category}
//               label={category}
//               active={selectedCategory === category}
//               onClick={() => onCategoryChange(category)}
//             />
//           ))}
//         </div>

//         {/* Dropdown Filters */}
//         <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
//           <div className="flex flex-wrap gap-[10px]">
//             <FilterDropdown
//               label="Format: All"
//               value={selectedFormat}
//               options={formatOptions}
//               onChange={onFormatChange}
//             />

//             <FilterDropdown
//               label="Starts: Any time"
//               value={selectedStartDate}
//               options={startDateOptions}
//               onChange={onStartDateChange}
//             />

//             <FilterDropdown
//               label="Status: Any"
//               value={selectedStatus}
//               options={statusOptions}
//               onChange={onStatusChange}
//             />
//           </div>

//           <p className="text-[12px] text-[#5D5D61]">
//             {totalCohorts} cohorts open
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import FilterChip from "./FilterChip";
import FilterDropdown from "./FilterDropdown";

import {
  formatOptions,
  startDateOptions,
  statusOptions,
  sortOptions,
} from "./cohort-filters.data";

import {
  CohortFiltersProps,
  StartDateFilter,
  SortOption,
} from "./cohort-filters.types";

export default function CohortFilters({
  categories,
  selectedCategory,
  onCategoryChange,
  selectedFormat,
  onFormatChange,
  selectedStartDate,
  onStartDateChange,
  selectedStatus,
  onStatusChange,
  sortBy,
  onSortChange,
  totalCohorts,
}: CohortFiltersProps) {
  return (
    <section className="bg-white px-5 py-7 lg:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-3">
        {/* Categories */}
        <div className="flex flex-wrap gap-[10px]">
          {categories.map((category) => (
            <FilterChip
              key={category}
              label={category}
              active={selectedCategory === category}
              onClick={() => onCategoryChange(category)}
            />
          ))}
        </div>

        {/* Dropdown Filters */}
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-[10px]">
            <FilterDropdown
              label={`Sort: ${sortBy}`}
              value={sortBy}
              options={sortOptions}
              onChange={(value) => onSortChange(value as SortOption)}
            />

            <FilterDropdown
              label={`Format: ${selectedFormat}`}
              value={selectedFormat}
              options={formatOptions}
              onChange={onFormatChange}
            />

            <FilterDropdown
              label={`Starts: ${selectedStartDate}`}
              value={selectedStartDate}
              options={startDateOptions}
              onChange={(value) => onStartDateChange(value as StartDateFilter)}
            />

            <FilterDropdown
              label={`Status: ${selectedStatus}`}
              value={selectedStatus}
              options={statusOptions}
              onChange={onStatusChange}
            />
          </div>

          <p className="text-[12px] text-[#5D5D61]">
            {totalCohorts} cohorts open
          </p>
        </div>
      </div>
    </section>
  );
}
