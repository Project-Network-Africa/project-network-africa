import FeatureSection from "../../Shared/feature-section";
import { whyMentorshipData } from "./become-a-mentor.data";

export default function WhyMentorship() {
  return (
    <FeatureSection
      title="Mentorship at the center of everything we do"
      features={whyMentorshipData}
      centered
      columns={3}
    />
  );
}
