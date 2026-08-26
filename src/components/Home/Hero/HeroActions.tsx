import Button from "../../ui/Button";

export default function HeroActions() {
  return (
    <div className="flex w-full flex-col items-center gap-[10px] py-[10px] sm:w-auto sm:flex-row sm:gap-3 sm:p-[10px] lg:bg-[#F8F8F8] bg-[#FFFFFF]">
      <Button
        href="/apply"
        variant="dark"
        className="h-[40px] w-[150px] rounded-[10px] px-5 py-[14px] text-center text-[12px] font-semibold leading-[24px] sm:h-[48px] sm:w-[123px] sm:rounded-[6px] sm:px-5 sm:py-3 sm:text-[16px] sm:font-medium"
      >
        Apply Now
      </Button>

      <Button
        href="/programs"
        variant="secondary"
        className="h-[40px] w-[158px] rounded-[10px] border border-[#E5E1DC]  py-[14px] text-center text-[12px] font-normal leading-[18px] tracking-[1px] sm:h-[48px] sm:w-[175px] sm:rounded-[6px] sm:border-[#1F1F25]  sm:py-3 sm:text-[16px] sm:font-medium sm:leading-[24px] sm:tracking-normal"
      >
        Explore Programs
      </Button>
    </div>
  );
}
