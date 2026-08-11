// interface FormActionsProps {
//   onSave: () => void;
//   onContinue: () => void;
// }

// export default function FormActions({ onSave, onContinue }: FormActionsProps) {
//   return (
//     <div className="flex justify-end gap-3">
//       <button
//         type="button"
//         onClick={onSave}
//         className="
//           h-[43px]
//           rounded-[10px]
//           border
//           border-[#E5E5EB]
//           bg-white
//           px-[22px]
//           text-[14px]
//           font-semibold
//           text-[#1F1F25]
//           transition
//           hover:bg-[#F6F6F7]
//         "
//       >
//         Save & Exit
//       </button>

//       <button
//         type="button"
//         onClick={onContinue}
//         className="
//           h-[43px]
//           rounded-[10px]
//           bg-[#00B6CE]
//           px-[22px]
//           text-[14px]
//           font-semibold
//           text-white
//           transition
//           hover:bg-[#009DB3]
//         "
//       >
//         Continue
//       </button>
//     </div>
//   );
// }
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
        <button
          type="button"
          onClick={onSave}
          className="
            h-[43px]
            rounded-[10px]
            border
            border-[#E5E5EB]
            bg-white
            px-[22px]
            text-[14px]
            font-semibold
            text-[#1F1F25]
            transition
            hover:bg-[#F6F6F7]
          "
        >
          Save & Exit
        </button>

        <button
          type="button"
          onClick={onContinue}
          className="
            h-[43px]
            rounded-[10px]
            bg-[#00B6CE]
            px-[22px]
            text-[14px]
            font-semibold
            text-white
            transition
            hover:bg-[#009DB3]
          "
        >
          Continue
        </button>
      </div>
    );
  }

  // Step 2 & 3
  if (currentStep === 2 || currentStep === 3) {
    return (
      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onBack}
          className="
            h-[43px]
            rounded-[10px]
            border
            border-[#E5E5EB]
            bg-white
            px-[22px]
            text-[14px]
            font-semibold
            text-[#1F1F25]
            transition
            hover:bg-[#F6F6F7]
          "
        >
          Back
        </button>

        <button
          type="button"
          onClick={onContinue}
          className="
            h-[43px]
            rounded-[10px]
            bg-[#00B6CE]
            px-[22px]
            text-[14px]
            font-semibold
            text-white
            transition
            hover:bg-[#009DB3]
          "
        >
          Continue
        </button>
      </div>
    );
  }

  // Step 4
  return (
    <div className="flex justify-end gap-3">
      <button
        type="button"
        onClick={onBack}
        className="
          h-[43px]
          rounded-[10px]
          border
          border-[#E5E5EB]
          bg-white
          px-[22px]
          text-[14px]
          font-semibold
          text-[#1F1F25]
          transition
          hover:bg-[#F6F6F7]
        "
      >
        Back
      </button>

      <button
        type="button"
        onClick={onSubmit}
        className="
          h-[43px]
          rounded-[10px]
          bg-[#00B6CE]
          px-[22px]
          text-[14px]
          font-semibold
          text-white
          transition
          hover:bg-[#009DB3]
        "
      >
        Pay & Submit Application
      </button>
    </div>
  );
}
