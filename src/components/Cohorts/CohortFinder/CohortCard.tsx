import Button from "../../ui/Button";
import { CohortFinderItem } from "./CohortFinder.types";

interface CohortCardProps {
  cohort: CohortFinderItem;
}

export default function CohortCard({ cohort }: CohortCardProps) {
  const percentage = (cohort.filled / cohort.capacity) * 100;

  const isFillingFast = cohort.status === "FILLING FAST";

  return (
    <article className="rounded-[16px] border border-[#DEDEE2] bg-white p-4 lg:h-[403px] lg:p-6">
      <div
        className={`flex w-fit items-center rounded-full px-3 py-2 font-body text-[11px] font-semibold leading-[100%] ${isFillingFast ? "bg-[#FFF7E8] text-[#F5A623]" : "bg-[#EFF8F2] text-[#00B64F]"}`}
      >
        {cohort.status}
      </div>

      <h3 className="mt-5 font-body text-[24px] font-bold leading-[120%] text-[#1F1F25] lg:mt-6 lg:text-[24px]">
        {cohort.programme}
      </h3>

      <p className="mt-4 font-body text-[13px] font-normal leading-[150%] text-[#5D5D61] lg:mt-5">
        {cohort.description}
      </p>

      <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-4 lg:mt-5">
        <div>
          <p className="font-body text-[10px] font-bold leading-[100%] text-[#5D5D61]">
            FORMAT
          </p>
          <p className="mt-2 font-body text-[12px] font-semibold leading-[120%] text-[#1F1F25]">
            {cohort.format}
          </p>
        </div>

        <div>
          <p className="font-body text-[10px] font-bold leading-[100%] text-[#5D5D61]">
            STARTS
          </p>
          <p className="mt-2 font-body text-[12px] font-semibold leading-[120%] text-[#1F1F25]">
            {cohort.startDate}
          </p>
        </div>

        <div>
          <p className="font-body text-[10px] font-bold leading-[100%] text-[#5D5D61]">
            DURATION
          </p>
          <p className="mt-2 font-body text-[12px] font-semibold leading-[120%] text-[#1F1F25]">
            {cohort.duration}
          </p>
        </div>

        <div>
          <p className="font-body text-[10px] font-bold leading-[100%] text-[#5D5D61]">
            TUITION
          </p>
          <p className="mt-2 font-body text-[12px] font-semibold leading-[120%] text-[#1F1F25]">
            {cohort.tuition}
          </p>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between gap-3">
          <p className="font-body text-[12px] font-normal leading-[100%] text-[#5D5D61]">
            Seat availability
          </p>

          <p
            className={`font-body text-[12px] font-semibold leading-[100%] ${isFillingFast ? "text-[#F5A623]" : "text-[#00B64F]"}`}
          >
            {cohort.filled} of {cohort.capacity} filled
          </p>
        </div>

        <div className="mt-3 h-[6px] w-full overflow-hidden rounded-full bg-[#E5E5E9]">
          <div
            className={`h-full rounded-full ${isFillingFast ? "bg-[#F5A623]" : "bg-[#00B64F]"}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      <div className="mt-4 flex gap-2.5">
        <Button
          href={`/cohorts/${cohort.id}`}
          variant="secondary"
          className="h-[42px] w-full rounded-[8px] px-3 text-[13px] font-semibold lg:w-[115px]"
        >
          View Details
        </Button>

        <Button
          href="/register"
          variant="primary"
          className="h-[42px] w-full rounded-[8px] px-3 text-[13px] font-semibold lg:w-[105px]"
        >
          Apply Now
        </Button>
      </div>
    </article>
  );
}
