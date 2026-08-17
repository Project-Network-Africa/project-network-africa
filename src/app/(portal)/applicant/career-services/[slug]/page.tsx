import { notFound } from "next/navigation";

import { careerServicesData } from "@/src/data/applicant/career-services";
import JobDetail from "@/src/components/portal/applicant/(career-services)/(job-details)/JobDetails";

interface JobDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { slug } = await params;

  const job = careerServicesData.jobs.find((job) => job.slug === slug);

  if (!job) {
    notFound();
  }

  return <JobDetail job={job} />;
}
