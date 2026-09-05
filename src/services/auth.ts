import api from "./api";

export const checkAuth = async () => {
  const response = await api.get("/api/auth/check-auth");

  return response.data;
};

export const logout = async () => {
  const response = await api.get("/api/auth/logout");

  return response.data;
};
