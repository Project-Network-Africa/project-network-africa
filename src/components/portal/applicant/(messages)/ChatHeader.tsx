import { Conversation } from "./messages.types";

interface ChatHeaderProps {
  conversation: Conversation;
}

export default function ChatHeader({ conversation }: ChatHeaderProps) {
  return (
    <div className="flex items-center gap-3 border-b border-[#E5E5EB] px-5 py-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1F1F25] text-[12px] font-semibold text-white">
        {conversation.initials}
      </div>

      <div className="min-w-0">
        <p className="truncate text-[14px] font-semibold text-[#1F1F25]">
          {conversation.name}
        </p>

        {conversation.role && (
          <p className="truncate text-[11px] text-[#5D5D61]">
            {conversation.role}
          </p>
        )}
      </div>
    </div>
  );
}
