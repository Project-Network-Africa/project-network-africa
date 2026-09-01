export type NotificationChannel = "Email" | "In-app" | "SMS";

export type NotificationStatus =
  | "Delivered"
  | "Scheduled"
  | "Partial"
  | "Failed";

export interface NotificationStat {
  label: string;
  value: string;
  valueClassName?: string;
}

export interface DeliveryHealthItem {
  channel: NotificationChannel;
  summary: string;
}

export interface MessageHistoryItem {
  id: number;
  message: string;
  audience: string;
  channel: string;
  date: string;
  status: NotificationStatus;
}
