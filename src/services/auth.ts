import api from "./api";

export const checkAuth = async () => {
  const response = await api.get("/api/auth/check-auth");

  return response.data;
};

export const logout = async () => {
  const response = await api.get("/api/auth/logout");

  return response.data;
};
export const forgotPassword = async (email: string) => {
  const response = await api.post("/api/auth/forgot-password", { email });
  return response.data;
};
export const resetPassword = async (token: string, password: string) => {
  const response = await api.post(`/api/auth/reset-password/${token}`, {
    password,
  });

  return response.data;
};
