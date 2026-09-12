"use client";

import { useState } from "react";

import { Button } from "@/src/components/ui";

type MentorState = "not-applied" | "pending" | "rejected" | "accepted";

interface AccountSettingsProps {
  mentorState: MentorState;
  firstName?: string;
  lastName?: string;
  email?: string;
}

export default function AccountSettings({
  mentorState,
  firstName = "",
  lastName = "",
  email = "",
}: AccountSettingsProps) {
  const isAccepted = mentorState === "accepted";

  const [fullName, setFullName] = useState(`${firstName} ${lastName}`.trim());

  const [userEmail, setUserEmail] = useState(email);

  const handleSave = () => {
    console.log({
      fullName,
      email: userEmail,
    });
  };

  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase leading-[100%] text-[#5D5D61]">
        Account
      </p>

      <div className="mt-[14px] grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Full Name */}
        <div>
          <label
            htmlFor="full-name"
            className="text-[12px] font-semibold text-[#1F1F25]"
          >
            Full Name
          </label>

          <input
            id="full-name"
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            readOnly={!isAccepted}
            className={`mt-[6px] h-[38px] w-full rounded-[8px] border border-[#E5E5EB] px-[13px] text-[12px] text-[#1F1F25] outline-none transition ${
              isAccepted
                ? "bg-white focus:border-[#00B6CE]"
                : "cursor-not-allowed bg-[#F8F8F8] text-[#5D5D61]"
            }`}
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="text-[12px] font-semibold text-[#1F1F25]"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            value={userEmail}
            onChange={(event) => setUserEmail(event.target.value)}
            readOnly={!isAccepted}
            className={`mt-[6px] h-[38px] w-full rounded-[8px] border border-[#E5E5EB] px-[13px] text-[12px] text-[#1F1F25] outline-none transition ${
              isAccepted
                ? "bg-white focus:border-[#00B6CE]"
                : "cursor-not-allowed bg-[#F8F8F8] text-[#5D5D61]"
            }`}
          />
        </div>
      </div>

      {/* Save button only for accepted mentors */}
      {isAccepted && (
        <Button
          variant="dark"
          onClick={handleSave}
          className="mt-[14px] h-[35px] rounded-[8px] bg-[#00B6CE] px-[16px] text-[11px] font-semibold text-white hover:opacity-90"
        >
          Save Changes
        </Button>
      )}
    </section>
  );
}
