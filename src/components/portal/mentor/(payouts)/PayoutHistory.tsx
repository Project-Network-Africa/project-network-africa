import { Payout } from "@/src/types/mentor/payouts";
import PaymentHistoryRow from "./PayoutHistoryRow";

interface PaymentHistoryProps {
  payouts: Payout[];
}

export default function PaymentHistory({ payouts }: PaymentHistoryProps) {
  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase leading-[100%] text-[#5D5D61]">
        Payment History
      </p>

      <div className="mt-[13px] divide-y divide-[#E5E5EB]">
        {payouts.map((payout) => (
          <PaymentHistoryRow key={payout.id} payout={payout} />
        ))}
      </div>
    </section>
  );
}
