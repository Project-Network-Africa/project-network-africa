import { employerBillingData } from "@/src/data/employer/billing";

export default function BillingPlan() {
  const { plan } = employerBillingData;

  return (
    <section className="flex min-h-[80px] items-center justify-between rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <div>
        <p className="text-[14px] font-semibold text-[#1F1F25]">{plan.name}</p>

        <p className="mt-1 text-[12px] text-[#5D5D61]">{plan.description}</p>
      </div>

      <p className="text-[18px] font-semibold text-[#00B6CE]">
        {plan.price} / {plan.interval}
      </p>
    </section>
  );
}
