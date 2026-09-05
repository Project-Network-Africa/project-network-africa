// "use client";

// import { useState } from "react";
// import { Button } from "../../ui";
// import Image from "next/image";

// type PaymentMethod = "Stripe" | "PayPal" | "Paystack" | "Debit Card";

// const paymentMethods: {
//   id: PaymentMethod;
//   name: string;
//   description: string;
// }[] = [
//   // {
//   //   id: "Stripe",
//   //   name: "Stripe",
//   //   description: "Pay by card — Visa, Mastercard, Verve",
//   // },
//   // {
//   //   id: "PayPal",
//   //   name: "PayPal",
//   //   description: "Pay using your PayPal balance or linked card",
//   // },
//   {
//     id: "Paystack",
//     name: "Paystack",
//     description: "Pay with card, bank transfer, or USSD",
//   },
//   // {
//   //   id: "Debit Card",
//   //   name: "Debit Card",
//   //   description: "Pay directly with any Visa, Mastercard, or Verve debit card",
//   // },
// ];
// const paymentLogos: Record<string, string> = {
//   Stripe: "/images/payments/paystripe.png",
//   PayPal: "/images/payments/paypal.png",
//   Paystack: "/images/payments/paystack.png",
// };
// interface ReviewPaymentProps {
//   onBack: () => void;
//   onSubmit: () => void;
// }

// export default function ReviewPayment({
//   onBack,
//   onSubmit,
// }: ReviewPaymentProps) {
//   const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("Stripe");

//   return (
//     <div className="flex w-full gap-16 font-body ">
//       {/* Main content */}
//       <div className="flex-1">
//         <div className="mx-auto max-w-[936px]">
//           <h1 className="lg:text-[26px] md:text-[19px] text-[12px] font-bold leading-none text-[#1F1F25]">
//             Review & Payment
//           </h1>

//           <p className="mt-6 text-[14px] font-normal leading-none text-[#5D5D61]">
//             Choose how you will like to pay your application fee.
//           </p>

//           {/* Payment methods */}
//           <div className="mt-6">
//             <p className="mb-3 text-[11px] font-normal lg:font-semibold uppercase text-[#5D5D61]">
//               Payment Method
//             </p>

//             <div className="flex flex-col gap-3">
//               {paymentMethods.map((method) => {
//                 const selected = paymentMethod === method.id;

//                 return (
//                   <button
//                     key={method.id}
//                     type="button"
//                     onClick={() => setPaymentMethod(method.id)}
//                     className={`flex min-h-[72px] w-full items-center gap-4 rounded-[10px] border px-5 text-left transition ${
//                       selected
//                         ? "border-[#00B6CE] bg-white"
//                         : "border-[#E5E5EB] bg-white hover:border-[#BFC0C8]"
//                     }`}
//                   >
//                     {/* Radio */}
//                     <span
//                       className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
//                         selected ? "border-[#00B6CE]" : "border-[#E5E5EB]"
//                       }`}
//                     >
//                       {selected && (
//                         <span className="h-2.5 w-2.5 rounded-full bg-[#00B6CE]" />
//                       )}
//                     </span>

//                     {/* Payment logo placeholder */}
//                     <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
//                       <Image
//                         src={
//                           paymentLogos[method.id] ??
//                           "/images/payments/paystack.png"
//                         }
//                         alt={`${method.id} payment`}
//                         width={32}
//                         height={32}
//                         className="h-8 rounded-[10px] w-8 object-contain"
//                       />
//                     </div>
//                     <div>
//                       <p className="text-[14px] font-medium lg:font-semibold text-[#1F1F25]">
//                         {method.name}
//                       </p>

//                       <p className="mt-1 lg:text-[11px] text-[12px] font-normal text-[#5D5D61]">
//                         {method.description}
//                       </p>
//                     </div>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Card details */}
//           {/* <div className="mt-6">
//             <p className="mb-4 text-[11px] font-semibold uppercase text-[#5D5D61]">
//               Card Details
//             </p>

//             <div className="flex flex-col gap-4">
//               <div>
//                 <label className="mb-2 block text-[12px] font-semibold text-[#1F1F25]">
//                   Card Number
//                 </label>

//                 <input
//                   type="text"
//                   placeholder="1234 5678 9012 3456"
//                   className="h-[42px] w-full rounded-[10px] border border-[#E5E5EB] px-4 text-[13px] outline-none placeholder:text-[#5D5D61] focus:border-[#00B6CE]"
//                 />
//               </div>

//               <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//                 <div>
//                   <label className="mb-2 block text-[12px] font-semibold text-[#1F1F25]">
//                     Expiry
//                   </label>

//                   <input
//                     type="text"
//                     placeholder="MM / YY"
//                     className="h-[42px] w-full rounded-[10px] border border-[#E5E5EB] px-4 text-[13px] outline-none placeholder:text-[#5D5D61] focus:border-[#00B6CE]"
//                   />
//                 </div>

//                 <div>
//                   <label className="mb-2 block text-[12px] font-semibold text-[#1F1F25]">
//                     CVC
//                   </label>

//                   <input
//                     type="password"
//                     placeholder="123"
//                     maxLength={3}
//                     className="h-[42px] w-full rounded-[10px] border border-[#E5E5EB] px-4 text-[13px] outline-none placeholder:text-[#5D5D61] focus:border-[#00B6CE]"
//                   />
//                 </div>
//               </div>
//             </div>
//           </div> */}

//           {/* Buttons */}

//           <div className="mt-6 flex justify-end gap-3">
//             <Button
//               variant="light"
//               onClick={onBack}
//               className="h-[43px] rounded-[10px] border border-[#E5E5EB] px-[22px] text-[14px] font-semibold"
//             >
//               Back
//             </Button>

//             <Button
//               variant="dark"
//               onClick={onSubmit}
//               className="h-[43px] rounded-[10px] px-[22px] text-[14px] font-semibold"
//             >
//               Pay & Submit Application
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { Button } from "../../../ui";
import Image from "next/image";

type PaymentMethod = "Stripe" | "PayPal" | "Paystack" | "Debit Card";

const paymentMethods: {
  id: PaymentMethod;
  name: string;
  description: string;
}[] = [
  {
    id: "Paystack",
    name: "Paystack",
    description: "Pay with card, bank transfer, or USSD",
  },
];

const paymentLogos: Record<string, string> = {
  Stripe: "/images/payments/paystripe.png",
  PayPal: "/images/payments/paypal.png",
  Paystack: "/images/payments/paystack.png",
};

interface ReviewPaymentProps {
  onBack: () => void;
  onSubmit: (paymentMethod: PaymentMethod) => void;
}

export default function ReviewPayment({
  onBack,
  onSubmit,
}: ReviewPaymentProps) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(
    null,
  );

  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!paymentMethod) {
      setError("Please select a payment method to continue.");
      return;
    }

    setError("");
    onSubmit(paymentMethod);
  };

  const handlePaymentMethodChange = (method: PaymentMethod) => {
    setPaymentMethod(method);
    setError("");
  };

  return (
    <div className="flex w-full gap-16 font-body">
      {/* Main content */}
      <div className="flex-1">
        <div className="mx-auto max-w-[936px]">
          {/* Heading */}
          <h1 className="text-[12px] font-bold leading-none text-[#1F1F25] md:text-[19px] lg:text-[26px]">
            Review &amp; Payment
          </h1>

          <p className="mt-6 text-[14px] font-normal leading-none text-[#5D5D61]">
            Choose how you will like to pay your application fee.
          </p>

          {/* Payment methods */}
          <div className="mt-6">
            <p className="mb-3 text-[11px] font-normal uppercase text-[#5D5D61] lg:font-semibold">
              Payment Method
            </p>

            <div className="flex flex-col gap-3">
              {paymentMethods.map((method) => {
                const selected = paymentMethod === method.id;

                return (
                  <button
                    key={method.id}
                    type="button"
                    onClick={() => handlePaymentMethodChange(method.id)}
                    className={`
                      flex min-h-[72px] w-full items-center gap-4
                      rounded-[10px] border px-5 text-left transition
                      ${
                        selected
                          ? "border-[#00B6CE] bg-white"
                          : "border-[#E5E5EB] bg-white hover:border-[#BFC0C8]"
                      }
                    `}
                  >
                    {/* Radio */}
                    <span
                      className={`
                        flex h-5 w-5 shrink-0 items-center
                        justify-center rounded-full border
                        ${selected ? "border-[#00B6CE]" : "border-[#E5E5EB]"}
                      `}
                    >
                      {selected && (
                        <span className="h-2.5 w-2.5 rounded-full bg-[#00B6CE]" />
                      )}
                    </span>

                    {/* Payment logo */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                      <Image
                        src={
                          paymentLogos[method.id] ??
                          "/images/payments/paystack.png"
                        }
                        alt={`${method.id} payment`}
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded-[10px] object-contain"
                      />
                    </div>

                    {/* Payment information */}
                    <div>
                      <p className="text-[14px] font-medium text-[#1F1F25] lg:font-semibold">
                        {method.name}
                      </p>

                      <p className="mt-1 text-[12px] font-normal text-[#5D5D61] lg:text-[11px]">
                        {method.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Payment error */}
            {error && (
              <p className="mt-2 text-xs font-medium text-red-500">{error}</p>
            )}
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end gap-3">
            <Button
              variant="light"
              onClick={onBack}
              className="h-[43px] rounded-[10px] border border-[#E5E5EB] px-[22px] text-[14px] font-semibold"
            >
              Back
            </Button>

            <Button
              variant="dark"
              onClick={handleSubmit}
              className="h-[43px] rounded-[10px] px-[22px] text-[14px] font-semibold"
            >
              Pay &amp; Submit Application
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
