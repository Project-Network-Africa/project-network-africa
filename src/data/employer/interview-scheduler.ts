import {
  Interview,
  InterviewCandidate,
  InterviewJob,
} from "@/src/types/employer/interview-scheduler";

export const upcomingInterviews: Interview[] = [
  {
    id: "interview-1",
    candidateName: "Amara Okafor",
    candidateInitials: "AO",
    role: "Product Designer",
    date: "Mon, Aug 17",
    time: "2:00 PM",
    status: "Confirmed",
  },
  {
    id: "interview-2",
    candidateName: "Ifeoma Chukwu",
    candidateInitials: "IC",
    role: "Backend Engineer",
    date: "Wed, Aug 19",
    time: "10:00 AM",
    status: "Confirmed",
  },
];

export const interviewCandidates: InterviewCandidate[] = [
  {
    id: "amara-okafor",
    name: "Amara Okafor",
  },
  {
    id: "ifeoma-chukwu",
    name: "Ifeoma Chukwu",
  },
  {
    id: "tunde-bello",
    name: "Tunde Bello",
  },
];

export const interviewJobs: InterviewJob[] = [
  {
    id: "junior-product-designer",
    title: "Junior Product Designer",
  },
  {
    id: "backend-engineer",
    title: "Backend Engineer (Node)",
  },
  {
    id: "data-analyst",
    title: "Data Analyst Intern",
  },
];
