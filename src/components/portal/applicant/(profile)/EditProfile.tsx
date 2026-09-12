"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/src/components/ui";
import { checkAuth } from "@/src/services/auth";
import {
  getMyApplicantProfile,
  updateApplicantProfile,
} from "@/src/services/applicants";
import LoadingState from "@/src/components/ui/Loading/LoadingState";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  program: string;
  portfolioUrl: string;
  linkedinUrl: string;
  bio: string;
  skills: string;
}

interface ApplicantData {
  program?: string;
  phone?: string;
  country?: string;
  portfolioUrl?: string;
  linkedinUrl?: string;
  bio?: string;
  skills?: string[];
}

interface AuthResponse {
  user: {
    firstName?: string;
    lastName?: string;
    email?: string;
  };
}

interface ApplicantResponse {
  applicant: ApplicantData;
}

export default function EditProfilePage() {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    program: "",
    portfolioUrl: "",
    linkedinUrl: "",
    bio: "",
    skills: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const [userResponse, applicantResponse] = await Promise.all([
          checkAuth() as Promise<AuthResponse>,
          getMyApplicantProfile() as Promise<ApplicantResponse>,
        ]);

        const user = userResponse.user;
        const applicant = applicantResponse.applicant;

        setFormData({
          firstName: user.firstName || "",
          lastName: user.lastName || "",
          email: user.email || "",
          phone: applicant.phone || "",
          country: applicant.country || "",
          program: applicant.program || "",
          portfolioUrl: applicant.portfolioUrl || "",
          linkedinUrl: applicant.linkedinUrl || "",
          bio: applicant.bio || "",
          skills: applicant.skills?.join(", ") || "",
        });
      } catch (error) {
        console.error("FAILED TO FETCH PROFILE:", error);
        setError("Failed to load your profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // const handleSave = async (event: React.FormEvent) => {
  //   event.preventDefault();

  //   setSaving(true);
  //   setError("");
  //   setSuccess("");

  //   try {
  //     await updateApplicantProfile({
  //       phone: formData.phone,
  //       country: formData.country,
  //       program: formData.program,
  //       portfolioUrl: formData.portfolioUrl,
  //       linkedinUrl: formData.linkedinUrl,
  //       bio: formData.bio,
  //       skills: formData.skills
  //         .split(",")
  //         .map((skill) => skill.trim())
  //         .filter(Boolean),
  //     });

  //     setSuccess("Profile updated successfully.");

  //     setTimeout(() => {
  //       router.push("/applicant/profile");
  //     }, 1000);
  //   } catch (error) {
  //     console.error("FAILED TO UPDATE PROFILE:", error);
  //     setError("Failed to update your profile.");
  //   } finally {
  //     setSaving(false);
  //   }
  // };
  const handleSave = async (event: React.FormEvent) => {
    event.preventDefault();

    setSaving(true);
    setError("");
    setSuccess("");

    try {
      await updateApplicantProfile({
        phone: formData.phone,
        country: formData.country,
        portfolioUrl: formData.portfolioUrl,
        linkedinUrl: formData.linkedinUrl,
        bio: formData.bio,
        skills: formData.skills
          .split(",")
          .map((skill) => skill.trim())
          .filter(Boolean),
      });

      router.push("/applicant/profile");
    } catch (error) {
      console.error("FAILED TO UPDATE PROFILE:", error);
      setError("Failed to update your profile.");
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    router.push("/applicant/profile");
  };

  if (loading) {
    return (
      <main className="flex  items-center justify-center">
        <LoadingState />
      </main>
    );
  }

  const initials =
    `${formData.firstName.charAt(0)}${formData.lastName.charAt(0)}`.toUpperCase();

  return (
    <div className="flex w-full flex-col gap-5">
      <form
        onSubmit={handleSave}
        className="flex w-full flex-col gap-5 rounded-[14px] border border-[#E5E5EB] bg-white px-5 py-6 shadow-[0px_2px_8px_0px_#0000000A] sm:px-6"
      >
        <div className="flex items-start justify-between border-b border-[#E5E5EB] pb-5">
          <div>
            <h2 className="text-[18px] font-bold text-[#1F1F25]">
              Personal information
            </h2>

            <p className="mt-1 text-[12px] text-[#6B6B73]">
              Update the information shown on your applicant profile.
            </p>
          </div>

          <p className="text-[11px] text-[#6B6B73]">* Required fields</p>
        </div>

        <div className="flex flex-col gap-3 border-b border-[#E5E5EB] pb-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#00B6CE] text-[22px] font-bold text-white">
              {initials || "A"}
            </div>

            <div>
              <p className="text-[13px] font-semibold text-[#1F1F25]">
                Profile photo
              </p>

              <p className="mt-1 text-[11px] text-[#6B6B73]">
                JPG or PNG. Maximum file size 2 MB.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="light"
              className="rounded-[8px] px-4 py-[10px] text-[12px] font-semibold"
            >
              Change photo
            </Button>

            <button
              type="button"
              className="text-[12px] font-semibold text-red-600"
            >
              Remove
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-medium text-[#1F1F25]">
              First name *
            </label>

            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              disabled
              className="h-10 rounded-[8px] border border-[#D5D5DD] bg-[#F5F6F8] px-3 text-[13px] text-[#6B6B73] outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-medium text-[#1F1F25]">
              Last name *
            </label>

            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              disabled
              className="h-10 rounded-[8px] border border-[#D5D5DD] bg-[#F5F6F8] px-3 text-[13px] text-[#6B6B73] outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-medium text-[#1F1F25]">
              Email address *
            </label>

            <input
              name="email"
              type="email"
              value={formData.email}
              disabled
              className="h-10 rounded-[8px] border border-[#D5D5DD] bg-[#F5F6F8] px-3 text-[13px] text-[#6B6B73] outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-medium text-[#1F1F25]">
              Phone number
            </label>

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="h-10 rounded-[8px] border border-[#D5D5DD] bg-white px-3 text-[13px] text-[#1F1F25] outline-none focus:border-[#00B6CE]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-medium text-[#1F1F25]">
              Location
            </label>

            <input
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Enter location"
              className="h-10 rounded-[8px] border border-[#D5D5DD] bg-white px-3 text-[13px] text-[#1F1F25] outline-none focus:border-[#00B6CE]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-medium text-[#1F1F25]">
              Programme track
            </label>

            <input
              name="program"
              value={formData.program}
              disabled
              className="h-10 rounded-[8px] border border-[#D5D5DD] bg-[#F5F6F8] px-3 text-[13px] text-[#6B6B73] outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-medium text-[#1F1F25]">
              Portfolio URL
            </label>

            <input
              name="portfolioUrl"
              value={formData.portfolioUrl}
              onChange={handleChange}
              placeholder="https://..."
              className="h-10 rounded-[8px] border border-[#D5D5DD] bg-white px-3 text-[13px] text-[#1F1F25] outline-none focus:border-[#00B6CE]"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-medium text-[#1F1F25]">
              LinkedIn URL
            </label>

            <input
              name="linkedinUrl"
              value={formData.linkedinUrl}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/..."
              className="h-10 rounded-[8px] border border-[#D5D5DD] bg-white px-3 text-[13px] text-[#1F1F25] outline-none focus:border-[#00B6CE]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[12px] font-medium text-[#1F1F25]">Bio</label>

          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            rows={3}
            placeholder="Tell us about yourself..."
            className="resize-none rounded-[8px] border border-[#D5D5DD] bg-white px-3 py-3 text-[13px] text-[#1F1F25] outline-none focus:border-[#00B6CE]"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[12px] font-medium text-[#1F1F25]">
            Skills
          </label>

          <input
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Figma, User Research, Prototyping, Design Systems"
            className="h-10 rounded-[8px] border border-[#D5D5DD] bg-white px-3 text-[13px] text-[#1F1F25] outline-none focus:border-[#00B6CE]"
          />
        </div>

        {error && <p className="text-[12px] text-red-600">{error}</p>}

        {success && <p className="text-[12px] text-green-600">{success}</p>}

        <div className="flex justify-end gap-3 border-t border-[#E5E5EB] pt-4">
          <Button
            variant="light"
            onClick={handleCancel}
            className="rounded-[8px] px-4 py-[10px] text-[12px] font-semibold"
          >
            Cancel
          </Button>

          <Button
            disabled={saving}
            className="rounded-[8px] px-4 py-[10px] text-[12px] font-semibold"
          >
            {saving ? "Saving..." : "Save changes"}
          </Button>
        </div>
      </form>
    </div>
  );
}
