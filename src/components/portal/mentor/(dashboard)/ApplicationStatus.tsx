"use client";

import { useEffect, useState } from "react";
import { getMyMentorProfile } from "@/src/services/mentors";
import LoadingState from "@/src/components/ui/Loading/LoadingState";

type MentorStatus = "Applied" | "Accepted" | "Rejected";

interface Mentor {
  _id: string;
  expertise: string;
  phone: string;
  currentRole: string;
  yearsOfExperience: number;
  program: string;
  mentoringExperience: string;
  motivation: string;
  hoursPerWeek: number;
  timeZone: string;
  availableHours: string;
  status: MentorStatus;
  createdAt?: string;
}

export default function MentorApplicationStatusPage() {
  const [mentor, setMentor] = useState<Mentor | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMentorProfile = async () => {
      try {
        const response = await getMyMentorProfile();
        setMentor(response?.mentor || null);
      } catch (error) {
        console.error("Failed to fetch mentor application:", error);
        setError("Unable to load your application status.");
      } finally {
        setLoading(false);
      }
    };

    fetchMentorProfile();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-[500px] items-center justify-center">
        <LoadingState />
      </main>
    );
  }

  if (error || !mentor) {
    return (
      <main className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
        <p className="text-sm text-red-500">
          {error || "Mentor application not found."}
        </p>
      </main>
    );
  }

  const status = mentor.status;

  const isApplied = status === "Applied";
  const isAccepted = status === "Accepted";
  const isRejected = status === "Rejected";

  const getStatusText = () => {
    if (isAccepted) return "Application Accepted";
    if (isRejected) return "Application Not Approved";
    return "Application Under Review";
  };

  const getStatusDescription = () => {
    if (isAccepted) {
      return "Congratulations! Your mentor application has been approved. You can now continue with your mentor journey.";
    }

    if (isRejected) {
      return "Your mentor application was not approved. You can review your profile and application information.";
    }

    return "Your mentor application has been submitted successfully and is currently being reviewed by the PN Africa team.";
  };

  return (
    <main className="space-y-5 bg-[#F8F8F8]">
      {/* Page Header */}
      <div>
        <p className=" text-sm text-[#5D5D61]">
          Track the progress of your PN Africa mentor application.
        </p>
      </div>

      {/* Status Card */}
      <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full ${
                isAccepted
                  ? "bg-green-100"
                  : isRejected
                    ? "bg-red-100"
                    : "bg-yellow-100"
              }`}
            >
              {isAccepted ? (
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : isRejected ? (
                <svg
                  className="h-6 w-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-yellow-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8v4l3 2"
                  />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              )}
            </div>

            <div>
              <p className="text-sm text-[#777]">Mentor Application</p>
              <h2 className="mt-1 text-xl font-semibold text-[#171719]">
                {getStatusText()}
              </h2>
            </div>
          </div>
        </div>

        <p className="mt-5 max-w-2xl text-sm leading-6 text-[#5D5D61]">
          {getStatusDescription()}
        </p>

        {mentor.createdAt && (
          <p className="mt-4 text-xs text-[#888]">
            Submitted on{" "}
            {new Date(mentor.createdAt).toLocaleDateString("en-NG", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        )}
      </div>

      {/* Application Progress */}
      <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
        <h2 className="text-lg font-semibold text-[#171719]">
          Application Progress
        </h2>

        <div className="mt-6 space-y-6">
          {/* Step 1 */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                <svg
                  className="h-5 w-5 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>

              <div className="mt-2 h-8 w-px bg-[#E5E5E5]" />
            </div>

            <div className="pb-2">
              <h3 className="text-sm font-semibold text-[#171719]">
                Application Submitted
              </h3>
              <p className="mt-1 text-sm text-[#777]">
                Your mentor application was successfully submitted.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4">
            <div className="flex flex-col items-center">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full ${
                  isApplied || isAccepted || isRejected
                    ? "bg-yellow-100"
                    : "bg-[#F2F2F2]"
                }`}
              >
                {isAccepted || isRejected ? (
                  <svg
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                )}
              </div>

              <div className="mt-2 h-8 w-px bg-[#E5E5E5]" />
            </div>

            <div className="pb-2">
              <h3 className="text-sm font-semibold text-[#171719]">
                Application Review
              </h3>
              <p className="mt-1 text-sm text-[#777]">
                {isApplied
                  ? "Our team is currently reviewing your application."
                  : "Your application has been reviewed by our team."}
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4">
            <div className="flex h-9 w-9 items-center justify-center">
              {isAccepted ? (
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              ) : isRejected ? (
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-100">
                  <svg
                    className="h-5 w-5 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              ) : (
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F2F2F2]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#BDBDBD]" />
                </div>
              )}
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#171719]">Decision</h3>
              <p className="mt-1 text-sm text-[#777]">
                {isAccepted
                  ? "Your mentor application has been accepted."
                  : isRejected
                    ? "Your mentor application was not approved."
                    : "Waiting for the review decision."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Application Details */}
      <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
        <h2 className="text-lg font-semibold text-[#171719]">
          Application Details
        </h2>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <p className="text-xs text-[#888]">Expertise</p>
            <p className="mt-1 text-sm font-medium text-[#171719]">
              {mentor.expertise}
            </p>
          </div>

          <div>
            <p className="text-xs text-[#888]">Current Role</p>
            <p className="mt-1 text-sm font-medium text-[#171719]">
              {mentor.currentRole}
            </p>
          </div>

          <div>
            <p className="text-xs text-[#888]">Years of Experience</p>
            <p className="mt-1 text-sm font-medium text-[#171719]">
              {mentor.yearsOfExperience} years
            </p>
          </div>

          <div>
            <p className="text-xs text-[#888]">Program</p>
            <p className="mt-1 text-sm font-medium text-[#171719]">
              {mentor.program}
            </p>
          </div>

          <div>
            <p className="text-xs text-[#888]">Mentoring Experience</p>
            <p className="mt-1 text-sm font-medium text-[#171719]">
              {mentor.mentoringExperience}
            </p>
          </div>

          <div>
            <p className="text-xs text-[#888]">Hours Per Week</p>
            <p className="mt-1 text-sm font-medium text-[#171719]">
              {mentor.hoursPerWeek} hours
            </p>
          </div>

          <div>
            <p className="text-xs text-[#888]">Time Zone</p>
            <p className="mt-1 text-sm font-medium text-[#171719]">
              {mentor.timeZone}
            </p>
          </div>

          <div>
            <p className="text-xs text-[#888]">Availability</p>
            <p className="mt-1 text-sm font-medium text-[#171719]">
              {mentor.availableHours}
            </p>
          </div>
        </div>
      </div>

      {/* What's Next */}
      <div className="rounded-2xl border border-[#E8E8E8] bg-white p-6">
        <h2 className="text-lg font-semibold text-[#171719]">
          What happens next?
        </h2>

        <p className="mt-2 text-sm leading-6 text-[#5D5D61]">
          {isApplied
            ? "Our team will review your mentor application. You will be notified once a decision has been made."
            : isAccepted
              ? "Your application has been approved. You can now continue your mentor journey through the mentor portal."
              : "You can review your application information and keep your profile up to date."}
        </p>
      </div>
    </main>
  );
}
