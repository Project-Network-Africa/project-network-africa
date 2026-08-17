import OnboardingChecklist from "@/src/components/portal/applicant/(onboarding-checklist)/OnboardingChecklist";
import { onboardingSteps } from "@/src/data/applicant/onboarding-checlist";

export default function OnboardingPage() {
  return (
    <OnboardingChecklist
      steps={onboardingSteps}
      completedSteps={3}
      totalSteps={5}
    />
  );
}
