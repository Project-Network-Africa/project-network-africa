"use client";

import { Button } from "@/src/components/ui";

export default function AccountDeactivated() {
  return (
    <main className="flex  w-full items-center justify-center bg-[#F6F6F7] px-5 py-[70px]">
      <section className="flex w-full max-w-[440px] flex-col items-center gap-4 rounded-[18px] bg-white px-9 py-10 shadow-[0px_8px_24px_0px_#0000000F]">
        {/* Success Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E5FAFC]">
          <span className="text-[28px] font-bold leading-none text-[#00B6CE]">
            ✓
          </span>
        </div>

        {/* Title */}
        <h1 className="text-center text-[18px] font-bold leading-none text-[#1F1F25]">
          Your account has been deactivated
        </h1>

        {/* Description */}
        <p className="text-center text-[13px] font-normal leading-[1.55] text-[#5D5D61]">
          You can reactivate anytime within 30 days by logging back in with your
          email and password.
        </p>

        {/* Back to Login */}
        <Button
          variant="dark"
          href="/login"
          className="h-[45px] w-full rounded-[10px] px-5 py-[14px] text-[14px] font-semibold"
        >
          Back to Log In
        </Button>
      </section>
    </main>
  );
}
