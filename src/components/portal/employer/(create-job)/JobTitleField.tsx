import { JobFieldProps } from "./create-job-type";

export default function JobTitleField({ value, onChange }: JobFieldProps) {
  return (
    <div className="mt-4">
      <label
        htmlFor="job-title"
        className="text-[12px] font-semibold text-[#1F1F25]"
      >
        Job Title
      </label>

      <input
        id="job-title"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="e.g. Junior Product Designer"
        className="mt-1 h-[38px] w-full rounded-[8px] border border-[#E5E5EB] px-[13px] text-[12px] text-[#1F1F25] outline-none transition focus:border-[#00B6CE]"
      />
    </div>
  );
}
