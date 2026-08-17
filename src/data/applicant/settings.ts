export const defaultSettings = {
  account: {
    fullName: "Amara Okafor",
    email: "amara@example.com",
  },

  notifications: [
    {
      id: "mentorFeedback",
      label: "Email me about mentor feedback",
      enabled: true,
    },
    {
      id: "deadlines",
      label: "Email me about deadlines",
      enabled: true,
    },
    {
      id: "sessionReminders",
      label: "SMS reminders for sessions",
      enabled: false,
    },
  ],

  privacy: [
    {
      id: "showProfileToEmployers",
      label: "Show my profile to employers",
      enabled: true,
    },
    {
      id: "analyticsCookies",
      label: "Allow analytics cookies",
      enabled: true,
    },
  ],
};
