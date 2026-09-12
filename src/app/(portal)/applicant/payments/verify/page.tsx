"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import { verifyPayment } from "@/src/services/payments";
import LoadingState from "@/src/components/ui/Loading/LoadingState";

type PaymentStatus = "verifying" | "success" | "failed";

export default function PaymentVerificationPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const reference = searchParams.get("reference");

  const [status, setStatus] = useState<PaymentStatus>(
    reference ? "verifying" : "failed",
  );

  const [message, setMessage] = useState(
    reference
      ? "Please wait while we verify your payment."
      : "Payment reference was not found.",
  );

  useEffect(() => {
    if (!reference) {
      return;
    }

    const verify = async () => {
      try {
        console.log("VERIFYING PAYMENT:", reference);

        const response = await verifyPayment(reference);

        console.log("PAYMENT VERIFICATION:", response);

        if (response?.success) {
          setStatus("success");
          setMessage("Your payment has been successfully confirmed.");
        } else {
          setStatus("failed");
          setMessage(response?.message || "We could not confirm your payment.");
        }
      } catch (error) {
        console.error("PAYMENT VERIFICATION FAILED:", error);

        setStatus("failed");
        setMessage(
          "We could not verify your payment. Please contact support if money was deducted.",
        );
      }
    };

    verify();
  }, [reference]);

  if (status === "verifying") {
    return (
      <main className="flex min-h-[500px] w-full items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <LoadingState />

          <p className="text-[13px] text-[#5D5D61]">{message}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-[500px] w-full items-center justify-center">
      <div className="flex w-full max-w-[450px] flex-col items-center rounded-[14px] border border-[#E5E5EB] bg-white px-6 py-8 text-center shadow-[0px_2px_8px_0px_#0000000A]">
        <h1 className="text-[20px] font-semibold text-[#1F1F25]">
          {status === "success"
            ? "Payment Successful"
            : "Payment Verification Failed"}
        </h1>

        <p className="mt-3 text-[13px] leading-5 text-[#5D5D61]">{message}</p>

        <button
          type="button"
          onClick={() =>
            router.push(
              status === "success"
                ? "/applicant/dashboard"
                : "/applicant/payments",
            )
          }
          className="mt-6 rounded-[8px] bg-[#00B6CE] px-5 py-2.5 text-[13px] font-semibold text-white"
        >
          {status === "success" ? "Go to Dashboard" : "Return to Payment"}
        </button>
      </div>
    </main>
  );
}
