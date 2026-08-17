"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/src/components/ui";

interface MessageInputProps {
  onSend: (message: string) => void;
}

export default function MessageInput({ onSend }: MessageInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage) return;

    onSend(trimmedMessage);
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 border-t border-[#E5E5EB] p-3"
    >
      <input
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Type a message..."
        className="h-[38px] flex-1 rounded-[8px] border border-[#E5E5EB] px-3 text-[12px] text-[#1F1F25] outline-none placeholder:text-[#8A8A90] focus:border-[#00B6CE]"
      />

      <Button
        variant="dark"
        className="h-[38px] rounded-[8px] px-4 text-[11px] font-semibold"
      >
        Send
      </Button>
    </form>
  );
}
