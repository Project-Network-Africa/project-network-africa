import FeatureContent from "../../Shared/feature-section/feature-content";
import EmployerVisual from "./employer-visual";
import { employerPartnership } from "./employer.constants";

export default function EmployerPartnership() {
  return (
    <section className="w-full bg-[#F8F8F8] px-20 py-[88px]">
      <div className="mx-auto flex max-w-[1280px] items-center gap-16">
        <EmployerVisual />

        <FeatureContent
          label={employerPartnership.label}
          title={employerPartnership.title}
          description={employerPartnership.description}
          buttonText={employerPartnership.buttonText}
          buttonHref={employerPartnership.buttonHref}
          buttonClassName="bg-[#00B6CE] hover:bg-[#00A5BB]"
        />
      </div>
    </section>
  );
}
