"use client";

import { useEffect, useState } from "react";

import OutstandingBalance from "@/src/components/portal/applicant/(payments)/OutstandingBalance";
import PaymentHistory from "@/src/components/portal/applicant/(payments)/PaymentHistory";
import PaymentMethod from "@/src/components/portal/applicant/(payments)/PaymentMethod";
import LoadingState from "@/src/components/ui/Loading/LoadingState";
import { createPayment, getMyPayments } from "@/src/services/payments";

export const paymentMethods = [
  {
    id: "paystack",
    name: "PayStack",
    logo: "/images/payments/paystack.png",
  },
] as const;

interface BackendPayment {
  _id?: string;
  reference?: string;
  amount?: number;
  status?: string;
  description?: string;
  createdAt?: string;
}

interface PaymentResponse {
  success?: boolean;
  message?: string;
  payments?: BackendPayment[];
}

interface CreatePaymentResponse {
  success?: boolean;
  message?: string;
  checkout?: {
    authorization_url?: string;
  };
}

export default function PaymentsPage() {
  const [payments, setPayments] = useState<BackendPayment[]>([]);
  const [loading, setLoading] = useState(true);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentError, setPaymentError] = useState("");

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = (await getMyPayments()) as PaymentResponse;

        console.log("MY PAYMENTS:", response);

        setPayments(response.payments || []);
      } catch (error) {
        console.error("FAILED TO GET PAYMENTS:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  const handlePayment = async () => {
    try {
      setPaymentLoading(true);
      setPaymentError("");

      const response = (await createPayment()) as CreatePaymentResponse;

      console.log("PAYMENT INITIALIZATION:", response);

      const authorizationUrl = response?.checkout?.authorization_url;

      if (!authorizationUrl) {
        throw new Error("Payment checkout URL was not returned.");
      }

      window.location.href = authorizationUrl;
    } catch (error) {
      console.error("PAYMENT INITIALIZATION FAILED:", error);

      setPaymentError("Unable to initialize payment. Please try again.");
    } finally {
      setPaymentLoading(false);
    }
  };

  const handleDemoPayment = () => {
    setPaymentError("");

    localStorage.setItem("demoPaymentCompleted", "true");

    window.location.href = "/applicant/payments/verify?demo=true";
  };

  if (loading) {
    return (
      <main className="flex min-h-[500px] w-full items-center justify-center">
        <LoadingState />
      </main>
    );
  }

  const successfulPayments = payments.filter(
    (payment) => payment.status?.toLowerCase() === "success",
  );

  const totalPaid = successfulPayments.reduce(
    (total, payment) => total + (payment.amount || 0),
    0,
  );

  const outstandingAmount = Math.max(45000 - totalPaid, 0);

  const paymentHistory = payments.map((payment) => ({
    description: payment.description || "Payment",
    amount: `₦${new Intl.NumberFormat("en-NG").format(payment.amount || 0)}`,
    status:
      payment.status?.toLowerCase() === "success"
        ? ("Paid" as const)
        : ("Pending" as const),
  }));

  return (
    <div className="flex w-full flex-col gap-5">
      <OutstandingBalance
        amount={`₦${new Intl.NumberFormat("en-NG").format(outstandingAmount)}`}
        onPayment={handlePayment}
        loading={paymentLoading}
      />

      {paymentError && (
        <p className="text-[12px] text-red-500">{paymentError}</p>
      )}

      <PaymentMethod
        methods={paymentMethods}
        outstandingAmount={outstandingAmount}
        onPayment={handlePayment}
        loading={paymentLoading}
      />

      {process.env.NODE_ENV === "development" && (
        <button
          type="button"
          onClick={handleDemoPayment}
          className="h-[45px] w-full rounded-[10px] bg-gray-200 text-[14px] font-semibold text-gray-900"
        >
          Demo Payment (Testing)
        </button>
      )}

      <PaymentHistory payments={paymentHistory} />
    </div>
  );
}
