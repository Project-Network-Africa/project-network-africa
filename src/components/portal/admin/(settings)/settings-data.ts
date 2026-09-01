import {
  DangerZoneData,
  SettingsSectionData,
  SettingsTab,
} from "./settings.types";

/* =========================================================
   TABS
========================================================= */

export const settingsTabs: SettingsTab[] = [
  {
    id: "general",
    label: "General",
  },
  {
    id: "users-access",
    label: "Users & Access",
  },
  {
    id: "programmes",
    label: "Programmes",
  },
  {
    id: "payments",
    label: "Payments",
  },
  {
    id: "messaging",
    label: "Messaging",
  },
  {
    id: "security",
    label: "Security",
  },
];

/* =========================================================
   BRANDING & PROGRAMMES
========================================================= */

export const brandingSettings: SettingsSectionData = {
  title: "Branding & Programmes",

  items: [
    {
      label: "Platform name",
      value: "PN Africa",
      action: "Edit",
    },
    {
      label: "Primary brand colour",
      value: "#00B6CE",
      action: "Edit",
    },
    {
      label: "Programme catalogue",
      value: "5 active programmes",
      action: "Manage",
    },
    {
      label: "Application cycles",
      value: "3 currently accepting applications",
      action: "Manage",
    },
    {
      label: "Public website content",
      value: "Last published 18 Aug 2026",
      action: "Open CMS",
    },
  ],
};

/* =========================================================
   ADMIN ACCOUNTS & PERMISSIONS
========================================================= */

export const adminAccountsSettings: SettingsSectionData = {
  title: "Admin Accounts & Permissions",

  items: [
    {
      label: "Super Admin",
      value: "2 accounts · Full platform access",
      action: "Manage",
    },
    {
      label: "Programme Manager",
      value: "4 accounts · Cohorts, users and content",
      action: "Manage",
    },
    {
      label: "Support",
      value: "3 accounts · Read-only and ticket actions",
      action: "Manage",
    },
    {
      label: "Employer Manager",
      value: "2 accounts · Employers and placements",
      action: "Manage",
    },
  ],
};

/* =========================================================
   PAYMENT CONFIGURATION
========================================================= */

export const paymentSettings: SettingsSectionData = {
  title: "Payment Configuration",

  items: [
    {
      label: "Stripe",
      value: "Connected · Live mode",
      action: "Configure",
      actionVariant: "success",
    },
    {
      label: "PayPal",
      value: "Connected · Live mode",
      action: "Configure",
      actionVariant: "success",
    },
    {
      label: "Bank transfer",
      value: "Manual reconciliation enabled",
      action: "Configure",
      actionVariant: "default",
    },
    {
      label: "Refund approval",
      value: "Requires Super Admin",
      action: "Edit",
    },
    {
      label: "Payment receipts",
      value: "Automatic email enabled",
      action: "Edit",
    },
  ],
};

/* =========================================================
   MESSAGING & NOTIFICATIONS
========================================================= */

export const messagingSettings: SettingsSectionData = {
  title: "Messaging & Notifications",

  items: [
    {
      label: "Email templates",
      value: "12 active templates",
      action: "Manage",
    },
    {
      label: "Application reminders",
      value: "Enabled · 3-day cadence",
      action: "Edit",
    },
    {
      label: "Mentor reminders",
      value: "Enabled · Daily digest",
      action: "Edit",
    },
    {
      label: "Employer updates",
      value: "Enabled · Event based",
      action: "Edit",
    },
    {
      label: "SMS delivery",
      value: "Disabled",
      action: "Enable",
      actionVariant: "danger",
    },
  ],
};

/* =========================================================
   SECURITY & COMPLIANCE
========================================================= */

export const securitySettings: SettingsSectionData = {
  title: "Security & Compliance",

  items: [
    {
      label: "Two-factor authentication",
      value: "Required for administrators",
      action: "Active",
      actionVariant: "success",
    },
    {
      label: "Session timeout",
      value: "30 minutes",
      action: "Edit",
    },
    {
      label: "Audit log retention",
      value: "24 months",
      action: "View log",
    },
    {
      label: "Data requests",
      value: "4 export · 2 deletion",
      action: "Review",
      actionVariant: "danger",
    },
    {
      label: "Privacy policy",
      value: "Updated 12 Jul 2026",
      action: "Manage",
    },
  ],
};

/* =========================================================
   DANGER ZONE
========================================================= */

export const dangerZone: DangerZoneData = {
  title: "Platform maintenance mode",

  description:
    "Temporarily prevent non-admin users from accessing the platform.",

  actions: [
    {
      label: "Enable maintenance",
      variant: "default",
    },
    {
      label: "Export audit log",
      variant: "default",
    },
  ],
};
