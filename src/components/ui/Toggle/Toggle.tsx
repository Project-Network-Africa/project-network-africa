"use client";

import { ToggleProps } from "./toggle.types";

export default function Toggle({ checked, onChange }: ToggleProps) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative h-[22px] w-10 rounded-full transition ${
        checked ? "bg-[#00B6CE]" : "bg-[#E0E0E5]"
      }`}
      aria-pressed={checked}
    >
      <span
        className={`absolute top-[3px] h-4 w-4 rounded-full bg-white transition ${
          checked ? "right-[3px]" : "left-[3px]"
        }`}
      />
    </button>
  );
}
