"use client";

import { useState } from "react";

import { Button } from "@/src/components/ui";
import { BroadcastRecipient } from "@/src/types/mentor/broadcast";

interface BroadcastFormProps {
  recipients: BroadcastRecipient[];
  onSubmit?: (message: string) => void;
}

export default function BroadcastForm({
  recipients,
  onSubmit,
}: BroadcastFormProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!message.trim()) {
      return;
    }

    onSubmit?.(message.trim());

    setMessage("");
  };

  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase leading-[100%] text-[#5D5D61]">
        New Broadcast
      </p>

      {/* Recipients */}
      <div className="mt-[14px]">
        <label
          htmlFor="broadcast-recipients"
          className="text-[12px] font-medium text-[#1F1F25]"
        >
          Send to
        </label>

        <select
          id="broadcast-recipients"
          defaultValue="all"
          className="mt-1 h-[38px] w-full rounded-[8px] border border-[#E5E5EB] bg-[#F8F8F9] px-[13px] text-[12px] font-semibold text-[#1F1F25] outline-none focus:border-[#00B6CE]"
        >
          <option value="all">
            All Assigned Mentees ({recipients.length})
          </option>

          {recipients.map((recipient) => (
            <option key={recipient.id} value={recipient.id}>
              {recipient.name}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="mt-[14px]">
        <label
          htmlFor="broadcast-message"
          className="text-[12px] font-medium text-[#1F1F25]"
        >
          Message
        </label>

        <textarea
          id="broadcast-message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Write your broadcast..."
          className="mt-1 min-h-[90px] w-full resize-none rounded-[8px] border border-[#E5E5EB] bg-[#F8F8F9] px-[13px] py-[12px] text-[12px] text-[#1F1F25] outline-none placeholder:text-[#5D5D61] focus:border-[#00B6CE]"
        />
      </div>

      <Button
        onClick={handleSubmit}
        className="mt-[14px] h-[40px] rounded-[8px] bg-[#00B6CE] px-5 text-[12px] font-semibold text-white hover:opacity-90"
      >
        Send Broadcast
      </Button>
    </section>
  );
}
