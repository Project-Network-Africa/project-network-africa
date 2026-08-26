import { initialJobs } from "@/src/data/employer/job";
import { Job, JobStatus } from "@/src/types/employer/job";

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

export function addJob(
  job: Omit<Job, "id" | "applicants" | "postedDate">,
): Job {
  const jobs = getJobs();
  const newJob: Job = {
    ...job,
    id: `${job.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")}-${Date.now()}`,
    postedDate: new Date().toISOString(),
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
