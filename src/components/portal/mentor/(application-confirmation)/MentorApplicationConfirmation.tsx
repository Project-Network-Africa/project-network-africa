"use client";

import { useRouter } from "next/navigation";

interface MentorApplicationConfirmationProps {
  reference?: string;
}

export default function MentorApplicationConfirmation({
  reference,
}: MentorApplicationConfirmationProps) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-[#F8F8F8] px-5 py-8">
      <div className="mx-auto w-full max-w-2xl rounded-2xl border border-[#E8E8E8] bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="mt-6 text-2xl font-semibold text-[#171719]">
          Application Submitted Successfully!
        </h1>

        <p className="mt-3 text-sm leading-6 text-[#5D5D61]">
          Your mentor application has been submitted successfully. Our team will
          review your application and get back to you once a decision has been
          made.
        </p>

        {reference && (
          <div className="mt-6 rounded-xl bg-[#F7F7F7] p-4">
            <p className="text-xs text-[#777]">Application Reference</p>
            <p className="mt-1 text-sm font-semibold text-[#171719]">
              {reference}
            </p>
          </div>
        )}

        <div className="mt-6">
          <button
            type="button"
            onClick={() => router.push("/mentor/dashboard")}
            className="w-full rounded-lg bg-[#171719] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
