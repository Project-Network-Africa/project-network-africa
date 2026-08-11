import { ProgramDetails } from "../../types/program";

import ProgramHero from "./ProgramDetailsHero";
import LearningOutcomes from "./LearningOutcomes";
import InstructorBio from "../Shared/InstructorBio";
import ProgramRequirements from "./Requirements/ProgramRequirements";
import Curriculum from "./Curriculum/Curriculum";
import CapstoneProject from "./CapstoneProject/CapstoneProject";
import PeopleSection from "../Shared/People/PeopleSection";
import ProgramCTA from "./CTA/ProgramCTA";

interface ProgramDetailsProps {
  program: ProgramDetails;
}

export default function ProgramDetailsLayout({ program }: ProgramDetailsProps) {
  return (
    <>
      <ProgramHero {...program.hero} />
      <LearningOutcomes {...program.learningOutcomes} />
      <InstructorBio {...program.instructor} />
      <ProgramRequirements requirements={program.requirements} />
      <Curriculum curriculum={program.curriculum} />
      <CapstoneProject program={program} />
      <PeopleSection
        label="CAREER OUTCOMES"
        title="Where our graduates go"
        people={program.careerOutcomes}
      />
      <ProgramCTA cta={program.cta} />
    </>
  );
}
