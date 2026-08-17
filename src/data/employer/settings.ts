import { EmployerSettings } from "@/src/components/portal/employer/(settings)/settings.types";

export const employerSettingsData: EmployerSettings = {
  account: {
    contactName: "Jane Adeyemi",
    email: "jane@flutterwave.com",
  },

  billing: {
    plan: "Partnership Plan",
    renewalDate: "Sep 1, 2026",
  },

  privacy: {
    showCompanyProfile: true,
  },
};
