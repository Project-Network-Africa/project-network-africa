import Container from "../../ui/Container";
import HeroHeading from "./HeroHeading";
import HeroActions from "./HeroActions";
import Community from "./Community";
import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  return (
    <section>
      <Container className="flex flex-col items-center gap-10 pt-[88px] pb-10">
        <HeroHeading />

        <HeroActions />

        <Community />

        <HeroIllustration />
      </Container>
    </section>
  );
}
