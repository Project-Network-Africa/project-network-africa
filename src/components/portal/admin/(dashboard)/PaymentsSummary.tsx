"use client";

import { useEffect, useState } from "react";
import DashboardCard from "./DashboardCard";
import { getAdminPayments } from "@/src/services/admin";
import LoadingState from "@/src/components/ui/Loading/LoadingState";

function SummaryBox({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-lg bg-[#F7F8F9] p-3">
      <p className="text-[17px] font-semibold text-[#00B6CE]">{value}</p>
      <p className="mt-1 text-[11px] text-[#737379]">{label}</p>
    </div>
  );
}

type Payment = {
  amount?: number;
  status?: string;
};

export default function PaymentsSummary() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await getAdminPayments();

        console.log("ADMIN PAYMENTS RESPONSE:", response);

        setPayments(response?.payments ?? []);
      } catch (error) {
        console.error("PAYMENTS SUMMARY ERROR:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  const collected = payments
    .filter((payment) => payment.status === "Successful")
    .reduce((total, payment) => total + (payment.amount ?? 0), 0);

  const failed = payments.filter(
    (payment) => payment.status === "Failed",
  ).length;

  return (
    <DashboardCard className="p-5 font-body">
      <h2 className="text-[12px] font-semibold text-[#73757D]">
        PAYMENTS SUMMARY
      </h2>

      {loading ? (
        <div className="mt-4">
          <LoadingState />
        </div>
      ) : (
        <>
          <div className="mt-2 flex flex-wrap items-end gap-2">
            <p className="text-[30px] font-bold leading-8 text-[#1F1F25]">
              ₦{collected.toLocaleString()}
            </p>

            <p className="pb-0.5 text-[12px] text-[#5D5D61]">
              collected year to date
            </p>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3">
            <SummaryBox value="₦0" label="Outstanding" />
            <SummaryBox value={String(failed)} label="Failed" />
            <SummaryBox value="₦0" label="Refunds" />
          </div>
        </>
      )}
    </DashboardCard>
  );
}
