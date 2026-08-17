import OutstandingBalance from "@/src/components/portal/applicant/(payments)/OutstandingBalance";
import PaymentHistory from "@/src/components/portal/applicant/(payments)/PaymentHistory";
import PaymentMethod from "@/src/components/portal/applicant/(payments)/PaymentMethod";

export const paymentMethods = [
  {
    id: "stripe",
    name: "Stripe",
    logo: "/images/payments/stripe.png",
  },
  {
    id: "paypal",
    name: "PayPal",
    logo: "/images/payments/paypal.png",
  },
] as const;

const paymentHistory = [
  {
    description: "Cohort 6 — Installment 1",
    amount: "₦45,000",
    status: "Paid" as const,
  },
  {
    description: "Application Fee",
    amount: "₦10,000",
    status: "Paid" as const,
  },
];

export default function PaymentsPage() {
  return (
    <div className="flex w-full flex-col gap-5">
      <OutstandingBalance amount="₦45,000" />

      <PaymentMethod methods={paymentMethods} outstandingAmount={45000} />

      <PaymentHistory payments={paymentHistory} />
    </div>
  );
}
