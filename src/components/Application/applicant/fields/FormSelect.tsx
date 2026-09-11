// interface FormSelectProps {
//   label: string;
//   placeholder: string;
//   value: string;
//   options: string[];
//   error?: string;
//   onChange: (value: string) => void;
// }

// export default function FormSelect({
//   label,
//   placeholder,
//   value,
//   options,
//   error,
//   onChange,
// }: FormSelectProps) {
//   return (
//     <div className="flex flex-col gap-2">
//       <label className="text-[12px] font-semibold leading-none text-[#1F1F25]">
//         {label}
//       </label>

//       <select
//         value={value}
//         onChange={(event) => onChange(event.target.value)}
//         className="
//           h-[42px]
//           w-full
//           appearance-none
//           rounded-[10px]
//           border
//           border-[#E5E5EB]
//           bg-white
//           px-4
//           text-[13px]
//           text-[#1F1F25]
//           outline-none
//           focus:border-[#00B6CE]
//         "
//       >
//         <option value="">{placeholder}</option>

//         {options.map((option) => (
//           <option key={option} value={option}>
//             {option}
//           </option>
//         ))}
//       </select>
//       {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
//     </div>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";

interface FormSelectProps {
  label: string;
  placeholder: string;
  value: string;
  options: string[];
  error?: string;
  onChange: (value: string) => void;
}

export default function FormSelect({
  label,
  placeholder,
  value,
  options,
  error,
  onChange,
}: FormSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearch("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
    setSearch("");
  };

  return (
    <div ref={dropdownRef} className="relative flex flex-col gap-2">
      <label className="text-[12px] font-semibold leading-none text-[#1F1F25]">
        {label}
      </label>

      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        className={`flex h-[42px] w-full items-center justify-between rounded-[10px] border bg-white px-4 text-left text-[13px] outline-none transition ${
          error
            ? "border-red-500"
            : isOpen
              ? "border-[#00B6CE]"
              : "border-[#E5E5EB]"
        }`}
      >
        <span className={value ? "text-[#1F1F25]" : "text-[#9A9AA0]"}>
          {value || placeholder}
        </span>

        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full z-50 mt-2 w-full overflow-hidden rounded-[10px] border border-[#E5E5EB] bg-white shadow-[0_8px_24px_rgba(31,31,37,0.12)]">
          <div className="border-b border-[#E5E5EB] p-2">
            <div className="flex h-[38px] items-center gap-2 rounded-[8px] border border-[#E5E5EB] px-3 focus-within:border-[#00B6CE]">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0 text-[#9A9AA0]"
              >
                <path
                  d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              <input
                type="text"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search country..."
                autoFocus
                className="h-full w-full bg-transparent text-[13px] text-[#1F1F25] outline-none placeholder:text-[#9A9AA0]"
              />
            </div>
          </div>

          <div className="max-h-[220px] overflow-y-auto py-1">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect(option)}
                  className={`flex w-full items-center px-4 py-2.5 text-left text-[13px] transition hover:bg-[#F5FBFC] ${
                    value === option
                      ? "bg-[#F5FBFC] font-semibold text-[#00B6CE]"
                      : "text-[#1F1F25]"
                  }`}
                >
                  {option}

                  {value === option && (
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-auto"
                    >
                      <path
                        d="M5 12L10 17L20 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              ))
            ) : (
              <p className="px-4 py-4 text-center text-[13px] text-[#9A9AA0]">
                No country found
              </p>
            )}
          </div>
        </div>
      )}

      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}
