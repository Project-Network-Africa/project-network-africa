"use client";

interface ApplicationConfirmationProps {
  reference: string;
  cohort: string;
  onBackHome: () => void;
  onContinue: () => void;
}

export default function ApplicationConfirmation({
  reference,
  cohort,
  onBackHome,
  onContinue,
}: ApplicationConfirmationProps) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8F8F8] px-5 py-10">
      <div className="w-full max-w-[540px] rounded-[20px] bg-white px-8 py-12 shadow-[0_10px_40px_rgba(31,31,37,0.08)] sm:px-12">
        {/* Success icon */}
        <div className="flex justify-center">
          <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#00B6CE]">
            <span className="text-[34px] font-bold leading-none text-white">
              ✓
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="mt-7 text-center">
          <h1 className="text-[26px] font-bold leading-[120%] text-[#1F1F25]">
            Application Submitted!
          </h1>

          <p className="mx-auto mt-5 max-w-[390px] text-[14px] leading-[17px] text-[#5D5D61]">
            Thanks for applying to PN Africa! We have received your application
            and payment for {cohort}. You will hear back from our admissions
            team within 5–7 business days.
          </p>
        </div>

        {/* Application reference */}
        <div className="mx-auto mt-6 w-fit rounded-[12px] bg-[#F6F6F7] px-6 py-4 text-center">
          <p className="text-[9px] font-semibold uppercase text-[#5D5D61]">
            Application Reference
          </p>

          <p className="mt-1 text-[20px] font-bold leading-none text-[#1F1F25]">
            #{reference}
          </p>
        </div>

        {/* What happens next */}
        <div className="mt-7">
          <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
            What Happens Next
          </p>

          <div className="mt-3 flex flex-col gap-3">
            <NextStep number="1" active>
              Confirmation email sent to your inbox
            </NextStep>

            <NextStep number="2">
              Application review by our admissions team
            </NextStep>

            <NextStep number="3">
              Interview invitation (if shortlisted)
            </NextStep>

            <NextStep number="4">Cohort match & onboarding</NextStep>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-7 flex justify-center gap-3">
          <button
            type="button"
            onClick={onBackHome}
            className="
              h-[43px]
              rounded-[10px]
              bg-[#00B6CE]
              px-[22px]
              text-[14px]
              font-semibold
              text-white
              transition
              hover:bg-[#009DB3]
            "
          >
            Back to Homepage
          </button>

          <button
            onClick={onContinue}
            className="
              h-[43px]
              rounded-[10px]
              border
              border-[#E5E5EB]
              bg-white
              px-[22px]
              text-[14px]
              font-semibold
              text-[#1F1F25]
              transition
              hover:bg-[#F6F6F7]
            "
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}

interface NextStepProps {
  number: string;
  children: React.ReactNode;
  active?: boolean;
}

function NextStep({ number, children, active = false }: NextStepProps) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`
          flex h-[24px] w-[24px] shrink-0 items-center justify-center
          rounded-full text-[11px] font-semibold
          ${active ? "bg-[#00B6CE] text-white" : "bg-[#F1F1F2] text-[#5D5D61]"}
        `}
      >
        {number}
      </span>

      <p className="text-[13px] text-[#1F1F25]">{children}</p>
    </div>
  );
}
