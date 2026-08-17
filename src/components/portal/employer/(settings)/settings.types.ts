export interface EmployerSettings {
  account: {
    contactName: string;
    email: string;
  };

  billing: {
    plan: string;
    renewalDate: string;
  };

  privacy: {
    showCompanyProfile: boolean;
  };
}
