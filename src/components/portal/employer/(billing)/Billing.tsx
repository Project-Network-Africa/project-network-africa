import BillingPlan from "./BillingPlan";
import PaymentMethod from "./PaymentMethod";
import InvoiceHistory from "./InvoiceHistory";

export default function Billing() {
  return (
    <div className="flex w-full flex-col gap-5">
      <BillingPlan />

      <PaymentMethod />

      <InvoiceHistory />
    </div>
  );
}
