"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui";

interface BookingLinkProps {
  link: string;
}

export default function BookingLink({ link }: BookingLinkProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`https://${link}`);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase leading-[100%] text-[#5D5D61]">
        Shareable Booking Link
      </p>

      <div className="mt-[14px] flex items-center gap-[10px]">
        <div className="flex h-[40px] min-w-0 flex-1 items-center rounded-[8px] border border-[#E5E5EB] bg-[#F8F8F9] px-[12px]">
          <span className="truncate text-[12px] text-[#5D5D61]">{link}</span>
        </div>

        <Button
          onClick={handleCopy}
          className="h-[36px] shrink-0 rounded-[8px] bg-[#00B6CE] px-4 text-[11px] font-semibold text-white hover:opacity-90"
        >
          {copied ? "Copied" : "Copy"}
        </Button>
      </div>
    </section>
  );
}
