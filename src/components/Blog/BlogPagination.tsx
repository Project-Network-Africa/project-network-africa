"use client";

interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function BlogPagination({
  currentPage,
  totalPages,
  onPageChange,
}: BlogPaginationProps) {
  return (
    <div className="flex h-[120px] w-full items-center justify-center gap-2 bg-[#F8F8F8]">
      {/* Previous */}
      <button
        type="button"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E1DC] bg-white text-[14px] font-semibold text-[#1F1F25] transition ${
          currentPage === 1
            ? "cursor-not-allowed opacity-40"
            : "hover:bg-[#F1F1F1]"
        }`}
        aria-label="Previous page"
      >
        ‹
      </button>

      {/* Pages */}
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            type="button"
            onClick={() => onPageChange(page)}
            className={`flex h-10 w-10 items-center justify-center rounded-full text-[14px] font-semibold transition ${
              currentPage === page
                ? "bg-[#1F1F25] text-white"
                : "border border-[#E5E1DC] bg-white text-[#1F1F25] hover:bg-[#F1F1F1]"
            }`}
          >
            {page}
          </button>
        ),
      )}

      {/* Next */}
      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`flex h-10 w-10 items-center justify-center rounded-full border border-[#E5E1DC] bg-white text-[14px] font-semibold text-[#1F1F25] transition ${
          currentPage === totalPages
            ? "cursor-not-allowed opacity-40"
            : "hover:bg-[#F1F1F1]"
        }`}
        aria-label="Next page"
      >
        ›
      </button>
    </div>
  );
}
