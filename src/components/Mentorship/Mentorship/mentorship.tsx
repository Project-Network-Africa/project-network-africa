import { mentor } from "../../../constants/mentor";
// import { Program } from "../../../types/program";
import ProgramHero from "../../Shared/program-hero";
import ProgramPreview from "../../Programs/program-preview";

export default function Mentorship() {
  return (
    <ProgramHero
      label={mentor.label}
      title={mentor.heroTitle}
      description={mentor.description}
      buttonText="Apply to Mentor"
      buttonHref="/apply"
    >
      <ProgramPreview />
    </ProgramHero>
  );
}
