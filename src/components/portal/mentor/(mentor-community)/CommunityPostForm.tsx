"use client";

import { useState } from "react";

import { Button } from "@/src/components/ui";

interface CommunityPostFormProps {
  onSubmit?: (message: string) => void;
}

export default function CommunityPostForm({
  onSubmit,
}: CommunityPostFormProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      return;
    }

    onSubmit?.(trimmedMessage);

    setMessage("");
  };

  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase leading-[100%] text-[#5D5D61]">
        Share With Other Mentors
      </p>

      <textarea
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Share a tip, ask a question, or start a discussion..."
        className="mt-[14px] min-h-[60px] w-full resize-none rounded-[8px] border border-[#E5E5EB] bg-[#F8F8F9] px-[13px] py-[12px] text-[12px] text-[#1F1F25] outline-none placeholder:text-[#5D5D61] focus:border-[#00B6CE]"
      />

      <Button
        onClick={handleSubmit}
        className="mt-[14px] h-[36px] rounded-[8px] bg-[#00B6CE] px-5 text-[12px] font-semibold text-white transition hover:opacity-90"
      >
        Post
      </Button>
    </section>
  );
}
