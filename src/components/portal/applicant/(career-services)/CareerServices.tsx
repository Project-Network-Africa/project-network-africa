import { careerServicesData } from "@/src/data/applicant/career-services";
import CareerSupportCard from "./CareerSupportCard";
import JobBoard from "./JobBoard";

export default function CareerServices() {
  const { jobs, support } = careerServicesData;

  return (
    <div className="flex w-full flex-col gap-5">
      <JobBoard jobs={jobs} />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {support.map((item) => (
          <CareerSupportCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            action={item.action}
            variant={item.variant}
          />
        ))}
      </div>
    </div>
  );
}
