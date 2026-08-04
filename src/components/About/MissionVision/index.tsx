import Section from "../../ui/Section";
import MissionVisionCard from "./MissionVisionCard";
import { missionVision } from "./mission-vision.data";

export default function MissionVision() {
  return (
    <Section className="bg-white">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {missionVision.map((item) => (
          <MissionVisionCard
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </Section>
  );
}
