import { notFound } from "next/navigation";

import MenteeDetails from "@/src/components/portal/mentor/(assigned-mentees)/MenteeDetails";
import { getMenteeById } from "@/src/data/mentor/mentees";

interface MenteeDetailsPageProps {
  params: Promise<{
    menteeId: string;
  }>;
}

export default async function MenteeDetailsPage({
  params,
}: MenteeDetailsPageProps) {
  const { menteeId } = await params;

  const mentee = getMenteeById(menteeId);

  if (!mentee) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white  ">
      <div className=" w-full max-w-[1120px]">
        <h1 className="text-[24px] font-bold leading-[100%] text-[#1F1F25]">
          {mentee.name}
        </h1>

        <div className="mt-[26px]">
          <MenteeDetails mentee={mentee} />
        </div>
      </div>
    </main>
  );
}
