import Button from "../../ui/Button";

export default function HeroActions() {
  return (
    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
      <Button href="/apply" className="w-full sm:w-auto">
        Apply Now
      </Button>

      <Button href="/programs" variant="secondary" className="w-full sm:w-auto">
        Explore Programs
      </Button>
    </div>
  );
}
