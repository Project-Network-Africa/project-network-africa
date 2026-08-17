import { JobFieldProps } from "./create-job-type";

export default function JobLocationField({ value, onChange }: JobFieldProps) {
  return (
    <div>
      <label
        htmlFor="location"
        className="text-[12px] font-semibold text-[#1F1F25]"
      >
        Location
      </label>

      <input
        id="location"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="e.g. Lagos, NG or Remote"
        className="mt-1 h-[38px] w-full rounded-[8px] border border-[#E5E5EB] px-[13px] text-[12px] text-[#1F1F25] outline-none transition focus:border-[#00B6CE]"
      />
    </div>
  );
}
