import { employerBillingData } from "@/src/data/employer/billing";
import { InvoiceStatus } from "@/src/types/employer/billing";

const statusStyles: Record<InvoiceStatus, string> = {
  Paid: "bg-[#E0F7ED] text-[#1A804D]",
  Upcoming: "bg-[#E0F7FA] text-[#00A3B8]",
};

export default function InvoiceHistory() {
  const { invoices } = employerBillingData;

  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Invoice History
      </p>

      <div className="mt-[14px] flex flex-col gap-[20px]">
        {invoices.map((invoice) => (
          <div key={invoice.id} className="flex items-center justify-between">
            <p className="text-[13px] font-semibold text-[#1F1F25]">
              {invoice.period} - {invoice.plan}
            </p>

            <div className="flex items-center gap-4">
              <p className="text-[12px] font-semibold text-[#1F1F25]">
                {invoice.amount}
              </p>

              <span
                className={`rounded-full px-[10px] py-[4px] text-[10px] font-semibold ${statusStyles[invoice.status]}`}
              >
                {invoice.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
