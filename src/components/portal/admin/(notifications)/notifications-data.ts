import {
  DeliveryHealthItem,
  MessageHistoryItem,
  NotificationStat,
} from "./notifications.types";

/* =========================================================
   STATS
========================================================= */

export const notificationStats: NotificationStat[] = [
  {
    label: "Delivered",
    value: "24,820",
    valueClassName: "text-[#008F58]",
  },
  {
    label: "Delivery rate",
    value: "96.8%",
    valueClassName: "text-[#00B6CE]",
  },
  {
    label: "Scheduled",
    value: "8",
    valueClassName: "text-[#00B6CE]",
  },
  {
    label: "Failed",
    value: "14",
    valueClassName: "text-[#DC2727]",
  },
];

/* =========================================================
   DELIVERY HEALTH
========================================================= */

export const deliveryHealth: DeliveryHealthItem[] = [
  {
    channel: "Email",
    summary: "98.2% delivered · 1.4% opened",
  },
  {
    channel: "In-app",
    summary: "99.6% delivered · 62% read",
  },
  {
    channel: "SMS",
    summary: "91.4% delivered · 14 failed",
  },
];

/* =========================================================
   DELIVERY WARNINGS
========================================================= */

export const deliveryWarnings = [
  "8 invalid phone numbers",
  "6 bounced email addresses",
];

/* =========================================================
   MESSAGE HISTORY
========================================================= */

export const messageHistory: MessageHistoryItem[] = [
  {
    id: 1,
    message: "Cohort 6 project deadline",
    audience: "Cohort 6",
    channel: "Email + In-app",
    date: "18 Aug · 09:00",
    status: "Delivered",
  },
  {
    id: 2,
    message: "Mentor feedback reminder",
    audience: "12 mentors",
    channel: "Email",
    date: "17 Aug · 16:00",
    status: "Delivered",
  },
  {
    id: 3,
    message: "Employer verification update",
    audience: "3 employers",
    channel: "In-app",
    date: "17 Aug · 11:30",
    status: "Delivered",
  },
  {
    id: 4,
    message: "Community Demo Day",
    audience: "All users",
    channel: "Email + In-app",
    date: "22 Aug · 10:00",
    status: "Scheduled",
  },
  {
    id: 5,
    message: "Payment retry notice",
    audience: "7 applicants",
    channel: "Email",
    date: "16 Aug · 14:00",
    status: "Partial",
  },
];

/* =========================================================
   COMPOSE OPTIONS
========================================================= */

export const notificationAudiences = [
  {
    label: "All users",
    value: "all-users",
  },
  {
    label: "Applicants",
    value: "applicants",
  },
  {
    label: "Mentors",
    value: "mentors",
  },
  {
    label: "Employers",
    value: "employers",
  },
];

export const notificationTypes = [
  {
    label: "Announcement",
    value: "announcement",
  },
  {
    label: "Reminder",
    value: "reminder",
  },
  {
    label: "Update",
    value: "update",
  },
  {
    label: "Alert",
    value: "alert",
  },
];
