// interface DataTablePaginationProps {
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (page: number) => void;
// }

// export default function DataTablePagination({
//   currentPage,
//   totalPages,
//   onPageChange,
// }: DataTablePaginationProps) {
//   const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

//   return (
//     <div className="flex items-center justify-end gap-2 px-5 py-4">
//       <button
//         type="button"
//         disabled={currentPage === 1}
//         onClick={() => onPageChange(currentPage - 1)}
//         className="h-9 rounded-lg border border-[#DDE1E5] bg-white px-4 text-[12px] font-medium text-[#303035] transition hover:bg-[#F8F9FA] disabled:cursor-not-allowed disabled:opacity-50"
//       >
//         Previous
//       </button>

//       {pages.map((page) => (
//         <button
//           key={page}
//           type="button"
//           onClick={() => onPageChange(page)}
//           className={`h-9 w-9 rounded-lg text-[12px] font-medium transition ${
//             currentPage === page
//               ? "bg-[#00B6CE] font-semibold text-white"
//               : "border border-[#DDE1E5] bg-white text-[#303035] hover:bg-[#F8F9FA]"
//           }`}
//         >
//           {page}
//         </button>
//       ))}

//       <button
//         type="button"
//         disabled={currentPage === totalPages}
//         onClick={() => onPageChange(currentPage + 1)}
//         className="h-9 rounded-lg border border-[#DDE1E5] bg-white px-4 text-[12px] font-medium text-[#303035] transition hover:bg-[#F8F9FA] disabled:cursor-not-allowed disabled:opacity-50"
//       >
//         Next
//       </button>
//     </div>
//   );
// }
interface DataTablePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function DataTablePagination({
  currentPage,
  totalPages,
  onPageChange,
}: DataTablePaginationProps) {
  const getPages = () => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    if (currentPage <= 3) {
      return [1, 2, 3, 4, "...", totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  const pages = getPages();

  return (
    <div className="flex items-center justify-end gap-2 px-5 py-4">
      <button
        type="button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="h-9 rounded-lg border border-[#DDE1E5] bg-white px-4 text-[12px] font-medium text-[#303035] transition hover:bg-[#F8F9FA] disabled:cursor-not-allowed disabled:opacity-50"
      >
        Previous
      </button>

      {pages.map((page, index) =>
        page === "..." ? (
          <span
            key={`ellipsis-${index}`}
            className="px-1 text-[12px] text-[#737379]"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page as number)}
            className={`h-9 w-9 rounded-lg text-[12px] font-medium transition ${
              currentPage === page
                ? "bg-[#00B6CE] font-semibold text-white"
                : "border border-[#DDE1E5] bg-white text-[#303035] hover:bg-[#F8F9FA]"
            }`}
          >
            {page}
          </button>
        ),
      )}

      <button
        type="button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="h-9 rounded-lg border border-[#DDE1E5] bg-white px-4 text-[12px] font-medium text-[#303035] transition hover:bg-[#F8F9FA] disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
