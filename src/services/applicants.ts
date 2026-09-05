import api from "./api";

export const getMyApplicantProfile = async () => {
  const response = await api.get("/api/applicants/me");

  return response.data;
};
