"use client";
import { Button } from "@/src/components/ui";
import { useRouter } from "next/navigation";
interface DeactivateAccountProps {
  onCancel?: () => void;
  onConfirm?: () => void;
}

export default function DeactivateAccount({
  onCancel,
  onConfirm,
}: DeactivateAccountProps) {
  const router = useRouter();
  return (
    <section className="w-full max-w-[600px] rounded-[14px] border border-[#DC2727] bg-white px-[22px] py-8 shadow-[0px_2px_8px_0px_#0000000A]">
      {/* Warning icon */}
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#FCE8E8]">
        <span className="text-[26px] font-bold text-[#DC2727]">!</span>
      </div>

      {/* Title */}
      <h1 className="text-[18px] font-bold text-[#1F1F25]">
        Deactivate your account?
      </h1>

      {/* Description */}
      <p className="mt-4 text-[13px] leading-[160%] text-[#5D5D61]">
        This will pause your application and cohort access immediately. Your
        team, mentor, and project data will be preserved, and you can reactivate
        by logging back in within 30 days. After 30 days, your data may be
        permanently deleted.
      </p>

      {/* Actions */}
      <div className="mt-4 flex gap-3">
        <Button
          variant="light"
          // onClick={() => router.back()}
          onClick={() => router.push("/mentor/settings")}
          className="h-10 rounded-[8px] px-5 py-3 text-[13px] font-semibold"
        >
          Cancel
        </Button>

        <Button
          // onClick={onConfirm}
          onClick={() => {
            router.push("/applicant/settings/deactivated");
          }}
          className="h-10 rounded-[8px] bg-[#DC2727] px-5 py-3 text-[13px] font-semibold text-white hover:bg-[#B91C1C]"
        >
          Yes, Deactivate My Account
        </Button>
      </div>
    </section>
  );
}
