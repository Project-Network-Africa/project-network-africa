// import CohortDetails from "@/src/components/portal/admin/(cohorts)/CohortDetails";
// import { cohorts } from "@/src/components/portal/admin/(cohorts)/cohorts-data";
// import { notFound } from "next/navigation";

// interface CohortDetailsPageProps {
//   params: Promise<{
//     id: string;
//   }>;
// }

// export default async function CohortDetailsPage({
//   params,
// }: CohortDetailsPageProps) {
//   const { id } = await params;

//   const cohort = cohorts.find((item) => item.id === id);

//   if (!cohort) {
//     notFound();
//   }

//   return <CohortDetails cohort={cohort} />;
// }
import CohortDetails from "@/src/components/portal/admin/(cohorts)/CohortDetails";
import { getCohorts } from "@/src/services/cohorts";
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

  let cohort;

  try {
    const response = await getCohorts();

    cohort = response.cohorts.find((item) => item._id === id);
  } catch (error) {
    console.error("FAILED TO GET COHORT:", error);
    notFound();
  }

  if (!cohort) {
    notFound();
  }

  const formattedCohort = {
    id: cohort._id,
    cohort: cohort.name,
    programme: cohort.program,
    start: new Date(cohort.startDate).toLocaleDateString(),
    end: new Date(cohort.endDate).toLocaleDateString(),
    deadline: "-",
    capacity: cohort.capacity,
    enrolled: cohort.applicants?.length ?? 0,
    completion: "-",
    status: cohort.status,
    action: "View",
    isOpen: cohort.isOpen,
    description: cohort.description,
    mentors: cohort.mentors,
    applicants: cohort.applicants,
    activities: [],
  };

  return <CohortDetails cohort={formattedCohort} />;
}
