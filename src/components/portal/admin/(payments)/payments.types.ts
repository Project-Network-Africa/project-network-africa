export interface Payment {
  id: number;

  payer: string;
  transactionId: string;

  amount: string;
  programme: string;
  cohort: string;

  method: string;
  date: string;

  status: string;
  reconciliation: string;

  email: string;
  billingCountry: string;

  gatewayFee: string;
  gatewayReference: string;

  currency: string;
  paymentType: string;

  processed: string;
  receipt: string;

  refundEligibility: string;

  activities: PaymentActivity[];

  action: string;
}

export interface PaymentActivity {
  text: string;
  time?: string;
}

export interface PaymentStat {
  label: string;
  value: string;
  helper: string;
  helperColor?: string;
}

export interface PaymentFilter {
  label: string;
  value?: string;
}
