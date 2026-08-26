// import { Button } from "@/src/components/ui";

// interface FilterOption {
//   label: string;
//   value?: string;
// }

// interface AdminFiltersProps {
//   searchPlaceholder?: string;
//   filters?: FilterOption[];
//   showBulkActions?: boolean;
//   showExport?: boolean;
//   exportLabel?: string;
//   secondaryAction?: string;
// }

// export default function AdminFilters({
//   searchPlaceholder = "Search",
//   filters = [],
//   showBulkActions = false,
//   showExport = false,
//   secondaryAction,
//   exportLabel = "Export CSV",
// }: AdminFiltersProps) {
//   return (
//     <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
//       {/* Left */}
//       <div className="flex flex-wrap gap-2">
//         <input
//           type="text"
//           placeholder={searchPlaceholder}
//           className="h-9 w-full rounded-lg border border-[#D8DDE2] bg-white px-4 text-[12px] text-[#303035] outline-none placeholder:text-[#303035] focus:border-[#00B6CE] sm:w-[270px]"
//         />

//         {filters.map((filter) => (
//           <button
//             key={filter.label}
//             type="button"
//             className="flex h-9 items-center gap-2 rounded-lg border border-[#D8DDE2] bg-white px-4 text-[12px] text-[#303035]"
//           >
//             <span>{filter.label}</span>
//             <span className="text-[10px]">⌄</span>
//           </button>
//         ))}
//       </div>

//       {/* Right */}

//       {(showBulkActions || showExport || secondaryAction) && (
//         <div className="flex gap-2">
//           {showBulkActions && (
//             <Button
//               variant="light"
//               className="h-9 rounded-lg px-5 py-2 text-[12px] font-semibold"
//             >
//               Bulk actions
//             </Button>
//           )}

//           {showExport && (
//             <Button
//               variant="primary"
//               className="h-9 rounded-lg px-5 py-2 text-[12px] font-semibold"
//             >
//               {exportLabel}
//             </Button>
//           )}

//           {secondaryAction && (
//             <Button
//               variant="primary"
//               className="h-9 rounded-lg px-5 py-2 text-[12px] font-semibold"
//             >
//               {secondaryAction}
//             </Button>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import { ChangeEvent } from "react";
import { Button } from "@/src/components/ui";

interface FilterOption {
  label: string;
  value?: string;
  options?: string[];
  onChange?: (value: string) => void;
}

interface AdminFiltersProps {
  searchPlaceholder?: string;
  searchValue?: string;
  filters?: FilterOption[];
  showBulkActions?: boolean;
  showExport?: boolean;
  exportLabel?: string;
  secondaryAction?: string;
  onSearchChange?: (value: string) => void;
  onBulkAction?: () => void;
  onExport?: () => void;
  onSecondaryAction?: () => void;
}

export default function AdminFilters({
  searchPlaceholder = "Search",
  searchValue = "",
  filters = [],
  showBulkActions = false,
  showExport = false,
  exportLabel = "Export CSV",
  secondaryAction,
  onSearchChange,
  onBulkAction,
  onExport,
  onSecondaryAction,
}: AdminFiltersProps) {
  return (
    <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
      {/* Left */}
      <div className="flex flex-wrap gap-2">
        <input
          type="text"
          value={searchValue}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onSearchChange?.(event.target.value)
          }
          placeholder={searchPlaceholder}
          className="h-9 w-full rounded-lg border border-[#D8DDE2] bg-white px-4 text-[12px] text-[#303035] outline-none placeholder:text-[#303035] focus:border-[#00B6CE] sm:w-[270px]"
        />

        {filters.map((filter) => (
          <select
            key={filter.label}
            value={filter.value ?? filter.label}
            onChange={(event) => filter.onChange?.(event.target.value)}
            className="h-9 rounded-lg border border-[#D8DDE2] bg-white px-4 text-[12px] text-[#303035] outline-none focus:border-[#00B6CE]"
          >
            {filter.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ))}
      </div>

      {/* Right */}
      {(showBulkActions || showExport || secondaryAction) && (
        <div className="flex gap-2">
          {showBulkActions && (
            <Button
              variant="light"
              onClick={onBulkAction}
              className="h-9 rounded-lg px-5 py-2 text-[12px] font-semibold"
            >
              Bulk actions
            </Button>
          )}

          {showExport && (
            <Button
              variant="primary"
              onClick={onExport}
              className="h-9 rounded-lg px-5 py-2 text-[12px] font-semibold"
            >
              {exportLabel}
            </Button>
          )}

          {secondaryAction && (
            <Button
              variant="primary"
              onClick={onSecondaryAction}
              className="h-9 rounded-lg px-5 py-2 text-[12px] font-semibold"
            >
              {secondaryAction}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
