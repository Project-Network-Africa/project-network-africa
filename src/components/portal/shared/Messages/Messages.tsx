"use client";

import { useMemo, useState } from "react";

import ConversationList from "./ConversationList";
import ChatWindow from "./ChatWindow";
import { Conversation, MessageUser } from "./messages.types";

interface MessagesProps {
  currentUserId: string;
  conversations: Conversation[];
  users: MessageUser[];
}

export default function Messages({
  currentUserId,
  conversations: initialConversations,
  users,
}: MessagesProps) {
  const [conversations, setConversations] = useState(initialConversations);

  const [selectedConversationId, setSelectedConversationId] = useState<
    string | null
  >(initialConversations[0]?.id ?? null);

  const currentConversations = useMemo(() => {
    return conversations.filter((conversation) =>
      conversation.participants.includes(currentUserId),
    );
  }, [conversations, currentUserId]);

  const selectedConversation = currentConversations.find(
    (conversation) => conversation.id === selectedConversationId,
  );

  const selectedUser = selectedConversation
    ? users.find(
        (user) =>
          selectedConversation.participants.includes(user.id) &&
          user.id !== currentUserId,
      )
    : undefined;

  const handleSendMessage = (content: string) => {
    if (!selectedConversation) return;
    if (!selectedUser) return;

    const newMessage = {
      id: `message-${Date.now()}`,
      senderId: currentUserId,
      receiverId: selectedUser.id,
      content,
      timestamp: new Date().toISOString(),
      read: true,
    };

    setConversations((current) =>
      current.map((conversation) =>
        conversation.id === selectedConversation.id
          ? {
              ...conversation,
              messages: [...conversation.messages, newMessage],
            }
          : conversation,
      ),
    );
  };

  return (
    <section className="flex min-h-[420px] w-full overflow-hidden rounded-[14px] border border-[#E5E5EB] bg-white shadow-[0px_2px_8px_0px_#0000000A]">
      <ConversationList
        conversations={currentConversations}
        users={users}
        currentUserId={currentUserId}
        selectedConversationId={selectedConversationId}
        onSelectConversation={setSelectedConversationId}
      />

      {selectedConversation && selectedUser ? (
        <ChatWindow
          user={selectedUser}
          messages={selectedConversation.messages}
          currentUserId={currentUserId}
          onSendMessage={handleSendMessage}
        />
      ) : (
        <div className="flex flex-1 items-center justify-center">
          <p className="text-[12px] text-[#5D5D61]">
            Select a conversation to start messaging.
          </p>
        </div>
      )}
    </section>
  );
}
