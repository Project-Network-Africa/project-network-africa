import BadgesEarned from "./BadgesEarned";
import ProgramCertificate from "./ProgramCertificate";

export default function Achievements() {
  return (
    <div className="flex w-full flex-col gap-5">
      {/* Header */}

      <BadgesEarned />

      <ProgramCertificate />
    </div>
  );
}
