import Container from "../../ui/Container";
import HeroHeading from "./HeroHeading";
import HeroActions from "./HeroActions";
import Community from "./Community";

import HeroVisual from "./HeroVisual/HeroVisual";

export default function Hero() {
  return (
    <section className="m-0 p-0">
      <Container className="flex flex-col items-center gap-8 pt-[16px] pb-6 sm:gap-10 sm:pt-[30px] lg:gap-10 lg:pt-[88px] lg:pb-10 bg-[#F8F8F8]">
        <HeroHeading />

        <HeroActions />

        <Community />

        <HeroVisual />
      </Container>
    </section>
  );
}
