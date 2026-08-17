// import Toggle from "@/src/components/ui/Toggle/Toggle";

// interface NotificationPreferencesProps {
//   settings: {
//     mentorFeedback: boolean;
//     deadlines: boolean;
//     sessionReminders: boolean;
//   };
//   onChange: (key: string, value: boolean) => void;
// }

// export default function NotificationPreferences({
//   settings,
//   onChange,
// }: NotificationPreferencesProps) {
//   const items = [
//     {
//       key: "mentorFeedback",
//       label: "Email me about mentor feedback",
//     },
//     {
//       key: "deadlines",
//       label: "Email me about deadlines",
//     },
//     {
//       key: "sessionReminders",
//       label: "SMS reminders for sessions",
//     },
//   ];

//   return (
//     <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
//       <p className="mb-4 text-[10px] font-semibold uppercase text-[#5D5D61]">
//         Notification Preferences
//       </p>

//       <div className="flex flex-col gap-4">
//         {items.map((item) => (
//           <div key={item.key} className="flex items-center justify-between">
//             <span className="text-[13px] text-[#1F1F25]">{item.label}</span>

//             <Toggle
//               checked={settings[item.key as keyof typeof settings]}
//               onChange={(value) => onChange(item.key, value)}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import Toggle from "@/src/components/ui/Toggle/Toggle";

interface NotificationPreference {
  id: string;
  label: string;
  enabled: boolean;
}

interface NotificationPreferencesProps {
  preferences: NotificationPreference[];
  onToggleChange: (id: string, value: boolean) => void;
}

export default function NotificationPreferences({
  preferences,
  onToggleChange,
}: NotificationPreferencesProps) {
  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="mb-4 text-[10px] font-semibold uppercase text-[#5D5D61]">
        Notification Preferences
      </p>

      <div className="flex flex-col gap-4">
        {preferences.map((preference) => (
          <div
            key={preference.id}
            className="flex items-center justify-between"
          >
            <span className="text-[13px] text-[#1F1F25]">
              {preference.label}
            </span>

            <Toggle
              checked={preference.enabled}
              onChange={(value) => onToggleChange(preference.id, value)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
