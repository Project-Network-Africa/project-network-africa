import CohortDetails from "@/src/components/portal/admin/(cohorts)/CohortDetails";
import { cohorts } from "@/src/components/portal/admin/(cohorts)/cohorts-data";
import { notFound } from "next/navigation";

interface CohortDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CohortDetailsPage({
  params,
}: CohortDetailsPageProps) {
  const { id } = await params;

  const cohort = cohorts.find((item) => item.id === id);

  if (!cohort) {
    notFound();
  }

  return <CohortDetails cohort={cohort} />;
}
