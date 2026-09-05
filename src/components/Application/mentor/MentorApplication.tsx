"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "../../ui";

import MentorFormInput from "./MentorFormInput";
import MentorFormTextarea from "./MentorFormTextarea";
import MentorRadioGroup from "./MentorRadioGroup";

import {
  expertiseAreas,
  certificationOptions,
  modelOptions,
  responsibilityOptions,
} from "./MentorApplication.constants";

import {
  MentorApplicationData,
  MentorApplicationErrors,
} from "./MentorApplication.types";

const initialFormData: MentorApplicationData = {
  fullName: "",
  email: "",
  whatsappNumber: "",

  currentRole: "",
  yearsOfExperience: "",
  expertise: "",

  projectImpact: "",
  mentoringExperience: "",
  motivation: "",
  mentoringHours: "",
  timezone: "",
  availabilityDuration: "",

  comfortableCertifying: "",
  understandsModel: "",
  additionalInformation: "",
  readyForResponsibility: "",

  linkedinOrPortfolio: "",

  agreedToTerms: false,
};

export default function MentorApplication() {
  const [formData, setFormData] =
    useState<MentorApplicationData>(initialFormData);

  const [errors, setErrors] = useState<MentorApplicationErrors>({});

  const updateField = <K extends keyof MentorApplicationData>(
    field: K,
    value: MentorApplicationData[K],
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

  const validateForm = () => {
    const newErrors: MentorApplicationErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = "WhatsApp number is required.";
    }

    if (!formData.currentRole.trim()) {
      newErrors.currentRole =
        "Your current role and organization are required.";
    }

    if (!formData.yearsOfExperience.trim()) {
      newErrors.yearsOfExperience = "Years of experience is required.";
    }

    if (!formData.expertise) {
      newErrors.expertise = "Please select an area of expertise.";
    }

    if (!formData.projectImpact.trim()) {
      newErrors.projectImpact =
        "Please describe a project or product you have led.";
    }

    if (!formData.mentoringExperience.trim()) {
      newErrors.mentoringExperience =
        "Please tell us about your mentoring experience.";
    }

    if (!formData.motivation.trim()) {
      newErrors.motivation = "Please tell us your motivation for volunteering.";
    }

    if (!formData.mentoringHours.trim()) {
      newErrors.mentoringHours =
        "Please specify how many hours you can commit.";
    }

    if (!formData.timezone.trim()) {
      newErrors.timezone = "Timezone is required.";
    }

    if (!formData.availabilityDuration.trim()) {
      newErrors.availabilityDuration =
        "Please specify how long you are available.";
    }

    if (!formData.comfortableCertifying) {
      newErrors.comfortableCertifying = "Please select an option.";
    }

    if (!formData.understandsModel) {
      newErrors.understandsModel = "Please select an option.";
    }

    if (!formData.readyForResponsibility) {
      newErrors.readyForResponsibility = "Please select an option.";
    }

    if (!formData.linkedinOrPortfolio.trim()) {
      newErrors.linkedinOrPortfolio = "LinkedIn or Portfolio URL is required.";
    }

    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms =
        "Please agree to the Privacy Policy and Terms of Service.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    // Backend integration goes here.
    console.log("Mentor application:", formData);
  };

  return (
    <main className="min-h-screen bg-[#F8F8F8] px-5 py-7 font-body sm:px-8 lg:px-10">
      <div className="mx-auto w-full p-5 bg-white  w-full md:max-w-[500px]  lg:max-w-[550px] rounded-xl shadow-xl">
        {/* Logo */}
        <div className="mb-5">
          <Image
            src="/images/logo.svg"
            alt="PN Africa"
            width={105}
            height={30}
            className="h-auto w-[105px]"
            priority
          />
        </div>

        {/* Heading */}
        <div className="mb-6">
          <h1 className=" lg:font-bold font-semibold lg:font-body font-heading leading-tight text-[#1F1F25] text-[22px]">
            Apply to Mentor
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* PERSONAL INFORMATION */}

          <MentorFormInput
            label="Full Name"
            placeholder="Enter your name"
            value={formData.fullName}
            error={errors.fullName}
            required
            onChange={(value) => updateField("fullName", value)}
          />

          <MentorFormInput
            label="Email Address"
            placeholder="you@example.com"
            type="email"
            value={formData.email}
            error={errors.email}
            required
            onChange={(value) => updateField("email", value)}
          />

          <MentorFormInput
            label="WhatsApp Number (Please add your country code e.g +234)"
            placeholder=""
            type="tel"
            value={formData.whatsappNumber}
            error={errors.whatsappNumber}
            required
            onChange={(value) => updateField("whatsappNumber", value)}
          />

          {/* PROFESSIONAL BACKGROUND */}

          <MentorFormTextarea
            label="What is your current role and company / organization? e.g IT Project Manager / Nakod Technologies"
            placeholder="Your answer"
            value={formData.currentRole}
            error={errors.currentRole}
            required
            onChange={(value) => updateField("currentRole", value)}
          />

          <MentorFormTextarea
            label="How many years of experience do you have in your field? PN Africa requires mentors with a minimum."
            placeholder="Your answer"
            value={formData.yearsOfExperience}
            error={errors.yearsOfExperience}
            required
            onChange={(value) => updateField("yearsOfExperience", value)}
          />

          <MentorRadioGroup
            label="Which of these areas best describes your expertise?"
            options={expertiseAreas}
            value={formData.expertise}
            error={errors.expertise}
            onChange={(value) => updateField("expertise", value)}
          />

          {/* PROJECT EXPERIENCE */}

          <MentorFormTextarea
            label="Can you describe a product or project you led that had significant impact? Tell us about the problem, your role, and the outcome."
            placeholder="Your answer"
            value={formData.projectImpact}
            error={errors.projectImpact}
            required
            onChange={(value) => updateField("projectImpact", value)}
          />

          <MentorFormTextarea
            label="Have you mentored junior professionals before? If yes, tell us briefly about that experience."
            placeholder="Your answer"
            value={formData.mentoringExperience}
            error={errors.mentoringExperience}
            required
            onChange={(value) => updateField("mentoringExperience", value)}
          />

          <MentorFormTextarea
            label="What is your motivation for Volunteering as a PN Africa Mentor?"
            placeholder="Your answer"
            value={formData.motivation}
            error={errors.motivation}
            required
            onChange={(value) => updateField("motivation", value)}
          />

          {/* AVAILABILITY */}

          <MentorFormTextarea
            label="How many hours per week can you realistically commit to mentoring? PN Africa requires 2-3 hours / week for 8 weeks."
            placeholder="Your answer"
            value={formData.mentoringHours}
            error={errors.mentoringHours}
            required
            onChange={(value) => updateField("mentoringHours", value)}
          />

          <MentorFormTextarea
            label="What is your timezone? Are you comfortable meeting with participants across timezones? e.g GMT +1/Lagos"
            placeholder="Your answer"
            value={formData.timezone}
            error={errors.timezone}
            required
            onChange={(value) => updateField("timezone", value)}
          />

          <MentorFormTextarea
            label="For how long are you available to mentor? e.g 8 weeks, 6 months, ongoing. We're looking for commitment throughout at least one 8-week cohort."
            placeholder="Your answer"
            value={formData.availabilityDuration}
            error={errors.availabilityDuration}
            required
            onChange={(value) => updateField("availabilityDuration", value)}
          />

          {/* MENTOR RESPONSIBILITY */}

          <MentorRadioGroup
            label="Are you comfortable validating(certifying) that a junior professional can execute at a professional level by the end of 8weeks?"
            options={certificationOptions}
            value={formData.comfortableCertifying}
            error={errors.comfortableCertifying}
            onChange={(value) => updateField("comfortableCertifying", value)}
          />

          <MentorRadioGroup
            label="Have you read about PN Africa's Model? (Do you understand that this is NOT a bootcamp, but real product development?)"
            options={modelOptions}
            value={formData.understandsModel}
            error={errors.understandsModel}
            onChange={(value) => updateField("understandsModel", value)}
          />

          {/* ADDITIONAL INFORMATION */}

          <MentorFormTextarea
            label="Is there anything else you'd like us to know about you as a potential mentor?"
            placeholder="Your answer"
            value={formData.additionalInformation}
            error={errors.additionalInformation}
            onChange={(value) => updateField("additionalInformation", value)}
          />

          <MentorRadioGroup
            label="Are you ready for this Responsibility?"
            options={responsibilityOptions}
            value={formData.readyForResponsibility}
            error={errors.readyForResponsibility}
            onChange={(value) => updateField("readyForResponsibility", value)}
          />

          {/* PROFESSIONAL LINKS */}

          <MentorFormInput
            label="Years of Experience"
            placeholder="e.g. 8 years"
            value={formData.yearsOfExperience}
            error={errors.yearsOfExperience}
            required
            onChange={(value) => updateField("yearsOfExperience", value)}
          />

          <MentorFormInput
            label="LinkedIn or Portfolio URL"
            placeholder="https://linkedin.com/in/yourname"
            type="url"
            value={formData.linkedinOrPortfolio}
            error={errors.linkedinOrPortfolio}
            required
            onChange={(value) => updateField("linkedinOrPortfolio", value)}
          />

          {/* RESPONSIBILITY INFORMATION */}

          <div className="flex flex-col gap-3">
            <p className="text-[11px] font-semibold leading-tight text-[#1F1F25]">
              PN Africa Mentor Responsibility
            </p>

            <p className="text-[10px] font-normal leading-[1.45] text-[#5D5D61]">
              PN Africa mentors are industry professionals who validate junior
              talent. You won&apos;t be teaching coding, or design... mentees
              already know basics. You&apos;ll guide strategy, hold them
              accountable, review their work, and verify they can execute
              professionally. By the end of 8 weeks, you&apos;ll vouch for them
              to employers. This is volunteer work, but it directly impacts
              their career and talent getting hired.
            </p>
          </div>

          {/* TERMS */}

          <div className="flex flex-col gap-2">
            <label className="flex cursor-pointer items-start gap-2">
              <input
                type="checkbox"
                checked={formData.agreedToTerms}
                onChange={(event) =>
                  updateField("agreedToTerms", event.target.checked)
                }
                className="
                  mt-[1px]
                  h-[12px]
                  w-[12px]
                  cursor-pointer
                  accent-[#00B6CE]
                "
              />

              <span className="text-[14px] lg:text-[11px] font-normal leading-tight text-[#5D5D61]">
                I agree to the Privacy Policy and Terms of Service
              </span>
            </label>

            {errors.agreedToTerms && (
              <p className="text-[11px] font-medium text-red-500">
                {errors.agreedToTerms}
              </p>
            )}
          </div>

          {/* SUBMIT */}

          <Button
            variant="dark"
            className="
              h-[42px]
              w-full
              rounded-[9px]
              text-[11px]
              font-semibold
            "
          >
            Submit Application
          </Button>
        </form>

        {/* Already applied */}
        <div className="mt-4 pb-8 text-center">
          <p className="lg:text[12px]  text-[14px] font-normal text-[#7A7A80]">
            Already applied?{" "}
            <Link
              href="/login"
              className="font-semibold text-[#00B6CE] hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
