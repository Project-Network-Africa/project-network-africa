"use client";

import { employerBillingData } from "@/src/data/employer/billing";
import { Button } from "@/src/components/ui";

export default function PaymentMethod() {
  const { paymentMethod } = employerBillingData;

  const handleUpdate = () => {
    // Replace later with payment method/API flow.
    console.log("Update payment method");
  };

  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Payment Method
      </p>

      <div className="mt-[14px] flex items-center justify-between">
        <div className="flex items-center gap-[14px]">
          {/* Card icon placeholder */}
          <div className="h-[31px] w-[44px] rounded-[5px] bg-[#1F1F25]" />

          <p className="text-[13px] font-semibold text-[#1F1F25]">
            {paymentMethod.type} ending in {paymentMethod.lastFour}
          </p>
        </div>

        <Button
          variant="light"
          onClick={handleUpdate}
          className="h-[35px] rounded-[8px] border border-[#E5E5EB] px-4 text-[11px] font-semibold"
        >
          Update
        </Button>
      </div>
    </section>
  );
}
