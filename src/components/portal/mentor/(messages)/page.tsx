import Messages from "@/src/components/portal/shared/Messages/Messages";
import { conversations, messageUsers } from "@/src/data/messages/conversations";

export default function MentorMessagesPage() {
  return (
    <Messages
      currentUserId="fawaz-kareem"
      conversations={conversations}
      users={messageUsers}
    />
  );
}
