// import { MenteeAnalyticsStat } from "@/src/types/mentor/analytics";
// import { PayoutHistoryEntry } from "@/src/types/mentor/payouts";

// // TODO: replace with real payments endpoint once billing integration is available
// export const mentorPayoutStats: MenteeAnalyticsStat[] = [
//   { id: "next-payout", value: "₦180,000", label: "Next Payout — Aug 31" },
//   { id: "total-earned", value: "₦1,240,000", label: "Total Earned (Cohort 6)" },
//   { id: "sessions", value: "8", label: "Sessions This Month" },
// ];

// // TODO: replace with real payout history from payments API
// export const payoutHistory: PayoutHistoryEntry[] = [
//   {
//     id: "payout-2026-07",
//     label: "July 2026 Mentorship Payout",
//     amount: 180000,
//     status: "Paid",
//   },
//   {
//     id: "payout-2026-06",
//     label: "June 2026 Mentorship Payout",
//     amount: 165000,
//     status: "Paid",
//   },
//   {
//     id: "payout-2026-08",
//     label: "August 2026 Mentorship Payout",
//     amount: 180000,
//     status: "Upcoming",
//   },
// ];
import { Payout, PayoutSummary } from "@/src/types/mentor/payouts";

export const payoutSummary: PayoutSummary = {
  nextPayout: {
    amount: 180000,
    date: "Aug 31",
  },
  totalEarned: 1240000,
  cohort: "Cohort 6",
  sessionsThisMonth: 8,
};

export const payoutHistory: Payout[] = [
  {
    id: "july-2026",
    description: "July 2026 Mentorship Payout",
    amount: 180000,
    status: "Paid",
  },
  {
    id: "june-2026",
    description: "June 2026 Mentorship Payout",
    amount: 165000,
    status: "Paid",
  },
  {
    id: "august-2026",
    description: "August 2026 Mentorship Payout",
    amount: 180000,
    status: "Upcoming",
  },
];
