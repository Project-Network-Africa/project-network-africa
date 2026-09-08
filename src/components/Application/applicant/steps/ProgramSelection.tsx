"use client";

import { useEffect, useMemo, useState } from "react";
import { getApplicantCohorts } from "@/src/services/applicants";

interface Cohort {
  _id: string;
  name: string;
  program: string;
  description: string;
  startDate: string;
  endDate: string;
  capacity: number;
  isOpen: boolean;
  status: string;
}

interface ProgramSelectionProps {
  selectedProgram: string;
  onProgramChange: (program: string) => void;
  selectedCohortId: string;
  onCohortChange: (value: string) => void;
  errors?: {
    program?: string;
    cohortId?: string;
  };
}

export default function ProgramSelection({
  selectedProgram,
  onProgramChange,
  selectedCohortId,
  onCohortChange,
  errors,
}: ProgramSelectionProps) {
  const [cohorts, setCohorts] = useState<Cohort[]>([]);
  const [loadingCohorts, setLoadingCohorts] = useState(true);

  useEffect(() => {
    const fetchCohorts = async () => {
      try {
        const response = await getApplicantCohorts();

        setCohorts(response.cohorts || []);
      } catch (error) {
        console.error("FAILED TO GET COHORTS:", error);
      } finally {
        setLoadingCohorts(false);
      }
    };

    fetchCohorts();
  }, []);

  const availableCohorts = cohorts.filter((cohort) => cohort.isOpen);

  const programs = useMemo(() => {
    const uniquePrograms = Array.from(
      new Set(availableCohorts.map((cohort) => cohort.program)),
    );

    return uniquePrograms;
  }, [availableCohorts]);

  const selectedProgramCohorts = availableCohorts.filter(
    (cohort) => cohort.program === selectedProgram,
  );

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-[22px] font-heading font-semibold leading-none text-[#1F1F25] md:text-[24px] lg:text-[26px] lg:font-body lg:font-bold">
          Program Selection
        </h1>

        <p className="mt-5 text-[12px] font-body font-semibold leading-none text-[#5D5D61] md:text-[12px] lg:text-[14px] lg:font-normal">
          Choose the track you&apos;d like to apply for.
        </p>
      </div>

      {loadingCohorts ? (
        <p className="text-[12px] text-[#5D5D61]">
          Loading available programs...
        </p>
      ) : programs.length === 0 ? (
        <p className="text-[12px] text-[#5D5D61]">
          No programs are currently available.
        </p>
      ) : (
        <div className="flex flex-col gap-[10px]">
          {programs.map((program) => {
            const isSelected = selectedProgram === program;

            return (
              <button
                key={program}
                type="button"
                onClick={() => {
                  onProgramChange(program);
                  onCohortChange("");
                }}
                className={`flex w-full items-center gap-4 rounded-[10px] border px-4 py-[13px] text-left transition-colors ${isSelected ? "border-[#00B6CE] bg-white" : "border-[#E5E5EB] bg-white hover:border-[#CFCFD6]"}`}
              >
                <span
                  className={`flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center rounded-full border ${isSelected ? "border-[#00B6CE]" : "border-[#E5E5EB]"}`}
                >
                  {isSelected && (
                    <span className="h-[10px] w-[10px] rounded-full bg-[#00B6CE]" />
                  )}
                </span>

                <span className="flex flex-col gap-1 font-body">
                  <span className="text-[12px] font-normal leading-none text-[#1F1F25] lg:text-[13.5px] lg:font-semibold">
                    {program}
                  </span>

                  <span className="text-[12px] font-normal leading-none text-[#5D5D61] lg:text-[11.5px]">
                    Available program
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      )}

      {errors?.program && (
        <p className="text-xs font-medium text-red-500">{errors.program}</p>
      )}

      <div className="flex flex-col gap-2 font-body">
        <label
          htmlFor="preferred-cohort"
          className="text-[12px] font-normal leading-none text-[#1F1F25] lg:font-semibold"
        >
          Preferred Cohort Start
        </label>

        <select
          id="preferred-cohort"
          value={selectedCohortId}
          onChange={(event) => onCohortChange(event.target.value)}
          disabled={loadingCohorts || !selectedProgram}
          className={`h-[42px] w-full appearance-none rounded-[10px] border bg-white px-4 text-[13px] font-normal text-[#5D5D61] outline-none ${errors?.cohortId ? "border-red-400 focus:border-red-500" : "border-[#E5E5EB] focus:border-[#00B6CE]"}`}
        >
          <option value="">
            {!selectedProgram
              ? "Select a program first"
              : loadingCohorts
                ? "Loading cohorts..."
                : "Select preferred cohort"}
          </option>

          {selectedProgramCohorts.map((cohort) => (
            <option key={cohort._id} value={cohort._id}>
              {cohort.name} — {new Date(cohort.startDate).toLocaleDateString()}
            </option>
          ))}
        </select>

        {errors?.cohortId && (
          <p className="text-xs font-medium text-red-500">{errors.cohortId}</p>
        )}
      </div>
    </div>
  );
}
