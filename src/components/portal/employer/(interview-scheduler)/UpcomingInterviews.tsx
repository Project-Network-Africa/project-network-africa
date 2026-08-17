import { upcomingInterviews } from "@/src/data/employer/interview-scheduler";

export default function UpcomingInterviews() {
  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Upcoming Interviews
      </p>

      <div className="mt-[12px] flex flex-col gap-[10px]">
        {upcomingInterviews.map((interview) => (
          <div
            key={interview.id}
            className="flex min-h-[40px] items-center justify-between rounded-[10px] bg-[#F6F6F7] px-[14px] py-[5px]"
          >
            <div className="flex min-w-0 items-center gap-[14px]">
              {/* Avatar */}
              <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#1F1F25] text-[11px] font-semibold text-white">
                {interview.candidateInitials}
              </div>

              {/* Candidate information */}
              <div className="flex min-w-0 flex-col gap-[2px]">
                <p className="truncate text-[13px] font-semibold text-[#1F1F25]">
                  {interview.candidateName} - {interview.role}
                </p>

                <p className="text-[11px] text-[#5D5D61]">
                  {interview.date} - {interview.time}
                </p>
              </div>
            </div>

            {/* Status */}
            <span className="ml-4 shrink-0 rounded-full bg-[#FFF3E8] px-[12px] py-[4px] text-[10px] font-semibold text-[#C65A00]">
              {interview.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
