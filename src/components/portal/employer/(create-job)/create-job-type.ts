import { JobStatus } from "@/src/types/employer/job";

export interface CreateJobFormData {
  title: string;
  location: string;
  employmentType: string;
  description: string;
  requirements: string;
}

export interface JobFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export interface JobFormActionsProps {
  onSaveDraft: () => void;
  onPublish: () => void;
  isSubmitting?: boolean;
}

export interface CreateJobSubmitData extends CreateJobFormData {
  status: JobStatus;
}
