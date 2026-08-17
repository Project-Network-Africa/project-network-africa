"use client";

import { useState } from "react";
import Button from "@/src/components/ui/Button";
import AvailableTimes from "@/src/components/portal/applicant/(schedule-session)/AvailableTimes";
import MentorCard from "@/src/components/portal/applicant/(mentorship)/MentorCard";
import { sessionData } from "@/src/data/applicant/session";

export default function ScheduleSession() {
  const { mentor, availableTimes } = sessionData;

  const [selectedTime, setSelectedTime] = useState(availableTimes[0]);

  return (
    <div className="flex w-full flex-col gap-5">
      {/* <MentorCard mentor={mentor} /> */}

      <AvailableTimes
        availableTimes={availableTimes}
        selectedTime={selectedTime}
        onSelect={setSelectedTime}
      />

      <Button
        variant="dark"
        className="w-fit rounded-[8px] px-6 py-[14px] text-[14px] font-semibold"
        onClick={() => {
          console.log("Selected session:", selectedTime);
        }}
      >
        Confirm Session — {selectedTime.date} · {selectedTime.time}
      </Button>
    </div>
  );
}
