// // import { initialJobs } from "@/src/data/employer/job";
// // import { Job, JobStatus } from "@/src/types/employer/job";

import { initialJobs } from "@/src/data/employer/job";
import { Job, JobStatus } from "@/src/types/employer/job";

// // const STORAGE_KEY = "pn-africa-employer-jobs";

// // function canUseLocalStorage() {
// //   return typeof window !== "undefined";
// // }

// // export function getJobs(): Job[] {
// //   if (!canUseLocalStorage()) {
// //     return initialJobs;
// //   }

// //   const storedJobs = localStorage.getItem(STORAGE_KEY);

// //   if (!storedJobs) {
// //     localStorage.setItem(STORAGE_KEY, JSON.stringify(initialJobs));

// //     return initialJobs;
// //   }

// //   try {
// //     return JSON.parse(storedJobs) as Job[];
// //   } catch {
// //     localStorage.setItem(STORAGE_KEY, JSON.stringify(initialJobs));

// //     return initialJobs;
// //   }
// // }

// // export function saveJobs(jobs: Job[]) {
// //   if (!canUseLocalStorage()) {
// //     return;
// //   }

// //   localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
// // }

// // export function addJob(job: Omit<Job, "id" | "applicants">): Job {
// //   const jobs = getJobs();

// //   const slug = job.title
// //     .toLowerCase()
// //     .replace(/[^a-z0-9]+/g, "-")
// //     .replace(/(^-|-$)/g, "");

// //   const newJob: Job = {
// //     ...job,
// //     id: `${slug}-${Date.now()}`,
// //     applicants: 0,
// //   };

// //   const updatedJobs = [newJob, ...jobs];

// //   saveJobs(updatedJobs);

// //   return newJob;
// // }

// // export function updateJobStatus(jobId: string, status: JobStatus): Job[] {
// //   const jobs = getJobs();

// //   const updatedJobs = jobs.map((job) =>
// //     job.id === jobId
// //       ? {
// //           ...job,
// //           status,
// //         }
// //       : job,
// //   );

// //   saveJobs(updatedJobs);

// //   return updatedJobs;
// // }

// // export function getJobById(jobId: string): Job | undefined {
// //   const jobs = getJobs();

// //   return jobs.find((job) => job.id === jobId);
// // }

// import { initialJobs } from "@/src/data/employer/job";
// import { Job, JobApplicant, JobStatus } from "@/src/types/employer/job";

// const STORAGE_KEY = "pn-africa-employer-jobs";

// function canUseLocalStorage() {
//   return typeof window !== "undefined";
// }

// export function getJobs(): Job[] {
//   if (!canUseLocalStorage()) {
//     return initialJobs;
//   }

//   const storedJobs = localStorage.getItem(STORAGE_KEY);

//   if (!storedJobs) {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(initialJobs));

//     return initialJobs;
//   }

//   try {
//     return JSON.parse(storedJobs) as Job[];
//   } catch {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(initialJobs));

//     return initialJobs;
//   }
// }

// export function getJobById(jobId: string): Job | undefined {
//   const jobs = getJobs();

//   return jobs.find((job) => job.id === jobId);
// }

// export function saveJobs(jobs: Job[]) {
//   if (!canUseLocalStorage()) return;

//   localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
// }

// export function addJob(job: Omit<Job, "id" | "applicants">): Job {
//   const jobs = getJobs();

//   const id =
//     job.title
//       .toLowerCase()
//       .replace(/[^a-z0-9]+/g, "-")
//       .replace(/(^-|-$)/g, "") + `-${Date.now()}`;

//   const newJob: Job = {
//     ...job,
//     id,
//     applicants: [],
//   };

//   const updatedJobs = [newJob, ...jobs];

//   saveJobs(updatedJobs);

//   return newJob;
// }

// export function updateJobStatus(jobId: string, status: JobStatus): Job[] {
//   const jobs = getJobs();

//   const updatedJobs = jobs.map((job) =>
//     job.id === jobId
//       ? {
//           ...job,
//           status,
//         }
//       : job,
//   );

//   saveJobs(updatedJobs);

//   return updatedJobs;
// }

// export function addApplicantToJob(
//   jobId: string,
//   applicant: JobApplicant,
// ): Job[] {
//   const jobs = getJobs();

//   const updatedJobs = jobs.map((job) =>
//     job.id === jobId
//       ? {
//           ...job,
//           applicants: [...job.applicants, applicant],
//         }
//       : job,
//   );

//   saveJobs(updatedJobs);

//   return updatedJobs;
// }

// export function updateApplicantStage(
//   jobId: string,
//   applicantId: string,
//   stage: JobApplicant["stage"],
// ): Job[] {
//   const jobs = getJobs();

//   const updatedJobs = jobs.map((job) => {
//     if (job.id !== jobId) {
//       return job;
//     }

//     return {
//       ...job,
//       applicants: job.applicants.map((applicant) =>
//         applicant.id === applicantId
//           ? {
//               ...applicant,
//               stage,
//             }
//           : applicant,
//       ),
//     };
//   });

//   saveJobs(updatedJobs);

//   return updatedJobs;
// }

const STORAGE_KEY = "pn-africa-employer-jobs";

function canUseLocalStorage() {
  return typeof window !== "undefined";
}

export function getJobs(): Job[] {
  if (!canUseLocalStorage()) {
    return initialJobs;
  }

  const storedJobs = localStorage.getItem(STORAGE_KEY);

  if (!storedJobs) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialJobs));
    return initialJobs;
  }

  try {
    const parsedJobs = JSON.parse(storedJobs) as Job[];

    return parsedJobs.map((job) => ({
      ...job,
      applicants: Array.isArray(job.applicants) ? job.applicants : [],
    }));
  } catch {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialJobs));
    return initialJobs;
  }
}

export function getJobById(jobId: string): Job | undefined {
  const jobs = getJobs();

  return jobs.find((job) => job.id === jobId);
}

export function saveJobs(jobs: Job[]) {
  if (!canUseLocalStorage()) return;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
}

export function addJob(job: Omit<Job, "id" | "applicants">): Job {
  const jobs = getJobs();

  const newJob: Job = {
    ...job,
    id: `${job.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")}-${Date.now()}`,
    applicants: [],
  };

  const updatedJobs = [newJob, ...jobs];

  saveJobs(updatedJobs);

  return newJob;
}

export function updateJobStatus(jobId: string, status: JobStatus) {
  const jobs = getJobs();

  const updatedJobs = jobs.map((job) =>
    job.id === jobId
      ? {
          ...job,
          status,
        }
      : job,
  );

  saveJobs(updatedJobs);

  return updatedJobs;
}
