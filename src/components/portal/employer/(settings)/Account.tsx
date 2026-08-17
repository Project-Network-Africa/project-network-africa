"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui";
import { employerSettingsData } from "@/src/data/employer/settings";

export default function Account() {
  const [contactName, setContactName] = useState(
    employerSettingsData.account.contactName,
  );

  const [email, setEmail] = useState(employerSettingsData.account.email);

  const handleSaveChanges = () => {
    console.log({
      contactName,
      email,
    });
  };

  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Account
      </p>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-name"
            className="text-[12px] font-semibold text-[#1F1F25]"
          >
            Contact Name
          </label>

          <input
            id="contact-name"
            type="text"
            value={contactName}
            onChange={(event) => setContactName(event.target.value)}
            className="h-[38px] w-full rounded-[8px] border border-[#E5E5EB] bg-white px-[13px] text-[12px] text-[#1F1F25] outline-none transition focus:border-[#00B6CE]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-[12px] font-semibold text-[#1F1F25]"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="h-[38px] w-full rounded-[8px] border border-[#E5E5EB] bg-white px-[13px] text-[12px] text-[#1F1F25] outline-none transition focus:border-[#00B6CE]"
          />
        </div>
      </div>

      <Button
        variant="dark"
        onClick={handleSaveChanges}
        className="mt-[14px] h-[36px] rounded-[8px] px-4 text-[11px] font-semibold"
      >
        Save Changes
      </Button>
    </section>
  );
}
