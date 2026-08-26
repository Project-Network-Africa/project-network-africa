import { AvailabilitySettings } from "@/src/types/mentor/availability";

export const mentorAvailability: AvailabilitySettings = {
  days: [
    {
      day: "Monday",
      startTime: "2:00 PM",
      endTime: "4:00 PM",
      enabled: true,
    },
    {
      day: "Tuesday",
      startTime: "",
      endTime: "",
      enabled: false,
    },
    {
      day: "Wednesday",
      startTime: "10:00 AM",
      endTime: "12:00 PM",
      enabled: true,
    },
    {
      day: "Thursday",
      startTime: "",
      endTime: "",
      enabled: false,
    },
    {
      day: "Friday",
      startTime: "1:00 PM",
      endTime: "3:00 PM",
      enabled: true,
    },
  ],

  bookedSessions: 8,
  monthlyCapacity: 10,

  bookingLink: "pnafrica.com/book/amara-okafor",
};
