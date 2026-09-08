"use client";

import { useState } from "react";

import ApplicationSteps from "@/src/components/Application/applicant/ApplicationSteps";
import RequirementsCard from "@/src/components/Application/applicant/RequirementsCard";
import PersonalInformation from "@/src/components/Application/applicant/steps/PersonalInformation";
import FormActions from "@/src/components/Application/applicant/fields/FormActions";
import ProgramSelection from "@/src/components/Application/applicant/steps/ProgramSelection";

import ExperiencePortfolio from "@/src/components/Application/applicant/steps/ExperiencePortfolio";
import ReviewPayment from "@/src/components/Application/applicant/steps/ReviewPayment";

import Image from "next/image";
import Link from "next/link";
import {
  createApplicantProfile,
  submitCohortApplication,
} from "@/src/services/applicants";
import axios from "axios";
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
    cohortId: "",

    // experienceLevel: "Beginner",
    experienceLevel: "",
    portfolioUrl: "",
    linkedinUrl: "",
    resume: null as File | null,
    motivation: "",
  });
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    country?: string;
    agreedToTerms?: string;
    program?: string;
    cohortId?: string;
    experienceLevel?: string;
    motivation?: string;
  }>({});

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
    const newErrors: typeof errors = {};

    if (currentStep === 1) {
      if (!formData.firstName.trim()) {
        newErrors.firstName = "First name is required.";
      }

      if (!formData.lastName.trim()) {
        newErrors.lastName = "Last name is required.";
      }

      if (!formData.email.trim()) {
        newErrors.email = "Email address is required.";
      }

      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required.";
      }

      if (!formData.country) {
        newErrors.country = "Please select your country.";
      }

      if (!formData.agreedToTerms) {
        newErrors.agreedToTerms =
          "Please agree to the Privacy Policy and Terms of Service.";
      }
    }

    if (currentStep === 2) {
      if (!formData.program) {
        newErrors.program = "Please select a program.";
      }

      if (!formData.cohortId) {
        newErrors.cohortId = "Please select your preferred cohort.";
      }
    }

    if (currentStep === 3) {
      if (!formData.experienceLevel) {
        newErrors.experienceLevel = "Please select your experience level.";
      }

      if (!formData.motivation.trim()) {
        newErrors.motivation =
          "Please tell us why you want to join the program.";
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((previous) => (previous - 1) as 1 | 2 | 3 | 4);
    }
  };

  const handleSubmit = async () => {
    try {
      await createApplicantProfile({
        program: formData.program,
      });
      const response = await submitCohortApplication({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        program: formData.program,
        cohortId: formData.cohortId,
        experienceLevel: formData.experienceLevel,
        portfolioUrl: formData.portfolioUrl,
        linkedinUrl: formData.linkedinUrl,
        motivation: formData.motivation,
        agreedToTerms: formData.agreedToTerms,
      });

      console.log("APPLICATION SUBMITTED:", response);

      setApplicationSubmitted(true);
    } catch (error) {
      console.error("APPLICATION SUBMISSION FAILED:", error);

      if (axios.isAxiosError(error)) {
        console.error("BACKEND ERROR:", error.response?.data);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Application Header */}

      <header className="flex h-[74px] items-center justify-between border-b border-[#E5E5EB] px-5 sm:px-8 lg:px-20">
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
          Step {currentStep} of 3
        </p>
      </header>

      {/* Application Content */}

      <main className="px-5 py-4 sm:px-8 lg:px-20 lg:py-14">
        {/* Mobile top progress bar */}
        <div className="h-1 w-full mb-5 bg-[#00B6CE] lg:hidden" />

        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 lg:flex-row lg:gap-16">
          {/* Sidebar */}

          <aside className="w-full flex-shrink-0 lg:w-[280px] font-body">
            <ApplicationSteps
              currentStep={currentStep}
              onStepChange={goToStep}
            />

            <div className="mt-6">
              <RequirementsCard currentStep={currentStep} />
            </div>
          </aside>

          {/* Form */}

          {/* <section className="w-full max-w-[936px]"> */}
          <section className="w-full lg:max-w-[936px]">
            {currentStep === 1 && (
              <PersonalInformation
                firstName={formData.firstName}
                lastName={formData.lastName}
                email={formData.email}
                phone={formData.phone}
                country={formData.country}
                agreedToTerms={formData.agreedToTerms}
                onChange={updateField}
                errors={errors}
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
                selectedProgram={formData.program}
                onProgramChange={(program) =>
                  setFormData((previous) => ({
                    ...previous,
                    program,
                  }))
                }
                selectedCohortId={formData.cohortId}
                onCohortChange={(value) =>
                  setFormData((previous) => ({
                    ...previous,
                    cohortId: value,
                  }))
                }
                errors={errors}
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
                errors={errors}
              />
            )}

            {currentStep === 4 && (
              // <ReviewPayment
              //   onBack={() => setCurrentStep(3)}
              //   onSubmit={handleSubmit}
              //   errors={errors}
              // />
              <ReviewPayment
                onBack={handleBack}
                onSubmit={(paymentMethod) => {
                  console.log("Selected payment method:", paymentMethod);

                  // Submit application / initiate payment here
                }}
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
