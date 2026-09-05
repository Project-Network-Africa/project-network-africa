// "use client";

// interface Program {
//   id: string;
//   name: string;
//   description: string;
// }

// interface ProgramSelectionProps {
//   programs: Program[];
//   selectedProgram: string;
//   onProgramChange: (program: string) => void;
//   preferredCohortStart: string;
//   onCohortStartChange: (value: string) => void;
//   errors?: {
//     program?: string;
//     preferredCohortStart?: string;
//   };
// }

// export default function ProgramSelection({
//   programs,
//   selectedProgram,
//   onProgramChange,
//   preferredCohortStart,
//   onCohortStartChange,
//   errors,
// }: ProgramSelectionProps) {
//   return (
//     <div className="flex flex-col gap-6">
//       {/* Heading */}
//       <div>
//         <h1 className="lg:text-[26px] md:text-[24px] lg:font-body  lg:font-bold text-[22px] font-heading font-semibold  leading-none text-[#1F1F25]">
//           Program Selection
//         </h1>

//         <p className="mt-5 text-[12px] lg:text-[14px] lg:font-normal leading-none font-body font-semibold  text-[#5D5D61]">
//           Choose the track like to apply for.
//         </p>
//       </div>

//       {/* Programs */}
//       <div className="flex flex-col gap-[10px]">
//         {programs.map((program) => {
//           const isSelected = selectedProgram === program.id;

//           return (
//             <button
//               key={program.id}
//               type="button"
//               onClick={() => onProgramChange(program.id)}
//               className={`
//                 flex
//                 w-full
//                 items-center
//                 gap-4
//                 rounded-[10px]
//                 border
//                 px-4
//                 py-[13px]
//                 text-left
//                 transition-colors
//                 ${
//                   isSelected
//                     ? "border-[#00B6CE] bg-white"
//                     : "border-[#E5E5EB] bg-white hover:border-[#CFCFD6]"
//                 }
//               `}
//             >
//               {/* Radio */}
//               <span
//                 className={`
//                   flex
//                   h-[18px]
//                   w-[18px]
//                   flex-shrink-0
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   ${isSelected ? "border-[#00B6CE]" : "border-[#E5E5EB]"}
//                 `}
//               >
//                 {isSelected && (
//                   <span className="h-[10px] w-[10px] rounded-full bg-[#00B6CE]" />
//                 )}
//               </span>

//               {/* Program information */}
//               <span className="flex flex-col gap-1 font-body">
//                 <span className="lg:text-[13.5px] text-[12px] font-normal  lg:font-semibold leading-none text-[#1F1F25]">
//                   {program.name}
//                 </span>

//                 <span className="lg:text-[11.5px] text-[12px] font-normal leading-none text-[#5D5D61]">
//                   {program.description}
//                 </span>
//               </span>
//             </button>
//           );
//         })}
//       </div>

//       {/* Preferred cohort */}
//       <div className="flex flex-col gap-2 font-body">
//         <label
//           htmlFor="preferred-cohort"
//           className="text-[12px] lg:font-semibold font-normal leading-none text-[#1F1F25]"
//         >
//           Preferred Cohort Start
//         </label>

//         <select
//           id="preferred-cohort"
//           value={preferredCohortStart}
//           onChange={(event) => onCohortStartChange(event.target.value)}
//           error={errors?.program}
//           className="
//             h-[42px]
//             w-full
//             appearance-none
//             rounded-[10px]
//             border
//             border-[#E5E5EB]
//             bg-white
//             px-4
//             text-[13px]

//             font-normal
//             text-[#5D5D61]
//             outline-none
//             focus:border-[#00B6CE]
//           "
//         >
//           <option value="">Select preferred cohort start</option>

//           <option value="August 2026">Cohort — August 24, 2026</option>

//           <option value="September 2026">Cohort — September 1, 2026</option>

//           <option value="September 2026">Cohort — September 7, 2026</option>

//           <option value="October 2026">Cohort — October 5, 2026</option>
//         </select>
//       </div>
//     </div>
//   );
// }
"use client";

interface Program {
  id: string;
  name: string;
  description: string;
}

interface ProgramSelectionProps {
  programs: Program[];
  selectedProgram: string;
  onProgramChange: (program: string) => void;

  preferredCohortStart: string;
  onCohortStartChange: (value: string) => void;

  errors?: {
    program?: string;
    preferredCohortStart?: string;
  };
}

export default function ProgramSelection({
  programs,
  selectedProgram,
  onProgramChange,
  preferredCohortStart,
  onCohortStartChange,
  errors,
}: ProgramSelectionProps) {
  return (
    <div className="flex flex-col gap-6">
      {/* Heading */}
      <div>
        <h1 className="text-[22px] font-heading font-semibold leading-none text-[#1F1F25] md:text-[24px] lg:text-[26px] lg:font-body lg:font-bold">
          Program Selection
        </h1>

        <p className="mt-5 text-[12px] font-body font-semibold leading-none text-[#5D5D61] md:text-[12px] lg:text-[14px] lg:font-normal">
          Choose the track you&apos;d like to apply for.
        </p>
      </div>

      {/* Programs */}
      <div className="flex flex-col gap-[10px]">
        {programs.map((program) => {
          const isSelected = selectedProgram === program.id;

          return (
            <button
              key={program.id}
              type="button"
              onClick={() => onProgramChange(program.id)}
              className={`
                flex
                w-full
                items-center
                gap-4
                rounded-[10px]
                border
                px-4
                py-[13px]
                text-left
                transition-colors
                ${
                  isSelected
                    ? "border-[#00B6CE] bg-white"
                    : "border-[#E5E5EB] bg-white hover:border-[#CFCFD6]"
                }
              `}
            >
              {/* Radio */}
              <span
                className={`
                  flex
                  h-[18px]
                  w-[18px]
                  flex-shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  ${isSelected ? "border-[#00B6CE]" : "border-[#E5E5EB]"}
                `}
              >
                {isSelected && (
                  <span className="h-[10px] w-[10px] rounded-full bg-[#00B6CE]" />
                )}
              </span>

              {/* Program information */}
              <span className="flex flex-col gap-1 font-body">
                <span className="text-[12px] font-normal leading-none text-[#1F1F25] lg:text-[13.5px] lg:font-semibold">
                  {program.name}
                </span>

                <span className="text-[12px] font-normal leading-none text-[#5D5D61] lg:text-[11.5px]">
                  {program.description}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Program error */}
      {errors?.program && (
        <p className="text-xs font-medium text-red-500">{errors.program}</p>
      )}

      {/* Preferred cohort */}
      <div className="flex flex-col gap-2 font-body">
        <label
          htmlFor="preferred-cohort"
          className="text-[12px] font-normal leading-none text-[#1F1F25] lg:font-semibold"
        >
          Preferred Cohort Start
        </label>

        <select
          id="preferred-cohort"
          value={preferredCohortStart}
          onChange={(event) => onCohortStartChange(event.target.value)}
          className={`
            h-[42px]
            w-full
            appearance-none
            rounded-[10px]
            border
            bg-white
            px-4
            text-[13px]
            font-normal
            text-[#5D5D61]
            outline-none
            ${
              errors?.preferredCohortStart
                ? "border-red-400 focus:border-red-500"
                : "border-[#E5E5EB] focus:border-[#00B6CE]"
            }
          `}
        >
          <option value="">Select preferred cohort start</option>
          <option value="August 2026">Cohort — August 24, 2026</option>
          <option value="September 1 2026">Cohort — September 1, 2026</option>
          <option value="September 7 2026">Cohort — September 7, 2026</option>
          <option value="October 2026">Cohort — October 5, 2026</option>
        </select>

        {/* Cohort error */}
        {errors?.preferredCohortStart && (
          <p className="text-xs font-medium text-red-500">
            {errors.preferredCohortStart}
          </p>
        )}
      </div>
    </div>
  );
}
