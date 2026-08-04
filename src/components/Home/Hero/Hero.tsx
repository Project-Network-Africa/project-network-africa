import Container from "../../ui/Container";
import HeroHeading from "./HeroHeading";
import HeroActions from "./HeroActions";
import Community from "./Community";
import HeroIllustration from "./HeroIllustration";

export default function Hero() {
  return (
    <section>
      <Container className="flex flex-col items-center gap-8 pt-10 pb-6 sm:gap-10 sm:pt-16 lg:gap-10 lg:pt-[88px] lg:pb-10">
        <HeroHeading />

        <HeroActions />

        <Community />

        <HeroIllustration />
      </Container>
    </section>
  );
}
