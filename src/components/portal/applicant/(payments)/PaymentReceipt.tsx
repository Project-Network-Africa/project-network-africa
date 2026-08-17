interface PaymentReceiptProps {
  transactionId: string;
  date: string;
  amount: string;
  paymentMethod: string;
  status: string;
}

export default function PaymentReceipt({
  transactionId,
  date,
  amount,
  paymentMethod,
  status,
}: PaymentReceiptProps) {
  const details = [
    ["Transaction ID", transactionId],
    ["Date", date],
    ["Amount", amount],
    ["Payment Method", paymentMethod],
    ["Status", status],
  ];

  return (
    <section className="w-full rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="mb-4 text-[10px] font-semibold uppercase text-[#5D5D61]">
        Receipt
      </p>

      <div className="flex flex-col gap-3">
        {details.map(([label, value]) => (
          <div
            key={label}
            className="flex items-center justify-between text-[13px]"
          >
            <span className="text-[#5D5D61]">{label}</span>

            <span className="font-semibold text-[#1F1F25]">{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
