import PrinciplesSection from "./PrinciplesSection";

export default function CoreValues() {
  return (
    <>
      <PrinciplesSection
        eyebrow="THE PRINCIPLES BEHIND THE WORK"
        title="What makes the experience credible"
        description="These principles turn learning into demonstrated ability that teams and employers can understand."
        principles={[
          {
            icon: "P",
            title: "Proof over certificates",
            description:
              "Show what you built, contributed and improved—not only what you completed.",
            footer: "Demonstrate ability",
            highlighted: true,
          },
          {
            icon: "C",
            title: "Collaboration",
            description:
              "Work across product, design, engineering, data and delivery roles.",
            footer: "Build together",
          },
          {
            icon: "F",
            title: "Feedback",
            description:
              "Receive review, make changes and strengthen the work through iteration.",
            footer: "Improve through review",
            highlighted: true,
          },
          {
            icon: "T",
            title: "Trust",
            description:
              "Document decisions, ownership and outcomes other people can assess.",
            footer: "Make ability visible",
          },
        ]}
      />
    </>
  );
}
