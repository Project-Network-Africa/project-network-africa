"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";

import ApplicationSteps from "@/src/components/Application/applicant/ApplicationSteps";
import RequirementsCard from "@/src/components/Application/applicant/RequirementsCard";
import PersonalInformation from "@/src/components/Application/applicant/steps/PersonalInformation";
import FormActions from "@/src/components/Application/applicant/fields/FormActions";
import ProgramSelection from "@/src/components/Application/applicant/steps/ProgramSelection";
import ExperiencePortfolio from "@/src/components/Application/applicant/steps/ExperiencePortfolio";
import ApplicationConfirmation from "@/src/components/Application/applicant/ApplicationConfirmation";

import {
  createApplicantProfile,
  submitCohortApplication,
  getApplicantCohorts,
} from "@/src/services/applicants";

import { checkAuth } from "@/src/services/auth";

export default function ApplyPage() {
  const router = useRouter();

  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [applicationReference, setApplicationReference] = useState("");
  const [selectedCohortName, setSelectedCohortName] = useState("");

  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    agreedToTerms: false,
    program: "",
    cohortId: "",
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

  useEffect(() => {
    const loadUserInformation = async () => {
      try {
        const response = await checkAuth();

        setFormData((previous) => ({
          ...previous,
          firstName: response.user.firstName || "",
          lastName: response.user.lastName || "",
          email: response.user.email || "",
        }));
      } catch (error) {
        console.error("FAILED TO LOAD USER INFORMATION:", error);
      }
    };

    loadUserInformation();
  }, []);

  const updateField = (
    field: "firstName" | "lastName" | "email" | "phone" | "country",
    value: string,
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: undefined,
    }));
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

  const handleContinue = () => {
    if (!validateCurrentStep()) {
      return;
    }

    if (currentStep < 3) {
      setCurrentStep((previous) => (previous + 1) as 1 | 2 | 3);
    }
  };

  const goToStep = (step: 1 | 2 | 3) => {
    if (step <= currentStep) {
      setCurrentStep(step);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((previous) => (previous - 1) as 1 | 2 | 3);
    }
  };

  const handleSubmit = async () => {
    if (submitting) {
      return;
    }

    if (!validateCurrentStep()) {
      return;
    }

    setSubmitting(true);

    try {
      await createApplicantProfile({
        phone: formData.phone,
        country: formData.country,
        program: formData.program,
        portfolioUrl: formData.portfolioUrl,
        linkedInUrl: formData.linkedinUrl,
        bio: formData.motivation,
        skills: [formData.experienceLevel],
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

      // Get the real application reference from the backend
      const reference = response?.application?._id;

      if (!reference) {
        throw new Error("Application reference was not returned.");
      }

      setApplicationReference(reference);

      // Get the actual cohort name using the selected cohort ID
      const cohortsResponse = await getApplicantCohorts();

      const selectedCohort = cohortsResponse.cohorts.find(
        (cohort) => cohort._id === formData.cohortId,
      );

      setSelectedCohortName(selectedCohort?.name || "Selected Cohort");

      toast.success("Application submitted successfully!");

      setApplicationSubmitted(true);
    } catch (error) {
      console.error("APPLICATION SUBMISSION FAILED:", error);

      if (axios.isAxiosError(error)) {
        toast.error(
          error.response?.data?.message ||
            "Failed to submit application. Please try again.",
        );
      } else if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (applicationSubmitted) {
    return (
      <ApplicationConfirmation
        reference={applicationReference}
        cohort={selectedCohortName}
        program={formData.program}
        onBackHome={() => router.push("/")}
        onContinue={() => router.push("/applicant/application-status")}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white">
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

      <main className="px-5 py-4 sm:px-8 lg:px-20 lg:py-14">
        <div className="mb-5 h-1 w-full bg-[#00B6CE] lg:hidden" />

        <div className="mx-auto flex max-w-[1280px] flex-col gap-8 lg:flex-row lg:gap-16">
          <aside className="w-full flex-shrink-0 font-body lg:w-[280px]">
            <ApplicationSteps
              currentStep={currentStep}
              onStepChange={goToStep}
            />

            <div className="mt-6">
              <RequirementsCard currentStep={currentStep} />
            </div>
          </aside>

          <section className="w-full lg:max-w-[936px]">
            {currentStep === 1 && (
              <PersonalInformation
                firstName={formData.firstName}
                lastName={formData.lastName}
                email={formData.email}
                phone={formData.phone}
                country={formData.country}
                agreedToTerms={formData.agreedToTerms}
                errors={errors}
                onChange={updateField}
                onTermsChange={(checked) => {
                  setFormData((previous) => ({
                    ...previous,
                    agreedToTerms: checked,
                  }));

                  setErrors((previous) => ({
                    ...previous,
                    agreedToTerms: undefined,
                  }));
                }}
              />
            )}

            {currentStep === 2 && (
              <ProgramSelection
                selectedProgram={formData.program}
                onProgramChange={(program) => {
                  setFormData((previous) => ({
                    ...previous,
                    program,
                    cohortId: "",
                  }));
                  setSelectedCohortName("");
                }}
                selectedCohortId={formData.cohortId}
                onCohortChange={(value) => {
                  setFormData((previous) => ({
                    ...previous,
                    cohortId: value,
                  }));
                }}
                onCohortNameChange={setSelectedCohortName}
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
                errors={errors}
                onExperienceLevelChange={(value) => {
                  setFormData((previous) => ({
                    ...previous,
                    experienceLevel: value,
                  }));

                  setErrors((previous) => ({
                    ...previous,
                    experienceLevel: undefined,
                  }));
                }}
                onPortfolioChange={(value) => {
                  setFormData((previous) => ({
                    ...previous,
                    portfolioUrl: value,
                  }));

                  setErrors((previous) => ({
                    ...previous,
                    portfolioUrl: undefined,
                  }));
                }}
                onLinkedinChange={(value) => {
                  setFormData((previous) => ({
                    ...previous,
                    linkedinUrl: value,
                  }));

                  setErrors((previous) => ({
                    ...previous,
                    linkedinUrl: undefined,
                  }));
                }}
                onResumeChange={(file) => {
                  setFormData((previous) => ({
                    ...previous,
                    resume: file,
                  }));
                }}
                onMotivationChange={(value) => {
                  setFormData((previous) => ({
                    ...previous,
                    motivation: value,
                  }));

                  setErrors((previous) => ({
                    ...previous,
                    motivation: undefined,
                  }));
                }}
              />
            )}
            <div className="mt-8">
              <FormActions
                currentStep={currentStep}
                onBack={handleBack}
                onContinue={handleContinue}
                onSubmit={handleSubmit}
                submitting={submitting}
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
