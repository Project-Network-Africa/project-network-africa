"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui";

export default function InviteByEmail() {
  const [email, setEmail] = useState("");

  const handleInvite = () => {
    console.log("Invite sent to:", email);
  };

  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Invite by Email
      </p>

      <div className="mt-4 flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="friend@email.com"
          className="h-11 min-w-0 flex-1 rounded-[8px] border border-[#E5E5EB] bg-[#F9F9FA] px-[14px] text-[12px] text-[#1F1F25] outline-none placeholder:text-[#8A8A8F] focus:border-[#00B6CE]"
        />

        <Button
          variant="dark"
          onClick={handleInvite}
          className="h-10 shrink-0 rounded-[8px] px-5 text-[12px] font-semibold"
        >
          Send Invite
        </Button>
      </div>
    </section>
  );
}
