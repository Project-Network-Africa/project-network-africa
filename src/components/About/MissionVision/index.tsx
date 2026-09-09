import MissionVision from "./MissionVision";

export default function CoreValues() {
  return (
    <>
      <MissionVision
        eyebrow="OUR NORTH STAR"
        title="The future we are building—and how we get there"
        cards={[
          {
            number: "01",
            label: "OUR MISSION",
            title: "Bridge the gap between learning and employment.",
            description:
              "We create structured environments where emerging professionals build real products, work in multidisciplinary teams, solve practical problems and produce credible evidence of what they can do.",
            tag: "Real products • Teamwork • Proof of work",
            variant: "dark",
          },
          {
            number: "02",
            label: "OUR VISION",
            title:
              "Talent can prove itself before a job title gives permission.",
            description:
              "We envision a global workforce where practical ability, collaboration and demonstrated work carry as much weight as credentials and years of experience.",
            tag: "Access • Ability • Trust",
            variant: "aqua",
          },
        ]}
      />
    </>
  );
}
