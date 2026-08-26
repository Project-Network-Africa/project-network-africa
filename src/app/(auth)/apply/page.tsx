"use client";

import { useState } from "react";

import ApplicationSteps from "@/src/components/Application/ApplicationSteps";
import RequirementsCard from "@/src/components/Application/RequirementsCard";
import PersonalInformation from "@/src/components/Application/steps/PersonalInformation";
import FormActions from "@/src/components/Application/fields/FormActions";
import ProgramSelection from "@/src/components/Application/steps/ProgramSelection";
import { applicationPrograms } from "@/src/components/Application/application.data";
import ExperiencePortfolio from "@/src/components/Application/steps/ExperiencePortfolio";
import ReviewPayment from "@/src/components/Application/steps/ReviewPayment";
import ApplicationConfirmation from "@/src/components/Application/ApplicationConfirmation";
import Image from "next/image";
import Link from "next/link";
export default function ApplyPage() {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4>(1);

  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    agreedToTerms: false,

    program: "",
    preferredCohortStart: "",

    // experienceLevel: "Beginner",
    experienceLevel: "",
    portfolioUrl: "",
    linkedinUrl: "",
    resume: null as File | null,
    motivation: "",
  });

  const updateField = (
    field: "firstName" | "lastName" | "email" | "phone" | "country",
    value: string,
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const handleSave = () => {
    console.log("Saving application...", formData);
  };

  // const handleContinue = () => {
  //   const isValid = validateCurrentStep();

  //   if (!isValid) {
  //     return;
  //   }

  //   if (currentStep < 4) {
  //     setCurrentStep((previous) => (previous + 1) as 1 | 2 | 3 | 4);
  //   }
  // };

  const handleContinue = () => {
    if (!validateCurrentStep()) {
      return;
    }

    if (currentStep < 4) {
      setCurrentStep((previous) => (previous + 1) as 1 | 2 | 3 | 4);
    }
  };
  const goToStep = (step: 1 | 2 | 3 | 4) => {
    if (step <= currentStep) {
      setCurrentStep(step);
    }
  };

  const validateCurrentStep = () => {
    if (currentStep === 1) {
      if (!formData.firstName.trim()) {
        alert("Please enter your first name.");
        return false;
      }

      if (!formData.lastName.trim()) {
        alert("Please enter your last name.");
        return false;
      }

      if (!formData.email.trim()) {
        alert("Please enter your email address.");
        return false;
      }

      if (!formData.phone.trim()) {
        alert("Please enter your phone number.");
        return false;
      }

      if (!formData.country) {
        alert("Please select your country.");
        return false;
      }

      if (!formData.agreedToTerms) {
        alert("Please agree to the terms before continuing.");
        return false;
      }
    }

    if (currentStep === 2) {
      if (!formData.program) {
        alert("Please select a program.");
        return false;
      }

      if (!formData.preferredCohortStart) {
        alert("Please select your preferred cohort.");
        return false;
      }
    }

    if (currentStep === 3) {
      if (!formData.experienceLevel) {
        alert("Please select your experience level.");
        return false;
      }

      if (!formData.motivation.trim()) {
        alert("Please tell us why you want to join the program.");
        return false;
      }
    }

    return true;
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((previous) => (previous - 1) as 1 | 2 | 3 | 4);
    }
  };

  const handleSubmit = () => {
    console.log("Submitting application...", formData);
    // Later:
    // 1. Send application to backend
    // 2. Initialize payment
    // 3. Redirect to payment provider

    setApplicationSubmitted(true);
  };
  if (applicationSubmitted) {
    return (
      <ApplicationConfirmation
        reference="PNA-2026-08341"
        cohort="Cohort 7"
        onBackHome={() => {
          window.location.href = "/";
        }}
        onLogin={() => {
          window.location.href = "/login";
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Application Header */}

      <header className="flex h-[74px] items-center justify-between border-b border-[#E5E5EB] px-5 sm:px-8 lg:px-20">
        {/* <div>
          <span className="text-xl font-bold text-[#1F1F25]">PN Africa</span>
        </div> */}
        <Link href="/" className="flex h-[34px] w-[144px] items-center">
          <Image
            src="/images/logo.svg"
            alt="PN Africa"
            width={144}
            height={34}
            priority
          />
        </Link>
        <p className="text-[13px] font-semibold text-[#5D5D61]">
          Step {currentStep} of 4
        </p>
      </header>

      {/* Application Content */}

      <main className="px-5 py-10 sm:px-8 lg:px-20 lg:py-14">
        <div className="mx-auto flex max-w-[1280px] gap-10 lg:gap-16">
          {/* Sidebar */}

          <aside className="hidden w-[280px] flex-shrink-0 lg:block">
            <ApplicationSteps
              currentStep={currentStep}
              onStepChange={goToStep}
            />

            <div className="mt-6">
              <RequirementsCard currentStep={currentStep} />
            </div>
          </aside>

          {/* Form */}

          <section className="w-full max-w-[936px]">
            {currentStep === 1 && (
              <PersonalInformation
                firstName={formData.firstName}
                lastName={formData.lastName}
                email={formData.email}
                phone={formData.phone}
                country={formData.country}
                agreedToTerms={formData.agreedToTerms}
                onChange={updateField}
                onTermsChange={(checked) =>
                  setFormData((previous) => ({
                    ...previous,
                    agreedToTerms: checked,
                  }))
                }
              />
            )}

            {currentStep === 2 && (
              <ProgramSelection
                programs={applicationPrograms}
                selectedProgram={formData.program}
                onProgramChange={(program) =>
                  setFormData((previous) => ({
                    ...previous,
                    program,
                  }))
                }
                preferredCohortStart={formData.preferredCohortStart}
                onCohortStartChange={(preferredCohortStart) =>
                  setFormData((previous) => ({
                    ...previous,
                    preferredCohortStart,
                  }))
                }
              />
            )}

            {currentStep === 3 && (
              <ExperiencePortfolio
                experienceLevel={formData.experienceLevel}
                portfolioUrl={formData.portfolioUrl}
                linkedinUrl={formData.linkedinUrl}
                resume={formData.resume}
                motivation={formData.motivation}
                onExperienceLevelChange={(experienceLevel) =>
                  setFormData((prev) => ({
                    ...prev,
                    experienceLevel,
                  }))
                }
                onPortfolioChange={(portfolioUrl) =>
                  setFormData((prev) => ({
                    ...prev,
                    portfolioUrl,
                  }))
                }
                onLinkedinChange={(linkedinUrl) =>
                  setFormData((prev) => ({
                    ...prev,
                    linkedinUrl,
                  }))
                }
                onResumeChange={(resume) =>
                  setFormData((prev) => ({
                    ...prev,
                    resume,
                  }))
                }
                onMotivationChange={(motivation) =>
                  setFormData((prev) => ({
                    ...prev,
                    motivation,
                  }))
                }
              />
            )}

            {currentStep === 4 && (
              <ReviewPayment
                onBack={() => setCurrentStep(3)}
                onSubmit={handleSubmit}
              />
            )}

            {currentStep !== 4 && (
              <div className="mt-8">
                <FormActions
                  currentStep={currentStep}
                  onSave={handleSave}
                  onBack={handleBack}
                  onContinue={handleContinue}
                  onSubmit={handleSubmit}
                />
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
