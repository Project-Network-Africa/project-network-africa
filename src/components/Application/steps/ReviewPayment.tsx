"use client";

import { useState } from "react";

type PaymentMethod = "Stripe" | "PayPal" | "Paystack" | "Debit Card";

const paymentMethods: {
  id: PaymentMethod;
  name: string;
  description: string;
}[] = [
  {
    id: "Stripe",
    name: "Stripe",
    description: "Pay by card — Visa, Mastercard, Verve",
  },
  {
    id: "PayPal",
    name: "PayPal",
    description: "Pay using your PayPal balance or linked card",
  },
  {
    id: "Paystack",
    name: "Paystack",
    description: "Pay with card, bank transfer, or USSD",
  },
  {
    id: "Debit Card",
    name: "Debit Card",
    description: "Pay directly with any Visa, Mastercard, or Verve debit card",
  },
];

interface ReviewPaymentProps {
  onBack: () => void;
  onSubmit: () => void;
}

export default function ReviewPayment({
  onBack,
  onSubmit,
}: ReviewPaymentProps) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("Stripe");

  return (
    <div className="flex w-full gap-16 px-5 py-10 lg:px-20 lg:py-14">
      {/* Main content */}
      <div className="flex-1">
        <div className="mx-auto max-w-[936px]">
          <h1 className="text-[26px] font-bold leading-none text-[#1F1F25]">
            Review & Payment
          </h1>

          <p className="mt-6 text-[14px] leading-none text-[#5D5D61]">
            Choose how you will like to pay your application fee.
          </p>

          {/* Payment methods */}
          <div className="mt-6">
            <p className="mb-3 text-[11px] font-semibold uppercase text-[#5D5D61]">
              Payment Method
            </p>

            <div className="flex flex-col gap-3">
              {paymentMethods.map((method) => {
                const selected = paymentMethod === method.id;

                return (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => setPaymentMethod(method.id)}
                    className={`flex min-h-[72px] w-full items-center gap-4 rounded-[10px] border px-5 text-left transition ${
                      selected
                        ? "border-[#00B6CE] bg-white"
                        : "border-[#E5E5EB] bg-white hover:border-[#BFC0C8]"
                    }`}
                  >
                    {/* Radio */}
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                        selected ? "border-[#00B6CE]" : "border-[#E5E5EB]"
                      }`}
                    >
                      {selected && (
                        <span className="h-2.5 w-2.5 rounded-full bg-[#00B6CE]" />
                      )}
                    </span>

                    {/* Payment logo placeholder */}
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] ${
                        method.id === "Stripe"
                          ? "bg-[#5B3DF5]"
                          : method.id === "Paystack"
                            ? "bg-[#011B33]"
                            : method.id === "PayPal"
                              ? "bg-[#F7F7F7]"
                              : "bg-[#1F1F25]"
                      }`}
                    >
                      <span className="text-sm font-bold text-white">
                        {method.id === "Stripe"
                          ? "S"
                          : method.id === "PayPal"
                            ? "P"
                            : method.id === "Paystack"
                              ? "≡"
                              : "D"}
                      </span>
                    </span>

                    <div>
                      <p className="text-[14px] font-semibold text-[#1F1F25]">
                        {method.name}
                      </p>

                      <p className="mt-1 text-[11px] text-[#5D5D61]">
                        {method.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Card details */}
          <div className="mt-6">
            <p className="mb-4 text-[11px] font-semibold uppercase text-[#5D5D61]">
              Card Details
            </p>

            <div className="flex flex-col gap-4">
              <div>
                <label className="mb-2 block text-[12px] font-semibold text-[#1F1F25]">
                  Card Number
                </label>

                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="h-[42px] w-full rounded-[10px] border border-[#E5E5EB] px-4 text-[13px] outline-none placeholder:text-[#5D5D61] focus:border-[#00B6CE]"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[12px] font-semibold text-[#1F1F25]">
                    Expiry
                  </label>

                  <input
                    type="text"
                    placeholder="MM / YY"
                    className="h-[42px] w-full rounded-[10px] border border-[#E5E5EB] px-4 text-[13px] outline-none placeholder:text-[#5D5D61] focus:border-[#00B6CE]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[12px] font-semibold text-[#1F1F25]">
                    CVC
                  </label>

                  <input
                    type="password"
                    placeholder="123"
                    maxLength={3}
                    className="h-[42px] w-full rounded-[10px] border border-[#E5E5EB] px-4 text-[13px] outline-none placeholder:text-[#5D5D61] focus:border-[#00B6CE]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={onBack}
              className="h-[43px] rounded-[10px] border border-[#E5E5EB] bg-white px-[22px] text-[14px] font-semibold text-[#1F1F25]"
            >
              Back
            </button>

            <button
              type="button"
              onClick={onSubmit}
              className="h-[43px] rounded-[10px] bg-[#00B6CE] px-[22px] text-[14px] font-semibold text-white transition hover:bg-[#00A5BB]"
            >
              Pay & Submit Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
