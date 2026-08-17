"use client";

import { Conversation } from "./messages.types";

interface ConversationItemProps {
  conversation: Conversation;
  isSelected: boolean;
  onClick: () => void;
}

export default function ConversationItem({
  conversation,
  isSelected,
  onClick,
}: ConversationItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors ${
        isSelected ? "bg-[#E0F7FA]" : "bg-white hover:bg-[#F8F8F8]"
      }`}
    >
      {/* Avatar */}
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1F1F25] text-[12px] font-semibold text-white">
        {conversation.initials}
      </div>

      {/* Conversation details */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-[13px] font-semibold text-[#1F1F25]">
            {conversation.name}
          </p>

          <span className="shrink-0 text-[10px] text-[#5D5D61]">
            {conversation.time}
          </span>
        </div>

        <div className="mt-1 flex items-center justify-between gap-2">
          <p className="truncate text-[11px] text-[#5D5D61]">
            {conversation.preview}
          </p>

          {conversation.unread && (
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#00B6CE]" />
          )}
        </div>
      </div>
    </button>
  );
}
