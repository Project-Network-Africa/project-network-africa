"use client";

import { useEffect, useState } from "react";
import {
  getMyMentorProfile,
  updateMyMentorProfile,
} from "@/src/services/mentors";
import LoadingState from "@/src/components/ui/Loading/LoadingState";
import { checkAuth } from "@/src/services/auth";
interface Mentor {
  expertise: string;
  phone: string;
  currentRole: string;
  yearsOfExperience: number;
  program: string;
  mentoringExperience: string;
  hoursPerWeek: number;
  timeZone: string;
  availableHours: string;
  portfolio: string;
  status: string;
  userId?: {
    firstName?: string;
    lastName?: string;
    email?: string;
  };
}

type MentorState = "not-applied" | "pending" | "rejected" | "accepted";

export default function MentorProfile() {
  const [mentor, setMentor] = useState<Mentor | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    phone: "",
    currentRole: "",
    expertise: "",
    yearsOfExperience: "",
    hoursPerWeek: "",
    timeZone: "",
    availableHours: "",
    portfolio: "",
  });

  const [mentorState, setMentorState] = useState<MentorState>("not-applied");
  const [user, setUser] = useState<{
    firstName: string;
    lastName: string;
    email: string;
  } | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const authResponse = await checkAuth();

        setUser({
          firstName: authResponse.user?.firstName || "",
          lastName: authResponse.user?.lastName || "",
          email: authResponse.user?.email || "",
        });
        const response = await getMyMentorProfile();
        const data = response?.mentor;

        if (!data) {
          setError("Mentor profile not found.");
          return;
        }

        setMentor(data);

        if (data.status === "Applied") {
          setMentorState("pending");
        } else if (data.status === "Rejected") {
          setMentorState("rejected");
        } else if (data.status === "Accepted") {
          setMentorState("accepted");
        } else {
          setMentorState("not-applied");
        }

        setFormData({
          phone: data.phone || "",
          currentRole: data.currentRole || "",
          expertise: data.expertise || "",
          yearsOfExperience: String(data.yearsOfExperience ?? ""),
          hoursPerWeek: String(data.hoursPerWeek ?? ""),
          timeZone: data.timeZone || "",
          availableHours: data.availableHours || "",
          portfolio: data.portfolio || "",
        });
      } catch (error) {
        console.error("Failed to fetch mentor profile:", error);
        setError("Unable to load your mentor profile.");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    if (mentorState !== "accepted") {
      return;
    }

    setSaving(true);
    setError("");
    setSuccess("");

    try {
      const response = await updateMyMentorProfile({
        phone: formData.phone,
        currentRole: formData.currentRole,
        expertise: formData.expertise,
        yearsOfExperience: Number(formData.yearsOfExperience),
        hoursPerWeek: Number(formData.hoursPerWeek),
        timeZone: formData.timeZone,
        availableHours: formData.availableHours,
        portfolio: formData.portfolio,
      });

      const updatedMentor = response?.mentor || response;

      setMentor((previous) => {
        if (!previous) return previous;

        return {
          ...previous,
          ...updatedMentor,
        };
      });

      setEditing(false);
      setSuccess("Profile updated successfully.");

      setTimeout(() => {
        setSuccess("");
      }, 3000);
    } catch (error: unknown) {
      console.error("Failed to update mentor profile:", error);

      if (typeof error === "object" && error !== null && "response" in error) {
        const axiosError = error as {
          response?: {
            data?: {
              message?: string;
            };
          };
        };

        setError(
          axiosError.response?.data?.message ||
            "Unable to update your profile.",
        );
      } else {
        setError("Unable to update your profile.");
      }
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    if (!mentor) return;

    setFormData({
      phone: mentor.phone || "",
      currentRole: mentor.currentRole || "",
      expertise: mentor.expertise || "",
      yearsOfExperience: String(mentor.yearsOfExperience ?? ""),
      hoursPerWeek: String(mentor.hoursPerWeek ?? ""),
      timeZone: mentor.timeZone || "",
      availableHours: mentor.availableHours || "",
      portfolio: mentor.portfolio || "",
    });

    setEditing(false);
    setError("");
    setSuccess("");
  };

  if (loading) {
    return (
      <main className="flex min-h-[500px] items-center justify-center">
        <LoadingState />
      </main>
    );
  }

  if (error && !mentor) {
    return (
      <main className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
        <p className="text-sm text-red-500">{error}</p>
      </main>
    );
  }

  if (!mentor) {
    return null;
  }

  // const firstName = mentor.userId?.firstName || "";
  // const lastName = mentor.userId?.lastName || "";
  // const email = mentor.userId?.email || "";
  const firstName = user?.firstName || "";
  const lastName = user?.lastName || "";
  const email = user?.email || "";

  const fullName = `${firstName} ${lastName}`.trim() || "Mentor";

  const isAccepted = mentorState === "accepted";

  return (
    <main className="space-y-5 bg-[#F8F8F8]">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="mt-1 text-sm text-[#5D5D61]">
            Manage the information that represents you as a PN Africa mentor.
          </p>
        </div>

        {/* Only accepted mentors can edit */}
        {isAccepted && !editing && (
          <button
            type="button"
            onClick={() => setEditing(true)}
            className="w-fit rounded-lg bg-[#171719] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Edit Profile
          </button>
        )}
      </div>

      {/* Success */}
      {success && (
        <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          {success}
        </div>
      )}

      {/* Error */}
      {error && mentor && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Profile Overview */}
      <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#F2F2F2] text-xl font-semibold text-[#171719]">
            {firstName?.charAt(0)?.toUpperCase() || "M"}
            {lastName?.charAt(0)?.toUpperCase() || ""}
          </div>

          <div>
            <h2 className="text-xl font-semibold text-[#171719]">{fullName}</h2>

            <p className="mt-1 text-sm text-[#5D5D61]">{mentor.currentRole}</p>

            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#F5F5F5] px-3 py-1 text-xs text-[#5D5D61]">
                {mentor.expertise}
              </span>

              <span className="rounded-full bg-yellow-50 px-3 py-1 text-xs text-yellow-700">
                {mentor.status}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
        <h2 className="text-lg font-semibold text-[#171719]">
          Personal Information
        </h2>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="text-xs text-[#888]">
              First Name
            </label>

            <div className="mt-2 rounded-lg border border-[#E8E8E8] bg-[#F9F9F9] px-4 py-3 text-sm text-[#171719]">
              {firstName || "—"}
            </div>
          </div>

          <div>
            <label htmlFor="last-name" className="text-xs text-[#888]">
              Last Name
            </label>

            <div className="mt-2 rounded-lg border border-[#E8E8E8] bg-[#F9F9F9] px-4 py-3 text-sm text-[#171719]">
              {lastName || "—"}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="text-xs text-[#888]">
              Email
            </label>

            <div className="mt-2 rounded-lg border border-[#E8E8E8] bg-[#F9F9F9] px-4 py-3 text-sm text-[#171719]">
              {email || "—"}
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="text-xs text-[#888]">
              Phone Number
            </label>

            {editing && isAccepted ? (
              <input
                id="phone"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-[#DADADA] bg-white px-4 py-3 text-sm text-[#171719] outline-none focus:border-[#00B6CE]"
              />
            ) : (
              <div className="mt-2 rounded-lg border border-[#E8E8E8] bg-[#F9F9F9] px-4 py-3 text-sm text-[#171719]">
                {mentor.phone || "—"}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Professional Information */}
      <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
        <h2 className="text-lg font-semibold text-[#171719]">
          Professional Information
        </h2>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <ProfileField
            label="Current Role"
            name="currentRole"
            value={formData.currentRole}
            editing={editing && isAccepted}
            onChange={handleChange}
          />

          <ProfileField
            label="Expertise"
            name="expertise"
            value={formData.expertise}
            editing={editing && isAccepted}
            onChange={handleChange}
          />

          <ProfileField
            label="Years of Experience"
            name="yearsOfExperience"
            value={formData.yearsOfExperience}
            editing={editing && isAccepted}
            onChange={handleChange}
            type="number"
          />

          <ProfileField
            label="Portfolio / LinkedIn"
            name="portfolio"
            value={formData.portfolio}
            editing={editing && isAccepted}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Mentoring Availability */}
      <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
        <h2 className="text-lg font-semibold text-[#171719]">
          Mentoring Availability
        </h2>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <ProfileField
            label="Hours Per Week"
            name="hoursPerWeek"
            value={formData.hoursPerWeek}
            editing={editing && isAccepted}
            onChange={handleChange}
            type="number"
          />

          <ProfileField
            label="Time Zone"
            name="timeZone"
            value={formData.timeZone}
            editing={editing && isAccepted}
            onChange={handleChange}
          />

          <ProfileField
            label="Availability"
            name="availableHours"
            value={formData.availableHours}
            editing={editing && isAccepted}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Action Buttons */}
      {editing && isAccepted && (
        <div className="flex flex-col justify-end gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleCancel}
            disabled={saving}
            className="rounded-lg border border-[#DADADA] bg-white px-5 py-3 text-sm font-medium text-[#171719] transition hover:bg-[#F7F7F7] disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="rounded-lg bg-[#171719] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      )}
    </main>
  );
}

interface ProfileFieldProps {
  label: string;
  name: string;
  value: string;
  editing: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function ProfileField({
  label,
  name,
  value,
  editing,
  onChange,
  type = "text",
}: ProfileFieldProps) {
  return (
    <div>
      <label className="text-xs text-[#888]">{label}</label>

      {editing ? (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="mt-2 w-full rounded-lg border border-[#DADADA] bg-white px-4 py-3 text-sm text-[#171719] outline-none focus:border-[#00B6CE]"
        />
      ) : (
        <div className="mt-2 rounded-lg border border-[#E8E8E8] bg-[#F9F9F9] px-4 py-3 text-sm text-[#171719]">
          {value || "—"}
        </div>
      )}
    </div>
  );
}
