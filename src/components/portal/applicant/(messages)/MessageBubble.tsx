import { Message } from "./messages.types";

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const isMine = message.sender === "me";

  return (
    <div className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] rounded-[12px] px-3 py-2.5 text-[13px] leading-[1.25] ${
          isMine
            ? "bg-[#00B6CE] text-white"
            : "border border-[#E5E5EB] bg-white text-[#1F1F25]"
        }`}
      >
        {message.text}
      </div>
    </div>
  );
}
