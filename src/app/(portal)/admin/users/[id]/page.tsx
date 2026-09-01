import UserDetails from "@/src/components/portal/admin/(users)/UserDetails";
import { users } from "@/src/components/portal/admin/(users)/users-data";
import { notFound } from "next/navigation";

interface UserDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function UserDetailsPage({
  params,
}: UserDetailsPageProps) {
  const { id } = await params;

  const user = users.find((item) => item.id === Number(id));

  if (!user) {
    notFound();
  }

  return <UserDetails user={user} />;
}
