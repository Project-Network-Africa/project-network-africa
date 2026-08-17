"use client";

import Image from "next/image";
import Button from "@/src/components/ui/Button";
import { useState } from "react";

type PaymentMethod = "stripe" | "paypal";

interface PaymentMethodItem {
  id: PaymentMethod;
  name: string;
  logo: string;
}

interface PaymentMethodProps {
  methods: readonly PaymentMethodItem[];
  outstandingAmount: number;
}

export default function PaymentMethod({
  methods,
  outstandingAmount,
}: PaymentMethodProps) {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>("stripe");

  const formattedAmount = new Intl.NumberFormat("en-NG").format(
    outstandingAmount,
  );

  return (
    <div className="flex w-full flex-col gap-[14px] rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Choose Payment Method
      </p>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {methods.map((method) => {
          const isSelected = selectedMethod === method.id;

          return (
            <button
              key={method.id}
              type="button"
              onClick={() => setSelectedMethod(method.id)}
              className={`flex h-[68px] items-center gap-[14px] rounded-[10px] bg-white px-[18px] py-[14px] text-left ${
                isSelected
                  ? "border-2 border-[#00B6CE]"
                  : "border border-[#E5E5EB]"
              }`}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-[#F6F6F7]">
                <Image
                  src={method.logo}
                  alt={method.name}
                  width={44}
                  height={20}
                  className="h-auto w-auto object-contain"
                />
              </div>

              <span className="text-[13px] font-semibold text-[#1F1F25]">
                {method.name}
              </span>
            </button>
          );
        })}
      </div>

      <Button
        variant="dark"
        className="h-[35px] w-full max-w-[210px] shrink-0 rounded-[8px] px-4 py-[10px] text-[12px] font-semibold"
      >
        Pay ₦{formattedAmount} with{" "}
        {selectedMethod === "stripe" ? "Stripe" : "PayPal"}
      </Button>
    </div>
  );
}
