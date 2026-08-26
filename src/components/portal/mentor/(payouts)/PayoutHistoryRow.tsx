// import { PayoutHistoryEntry } from "@/src/types/mentor/payouts";
// import { formatNaira } from "@/src/lib/formatCurrency";

// interface PayoutHistoryRowProps {
//   entry: PayoutHistoryEntry;
// }

// export default function PayoutHistoryRow({ entry }: PayoutHistoryRowProps) {
//   const badgeStyles =
//     entry.status === "Paid"
//       ? "bg-[#E0F7ED] text-[#1A804D]"
//       : "bg-[#FFE9DF] text-[#C84D19]";

//   return (
//     <div className="flex items-center justify-between py-3">
//       <p className="text-sm font-medium text-gray-900">{entry.label}</p>

//       <div className="flex items-center gap-4">
//         <p className="text-sm font-semibold text-gray-900">
//           {formatNaira(entry.amount)}
//         </p>

//         <span
//           className={`whitespace-nowrap rounded-full px-2.5 py-1 text-xs font-medium ${badgeStyles}`}
//         >
//           {entry.status}
//         </span>
//       </div>
//     </div>
//   );
// }
import { Payout } from "@/src/types/mentor/payouts";

interface PaymentHistoryRowProps {
  payout: Payout;
}

const statusStyles = {
  Paid: "bg-[#E0F7ED] text-[#1A804D]",
  Upcoming: "bg-[#FFF0E0] text-[#C85C00]",
};

export default function PaymentHistoryRow({ payout }: PaymentHistoryRowProps) {
  return (
    <div className="flex min-h-[51px] items-center justify-between gap-4">
      <p className="min-w-0 text-[12px] font-semibold text-[#1F1F25]">
        {payout.description}
      </p>

      <div className="flex shrink-0 items-center gap-[16px]">
        <p className="text-[12px] font-semibold text-[#1F1F25]">
          ₦{payout.amount.toLocaleString()}
        </p>

        <span
          className={`inline-flex h-[20px] min-w-[43px] items-center justify-center rounded-full px-[10px] text-[10px] font-semibold leading-none ${
            statusStyles[payout.status]
          }`}
        >
          {payout.status}
        </span>
      </div>
    </div>
  );
}
