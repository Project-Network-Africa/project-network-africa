"use client";

import { Message, MessageUser } from "./messages.types";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

interface ChatWindowProps {
  user: MessageUser;
  messages: Message[];
  currentUserId: string;
  onSendMessage: (message: string) => void;
}

export default function ChatWindow({
  user,
  messages,
  currentUserId,
  onSendMessage,
}: ChatWindowProps) {
  return (
    <section className="flex min-h-[420px] flex-1 flex-col">
      {/* Header */}
      <div className="border-b border-[#E5E5EB] px-5 py-4">
        <p className="text-[14px] font-semibold text-[#1F1F25]">{user.name}</p>
      </div>

      {/* Messages */}
      <div className="flex flex-1 flex-col gap-3 overflow-y-auto px-5 py-4">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            isMine={message.senderId === currentUserId}
          />
        ))}
      </div>

      {/* Input */}
      <MessageInput onSend={onSendMessage} />
    </section>
  );
}
