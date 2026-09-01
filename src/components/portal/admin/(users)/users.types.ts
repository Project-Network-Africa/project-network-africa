// export interface User {
//   id: number;
//   name: string;
//   email: string;
//   role: string;
//   status: string;
//   joined: string;
//   lastLogin: string;
//   permissions: string;
//   action: string;
// }

// export interface UserStat {
//   label: string;
//   value: string;
//   helper: string;
//   helperColor?: string;
// }

// export interface UserFilter {
//   label: string;
//   value?: string;
// }
export interface UserActivity {
  text: string;
  time?: string;
}

export interface User {
  id: number;

  name: string;
  email: string;
  role: string;
  status: string;
  joined: string;
  lastLogin: string;
  permissions: string;
  action: string;

  // Detail information
  location: string;
  userId: string;

  emailVerified: boolean;
  phoneVerified: boolean;

  registrationSource: string;
  lastPasswordChange: string;

  twoFactorAuth: string;
  securityWarnings: string;
  lastDevice: string;
  adminNotes: string;

  accountAge: string;
  activeSessions: number;

  activities: UserActivity[];
}

export interface UserStat {
  label: string;
  value: string;
  helper: string;
  helperColor?: string;
}

export interface UserFilter {
  label: string;
  value?: string;
}
