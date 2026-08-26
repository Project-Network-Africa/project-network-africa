import { Broadcast, BroadcastRecipient } from "@/src/types/mentor/broadcast";

export const broadcastRecipients: BroadcastRecipient[] = [
  {
    id: "mentee-1",
    name: "Amara Okafor",
  },
  {
    id: "mentee-2",
    name: "Tunde Bello",
  },
  {
    id: "mentee-3",
    name: "Zainab Musa",
  },
];

export const broadcastHistory: Broadcast[] = [
  {
    id: "broadcast-1",
    message: "Reminder: Wireframe submissions due Friday EOD.",
    timeAgo: "2 days ago",
  },
  {
    id: "broadcast-2",
    message: "Great work on Demo Day prep, everyone!",
    timeAgo: "1 week ago",
  },
];
