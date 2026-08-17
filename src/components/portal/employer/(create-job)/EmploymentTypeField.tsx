import { JobFieldProps } from "./create-job-type";

export default function EmploymentTypeField({
  value,
  onChange,
}: JobFieldProps) {
  return (
    <div>
      <label
        htmlFor="employment-type"
        className="text-[12px] font-semibold text-[#1F1F25]"
      >
        Employment Type
      </label>

      <input
        id="employment-type"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Full-time / Contract / Internship"
        className="mt-1 h-[38px] w-full rounded-[8px] border border-[#E5E5EB] px-[13px] text-[12px] text-[#1F1F25] outline-none transition focus:border-[#00B6CE]"
      />
    </div>
  );
}
