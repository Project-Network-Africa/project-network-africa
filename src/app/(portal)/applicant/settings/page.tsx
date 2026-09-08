"use client";

import { useEffect, useState } from "react";

import AccountSettings from "@/src/components/portal/applicant/(settings)/AccountSettings";
import DangerZone from "@/src/components/portal/applicant/(settings)/DangerZone";
import NotificationPreferences from "@/src/components/portal/applicant/(settings)/NotificationPreferences";
import PrivacyData from "@/src/components/portal/applicant/(settings)/PrivacyData";

import { defaultSettings } from "@/src/data/applicant/settings";
import { checkAuth } from "@/src/services/auth";
import { getMyApplicantProfile } from "@/src/services/applicants";

export default function SettingsPage() {
  const [settings, setSettings] = useState(defaultSettings);
  const [admissionStatus, setAdmissionStatus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const [userResponse, applicantResponse] = await Promise.all([
          checkAuth(),
          getMyApplicantProfile(),
        ]);

        const user = userResponse.user;
        const applicant = applicantResponse.applicant;

        setAdmissionStatus(applicant.admissionStatus || "");

        setSettings((current) => ({
          ...current,
          account: {
            ...current.account,
            fullName: `${user.firstName} ${user.lastName}`,
            email: user.email,
          },
        }));
      } catch (error) {
        console.error("FAILED TO FETCH SETTINGS:", error);
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
    return <div>Loading...</div>;
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
