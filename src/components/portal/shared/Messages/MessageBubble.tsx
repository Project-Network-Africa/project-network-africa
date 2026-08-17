import { Message } from "./messages.types";

interface MessageBubbleProps {
  message: Message;
  isMine: boolean;
}

export default function MessageBubble({ message, isMine }: MessageBubbleProps) {
  return (
    <div className={`flex ${isMine ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] rounded-[10px] px-4 py-[10px] text-[12px] leading-[1.4] ${
          isMine ? "bg-[#00B6CE] text-white" : "bg-[#F5F5F6] text-[#1F1F25]"
        }`}
      >
        {message.content}
      </div>
    </div>
  );
}
