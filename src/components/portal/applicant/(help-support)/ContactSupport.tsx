"use client";
import { Button } from "@/src/components/ui";

export default function ContactSupport() {
  return (
    <section className="flex min-h-[164px] flex-col rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Contact Support
      </p>

      <p className="mt-4 max-w-[390px] text-[12px] leading-[1.4] text-[#5D5D61]">
        Can&apos;t find what you need? Our support team typically replies within
        a few hours.
      </p>

      <Button
        variant="dark"
        className="mt-auto w-fit rounded-[8px] px-5 py-[10px] text-[12px] font-semibold"
        onClick={() => {
          console.log("Contact support");
        }}
      >
        Contact Support
      </Button>
    </section>
  );
}
