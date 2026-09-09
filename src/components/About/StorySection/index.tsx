import StorySection from "./StorySection";

export default function CoreValues() {
  return (
    <>
      <StorySection
        eyebrow="WHY WE EXIST"
        title="The problem is bigger than getting a certificate"
        subtitle="People are learning technology—but many still lack the opportunity to prove they can work."
        body="Courses can teach a role. They cannot fully show how someone collaborates, handles feedback, works to a deadline or turns an idea into something people can use."
        subbody="PN Africa exists to close that experience gap by giving emerging professionals a structured place to build products with multidisciplinary teams, mentors and real accountability."
        bridgeLabel="THE BRIDGE"
        bridgeText="Move from “I have learned this” to “I have done this.”"
        gapsTitle="THE GAPS WE CLOSE"
        gaps={[
          {
            number: "01",
            title: "Experience without a first job",
            description:
              "Gain credible practice before a job title gives permission.",
          },
          {
            number: "02",
            title: "Teamwork beyond solo learning",
            description:
              "Work with designers, developers, product and project roles.",
          },
          {
            number: "03",
            title: "Evidence employers can trust",
            description:
              "Document decisions, feedback, delivery and shared outcomes.",
          },
        ]}
      />
    </>
  );
}
