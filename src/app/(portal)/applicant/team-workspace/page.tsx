// import TeamRoster from "@/src/components/portal/applicant/team-workspace/TeamRoster";
// import SharedFiles from "@/src/components/portal/applicant/team-workspace/SharedFiles";
// import TeamChat from "@/src/components/portal/applicant/team-workspace/TeamChat";

import SharedFiles from "@/src/components/portal/applicant/(team-workspace)/SharedFiles";
import TeamChat from "@/src/components/portal/applicant/(team-workspace)/TeamChat";
import TeamRoster from "@/src/components/portal/applicant/(team-workspace)/TeamRoster";
import { teamWorkspace } from "@/src/data/applicant/team-workspace";

export default function TeamWorkspacePage() {
  return (
    <div className="flex w-full flex-col gap-5">
      {/* Team roster */}
      <TeamRoster members={teamWorkspace.members} />

      {/* Files + Chat */}
      <div className="grid w-full grid-cols-1 gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <SharedFiles files={teamWorkspace.files} />

        <TeamChat messages={teamWorkspace.messages} />
      </div>
    </div>
  );
}
