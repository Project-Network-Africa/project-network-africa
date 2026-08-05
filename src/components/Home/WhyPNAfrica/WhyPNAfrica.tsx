import FeatureSection from "../../Shared/feature-section";
import { whyPNAfricaData } from "./whyPNAfrica.data";

export default function WhyPNAfrica() {
  return (
    <FeatureSection
      label="WHY PN AFRICA"
      title="Everything you need to launch a tech career, in one place"
      features={whyPNAfricaData}
      columns={4}
    />
  );
}
