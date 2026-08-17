// import { notFound } from "next/navigation";
// import { candidates } from "@/src/data/employer/candidates";
// import CandidateProfile from "@/src/components/portal/employer/(talent-directory)/CandidateProfile";

// interface CandidateProfilePageProps {
//   params: Promise<{
//     id: string;
//   }>;
// }

// export default async function CandidateProfilePage({
//   params,
// }: CandidateProfilePageProps) {
//   const { id } = await params;

//   const candidate = candidates.find((item) => item.id === id);

//   if (!candidate) {
//     notFound();
//   }

//   return <CandidateProfile candidate={candidate} />;
// }
import CandidateProfile from "@/src/components/portal/employer/(talent-directory)/CandidateProfile";
import { candidates } from "@/src/data/employer/candidates";
import { notFound } from "next/navigation";

interface CandidateProfilePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function CandidateProfilePage({
  params,
}: CandidateProfilePageProps) {
  const { id } = await params;

  const candidate = candidates.find((candidate) => candidate.id === id);

  if (!candidate) {
    notFound();
  }

  return <CandidateProfile candidate={candidate} />;
}
