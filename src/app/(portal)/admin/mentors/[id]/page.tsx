import MentorDetails from "@/src/components/portal/admin/(mentors)/MentorDetails";
import { mentors } from "@/src/components/portal/admin/(mentors)/mentors-data";
import { notFound } from "next/navigation";

interface MentorDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function MentorDetailsPage({
  params,
}: MentorDetailsPageProps) {
  const { id } = await params;

  const mentor = mentors.find((mentor) => mentor.id === Number(id));

  if (!mentor) {
    notFound();
  }

  return <MentorDetails mentor={mentor} />;
}
