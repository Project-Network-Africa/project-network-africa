import { Conversation, MessageUser } from "./messages.types";
import ConversationItem from "./ConversationItem";

interface ConversationListProps {
  conversations: Conversation[];
  users: MessageUser[];
  currentUserId: string;
  selectedConversationId: string | null;
  onSelectConversation: (conversationId: string) => void;
}

export default function ConversationList({
  conversations,
  users,
  currentUserId,
  selectedConversationId,
  onSelectConversation,
}: ConversationListProps) {
  return (
    <aside className="w-full border-r border-[#E5E5EB] md:w-[320px]">
      <div className="p-3">
        <div className="flex flex-col gap-1">
          {conversations.map((conversation) => {
            const otherUserId = conversation.participants.find(
              (id) => id !== currentUserId,
            );

            const user = users.find((item) => item.id === otherUserId);

            if (!user) return null;

            return (
              <ConversationItem
                key={conversation.id}
                conversation={conversation}
                user={user}
                currentUserId={currentUserId}
                selected={conversation.id === selectedConversationId}
                onClick={() => onSelectConversation(conversation.id)}
              />
            );
          })}
        </div>
      </div>
    </aside>
  );
}
