import HowPNWorks from "./HowPNWorks";

export default function CoreValues() {
  return (
    <>
      <HowPNWorks
        eyebrow="HOW PN AFRICA WORKS"
        title="From foundational knowledge to credible experience"
        description="The programme provides the structure to practise, collaborate, receive feedback and document what you can do."
        steps={[
          {
            number: "01",
            label: "PREPARE",
            title: "Bring your foundation",
            description:
              "Join with basic knowledge of the role you want to practise.",
            tag: "Readiness",
          },
          {
            number: "02",
            label: "BUILD",
            title: "Work on a real product",
            description:
              "Contribute meaningful deliverables within a cross-functional team.",
            tag: "Experience",
          },
          {
            number: "03",
            label: "IMPROVE",
            title: "Use feedback to iterate",
            description:
              "Meet mentors and stakeholders, revise the work and deliver again.",
            tag: "Growth",
          },
          {
            number: "04",
            label: "PROVE",
            title: "Document what you did",
            description:
              "Leave with evidence of your role, decisions and shared outcome.",
            tag: "Trust",
          },
        ]}
        highlights={[
          {
            label: "TEAM STRUCTURE",
            text: "Clear roles and ownership",
          },
          {
            label: "MENTOR REVIEW",
            text: "Feedback that strengthens the work",
          },
          {
            label: "DOCUMENTED DELIVERY",
            text: "Evidence you can explain and show",
          },
        ]}
      />
    </>
  );
}
