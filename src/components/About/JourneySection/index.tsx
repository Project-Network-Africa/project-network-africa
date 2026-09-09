import JourneySection from "./JourneySection";

export default function History() {
  return (
    <>
      <JourneySection
        eyebrow="OUR JOURNEY"
        title="From launch to a growing proof-of-work community"
        description="Official milestones from PN Africa’s first year."
        milestones={[
          {
            date: "APR 1",
            label: "OFFICIAL START",
            description: "Project Network Africa officially begins in 2026.",
          },
          {
            date: "JUL 3",
            label: "WHATSAPP LAUNCH",
            description: "The public WhatsApp community launches in 2026.",
          },
          {
            date: "AUG 29",
            label: "NEXT COHORT",
            description:
              "The 2026 cohort begins its structured product-building experience.",
          },
          {
            date: "VISION",
            label: "THE BIGGER VISION",
            description:
              "Build the bridge between learning and real work—and make talent easier to trust.",
            highlighted: true,
          },
        ]}
        goal={{
          label: "LONG-TERM GOAL",
          text: "Make practical ability, collaboration and demonstrated work easier to recognise.",
          linkText: "Built through proof of work",
        }}
      />
    </>
  );
}
