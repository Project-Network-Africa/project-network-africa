"use client";

import { useEffect, useState } from "react";

import AccountSettings from "@/src/components/portal/applicant/(settings)/AccountSettings";
import DangerZone from "@/src/components/portal/applicant/(settings)/DangerZone";
import NotificationPreferences from "@/src/components/portal/applicant/(settings)/NotificationPreferences";
import PrivacyData from "@/src/components/portal/applicant/(settings)/PrivacyData";

import { defaultSettings } from "@/src/data/applicant/settings";

import { checkAuth } from "@/src/services/auth";
import { getMyApplicantProfile } from "@/src/services/applicants";
import LoadingState from "@/src/components/ui/Loading/LoadingState";

export default function SettingsPage() {
  const [settings, setSettings] = useState(defaultSettings);
  const [admissionStatus, setAdmissionStatus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        // Get account information from the logged-in user
        const userResponse = await checkAuth();

        const user = userResponse.user;

        console.log("SETTINGS USER:", user);

        setSettings((current) => ({
          ...current,
          account: {
            ...current.account,
            fullName: `${user.firstName || ""} ${user.lastName || ""}`.trim(),
            email: user.email || "",
          },
        }));

        // Applicant profile is optional at this stage
        try {
          const applicantResponse = await getMyApplicantProfile();

          const applicant = applicantResponse?.applicant;

          setAdmissionStatus(applicant?.admissionStatus || "");
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          // No applicant profile means the user has not applied yet.

          console.log("NO APPLICANT PROFILE YET");
          setAdmissionStatus("");
        }
      } catch (error) {
        console.error("FAILED TO FETCH USER SETTINGS:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const handleNotificationChange = (id: string, value: boolean) => {
    setSettings((current) => ({
      ...current,
      notifications: current.notifications.map((item) =>
        item.id === id ? { ...item, enabled: value } : item,
      ),
    }));
  };

  const handlePrivacyChange = (id: string, value: boolean) => {
    setSettings((current) => ({
      ...current,
      privacy: current.privacy.map((item) =>
        item.id === id ? { ...item, enabled: value } : item,
      ),
    }));
  };

  if (loading) {
    return (
      <main className="flex min-h-[500px] items-center justify-center">
        <LoadingState />
      </main>
    );
  }

  const isAdmitted = admissionStatus === "Admitted";

  return (
    <div className="flex w-full flex-col gap-5">
      <AccountSettings
        fullName={settings.account.fullName}
        email={settings.account.email}
      />

      {isAdmitted && (
        <>
          <NotificationPreferences
            preferences={settings.notifications}
            onToggleChange={handleNotificationChange}
          />

          <PrivacyData
            preferences={settings.privacy}
            onToggleChange={handlePrivacyChange}
          />
        </>
      )}

      <DangerZone />
    </div>
  );
}
