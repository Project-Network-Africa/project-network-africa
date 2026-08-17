"use client";
import { Button } from "@/src/components/ui";

interface ReferralLinkProps {
  referralLink: string;
}

export default function ReferralLink({ referralLink }: ReferralLinkProps) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(referralLink);
  };

  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Your Referral Link
      </p>

      <p className="mt-4 text-[12px] text-[#5D5D61]">
        Invite a friend to PN Africa — you both get rewarded when they join a
        cohort.
      </p>

      <div className="mt-4 flex gap-2">
        <div className="flex h-11 flex-1 items-center rounded-[8px] border border-[#E5E5EB] bg-[#F9F9FA] px-[14px] text-[12px] text-[#1F1F25]">
          {referralLink}
        </div>

        <Button
          variant="dark"
          onClick={handleCopy}
          className="h-10 shrink-0 rounded-[8px] px-5 text-[12px] font-semibold"
        >
          Copy Link
        </Button>
      </div>
    </section>
  );
}
