// "use client";

// import { Button } from "@/src/components/ui";
// import { useParams } from "next/navigation";

// import { payments } from "./payments-data";
// import DashboardCard from "../(dashboard)/DashboardCard";

// export default function TransactionDetails() {
//   const params = useParams();

//   const transactionId = params.transactionId as string;
//   // const params = useParams<{ transactionId: string }>();

//   // const transactionId = params.transactionId;
//   const payment = payments.find((item) => item.transactionId === transactionId);

//   // Transaction not found
//   if (!payment) {
//     return (
//       <main className="min-h-screen w-full bg-[#F8F8F8] font-body">
//         <div className="mx-auto w-full max-w-[1280px] p-5 lg:p-0">
//           <DashboardCard className="p-8 text-center">
//             <h2 className="text-lg font-bold text-[#1F1F25]">
//               Transaction not found
//             </h2>

//             <p className="mt-2 text-sm text-[#737379]">
//               We could not find transaction {transactionId}.
//             </p>
//           </DashboardCard>
//         </div>
//       </main>
//     );
//   }
//   return (
//     <main className="min-h-screen w-full bg-[#F8F8F8]  font-body">
//       <div className="mx-auto w-full max-w-[1280px]">
//         {/* =========================
//             TRANSACTION SUMMARY
//         ========================== */}

//         <DashboardCard className=" p-5 lg:p-7">
//           <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
//             {/* Left */}

//             <div className="flex items-center gap-4">
//               <div className="flex h-[58px] w-[58px] shrink-0 items-center justify-center rounded-full bg-[#1F1F25] text-[18px] font-bold text-white">
//                 ₦
//               </div>

//               <div>
//                 <h2 className="font-body text-[18px] font-bold text-[#1F1F25]">
//                   Transaction {payment.transactionId}
//                 </h2>

//                 <p className="mt-1 text-[12px] text-[#737379]">
//                   {payment.payer} · {payment.programme} {payment.cohort} ·{" "}
//                   {payment.date}
//                 </p>
//               </div>
//             </div>

//             {/* Actions */}

//             <div className="flex flex-wrap items-center gap-2">
//               <span className="rounded-full bg-[#E1F3EC] px-4 py-2 text-[12px] font-semibold text-[#008F58]">
//                 {payment.status}
//               </span>

//               <Button
//                 variant="primary"
//                 className="h-9 rounded-lg px-4 py-2 text-[12px] font-semibold"
//               >
//                 Download receipt
//               </Button>

//               <Button
//                 variant="light"
//                 className="h-9 rounded-lg px-4 py-2 text-[12px] font-semibold"
//               >
//                 Issue refund
//               </Button>

//               <Button
//                 variant="light"
//                 className="h-9 rounded-lg px-4 py-2 text-[12px] font-semibold"
//               >
//                 Mark reconciled
//               </Button>
//             </div>
//           </div>
//         </DashboardCard>

//         {/* =========================
//             STATS
//         ========================== */}

//         <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
//           <TransactionStat value={payment.amount} label="Amount paid" />

//           <TransactionStat value={payment.method} label="Payment method" />

//           <TransactionStat
//             value={payment.status}
//             label="Transaction status"
//             valueClassName="text-[#008F58]"
//           />

//           <TransactionStat value={payment.gatewayFee} label="Gateway fee" />
//         </div>

//         {/* =========================
//             DETAILS
//         ========================== */}

//         <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
//           <DashboardCard className="p-5">
//             <h3 className="text-[12px] font-semibold uppercase text-[#737379]">
//               Transaction details
//             </h3>

//             <div className="mt-4 space-y-4">
//               <DetailRow
//                 label="Gateway reference"
//                 value={payment.gatewayReference}
//               />

//               <DetailRow
//                 label="Currency"
//                 value={`${payment.currency} · Payment type: ${payment.paymentType}`}
//               />

//               <DetailRow label="Processed" value={payment.processed} />

//               <DetailRow
//                 label="Reconciliation"
//                 value={payment.reconciliation}
//               />

//               <DetailRow label="Receipt" value={payment.receipt} highlight />
//             </div>
//           </DashboardCard>

//           <DashboardCard className="p-5">
//             <h3 className="text-[12px] font-semibold uppercase text-[#737379]">
//               Payer information
//             </h3>

//             <div className="mt-4 space-y-4">
//               <DetailRow label="Payer" value={`${payment.payer} · Applicant`} />

//               <DetailRow label="Email" value={payment.email} />

//               <DetailRow
//                 label="Programme"
//                 value={`${payment.programme} · ${payment.cohort}`}
//               />

//               <DetailRow
//                 label="Billing country"
//                 value={payment.billingCountry}
//               />

//               <DetailRow
//                 label="Refund"
//                 value={payment.refundEligibility}
//                 highlight
//               />
//             </div>
//           </DashboardCard>
//         </div>

//         {/* =========================
//             ACTIVITY
//         ========================== */}

//         <DashboardCard className="mt-4 p-5">
//           <div className="flex items-center justify-between">
//             <h3 className="text-[12px] font-semibold uppercase text-[#737379]">
//               Activity & Status History
//             </h3>

//             <button
//               type="button"
//               className="text-[12px] font-medium text-[#00B6CE]"
//             >
//               View full audit log
//             </button>
//           </div>

//           <div className="mt-5 space-y-5">
//             {payment.activities.map((activity, index) => (
//               <div
//                 key={`${activity.text}-${index}`}
//                 className="flex items-center justify-between gap-4"
//               >
//                 <div className="flex items-center gap-3">
//                   <span
//                     className={`h-2 w-2 shrink-0 rounded-full ${
//                       index === 0 ? "bg-[#00B6CE]" : "bg-[#DDE1E5]"
//                     }`}
//                   />

//                   <p className="text-[12px] text-[#303035]">
//                     {activity.text}
//                     {activity.time && (
//                       <span className="ml-1">· {activity.time}</span>
//                     )}
//                   </p>
//                 </div>

//                 {index === 0 && (
//                   <span className="text-[12px] text-[#737379]">Newest</span>
//                 )}
//               </div>
//             ))}
//           </div>
//         </DashboardCard>
//       </div>
//     </main>
//   );
// }

// /* =====================================
//    TRANSACTION STAT
// ===================================== */

// function TransactionStat({
//   value,
//   label,
//   valueClassName = "",
// }: {
//   value: string;
//   label: string;
//   valueClassName?: string;
// }) {
//   return (
//     <DashboardCard className="p-5">
//       <p
//         className={`text-[22px] font-bold leading-none text-[#00B6CE] ${valueClassName}`}
//       >
//         {value}
//       </p>

//       <p className="mt-2 text-[11px] text-[#737379]">{label}</p>
//     </DashboardCard>
//   );
// }

// /* =====================================
//    DETAIL ROW
// ===================================== */

// function DetailRow({
//   value,
//   highlight = false,
// }: {
//   label: string;
//   value: string;
//   highlight?: boolean;
// }) {
//   return (
//     <div className="flex items-start gap-3">
//       <span
//         className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${
//           highlight ? "bg-[#00B6CE]" : "bg-[#DDE1E5]"
//         }`}
//       />

//       <p className="text-[12px] leading-5 text-[#303035]">{value}</p>
//     </div>
//   );
// }
"use client";

import AdminDetailPage from "../DetailPage/AdminDetailPage";

import { payments } from "./payments-data";

interface TransactionDetailsProps {
  transactionId: string;
}

export default function TransactionDetails({
  transactionId,
}: TransactionDetailsProps) {
  const payment = payments.find((item) => item.transactionId === transactionId);

  if (!payment) {
    return (
      <AdminDetailPage
        header={{
          backHref: "/admin/payments",
          backLabel: "Back to Payments",
          title: "Transaction not found",
          avatar: "₦",
          name: "Transaction not found",
          subtitle: `We could not find transaction ${transactionId}.`,
        }}
        stats={[]}
        sections={[]}
        activities={[]}
      />
    );
  }

  const statusClassName =
    payment.status === "Paid"
      ? "bg-[#E1F3EC] text-[#008F58]"
      : payment.status === "Failed"
        ? "bg-[#FDE8E8] text-[#DC2727]"
        : payment.status === "Refunded"
          ? "bg-[#FFF0E5] text-[#F26B21]"
          : "bg-[#FFF0E5] text-[#F26B21]";

  return (
    <AdminDetailPage
      /* =========================================
         HEADER
      ========================================= */

      header={{
        backHref: "/admin/payments",
        backLabel: "Back to Payments",

        title: `Transaction ${payment.transactionId}`,

        avatar: "₦",

        name: `Transaction ${payment.transactionId}`,

        subtitle: `${payment.payer} · ${payment.programme} ${payment.cohort} · ${payment.date}`,

        status: payment.status,

        statusClassName,

        actions: [
          {
            label: "Download receipt",
            variant: "primary",
            onClick: () => {
              console.log("Download receipt:", payment.receipt);
            },
          },

          {
            label: "Issue refund",
            variant: "light",
            onClick: () => {
              console.log("Issue refund:", payment.transactionId);
            },
          },

          {
            label: "Mark reconciled",
            variant: "light",
            onClick: () => {
              console.log("Mark reconciled:", payment.transactionId);
            },
          },
        ],
      }}
      /* =========================================
         STATS
      ========================================= */

      stats={[
        {
          value: payment.amount,
          label: "Amount paid",
        },

        {
          value: payment.method,
          label: "Payment method",
        },

        {
          value: payment.status,
          label: "Transaction status",
          valueClassName:
            payment.status === "Paid"
              ? "text-[#008F58]"
              : payment.status === "Failed"
                ? "text-[#DC2727]"
                : "text-[#F26B21]",
        },

        {
          value: payment.gatewayFee,
          label: "Gateway fee",
        },
      ]}
      /* =========================================
         INFORMATION SECTIONS
      ========================================= */

      sections={[
        {
          title: "Transaction details",

          items: [
            {
              value: `Gateway reference: ${payment.gatewayReference}`,
            },

            {
              value: `Currency: ${payment.currency} · Payment type: ${payment.paymentType}`,
            },

            {
              value: `Processed: ${payment.processed}`,
            },

            {
              value: `Reconciliation: ${payment.reconciliation}`,
            },

            {
              value: `Receipt: ${payment.receipt}`,
              highlight: true,
            },
          ],
        },

        {
          title: "Payer information",

          items: [
            {
              value: `Payer: ${payment.payer} · Applicant`,
            },

            {
              value: `Email: ${payment.email}`,
            },

            {
              value: `Programme: ${payment.programme} · ${payment.cohort}`,
            },

            {
              value: `Billing country: ${payment.billingCountry}`,
            },

            {
              value: `Refund: ${payment.refundEligibility}`,
              highlight: true,
            },
          ],
        },
      ]}
      /* =========================================
         ACTIVITY
      ========================================= */

      activities={payment.activities}
      auditLabel="View full audit log"
    />
  );
}
