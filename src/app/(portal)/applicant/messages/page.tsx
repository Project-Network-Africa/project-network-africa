// "use client";

// import ChatWindow from "@/src/components/portal/applicant/(messages)/ChatWindow";
// import ConversationList from "@/src/components/portal/applicant/(messages)/ConversationList";
// import { useState } from "react";

// import { conversations as initialConversations } from "@/src/data/applicant/messages";

// export default function MessagesPage() {
//   const [conversations, setConversations] = useState(initialConversations);

//   const [selectedId, setSelectedId] = useState(
//     initialConversations[0]?.id ?? "",
//   );

//   const selectedConversation = conversations.find(
//     (conversation) => conversation.id === selectedId,
//   );

//   const handleSelectConversation = (id: string) => {
//     setSelectedId(id);

//     setConversations((current) =>
//       current.map((conversation) =>
//         conversation.id === id
//           ? {
//               ...conversation,
//               unread: false,
//             }
//           : conversation,
//       ),
//     );
//   };

//   const handleSendMessage = (text: string) => {
//     if (!selectedConversation) {
//       return;
//     }

//     const newMessage = {
//       id: `${selectedConversation.id}-${Date.now()}`,
//       text,
//       sender: "me" as const,
//     };

//     setConversations((current) =>
//       current.map((conversation) =>
//         conversation.id === selectedConversation.id
//           ? {
//               ...conversation,
//               messages: [...conversation.messages, newMessage],
//               preview: text,
//               time: "now",
//             }
//           : conversation,
//       ),
//     );
//   };

//   if (!selectedConversation) {
//     return null;
//   }

//   return (
//     <div className="flex w-full flex-col gap-5">
//       {/* Messages layout */}
//       <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-[340px_minmax(0,1fr)]">
//         <ConversationList
//           conversations={conversations}
//           selectedId={selectedId}
//           onSelect={handleSelectConversation}
//         />

//         <ChatWindow
//           conversation={selectedConversation}
//           messages={selectedConversation.messages}
//           onSend={handleSendMessage}
//         />
//       </div>
//     </div>
//   );
// }
import Messages from "@/src/components/portal/shared/Messages/Messages";
import { conversations, messageUsers } from "@/src/data/messages/conversations";

export default function ApplicantMessagesPage() {
  return (
    <Messages
      currentUserId="amara-okafor"
      conversations={conversations}
      users={messageUsers}
    />
  );
}
