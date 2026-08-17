export default function PaymentSuccess() {
  return (
    <section className="flex w-full flex-col items-center rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-9 shadow-[0px_2px_8px_0px_#0000000A]">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#E5FAFC]">
        <span className="text-[28px] font-bold text-[#00B6CE]">✓</span>
      </div>

      <h2 className="text-[18px] font-bold text-[#1F1F25]">
        Payment Successful
      </h2>

      <p className="mt-2 text-[13px] text-[#5D5D61]">
        Your payment of ₦45,000 was processed successfully.
      </p>
    </section>
  );
}
