import api from "./api";

export interface ApplicantCohort {
  _id: string;
  name: string;
  program: string;
  description?: string;
  capacity: number;
  fee: number;
  startDate: string;
  endDate: string;
  isOpen: boolean;
  status: string;
}

export const getMyApplicantProfile = async () => {
  const response = await api.get("/api/applicants/me");

  return response.data;
};
export const submitCohortApplication = async (data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  program: string;
  cohortId: string;
  experienceLevel: string;
  portfolioUrl: string;
  linkedinUrl: string;
  motivation: string;
  agreedToTerms: boolean;
}) => {
  const response = await api.post("/api/cohortApplication", data);

  return response.data;
};

export const getMyCohortApplication = async () => {
  const response = await api.get("/api/cohortApplication/me");
  return response.data;
};
// export const getApplicantCohorts = async () => {
//   const response = await api.get("/api/cohorts/applicant");
//   return response.data;
// };
export const getApplicantCohorts = async (): Promise<{
  success: boolean;
  message: string;
  cohorts: ApplicantCohort[];
}> => {
  const response = await api.get("/api/cohorts/applicant");
  return response.data;
};
export const createApplicantProfile = async (data: { program: string }) => {
  const response = await api.post("/api/applicants", data);
  return response.data;
};
// export const updateApplicantProfile = async (data: {
//   program?: string;
//   phone?: string;
//   country?: string;
//   experience?: string;
//   portfolioUrl?: string;
//   linkedinUrl?: string;
// }) => {
//   const response = await api.put("/api/applicants/me", data);
//   return response.data;
// };
export const updateApplicantProfile = async (data: {
  phone?: string;
  country?: string;
  program?: string;
  portfolioUrl?: string;
  linkedinUrl?: string;
  bio?: string;
  skills?: string[];
}) => {
  const response = await api.put("/api/applicants/me", data);
  return response.data;
};

export interface AdminApplicant {
  _id: string;
  userId: {
    _id: string;
    email: string;
    firstName?: string;
    lastName?: string;
  };
  program: string;
  admissionStatus?: string;
  status?: string;
  submittedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export const getAdminApplicants = async (): Promise<{
  success: boolean;
  message: string;
  applicants: AdminApplicant[];
}> => {
  const response = await api.get("/api/admin/applicants");
  return response.data;
};
export const getAdminApplicantById = async (id: string) => {
  const response = await api.get(`/api/admin/applicants/${id}`);
  return response.data;
};
export const updateAdminApplicantStatus = async (
  id: string,
  admissionStatus: "Pending" | "Not Applied" | "Admitted" | "Rejected",
) => {
  const response = await api.patch(`/api/admin/applicants/${id}/status`, {
    admissionStatus,
  });
  return response.data;
};
export const assignApplicantToCohort = async (
  applicantId: string,
  cohortId: string,
) => {
  const response = await api.patch(
    `/api/admin/applicants/${applicantId}/cohort`,
    {
      cohortId,
    },
  );

  return response.data;
};
