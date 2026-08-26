import { PayoutSummary } from "@/src/types/mentor/payouts";

interface PayoutStatsProps {
  summary: PayoutSummary;
}

export default function PayoutStats({ summary }: PayoutStatsProps) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {/* Next Payout */}
      <div className="min-h-[95px] rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
        <p className="text-[24px] font-semibold leading-[100%] text-[#00B6CE]">
          ₦{summary.nextPayout.amount.toLocaleString()}
        </p>

        <p className="mt-[9px] text-[12px] leading-[100%] text-[#5D5D61]">
          Next Payout — {summary.nextPayout.date}
        </p>
      </div>

      {/* Total Earned */}
      <div className="min-h-[95px] rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
        <p className="text-[24px] font-semibold leading-[100%] text-[#00B6CE]">
          ₦{summary.totalEarned.toLocaleString()}
        </p>

        <p className="mt-[9px] text-[12px] leading-[100%] text-[#5D5D61]">
          Total Earned ({summary.cohort})
        </p>
      </div>

      {/* Sessions */}
      <div className="min-h-[95px] rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
        <p className="text-[24px] font-semibold leading-[100%] text-[#00B6CE]">
          {summary.sessionsThisMonth}
        </p>

        <p className="mt-[9px] text-[12px] leading-[100%] text-[#5D5D61]">
          Sessions This Month
        </p>
      </div>
    </div>
  );
}
