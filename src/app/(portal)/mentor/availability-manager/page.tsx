"use client";

import { useState } from "react";

import { mentorAvailability } from "@/src/data/mentor/availability";
import { AvailabilityDay } from "@/src/types/mentor/availability";
import WeeklyOfficeHours from "@/src/components/portal/mentor/(availability-manager)/WeeklyOfficeHours";
import MonthlyCapacity from "@/src/components/portal/mentor/(availability-manager)/MonthlyCapacity";
import BookingLink from "@/src/components/portal/mentor/(availability-manager)/BookingLink";

export default function AvailabilityManagerPage() {
  const [days, setDays] = useState<AvailabilityDay[]>(mentorAvailability.days);

  const handleToggle = (dayName: string, enabled: boolean) => {
    setDays((currentDays) =>
      currentDays.map((day) =>
        day.day === dayName
          ? {
              ...day,
              enabled,
            }
          : day,
      ),
    );
  };

  return (
    <div className="w-full space-y-[20px]">
      <WeeklyOfficeHours days={days} onToggle={handleToggle} />

      <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-2">
        <MonthlyCapacity
          booked={mentorAvailability.bookedSessions}
          capacity={mentorAvailability.monthlyCapacity}
        />

        <BookingLink link={mentorAvailability.bookingLink} />
      </div>
    </div>
  );
}
