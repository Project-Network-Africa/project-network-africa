"use client";

import BroadcastForm from "@/src/components/portal/mentor/(cohort-broadcast)/BroadcastForm";
import BroadcastHistory from "@/src/components/portal/mentor/(cohort-broadcast)/BroadcastHistory";

import {
  broadcastHistory,
  broadcastRecipients,
} from "@/src/data/mentor/broadcast";

export default function CohortBroadcastPage() {
  const handleBroadcast = (message: string) => {
    // Replace this with the backend API call later.
    console.log("Broadcast:", message);
  };

  return (
    <div className="w-full space-y-[20px]">
      <BroadcastForm
        recipients={broadcastRecipients}
        onSubmit={handleBroadcast}
      />

      <BroadcastHistory broadcasts={broadcastHistory} />
    </div>
  );
}
