import api from "./api";

export const getAdminDashboard = async () => {
  const response = await api.get("/api/admin");
  return response.data;
};

export const getAdminCohortApplications = async () => {
  const response = await api.get("/api/admin/cohort-applications");
  return response.data;
};

export const getAdminPayments = async () => {
  const response = await api.get("/api/payments/admin");
  return response.data;
};
export const updateMentorStatus = async (
  mentorId: string,
  status: "Accepted" | "Rejected",
) => {
  const response = await api.patch(`/api/admin/mentor/${mentorId}`, {
    status,
  });

  return response.data;
};
export const getCohorts = async () => {
  const response = await api.get("/api/cohorts");
  return response.data;
};
