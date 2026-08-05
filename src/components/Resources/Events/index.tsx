import { Section, SectionHeader } from "../../ui";
import EventItem from "./EventItem";
import { events } from "./event.data";

export default function Events() {
  return (
    <Section className="bg-[#F8F8F8]">
      <div className="flex flex-col gap-7">
        <SectionHeader label="EVENTS" title="Upcoming webinars and meetups" />

        <div className="flex flex-col gap-5">
          {events.map((event) => (
            <EventItem key={event.title} {...event} />
          ))}
        </div>
      </div>
    </Section>
  );
}
