// "use client";

// import AccountSettings from "@/src/components/portal/applicant/(settings)/AccountSettings";
// import DangerZone from "@/src/components/portal/applicant/(settings)/DangerZone";
// import NotificationPreferences from "@/src/components/portal/applicant/(settings)/NotificationPreferences";
// import PrivacyData from "@/src/components/portal/applicant/(settings)/PrivacyData";
// import { defaultSettings } from "@/src/data/applicant/settings";
// import { useState } from "react";

// export default function SettingsPage() {
//   const [settings, setSettings] = useState(defaultSettings);
//   // const [settings, setSettings] = useState(defaultSettings);

//   const handleNotificationChange = (key: string, value: boolean) => {
//     setSettings((current) => ({
//       ...current,
//       notifications: {
//         ...current.notifications,
//         [key]: value,
//       },
//     }));
//   };

//   return (
//     <div className="flex w-full flex-col gap-5">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <h1 className="text-[24px] font-bold leading-none text-[#1F1F25]">
//           Settings
//         </h1>

//         <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00B6CE] text-[13px] font-bold text-white">
//           AO
//         </div>
//       </div>

//       <AccountSettings
//         fullName={settings.account.fullName}
//         email={settings.account.email}
//       />

//       <NotificationPreferences
//         settings={settings.notifications}
//         onChange={handleNotificationChange}
//       />

//       <PrivacyData
//         preferences={settings.privacy}
//         onToggleChange={(id, value) => {
//           console.log(id, value);
//         }}
//       />

//       <DangerZone />
//     </div>
//   );
// }
"use client";

import { useState } from "react";

import AccountSettings from "@/src/components/portal/applicant/(settings)/AccountSettings";
import DangerZone from "@/src/components/portal/applicant/(settings)/DangerZone";
import NotificationPreferences from "@/src/components/portal/applicant/(settings)/NotificationPreferences";
import PrivacyData from "@/src/components/portal/applicant/(settings)/PrivacyData";
import { defaultSettings } from "@/src/data/applicant/settings";

export default function SettingsPage() {
  const [settings, setSettings] = useState(defaultSettings);

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

  return (
    <div className="flex w-full flex-col gap-5">
      {/* Header */}

      <AccountSettings
        fullName={settings.account.fullName}
        email={settings.account.email}
      />

      <NotificationPreferences
        preferences={settings.notifications}
        onToggleChange={handleNotificationChange}
      />

      <PrivacyData
        preferences={settings.privacy}
        onToggleChange={handlePrivacyChange}
      />

      <DangerZone />
    </div>
  );
}
