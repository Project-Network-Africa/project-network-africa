// export type PayoutStatus = "Paid" | "Upcoming";

// export interface PayoutHistoryEntry {
//   id: string;
//   label: string;
//   amount: number;
//   status: PayoutStatus;
// }
export type PaymentStatus = "Paid" | "Upcoming";

export interface Payout {
  id: string;
  description: string;
  amount: number;
  status: PaymentStatus;
}

export interface PayoutSummary {
  nextPayout: {
    amount: number;
    date: string;
  };
  totalEarned: number;
  cohort: string;
  sessionsThisMonth: number;
}
