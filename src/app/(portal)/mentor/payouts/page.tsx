// import StatCard from "@/src/components/portal/mentor/(mentee-analytics)/StatCard";
// import PayoutHistoryCard from "@/src/components/portal/mentor/(payouts)/PayoutHistoryCard";
// import { mentorPayoutStats, payoutHistory } from "@/src/data/mentor/payouts";

// export default function MentorPayoutsPage() {
//   return (
//     <main className="min-h-screen bg-white pb-10 ">
//       <div className="max-w-[1120px]">
//         <div className="mt-5 grid grid-cols-3 gap-4">
//           {mentorPayoutStats.map((stat) => (
//             <StatCard key={stat.id} stat={stat} />
//           ))}
//         </div>

//         <div className="mt-5">
//           <PayoutHistoryCard entries={payoutHistory} />
//         </div>
//       </div>
//     </main>
//   );
// }
import { payoutHistory, payoutSummary } from "@/src/data/mentor/payouts";

import PayoutStats from "@/src/components/portal/mentor/(payouts)/PayoutStats";
import PaymentHistory from "@/src/components/portal/mentor/(payouts)/PayoutHistory";

export default function PayoutsPage() {
  return (
    <div className="w-full space-y-[20px]">
      <PayoutStats summary={payoutSummary} />

      <PaymentHistory payouts={payoutHistory} />
    </div>
  );
}
