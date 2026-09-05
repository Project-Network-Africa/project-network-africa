import { Button } from "@/src/components/ui";

interface FormActionsProps {
  currentStep: 1 | 2 | 3 | 4;
  onSave: () => void;
  onBack: () => void;
  onContinue: () => void;
  onSubmit: () => void;
}

export default function FormActions({
  currentStep,
  onSave,
  onBack,
  onContinue,
  onSubmit,
}: FormActionsProps) {
  // Step 1
  if (currentStep === 1) {
    return (
      <div className="flex justify-end gap-3">
        <Button
          variant="light"
          onClick={onSave}
          className="h-[43px] rounded-[10px] border border-[#E5E5EB] px-[22px] text-[14px] font-semibold"
        >
          Save & Exit
        </Button>

        <Button
          variant="dark"
          onClick={onContinue}
          className="h-[43px] rounded-[10px] px-[22px] text-[14px] font-semibold"
        >
          Continue
        </Button>
      </div>
    );
  }

  // Step 2 & 3
  if (currentStep === 2 || currentStep === 3) {
    return (
      <div className="flex justify-end gap-3">
        <Button
          variant="light"
          onClick={onBack}
          className="h-[43px] rounded-[10px] border border-[#E5E5EB] px-[22px] text-[14px] font-semibold"
        >
          Back
        </Button>

        <Button
          variant="dark"
          onClick={onContinue}
          className="h-[43px] rounded-[10px] px-[22px] text-[14px] font-semibold"
        >
          Continue
        </Button>
      </div>
    );
  }

  // Step 4
  return (
    <div className="flex justify-end gap-3">
      <Button
        variant="light"
        onClick={onBack}
        className="h-[43px] rounded-[10px] border border-[#E5E5EB] px-[22px] text-[14px] font-semibold"
      >
        Back
      </Button>

      <Button
        variant="dark"
        onClick={onSubmit}
        className="h-[43px] rounded-[10px] px-[22px] text-[14px] font-semibold"
      >
        Pay & Submit Application
      </Button>
    </div>
  );
}
