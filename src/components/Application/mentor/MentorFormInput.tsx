// interface MentorFormInputProps {
//   label: string;
//   placeholder: string;
//   value: string;
//   type?: string;
//   error?: string;
//   required?: boolean;
//   readOnly?: boolean;
//   onChange: (value: string) => void;
// }

// export default function MentorFormInput({
//   label,
//   placeholder,
//   value,
//   type = "text",
//   error,
//   required = false,
//   onChange,
//   readOnly,
// }: MentorFormInputProps) {
//   return (
//     <div className="flex flex-col gap-2 font-body">
//       <label className="text-[12px]  lg:font-semibold font-medium leading-tight text-[#1F1F25]">
//         {label}

//         {required && <span className="ml-1 text-red-500">*</span>}
//       </label>

//       <input
//         type={type}
//         value={value}
//         placeholder={placeholder}
//         onChange={(event) => onChange(event.target.value)}
//         readOnly={readOnly}
//         className={`
//           h-[42px]
//           w-full
//           rounded-[10px]
//           border
//           bg-white
//           px-4
//           lg:text-[13px]
//           text-[14px]
//           font-normal
//           text-[#1F1F25]
//           outline-none
//           placeholder:text-[#7A7A80]
//           transition-colors
//           ${
//             error
//               ? "border-red-400 focus:border-red-500"
//               : "border-[#E5E5EB] focus:border-[#00B6CE]"
//           }
//         `}
//       />

//       {error && <p className="text-[11px] font-medium text-red-500">{error}</p>}
//     </div>
//   );
// }
import { InputHTMLAttributes } from "react";

interface MentorFormInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
> {
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}

export default function MentorFormInput({
  label,
  placeholder,
  value,
  type = "text",
  error,
  required = false,
  onChange,
  readOnly,
  ...inputProps
}: MentorFormInputProps) {
  return (
    <div className="flex flex-col gap-2 font-body">
      <label className="text-[12px] font-medium leading-tight text-[#1F1F25] lg:font-semibold">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <input
        {...inputProps}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        readOnly={readOnly}
        className={`h-[42px] w-full rounded-[10px] border bg-white px-4 text-[14px] font-normal text-[#1F1F25] outline-none transition-colors placeholder:text-[#7A7A80] lg:text-[13px] ${error ? "border-red-400 focus:border-red-500" : "border-[#E5E5EB] focus:border-[#00B6CE]"}`}
      />

      {error && <p className="text-[11px] font-medium text-red-500">{error}</p>}
    </div>
  );
}
