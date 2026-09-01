// import ApplicantDetails from "@/src/components/portal/admin/(applicant)/applicant-details";

// export default function ApplicantDetailsPage() {
//   return <ApplicantDetails />;
// }
import ApplicantDetails from "@/src/components/portal/admin/(applicant)/applicant-details";
import { applicants } from "@/src/components/portal/admin/(applicant)/applicant-data";

interface ApplicantDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ApplicantDetailsPage({
  params,
}: ApplicantDetailsPageProps) {
  const { id } = await params;

  const applicant = applicants.find((item) => item.id === id);

  if (!applicant) {
    return (
      <main className="min-h-screen w-full bg-[#F8F8F8] font-body">
        <div className="mx-auto w-full max-w-[1280px] p-5">
          <div className="rounded-[14px] border border-[#DDE1E5] bg-white p-8">
            <h1 className="text-xl font-bold text-[#1F1F25]">
              Applicant not found
            </h1>

            <p className="mt-2 text-sm text-[#737379]">
              We could not find this applicant.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return <ApplicantDetails applicant={applicant} />;
}
