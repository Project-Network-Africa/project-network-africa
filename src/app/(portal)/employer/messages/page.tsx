import Messages from "@/src/components/portal/shared/Messages/Messages";
import { conversations, messageUsers } from "@/src/data/messages/conversations";

export default function MessagesPage() {
  return (
    <Messages
      currentUserId="jane-adeyemi"
      conversations={conversations}
      users={messageUsers}
    />
  );
}
