// import api from "./api";

// export const createCohort = async (data: {
//   name: string;
//   program: string;
//   startDate: string;
//   endDate: string;
//   applicationDeadline: string;
//   capacity: number;
//   leadMentor: string;
//   status: string;
//   isOpen: boolean;
//   fee: number;
// }) => {
//   const response = await api.post("/api/cohorts", data);
//   return response.data;
// };

// export const getCohorts = async () => {
//   const response = await api.get("/api/cohorts");
//   return response.data;
// };
import api from "./api";

export interface CohortApiResponse {
  _id: string;
  name: string;
  program: string;
  description?: string;
  capacity: number;
  fee: number;
  mentors: string[];
  applicants: {
    _id: string;
  }[];
  startDate: string;
  endDate: string;
  isOpen: boolean;
  status: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
}

export const createCohort = async (data: {
  name: string;
  program: string;
  capacity: number;
  fee: number;
  startDate: string;
  endDate: string;
}) => {
  const response = await api.post("/api/cohorts", data);
  return response.data;
};

export const getCohorts = async (): Promise<{
  success: boolean;
  message: string;
  cohorts: CohortApiResponse[];
}> => {
  const response = await api.get("/api/cohorts");
  return response.data;
};
