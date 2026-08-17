import { Conversation, MessageUser } from "./messages.types";

interface ConversationItemProps {
  conversation: Conversation;
  user: MessageUser;
  currentUserId: string;
  selected: boolean;
  onClick: () => void;
}

export default function ConversationItem({
  conversation,
  user,
  currentUserId,
  selected,
  onClick,
}: ConversationItemProps) {
  const lastMessage = conversation.messages[conversation.messages.length - 1];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex w-full items-start gap-3 rounded-[8px] px-3 py-2 text-left transition ${
        selected ? "bg-[#F5F5F6]" : "hover:bg-[#F8F8F9]"
      }`}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#00B6CE] text-[12px] font-semibold text-white">
        {user.initials}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-semibold text-[#1F1F25]">{user.name}</p>

        <p
          className={`mt-1 truncate text-[11px] ${
            lastMessage.senderId !== currentUserId && !lastMessage.read
              ? "font-semibold text-[#1F1F25]"
              : "text-[#5D5D61]"
          }`}
        >
          {lastMessage.content}
        </p>
      </div>
    </button>
  );
}
