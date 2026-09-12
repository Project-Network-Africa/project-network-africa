"use client";

export default function LoadingState() {
  return (
    <div className="flex w-[500px] max-w-full items-center justify-center rounded-[20px] border border-[#B1B8C8] bg-[#F8F8F8] px-7 py-[79px]">
      <div className="flex h-[220px] w-full max-w-[444px] items-center justify-center rounded-[16px] border border-[#E3E7EE] bg-white shadow-[0_8px_24px_0_rgba(31,31,38,0.08)]">
        <div className="flex h-6 w-[104px] items-center justify-between">
          <span className="loading-dot loading-dot-1" />
          <span className="loading-dot loading-dot-2" />
          <span className="loading-dot loading-dot-3" />
          <span className="loading-dot loading-dot-4" />
        </div>
      </div>
    </div>
  );
}
