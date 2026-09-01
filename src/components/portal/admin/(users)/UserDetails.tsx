"use client";

import AdminDetailPage from "../DetailPage/AdminDetailPage";

import { User } from "./users.types";

interface UserDetailsProps {
  user: User;
}

export default function UserDetails({ user }: UserDetailsProps) {
  const initials = user.name
    .split(" ")
    .map((name) => name[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <AdminDetailPage
      header={{
        backHref: "/admin/users",
        backLabel: "Back to Users",

        title: user.name,

        avatar: initials,

        name: user.name,

        subtitle: `${user.email} · ${user.role} · Joined ${user.joined}`,

        status: user.status,

        statusClassName:
          user.status === "Active"
            ? "bg-[#E1F3EC] text-[#008F58]"
            : "bg-[#FDE8E8] text-[#DC2727]",

        actions: [
          {
            label: "Reset password",
            variant: "primary",
          },
          {
            label: "Change role",
            variant: "light",
          },
          {
            label: "Suspend account",
            variant: "light",
          },
        ],
      }}
      stats={[
        {
          value: user.accountAge,
          label: "Account age",
        },
        {
          value: user.lastLogin,
          label: "Last login",
        },
        {
          value: String(user.activeSessions),
          label: "Active sessions",
        },
        {
          value: user.twoFactorAuth.startsWith("2FA enabled")
            ? "Enabled"
            : "Disabled",
          label: "Two-factor auth",
          valueClassName: user.twoFactorAuth.startsWith("2FA enabled")
            ? "text-[#008F58]"
            : "text-[#DC2727]",
        },
      ]}
      sections={[
        {
          title: "Account Information",

          items: [
            {
              value: `User ID: ${user.userId}`,
            },
            {
              value: `Location: ${user.location}`,
            },
            {
              value: `${
                user.emailVerified ? "Email verified" : "Email not verified"
              } · ${
                user.phoneVerified ? "Phone verified" : "Phone not verified"
              }`,
            },
            {
              value: `Registration source: ${user.registrationSource}`,
            },
            {
              value: `Last password change: ${user.lastPasswordChange}`,
              highlight: true,
            },
          ],
        },

        {
          title: "Permissions & Security",

          items: [
            {
              value: `Role: ${user.role} · ${user.permissions} access`,
            },
            {
              value: user.twoFactorAuth,
            },
            {
              value: user.securityWarnings,
            },
            {
              value: `Last device: ${user.lastDevice}`,
            },
            {
              value: `Admin notes: ${user.adminNotes}`,
              highlight: true,
            },
          ],
        },
      ]}
      activities={user.activities}
    />
  );
}
