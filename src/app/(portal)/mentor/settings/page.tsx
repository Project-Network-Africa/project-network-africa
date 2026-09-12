"use client";

import { useEffect, useState } from "react";

import AccountSettings from "@/src/components/portal/mentor/(settings)/AccountSettings";
import AvailabilitySettings from "@/src/components/portal/mentor/(settings)/AvailabilitySettings";
import DangerZone from "@/src/components/portal/mentor/(settings)/DangerZone";
import PrivacySettings from "@/src/components/portal/mentor/(settings)/PrivacySettings";

import { checkAuth } from "@/src/services/auth";
import { getMyMentorProfile } from "@/src/services/mentors";
import LoadingState from "@/src/components/ui/Loading/LoadingState";

type MentorState = "not-applied" | "pending" | "rejected" | "accepted";

interface User {
  firstName?: string;
  lastName?: string;
  email?: string;
}

export default function MentorSettingsPage() {
  const [mentorState, setMentorState] = useState<MentorState>("not-applied");

  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettingsData = async () => {
      try {
        // Get logged-in user's account information
        const authResponse = await checkAuth();

        setUser({
          firstName: authResponse.user?.firstName || "",
          lastName: authResponse.user?.lastName || "",
          email: authResponse.user?.email || "",
        });

        // Check mentor application status
        try {
          const response = await getMyMentorProfile();
          const mentor = response?.mentor;

          if (!mentor) {
            setMentorState("not-applied");
            return;
          }

          if (mentor.status === "Applied") {
            setMentorState("pending");
            return;
          }

          if (mentor.status === "Rejected") {
            setMentorState("rejected");
            return;
          }

          if (mentor.status === "Accepted") {
            setMentorState("accepted");
            return;
          }

          setMentorState("not-applied");
        } catch (error) {
          console.error("Failed to fetch mentor profile:", error);
          setMentorState("not-applied");
        }
      } catch (error) {
        console.error("Failed to fetch account information:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettingsData();
  }, []);

  if (loading) {
    return (
      <main className="flex min-h-[500px] items-center justify-center">
        <LoadingState />
      </main>
    );
  }

  return (
    <div className="w-full">
      <div className="space-y-[20px]">
        {/* Available to every mentor */}
        <AccountSettings
          mentorState={mentorState}
          firstName={user?.firstName}
          lastName={user?.lastName}
          email={user?.email}
        />

        {/* Only accepted mentors get these */}
        {mentorState === "accepted" && (
          <>
            <AvailabilitySettings />
            <PrivacySettings />
          </>
        )}

        {/* Available to every mentor */}
        <DangerZone />
      </div>
    </div>
  );
}
