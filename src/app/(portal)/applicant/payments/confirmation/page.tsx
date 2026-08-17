"use client";

import PaymentReceipt from "@/src/components/portal/applicant/(payments)/PaymentReceipt";
import PaymentSuccess from "@/src/components/portal/applicant/(payments)/PaymentSuccess";
import { Button } from "@/src/components/ui";
import { useRouter } from "next/navigation";

export default function PaymentConfirmationPage() {
  const router = useRouter();

  return (
    <div className="flex w-full flex-col gap-5">
      <h1 className="text-[24px] font-bold text-[#1F1F25]">
        Payment Confirmation
      </h1>

      <PaymentSuccess />

      <PaymentReceipt
        transactionId="TXN-2026-08421"
        date="Aug 5, 2026"
        amount="₦45,000"
        paymentMethod="Stripe"
        status="Paid"
      />

      <div className="flex gap-3">
        <Button
          variant="dark"
          onClick={() => router.push("/applicant/payments")}
          className="rounded-[8px] px-5 py-3 text-[13px] font-semibold"
        >
          Back to Payments
        </Button>

        <Button
          variant="light"
          onClick={() => {
            console.log("Download receipt");
          }}
          className="rounded-[8px] px-5 py-3 text-[13px] font-semibold"
        >
          Download Receipt
        </Button>
      </div>
    </div>
  );
}
