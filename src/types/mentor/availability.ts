export interface AvailabilityDay {
  day: string;
  startTime: string;
  endTime: string;
  enabled: boolean;
}

export interface AvailabilitySettings {
  days: AvailabilityDay[];
  bookedSessions: number;
  monthlyCapacity: number;
  bookingLink: string;
}
