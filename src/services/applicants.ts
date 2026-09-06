import api from "./api";

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
  preferredCohortStart: string;
  experienceLevel: string;
  portfolioUrl: string;
  linkedinUrl: string;
  motivation: string;
  agreedToTerms: boolean;
}) => {
  const response = await api.post("/api/cohortApplication", data);

  return response.data;
};
export const getCohorts = async () => {
  const response = await api.get("/api/cohorts");

  return response.data;
};
export const getMyCohortApplication = async () => {
  const response = await api.get("/api/cohortApplication/me");
  return response.data;
};
