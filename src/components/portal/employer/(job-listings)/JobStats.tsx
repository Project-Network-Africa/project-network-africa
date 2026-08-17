import { Job } from "@/src/types/employer/job";

interface JobStatsProps {
  job: Job;
}

export default function JobStats({ job }: JobStatsProps) {
  const totalApplicants = job.applicants.length;

  const shortlisted = job.applicants.filter(
    (applicant) => applicant.stage === "Shortlisted",
  ).length;

  const interviewed = job.applicants.filter(
    (applicant) => applicant.stage === "Interviewing",
  ).length;

  const hired = job.applicants.filter(
    (applicant) => applicant.stage === "Hired",
  ).length;

  const stats = [
    {
      value: totalApplicants,
      label: "Total Applicants",
    },
    {
      value: shortlisted,
      label: "Shortlisted",
    },
    {
      value: interviewed,
      label: "Interviewed",
    },
    {
      value: hired,
      label: "Hired",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]"
        >
          <p className="text-[27px] font-semibold leading-none text-[#00B6CE]">
            {stat.value}
          </p>

          <p className="mt-[10px] text-[12px] text-[#5D5D61]">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
