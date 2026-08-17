"use client";

import { Conversation } from "./messages.types";
import ConversationItem from "./ConversationItem";

interface ConversationListProps {
  conversations: Conversation[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export default function ConversationList({
  conversations,
  selectedId,
  onSelect,
}: ConversationListProps) {
  return (
    <section className="w-full overflow-hidden rounded-[14px] border border-[#E5E5EB] bg-white">
      {/* Header */}
      <div className="px-4 py-4">
        <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
          Conversations
        </p>
      </div>

      {/* Conversations */}
      <div className="flex flex-col">
        {conversations.map((conversation) => (
          <ConversationItem
            key={conversation.id}
            conversation={conversation}
            isSelected={selectedId === conversation.id}
            onClick={() => onSelect(conversation.id)}
          />
        ))}
      </div>
    </section>
  );
}
