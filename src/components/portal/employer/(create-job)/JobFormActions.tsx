import { Button } from "@/src/components/ui";
import { JobFormActionsProps } from "./create-job-type";

export default function JobFormActions({
  onSaveDraft,
  onPublish,
  isSubmitting = false,
}: JobFormActionsProps) {
  return (
    <div className="mt-[14px] flex justify-end gap-3">
      <Button
        variant="light"
        onClick={onSaveDraft}
        disabled={isSubmitting}
        className="h-[35px] rounded-[8px] border border-[#E5E5EB] px-4 text-[11px] font-semibold"
      >
        Save as Draft
      </Button>

      <Button
        variant="dark"
        onClick={onPublish}
        disabled={isSubmitting}
        className="h-[35px] rounded-[8px] px-4 text-[11px] font-semibold"
      >
        Publish Job
      </Button>
    </div>
  );
}
