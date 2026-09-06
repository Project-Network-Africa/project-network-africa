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
