import Button from "../../ui/Button";

export default function HeroActions() {
  return (
    <div className="flex items-center gap-3">
      <Button href="/apply">Apply Now</Button>

      <Button href="/programs" variant="secondary">
        Explore Programs
      </Button>
    </div>
  );
}
