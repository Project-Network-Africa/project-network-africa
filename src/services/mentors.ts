import api from "./api";

// export const getMyMentorProfile = async () => {
//   const response = await api.get("/api/mentors/me");
//   return response.data;
// };

export const createMentorProfile = async (data: {
  bio: string;
  expertise: string[];
}) => {
  const response = await api.post("/api/mentors", data);
  return response.data;
};

export const updateMentorProfile = async (data: {
  bio?: string;
  expertise?: string[];
}) => {
  const response = await api.put("/api/mentors/me", data);
  return response.data;
};

export const deleteMentorProfile = async () => {
  const response = await api.delete("/api/mentors/me");
  return response.data;
};

export interface CreateMentorPayload {
  expertise: string;
  phone: string;
  currentRole: string;
  yearsOfExperience: number;
  program: string;
  programDesc: string;
  mentoringExperience: string;
  motivation: string;
  hoursPerWeek: number;
  timeZone: string;
  availableHours: string;
  certificateValidation: boolean;
  modelUnderstanding: boolean;
  anyOtherInfo: string;
  readyForResponsibility: string;
  portfolio: string;
}

export const applyAsMentor = async (data: CreateMentorPayload) => {
  const response = await api.post("/api/apply/mentor", data);
  return response.data;
};

export const getMyMentorProfile = async () => {
  const response = await api.get("/api/mentors/me");
  return response.data;
};
