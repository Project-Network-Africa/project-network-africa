"use client";

import { useMemo, useState } from "react";

import { Button } from "@/src/components/ui";

import { paymentFilters, payments, paymentStats } from "./payments-data";

import { Payment } from "./payments.types";
import { AdminFilters } from "../AdminPage";
import StatCards from "../(dashboard)/StatCards";
import { DataTable } from "../DataTable";

export default function Payments() {
  const [search, setSearch] = useState("");

  const filteredPayments = useMemo(() => {
    const searchValue = search.trim().toLowerCase();

    if (!searchValue) {
      return payments;
    }

    return payments.filter((payment) => {
      return (
        payment.payer.toLowerCase().includes(searchValue) ||
        payment.transactionId.toLowerCase().includes(searchValue) ||
        payment.amount.toLowerCase().includes(searchValue) ||
        payment.programme.toLowerCase().includes(searchValue) ||
        payment.method.toLowerCase().includes(searchValue) ||
        payment.status.toLowerCase().includes(searchValue) ||
        payment.reconciliation.toLowerCase().includes(searchValue)
      );
    });
  }, [search]);

  const columns = [
    {
      key: "payer",
      header: "Payer",
      render: (payment: Payment) => (
        <span className="font-medium text-[#303035]">{payment.payer}</span>
      ),
    },

    {
      key: "transactionId",
      header: "Transaction ID",
    },

    {
      key: "amount",
      header: "Amount",
    },

    {
      key: "programme",
      header: "Programme",
    },

    {
      key: "method",
      header: "Method",
    },

    {
      key: "date",
      header: "Date",
    },

    {
      key: "status",
      header: "Status",

      render: (payment: Payment) => {
        const statusStyles: Record<string, string> = {
          Paid: "text-[#008F58]",
          Failed: "text-[#DC2727]",
          Partial: "text-[#FF6B00]",
          Refund: "text-[#FF6B00]",
        };

        return (
          <span
            className={`font-semibold ${
              statusStyles[payment.status] ?? "text-[#303035]"
            }`}
          >
            {payment.status}
          </span>
        );
      },
    },

    {
      key: "reconciliation",
      header: "Reconciliation",

      render: (payment: Payment) => {
        const styles: Record<string, string> = {
          Reconciled: "text-[#008F58]",
          "Needs review": "text-[#DC2727]",
          Open: "text-[#FF6B00]",
          Pending: "text-[#FF6B00]",
        };

        return (
          <span
            className={`font-semibold ${
              styles[payment.reconciliation] ?? "text-[#303035]"
            }`}
          >
            {payment.reconciliation}
          </span>
        );
      },
    },

    {
      key: "action",
      header: "Action",

      render: (payment: Payment) => (
        <Button
          href={`/admin/payments/${payment.transactionId}`}
          variant="link"
          className="p-0 text-[12px] font-semibold text-[#00B6CE]"
        >
          {payment.action}
        </Button>
      ),
    },
  ];

  return (
    <main className="min-h-screen w-full bg-[#F8F8F8] font-body">
      <div className="mx-auto w-full max-w-[1280px]">
        {/* Filters */}

        <div className="">
          <AdminFilters
            searchPlaceholder="Search payer or transaction"
            filters={paymentFilters}
            secondaryAction="Refund queue"
            showExport
            exportLabel="Export ledger"
            searchValue={search}
            onSearchChange={setSearch}
          />
        </div>

        {/* Stats */}

        <section className="mt-5">
          <StatCards stats={paymentStats} columns={4} />
        </section>

        {/* Table */}

        <section className="mt-4">
          <DataTable<Payment>
            columns={columns}
            data={filteredPayments}
            rowKey="id"
            pageSize={5}
            totalRecords={filteredPayments.length}
          />
        </section>
      </div>
    </main>
  );
}
