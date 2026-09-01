"use client";

import { useEffect, useRef, useState } from "react";
import { JobStatus } from "@/src/types/employer/job";

interface JobStatusDropdownProps {
  value: JobStatus;
  onChange: (status: JobStatus) => void;
}

const statusStyles: Record<JobStatus, string> = {
  Active: "bg-[#E0F7ED] text-[#1A804D]",
  "Closing Soon": "bg-[#FFF4D6] text-[#9A6B00]",
  Closed: "bg-[#E5E5ED] text-[#595961]",
};

const statuses: JobStatus[] = ["Active", "Closing Soon", "Closed"];

export default function JobStatusDropdown({
  value,
  onChange,
}: JobStatusDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (status: JobStatus) => {
    onChange(status);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className="relative inline-block"
      onClick={(event) => event.stopPropagation()}
      onKeyDown={(event) => event.stopPropagation()}
    >
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Change job status. Current status: ${value}`}
        className={`inline-flex min-w-max items-center gap-2 rounded-full px-[10px] py-1 text-[10px] font-semibold leading-none transition hover:opacity-90 ${statusStyles[value]}`}
      >
        <span>{value}</span>

        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          role="listbox"
          className="absolute right-0 top-[calc(100%+6px)] z-[100] min-w-max rounded-[10px] border border-[#E5E5EB] bg-white p-1.5 shadow-[0px_4px_14px_0px_#00000012]"
        >
          {statuses.map((status) => {
            const isSelected = status === value;

            return (
              <button
                key={status}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => handleSelect(status)}
                className="flex w-full items-center gap-2 rounded-[7px] px-3 py-2 text-left text-[10px] font-semibold text-[#1F1F25] transition hover:bg-[#F6F6F7]"
              >
                {/* Status dot */}
                <span
                  className={`h-[6px] w-[6px] shrink-0 rounded-full ${
                    status === "Active"
                      ? "bg-[#1A804D]"
                      : status === "Closing Soon"
                        ? "bg-[#C58A00]"
                        : "bg-[#595961]"
                  }`}
                />

                {/* Status */}
                <span className="whitespace-nowrap">{status}</span>

                {/* Selected check */}
                {isSelected && (
                  <svg
                    className="ml-auto"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.5 6L5 8.5L9.5 3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
