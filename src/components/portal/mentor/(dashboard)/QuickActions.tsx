import { Button } from "@/src/components/ui";

export default function QuickActions() {
  return (
    <div className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Quick Actions
      </p>

      <div className="mt-3 space-y-[10px]">
        <Button
          variant="light"
          className="h-[35px] w-full justify-start rounded-[8px] border border-[#E5E5EB] px-3 text-[11px] font-semibold"
        >
          Schedule Meeting
        </Button>

        <Button
          variant="light"
          className="h-[35px] w-full justify-start rounded-[8px] border border-[#E5E5EB] px-3 text-[11px] font-semibold"
        >
          Leave Feedback
        </Button>

        <Button
          variant="light"
          className="h-[35px] w-full justify-start rounded-[8px] border border-[#E5E5EB] px-3 text-[11px] font-semibold"
        >
          Validate Project
        </Button>
      </div>
    </div>
  );
}
