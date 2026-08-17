export type InvoiceStatus = "Paid" | "Upcoming";

export interface BillingPlan {
  name: string;
  description: string;
  price: string;
  interval: string;
}

export interface PaymentMethod {
  type: string;
  lastFour: string;
}

export interface Invoice {
  id: string;
  period: string;
  plan: string;
  amount: string;
  status: InvoiceStatus;
}

export interface BillingData {
  plan: BillingPlan;
  paymentMethod: PaymentMethod;
  invoices: Invoice[];
}
