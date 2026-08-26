"use client";

import { useState } from "react";

interface AvailabilitySettingsProps {
  initialCapacity?: string;
}

export default function AvailabilitySettings({
  initialCapacity = "",
}: AvailabilitySettingsProps) {
  const [capacity, setCapacity] = useState(initialCapacity);

  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase leading-[100%] text-[#5D5D61]">
        Availability
      </p>

      <div className="mt-[14px]">
        <label
          htmlFor="weekly-capacity"
          className="text-[12px] font-semibold text-[#1F1F25]"
        >
          Weekly Capacity
        </label>

        <input
          id="weekly-capacity"
          type="number"
          min="0"
          value={capacity}
          onChange={(event) => setCapacity(event.target.value)}
          placeholder="Max mentees per cohort"
          className="mt-[6px] h-[38px] w-full rounded-[8px] border border-[#E5E5EB] bg-white px-[13px] text-[12px] text-[#1F1F25] outline-none transition placeholder:text-[#5D5D61] focus:border-[#00B6CE]"
        />
      </div>
    </section>
  );
}
