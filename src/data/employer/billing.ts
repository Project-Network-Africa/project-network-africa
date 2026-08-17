import { BillingData } from "@/src/types/employer/billing";

export const employerBillingData: BillingData = {
  plan: {
    name: "Employer Partner Plan",
    description: "Unlimited job postings and full Talent Directory access",
    price: "₦250,000",
    interval: "month",
  },

  paymentMethod: {
    type: "Mastercard",
    lastFour: "4471",
  },

  invoices: [
    {
      id: "invoice-july-2026",
      period: "July 2026",
      plan: "Employer Partner Plan",
      amount: "₦250,000",
      status: "Paid",
    },
    {
      id: "invoice-june-2026",
      period: "June 2026",
      plan: "Employer Partner Plan",
      amount: "₦250,000",
      status: "Paid",
    },
    {
      id: "invoice-august-2026",
      period: "August 2026",
      plan: "Employer Partner Plan",
      amount: "₦250,000",
      status: "Upcoming",
    },
  ],
};
