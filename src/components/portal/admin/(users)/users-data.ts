import { User, UserFilter, UserStat } from "./users.types";

export const userStats: UserStat[] = [
  {
    label: "Total users",
    value: "2,640",
    helper: "↑ 9% this quarter",
    helperColor: "text-[#00B6CE]",
  },
  {
    label: "Applicants",
    value: "1,842",
    helper: "70% of accounts",
    helperColor: "text-[#00B6CE]",
  },
  {
    label: "Mentors",
    value: "42",
    helper: "34 active today",
    helperColor: "text-[#00B6CE]",
  },
  {
    label: "Staff & employers",
    value: "24",
    helper: "6 administrators",
    helperColor: "text-[#00B6CE]",
  },
];

export const userFilters: UserFilter[] = [
  {
    label: "All roles",
    value: "all",
  },
  {
    label: "Account status",
    value: "all",
  },
  {
    label: "Last activity",
    value: "all",
  },
];

export const users: User[] = [
  {
    id: 1,
    name: "Amara Okafor",
    email: "amara@pnafrica.org",
    role: "Applicant",
    status: "Active",
    joined: "2 Jun 2026",
    lastLogin: "12 min ago",
    permissions: "Standard",
    action: "View",

    userId: "PN-USR-01842",
    location: "Lagos, Nigeria",

    emailVerified: true,
    phoneVerified: true,

    registrationSource: "Applicant portal",
    lastPasswordChange: "12 Jul 2026",

    accountAge: "77 days",
    activeSessions: 28,

    twoFactorAuth: "2FA enabled via authenticator app",
    securityWarnings: "No active security warnings",
    lastDevice: "Chrome on macOS",
    adminNotes: "No restrictions",

    activities: [
      {
        text: "Logged in from Lagos, Nigeria",
        time: "12 min ago",
      },
      {
        text: "Submitted Wireframe project",
        time: "1 day ago",
      },
      {
        text: "Updated profile information",
        time: "3 days ago",
      },
      {
        text: "Enabled two-factor authentication",
        time: "1 week ago",
      },
      {
        text: "Joined Cohort 6",
        time: "2 Jun 2026",
      },
    ],
  },

  {
    id: 2,
    name: "Kwame Asante",
    email: "kwame@pnafrica.org",
    role: "Mentor",
    status: "Active",
    joined: "14 May 2026",
    lastLogin: "1 hr ago",
    permissions: "Mentor",
    action: "View",

    userId: "PN-USR-01843",
    location: "Accra, Ghana",

    emailVerified: true,
    phoneVerified: true,

    registrationSource: "Mentor portal",
    lastPasswordChange: "1 Aug 2026",

    accountAge: "109 days",
    activeSessions: 12,

    twoFactorAuth: "2FA enabled via authenticator app",
    securityWarnings: "No active security warnings",
    lastDevice: "Chrome on Windows",
    adminNotes: "Mentor access",

    activities: [
      {
        text: "Logged in from Accra, Ghana",
        time: "1 hr ago",
      },
      {
        text: "Completed mentor feedback",
        time: "3 hrs ago",
      },
      {
        text: "Updated mentor profile",
        time: "2 days ago",
      },
      {
        text: "Accepted mentee assignment",
        time: "4 days ago",
      },
      {
        text: "Joined PN Africa",
        time: "14 May 2026",
      },
    ],
  },

  {
    id: 3,
    name: "Ada Nwosu",
    email: "ada@flutterwave.com",
    role: "Employer",
    status: "Active",
    joined: "8 Apr 2026",
    lastLogin: "Yesterday",
    permissions: "Employer",
    action: "View",

    userId: "PN-USR-01844",
    location: "Lagos, Nigeria",

    emailVerified: true,
    phoneVerified: true,

    registrationSource: "Employer portal",
    lastPasswordChange: "20 Jul 2026",

    accountAge: "145 days",
    activeSessions: 8,

    twoFactorAuth: "2FA enabled via authenticator app",
    securityWarnings: "No active security warnings",
    lastDevice: "Safari on macOS",
    adminNotes: "Employer access",

    activities: [
      {
        text: "Logged in from Lagos, Nigeria",
        time: "Yesterday",
      },
      {
        text: "Published employer project",
        time: "2 days ago",
      },
      {
        text: "Reviewed candidate applications",
        time: "4 days ago",
      },
      {
        text: "Updated company information",
        time: "1 week ago",
      },
      {
        text: "Joined PN Africa",
        time: "8 Apr 2026",
      },
    ],
  },

  {
    id: 4,
    name: "Chidi Nwosu",
    email: "chidi@pnafrica.org",
    role: "Admin",
    status: "Active",
    joined: "12 Jan 2026",
    lastLogin: "4 min ago",
    permissions: "Full access",
    action: "Manage",

    userId: "PN-USR-01845",
    location: "Lagos, Nigeria",

    emailVerified: true,
    phoneVerified: true,

    registrationSource: "Admin portal",
    lastPasswordChange: "1 Aug 2026",

    accountAge: "231 days",
    activeSessions: 16,

    twoFactorAuth: "2FA enabled via authenticator app",
    securityWarnings: "No active security warnings",
    lastDevice: "Chrome on macOS",
    adminNotes: "Full administrative access",

    activities: [
      {
        text: "Logged in from Lagos, Nigeria",
        time: "4 min ago",
      },
      {
        text: "Reviewed applicant applications",
        time: "1 hr ago",
      },
      {
        text: "Updated platform settings",
        time: "Yesterday",
      },
      {
        text: "Reviewed operational alerts",
        time: "2 days ago",
      },
      {
        text: "Joined PN Africa",
        time: "12 Jan 2026",
      },
    ],
  },

  {
    id: 5,
    name: "Bayo Ogundele",
    email: "bayo@email.com",
    role: "Applicant",
    status: "Suspended",
    joined: "1 Jul 2026",
    lastLogin: "9 days ago",
    permissions: "Restricted",
    action: "Review",

    userId: "PN-USR-01846",
    location: "Ibadan, Nigeria",

    emailVerified: true,
    phoneVerified: false,

    registrationSource: "Applicant portal",
    lastPasswordChange: "5 Jul 2026",

    accountAge: "61 days",
    activeSessions: 0,

    twoFactorAuth: "2FA not enabled",
    securityWarnings: "Suspicious login activity detected",
    lastDevice: "Chrome on Windows",
    adminNotes: "Account suspended pending review",

    activities: [
      {
        text: "Account suspended by administrator",
        time: "9 days ago",
      },
      {
        text: "Security warning triggered",
        time: "9 days ago",
      },
      {
        text: "Failed login attempt",
        time: "10 days ago",
      },
      {
        text: "Profile updated",
        time: "2 weeks ago",
      },
      {
        text: "Joined Cohort 6",
        time: "1 Jul 2026",
      },
    ],
  },

  {
    id: 6,
    name: "Ifeoma Chukwu",
    email: "ifeoma@pnafrica.org",
    role: "Applicant",
    status: "Active",
    joined: "20 Jun 2026",
    lastLogin: "2 hrs ago",
    permissions: "Standard",
    action: "View",

    userId: "PN-USR-01847",
    location: "Port Harcourt, Nigeria",

    emailVerified: true,
    phoneVerified: true,

    registrationSource: "Applicant portal",
    lastPasswordChange: "18 Jul 2026",

    accountAge: "72 days",
    activeSessions: 15,

    twoFactorAuth: "2FA enabled via authenticator app",
    securityWarnings: "No active security warnings",
    lastDevice: "Chrome on Windows",
    adminNotes: "No restrictions",

    activities: [
      {
        text: "Logged in from Port Harcourt, Nigeria",
        time: "2 hrs ago",
      },
      {
        text: "Completed application assessment",
        time: "Yesterday",
      },
      {
        text: "Updated profile information",
        time: "3 days ago",
      },
      {
        text: "Uploaded portfolio",
        time: "1 week ago",
      },
      {
        text: "Joined Cohort 4",
        time: "20 Jun 2026",
      },
    ],
  },

  {
    id: 7,
    name: "David Mensah",
    email: "david@pnafrica.org",
    role: "Mentor",
    status: "Active",
    joined: "9 Mar 2026",
    lastLogin: "15 min ago",
    permissions: "Mentor",
    action: "View",

    userId: "PN-USR-01848",
    location: "Lagos, Nigeria",

    emailVerified: true,
    phoneVerified: true,

    registrationSource: "Mentor portal",
    lastPasswordChange: "22 Jul 2026",

    accountAge: "175 days",
    activeSessions: 18,

    twoFactorAuth: "2FA enabled via authenticator app",
    securityWarnings: "No active security warnings",
    lastDevice: "Safari on macOS",
    adminNotes: "Mentor access",

    activities: [
      {
        text: "Logged in from Lagos, Nigeria",
        time: "15 min ago",
      },
      {
        text: "Completed mentor feedback",
        time: "1 hr ago",
      },
      {
        text: "Held mentor office hours",
        time: "Yesterday",
      },
      {
        text: "Accepted new mentee",
        time: "3 days ago",
      },
      {
        text: "Joined PN Africa",
        time: "9 Mar 2026",
      },
    ],
  },

  {
    id: 8,
    name: "Zainab Musa",
    email: "zainab@pnafrica.org",
    role: "Mentor",
    status: "Active",
    joined: "18 Aug 2026",
    lastLogin: "3 hrs ago",
    permissions: "Mentor",
    action: "View",

    userId: "PN-USR-01849",
    location: "Kano, Nigeria",

    emailVerified: true,
    phoneVerified: true,

    registrationSource: "Mentor portal",
    lastPasswordChange: "18 Aug 2026",

    accountAge: "13 days",
    activeSessions: 7,

    twoFactorAuth: "2FA enabled via authenticator app",
    securityWarnings: "No active security warnings",
    lastDevice: "Chrome on Windows",
    adminNotes: "Mentor access",

    activities: [
      {
        text: "Logged in from Kano, Nigeria",
        time: "3 hrs ago",
      },
      {
        text: "Completed mentor onboarding",
        time: "Yesterday",
      },
      {
        text: "Submitted verification documents",
        time: "2 days ago",
      },
      {
        text: "Updated mentor profile",
        time: "3 days ago",
      },
      {
        text: "Joined PN Africa",
        time: "18 Aug 2026",
      },
    ],
  },

  {
    id: 9,
    name: "Tunde Bello",
    email: "tunde@pnafrica.org",
    role: "Mentor",
    status: "Active",
    joined: "20 Nov 2025",
    lastLogin: "Yesterday",
    permissions: "Mentor",
    action: "View",

    userId: "PN-USR-01850",
    location: "Abuja, Nigeria",

    emailVerified: true,
    phoneVerified: true,

    registrationSource: "Mentor portal",
    lastPasswordChange: "30 Jul 2026",

    accountAge: "284 days",
    activeSessions: 9,

    twoFactorAuth: "2FA enabled via authenticator app",
    securityWarnings: "No active security warnings",
    lastDevice: "Chrome on Windows",
    adminNotes: "Mentor access",

    activities: [
      {
        text: "Logged in from Abuja, Nigeria",
        time: "Yesterday",
      },
      {
        text: "Completed mentor feedback",
        time: "2 days ago",
      },
      {
        text: "Attended cohort review",
        time: "3 days ago",
      },
      {
        text: "Updated availability",
        time: "1 week ago",
      },
      {
        text: "Joined PN Africa",
        time: "20 Nov 2025",
      },
    ],
  },

  {
    id: 10,
    name: "Sarah Adeyemi",
    email: "sarah@pnafrica.org",
    role: "Applicant",
    status: "Active",
    joined: "15 Feb 2026",
    lastLogin: "Yesterday",
    permissions: "Standard",
    action: "View",

    userId: "PN-USR-01851",
    location: "Lagos, Nigeria",

    emailVerified: true,
    phoneVerified: true,

    registrationSource: "Applicant portal",
    lastPasswordChange: "10 Jul 2026",

    accountAge: "197 days",
    activeSessions: 21,

    twoFactorAuth: "2FA enabled via authenticator app",
    securityWarnings: "No active security warnings",
    lastDevice: "Safari on macOS",
    adminNotes: "No restrictions",

    activities: [
      {
        text: "Logged in from Lagos, Nigeria",
        time: "Yesterday",
      },
      {
        text: "Updated application information",
        time: "2 days ago",
      },
      {
        text: "Submitted portfolio",
        time: "5 days ago",
      },
      {
        text: "Updated profile",
        time: "1 week ago",
      },
      {
        text: "Joined Cohort 6",
        time: "15 Feb 2026",
      },
    ],
  },

  {
    id: 11,
    name: "Emeka Nwosu",
    email: "emeka@pnafrica.org",
    role: "Applicant",
    status: "Active",
    joined: "30 Jul 2026",
    lastLogin: "1 day ago",
    permissions: "Standard",
    action: "View",

    userId: "PN-USR-01852",
    location: "Owerri, Nigeria",

    emailVerified: true,
    phoneVerified: true,

    registrationSource: "Applicant portal",
    lastPasswordChange: "1 Aug 2026",

    accountAge: "32 days",
    activeSessions: 11,

    twoFactorAuth: "2FA enabled via authenticator app",
    securityWarnings: "No active security warnings",
    lastDevice: "Chrome on Windows",
    adminNotes: "No restrictions",

    activities: [
      {
        text: "Logged in from Owerri, Nigeria",
        time: "1 day ago",
      },
      {
        text: "Completed application assessment",
        time: "2 days ago",
      },
      {
        text: "Updated profile information",
        time: "5 days ago",
      },
      {
        text: "Uploaded CV",
        time: "1 week ago",
      },
      {
        text: "Joined Cohort 3",
        time: "30 Jul 2026",
      },
    ],
  },

  {
    id: 12,
    name: "Aisha Kareem",
    email: "aisha@pnafrica.org",
    role: "Employer",
    status: "Active",
    joined: "12 Dec 2025",
    lastLogin: "2 days ago",
    permissions: "Employer",
    action: "View",

    userId: "PN-USR-01853",
    location: "Lagos, Nigeria",

    emailVerified: true,
    phoneVerified: true,

    registrationSource: "Employer portal",
    lastPasswordChange: "15 Jul 2026",

    accountAge: "262 days",
    activeSessions: 6,

    twoFactorAuth: "2FA enabled via authenticator app",
    securityWarnings: "No active security warnings",
    lastDevice: "Chrome on macOS",
    adminNotes: "Employer access",

    activities: [
      {
        text: "Logged in from Lagos, Nigeria",
        time: "2 days ago",
      },
      {
        text: "Reviewed project applications",
        time: "3 days ago",
      },
      {
        text: "Published employer project",
        time: "1 week ago",
      },
      {
        text: "Updated company profile",
        time: "2 weeks ago",
      },
      {
        text: "Joined PN Africa",
        time: "12 Dec 2025",
      },
    ],
  },
];
