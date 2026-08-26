// "use client";

// import { AvailabilityDay } from "@/src/types/mentor/availability";
// import Toggle from "@/src/components/shared/Toggle";

// interface WeeklyOfficeHoursProps {
//   days: AvailabilityDay[];
//   onToggle: (day: string, enabled: boolean) => void;
// }

// export default function WeeklyOfficeHours({
//   days,
//   onToggle,
// }: WeeklyOfficeHoursProps) {
//   return (
//     <section className="w-full rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
//       <p className="text-[10px] font-semibold uppercase leading-[100%] text-[#5D5D61]">
//         Weekly Office Hours
//       </p>

//       <div className="mt-[14px] space-y-[18px]">
//         {days.map((day) => (
//           <div
//             key={day.day}
//             className="grid grid-cols-[120px_1fr_auto] items-center gap-4"
//           >
//             <p className="text-[13px] font-semibold text-[#1F1F25]">
//               {day.day}
//             </p>

//             <p
//               className={`text-[13px] ${
//                 day.enabled ? "text-[#1F1F25]" : "text-[#5D5D61]"
//               }`}
//             >
//               {day.enabled
//                 ? `${day.startTime} – ${day.endTime}`
//                 : "Not available"}
//             </p>

//             <Toggle
//               checked={day.enabled}
//               label={`${day.day} availability`}
//               onChange={(enabled) => onToggle(day.day, enabled)}
//             />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
"use client";

import Toggle from "@/src/components/ui/Toggle/Toggle";
import { AvailabilityDay } from "@/src/types/mentor/availability";

interface WeeklyOfficeHoursProps {
  days: AvailabilityDay[];
  onToggle: (day: string, enabled: boolean) => void;
}

export default function WeeklyOfficeHours({
  days,
  onToggle,
}: WeeklyOfficeHoursProps) {
  return (
    <section className="w-full rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase leading-[100%] text-[#5D5D61]">
        Weekly Office Hours
      </p>

      <div className="mt-[14px] space-y-[18px]">
        {days.map((day) => (
          <div
            key={day.day}
            className="grid grid-cols-[120px_1fr_auto] items-center gap-4"
          >
            <p className="text-[13px] font-semibold text-[#1F1F25]">
              {day.day}
            </p>

            <p
              className={`text-[13px] ${
                day.enabled ? "text-[#1F1F25]" : "text-[#5D5D61]"
              }`}
            >
              {day.enabled
                ? `${day.startTime} – ${day.endTime}`
                : "Not available"}
            </p>

            <Toggle
              checked={day.enabled}
              onChange={(enabled) => onToggle(day.day, enabled)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
