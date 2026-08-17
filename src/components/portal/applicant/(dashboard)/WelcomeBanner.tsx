import { Button } from "@/src/components/ui";
import { WelcomeBannerProps } from "./applicant-dashboard";

export default function WelcomeBanner({
  name,
  progressSummary,
  buttonText,
  buttonHref,
}: WelcomeBannerProps) {
  return (
    <div className="flex items-center justify-between rounded-[14px] border border-[#E5E5EB] px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <div className="flex flex-col gap-1">
        <h2 className="text-[18px] font-bold text-[#1F1F25]">
          Welcome back, {name} 👋
        </h2>
        <p className="text-[12px] text-[#BFBFC7]">{progressSummary}</p>
      </div>

      <Button href={buttonHref} className="px-4 py-[10px] text-[12px]">
        {buttonText}
      </Button>
    </div>
  );
}
