interface Payment {
  description: string;
  amount: string;
  status: "Paid" | "Pending";
}

interface PaymentHistoryProps {
  payments: Payment[];
}

export default function PaymentHistory({ payments }: PaymentHistoryProps) {
  return (
    <div className="flex w-full flex-col gap-[14px] rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Payment History
      </p>

      <div className="flex flex-col">
        {payments.map((payment, index) => (
          <div
            key={`${payment.description}-${index}`}
            className="flex flex-col gap-2 py-2 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="text-[13px] text-[#1F1F25]">{payment.description}</p>

            <div className="flex items-center gap-[10px]">
              <p className="text-[13px] font-semibold text-[#1F1F25]">
                {payment.amount}
              </p>

              <span className="rounded-[20px] bg-[#E0F7ED] px-[10px] py-1 text-[10px] font-semibold text-[#1A804D]">
                {payment.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
