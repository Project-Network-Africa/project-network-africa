import { JobFieldProps } from "./create-job-type";

export default function JobRequirementsField({
  value,
  onChange,
}: JobFieldProps) {
  return (
    <div className="mt-[14px]">
      <label
        htmlFor="requirements"
        className="text-[12px] font-semibold text-[#1F1F25]"
      >
        Requirements
      </label>

      <textarea
        id="requirements"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="List required skills and experience..."
        className="mt-1 min-h-[77px] w-full resize-none rounded-[8px] border border-[#E5E5EB] px-[13px] py-[12px] text-[12px] text-[#1F1F25] outline-none transition focus:border-[#00B6CE]"
      />
    </div>
  );
}
