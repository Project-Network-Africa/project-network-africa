import { Mentee } from "@/src/types/mentor/mentees";

import MenteeProfileCard from "./MenteeProfileCard";
import MenteeProgress from "./MenteeProgress";
import MenteeProjects from "./MenteeProjects";
import MenteePrivateNotes from "./MenteePrivateNotes";

interface MenteeDetailsProps {
  mentee: Mentee;
}

export default function MenteeDetails({ mentee }: MenteeDetailsProps) {
  return (
    <div className="space-y-[20px]">
      {/* Profile */}
      <MenteeProfileCard mentee={mentee} />

      {/* Progress */}
      <MenteeProgress mentee={mentee} />

      {/* Projects + Private Notes */}
      <div className="grid grid-cols-1 gap-[20px] lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <MenteeProjects mentee={mentee} />

        <MenteePrivateNotes mentee={mentee} />
      </div>
    </div>
  );
}
