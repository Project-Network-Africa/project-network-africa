// export default function DataTablePagination() {
//   return (
//     <div className="flex justify-end gap-2 px-5 py-4">
//       <button
//         type="button"
//         className="h-9 rounded-lg border border-[#DDE1E5] bg-white px-4 text-[12px] font-medium text-[#303035]"
//       >
//         Previous
//       </button>

//       <button
//         type="button"
//         className="h-9 w-9 rounded-lg bg-[#00B6CE] text-[12px] font-semibold text-white"
//       >
//         1
//       </button>

//       <button
//         type="button"
//         className="h-9 w-9 rounded-lg border border-[#DDE1E5] bg-white text-[12px] font-medium text-[#303035]"
//       >
//         2
//       </button>

//       <button
//         type="button"
//         className="h-9 w-9 rounded-lg border border-[#DDE1E5] bg-white text-[12px] font-medium text-[#303035]"
//       >
//         3
//       </button>

//       <button
//         type="button"
//         className="h-9 rounded-lg border border-[#DDE1E5] bg-white px-4 text-[12px] font-medium text-[#303035]"
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
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

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

      {pages.map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          className={`h-9 w-9 rounded-lg text-[12px] font-medium transition ${
            currentPage === page
              ? "bg-[#00B6CE] font-semibold text-white"
              : "border border-[#DDE1E5] bg-white text-[#303035] hover:bg-[#F8F9FA]"
          }`}
        >
          {page}
        </button>
      ))}

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
