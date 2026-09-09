import ImpactAtAGlance from "./ImpactAtAGlance";

export default function CoreValues() {
  return (
    <>
      <ImpactAtAGlance
        description="Official milestones and the model behind the experience."
        items={[
          {
            value: "APR 1",
            label: "Official start • 2026",
          },
          {
            value: "JUL 3",
            label: "WhatsApp launch • 2026",
          },
          {
            value: "PROOF",
            label: "Real team-based work",
            highlight: true,
          },
        ]}
      />
    </>
  );
}
