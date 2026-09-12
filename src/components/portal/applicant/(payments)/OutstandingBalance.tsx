"use client";

import Button from "@/src/components/ui/Button";

interface OutstandingBalanceProps {
  amount: string;
  onPayment: () => void;
  loading?: boolean;
}

export default function OutstandingBalance({
  amount,
  onPayment,
  loading = false,
}: OutstandingBalanceProps) {
  return (
    <div className="flex w-full max-w-[326px] flex-col items-center gap-[10px] rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A] sm:flex-row sm:justify-between">
      <div className="flex flex-col gap-1">
        <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
          Outstanding Balance
        </p>

        <p className="text-[28px] font-bold leading-none text-[#1F1F25]">
          {amount}
        </p>
      </div>

      <Button
        variant="dark"
        onClick={onPayment}
        disabled={loading}
        className="rounded-[8px] px-4 py-[10px] text-[12px] font-semibold"
      >
        {loading ? "Processing..." : "Make a Payment"}
      </Button>
    </div>
  );
}
