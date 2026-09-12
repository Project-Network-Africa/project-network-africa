"use client";

import { useEffect, useState } from "react";

import BioSkills from "@/src/components/portal/applicant/(profile)/BioSkills";
import LinksDocuments from "@/src/components/portal/applicant/(profile)/LinksDocuments";
import ProfileHeader from "@/src/components/portal/applicant/(profile)/ProfileHeader";

import { checkAuth } from "@/src/services/auth";
import {
  getMyApplicantProfile,
  getMyCohortApplication,
  getApplicantCohorts,
} from "@/src/services/applicants";
import LoadingState from "@/src/components/ui/Loading/LoadingState";

interface ApplicantProfile {
  initials: string;
  name: string;
  cohort: string;
  bio: string;
  skills: string[];
  documents: {
    label: string;
    href: string;
  }[];
}

interface ApplicantApiResponse {
  success: boolean;
  message: string;
  applicant: {
    program?: string;
    admissionStatus?: string;
    bio?: string;
    skills?: string[];
    portfolioUrl?: string;
    linkedinUrl?: string;
    resumeUrl?: string;
  };
}

interface AuthResponse {
  success: boolean;
  message: string;
  user: {
    firstName?: string;
    lastName?: string;
    email?: string;
  };
}

interface ApplicationResponse {
  success?: boolean;
  application?: {
    cohort?: string;
    program?: string;
  };
}

interface ApplicantCohort {
  _id: string;
  name: string;
  program: string;
  description?: string;
  capacity: number;
  fee: number;
  startDate: string;
  endDate: string;
  isOpen: boolean;
  status: string;
}

interface CohortsResponse {
  success: boolean;
  message: string;
  cohorts: ApplicantCohort[];
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<ApplicantProfile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const [
          userResponse,
          applicantResponse,
          applicationResponse,
          cohortsResponse,
        ] = await Promise.all([
          checkAuth() as Promise<AuthResponse>,
          getMyApplicantProfile() as Promise<ApplicantApiResponse>,
          getMyCohortApplication() as Promise<ApplicationResponse>,
          getApplicantCohorts() as Promise<CohortsResponse>,
        ]);

        console.log("AUTH USER:", userResponse);
        console.log("APPLICANT PROFILE:", applicantResponse);
        console.log("APPLICATION:", applicationResponse);
        console.log("COHORTS:", cohortsResponse);

        const applicant = applicantResponse.applicant;
        const user = userResponse.user;
        const application = applicationResponse.application;

        const firstName = user.firstName || "";
        const lastName = user.lastName || "";

        const initials =
          `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();

        const cohort = cohortsResponse.cohorts.find(
          (item) => item._id === application?.cohort,
        );

        const documents = [
          applicant.portfolioUrl
            ? {
                label: "Portfolio",
                href: applicant.portfolioUrl,
              }
            : null,
          applicant.linkedinUrl
            ? {
                label: "LinkedIn",
                href: applicant.linkedinUrl,
              }
            : null,
          applicant.resumeUrl
            ? {
                label: "Resume",
                href: applicant.resumeUrl,
              }
            : null,
        ].filter(
          (document): document is { label: string; href: string } =>
            document !== null,
        );

        setProfile({
          initials,
          name: `${firstName} ${lastName}`.trim(),
          cohort: cohort
            ? `${applicant.program} — ${cohort.name}`
            : applicant.program || "No cohort assigned",
          bio: applicant.bio || "No bio added yet.",
          skills: applicant.skills || [],
          documents,
        });
      } catch (error) {
        console.error("FAILED TO FETCH PROFILE:", error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return (
      <div>
        {" "}
        <LoadingState />
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-5">
      <ProfileHeader
        initials={profile.initials}
        name={profile.name}
        cohort={profile.cohort}
      />

      <BioSkills bio={profile.bio} skills={profile.skills} />

      <LinksDocuments documents={profile.documents} />
    </div>
  );
}
