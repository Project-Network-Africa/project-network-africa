import AccountSettings from "@/src/components/portal/mentor/(settings)/AccountSettings";
import AvailabilitySettings from "@/src/components/portal/mentor/(settings)/AvailabilitySettings";
import PrivacySettings from "@/src/components/portal/mentor/(settings)/PrivacySettings";

export default function MentorSettingsPage() {
  return (
    <div className="w-full">
      <div className=" space-y-[20px]">
        <AccountSettings />

        <AvailabilitySettings />

        <PrivacySettings />
      </div>
    </div>
  );
}
