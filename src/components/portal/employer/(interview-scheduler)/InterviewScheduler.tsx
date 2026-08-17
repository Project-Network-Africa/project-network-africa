import UpcomingInterviews from "./UpcomingInterviews";
import ScheduleInterview from "./ScheduleInterview";

export default function InterviewScheduler() {
  return (
    <div className="flex w-full flex-col gap-5">
      <UpcomingInterviews />

      <ScheduleInterview />
    </div>
  );
}
