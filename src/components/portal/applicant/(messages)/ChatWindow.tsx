"use client";

import { useEffect, useRef } from "react";
import { Conversation, Message } from "./messages.types";
import ChatHeader from "./ChatHeader";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

interface ChatWindowProps {
  conversation: Conversation;
  messages: Message[];
  onSend: (message: string) => void;
}

export default function ChatWindow({
  conversation,
  messages,
  onSend,
}: ChatWindowProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <section className="flex min-h-[500px] w-full flex-col overflow-hidden rounded-[14px] border border-[#E5E5EB] bg-[#F8F8F8]">
      <ChatHeader conversation={conversation} />

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 py-5">
        <div className="flex flex-col gap-4">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <MessageInput onSend={onSend} />
    </section>
  );
}
