// "use client";

// interface ExperiencePortfolioProps {
//   experienceLevel: string;
//   portfolioUrl: string;
//   linkedinUrl: string;
//   resume: File | null;
//   motivation: string;

//   onExperienceLevelChange: (value: string) => void;
//   onPortfolioChange: (value: string) => void;
//   onLinkedinChange: (value: string) => void;
//   onResumeChange: (file: File | null) => void;
//   onMotivationChange: (value: string) => void;

//   // onBack: () => void;
//   // onContinue: () => void;
// }

// const experienceLevels = ["Beginner", "Some Experience", "Experienced"];

// export default function ExperiencePortfolio({
//   experienceLevel,
//   portfolioUrl,
//   linkedinUrl,
//   resume,
//   motivation,
//   onExperienceLevelChange,
//   onPortfolioChange,
//   onLinkedinChange,
//   onResumeChange,
//   onMotivationChange,
// }: ExperiencePortfolioProps) {
//   const handleResumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];

//     if (!file) return;

//     // PDF only
//     if (file.type !== "application/pdf") {
//       alert("Please upload a PDF file.");
//       return;
//     }

//     // 5MB maximum
//     if (file.size > 5 * 1024 * 1024) {
//       alert("Resume must be 5MB or smaller.");
//       return;
//     }

//     onResumeChange(file);
//   };

//   return (
//     <div className="flex flex-col gap-6">
//       {/* Heading */}
//       <div>
//         <h1 className="lg:text-[26px] md:text-[24px] lg:font-body  lg:font-bold text-[22px] font-heading font-semibold  leading-none text-[#1F1F25]">
//           Experience &amp; Portfolio
//         </h1>

//         <p className="mt-5 text-[12px] lg:text-[14px] lg:font-normal leading-none font-body font-semibold  text-[#5D5D61]">
//           Tell us about your background — no experience required.
//         </p>
//       </div>

//       {/* Experience level */}
//       <div className="flex flex-col gap-3 font-body">
//         <p className="lg:text-[11px] text-[12px] font-semibold uppercase text-[#5D5D61]">
//           Experience Level
//         </p>

//         <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
//           {experienceLevels.map((level) => {
//             const isSelected = experienceLevel === level;

//             return (
//               <button
//                 key={level}
//                 type="button"
//                 onClick={() => onExperienceLevelChange(level)}
//                 className={`
//                   flex
//                   h-[44px]
//                   items-center
//                   gap-3
//                   rounded-[10px]
//                   border
//                   px-4
//                   text-left
//                   transition-colors
//                   ${
//                     isSelected
//                       ? "border-[#00B6CE]"
//                       : "border-[#E5E5EB] hover:border-[#CFCFD6]"
//                   }
//                 `}
//               >
//                 <span
//                   className={`
//                     flex
//                     h-[18px]
//                     w-[18px]
//                     items-center
//                     justify-center
//                     rounded-full
//                     border
//                     ${isSelected ? "border-[#00B6CE]" : "border-[#E5E5EB]"}
//                   `}
//                 >
//                   {isSelected && (
//                     <span className="h-[10px] w-[10px] rounded-full bg-[#00B6CE]" />
//                   )}
//                 </span>

//                 <span className="lg:text-[13px] text-[12px] font-normal lg:font-semibold text-[#1F1F25]">
//                   {level}
//                 </span>
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* Portfolio + LinkedIn */}
//       <div className="grid grid-cols-1 gap-4 md:grid-cols-2 font-body">
//         <div className="flex flex-col gap-2">
//           <label
//             htmlFor="portfolio"
//             className="text-[12px] lg:font-semibold font-normal text-[#1F1F25]"
//           >
//             Portfolio Link (optional)
//           </label>

//           <input
//             id="portfolio"
//             type="url"
//             value={portfolioUrl}
//             onChange={(event) => onPortfolioChange(event.target.value)}
//             placeholder="https://your-portfolio.com"
//             className="
//               h-[42px]
//               rounded-[10px]
//               border
//               border-[#E5E5EB]
//               bg-white
//               px-4
//               lg:text-[13px]
//               text-[12px]
//               font-normal
//               text-[#1F1F25]
//               outline-none
//               placeholder:text-[#5D5D61]
//               focus:border-[#00B6CE]
//             "
//           />
//         </div>

//         <div className="flex flex-col gap-2">
//           <label
//             htmlFor="linkedin"
//             className="text-[12px] lg:font-semibold font-normal text-[#1F1F25]"
//           >
//             LinkedIn Profile (optional)
//           </label>

//           <input
//             id="linkedin"
//             type="url"
//             value={linkedinUrl}
//             onChange={(event) => onLinkedinChange(event.target.value)}
//             placeholder="https://linkedin.com/in/..."
//             className="
//               h-[42px]
//               rounded-[10px]
//               border
//               border-[#E5E5EB]
//               bg-white
//               px-4
//                lg:text-[13px]
//               text-[12px]
//               font-normal
//               text-[#1F1F25]
//               outline-none
//               placeholder:text-[#5D5D61]
//               focus:border-[#00B6CE]
//             "
//           />
//         </div>
//       </div>

//       {/* Resume */}
//       <div className="flex flex-col gap-2">
//         <label className="text-[12px] lg:font-semibold font-normal text-[#1F1F25]">
//           Resume / CV (optional)
//         </label>

//         <label
//           htmlFor="resume"
//           className="
//             flex
//             h-[60px]
//             cursor-pointer
//             items-center
//             gap-3
//             rounded-[10px]
//             border
//             border-dashed
//             border-[#D9D9E0]
//             bg-[#F6F6F7]
//             px-4
//             transition-colors
//             hover:border-[#00B6CE]
//           "
//         >
//           <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#00B6CE]">
//             ↑
//           </span>

//           <span
//             className=" lg:text-[13px]
//               text-[12px]
//               font-normal text-[#5D5D61]"
//           >
//             {resume
//               ? resume.name
//               : "Click to upload or drag and drop (PDF, max 5MB)"}
//           </span>

//           <input
//             id="resume"
//             type="file"
//             accept="application/pdf"
//             onChange={handleResumeChange}
//             className="hidden"
//           />
//         </label>
//       </div>

//       {/* Motivation */}
//       <div className="flex flex-col gap-2">
//         <label
//           htmlFor="motivation"
//           className="text-[12px] lg:font-semibold font-normal text-[#1F1F25]"
//         >
//           Why do you want to join this program?
//         </label>

//         <textarea
//           id="motivation"
//           value={motivation}
//           onChange={(event) => onMotivationChange(event.target.value)}
//           placeholder="Tell us what draws you to this track and PN Africa..."
//           className="
//             min-h-[88px]
//             w-full
//             resize-none
//             rounded-[10px]
//             border
//             border-[#E5E5EB]
//             bg-white
//             px-4
//             py-4
//              lg:text-[13px]
//               text-[12px]
//               font-normal
//             text-[#1F1F25]
//             outline-none
//             placeholder:text-[#5D5D61]
//             focus:border-[#00B6CE]
//           "
//         />
//       </div>
//     </div>
//   );
// }
"use client";

import React, { useState } from "react";

interface ExperiencePortfolioProps {
  experienceLevel: string;
  portfolioUrl: string;
  linkedinUrl: string;
  resume: File | null;
  motivation: string;

  errors?: {
    experienceLevel?: string;
    portfolioUrl?: string;
    linkedinUrl?: string;
    resume?: string;
    motivation?: string;
  };

  onExperienceLevelChange: (value: string) => void;
  onPortfolioChange: (value: string) => void;
  onLinkedinChange: (value: string) => void;
  onResumeChange: (file: File | null) => void;
  onMotivationChange: (value: string) => void;
}

const experienceLevels = ["Beginner", "Some Experience", "Experienced"];

export default function ExperiencePortfolio({
  experienceLevel,
  portfolioUrl,
  linkedinUrl,
  resume,
  motivation,
  errors,
  onExperienceLevelChange,
  onPortfolioChange,
  onLinkedinChange,
  onResumeChange,
  onMotivationChange,
}: ExperiencePortfolioProps) {
  const [resumeError, setResumeError] = useState<string>("");

  const handleResumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    // PDF only
    if (file.type !== "application/pdf") {
      setResumeError("Please upload a PDF file.");
      onResumeChange(null);
      return;
    }

    // 5MB maximum
    if (file.size > 5 * 1024 * 1024) {
      setResumeError("Resume must be 5MB or smaller.");
      onResumeChange(null);
      return;
    }

    setResumeError("");
    onResumeChange(file);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Heading */}
      <div>
        <h1 className="text-[22px] font-heading font-semibold leading-none text-[#1F1F25] md:text-[24px] lg:text-[26px] lg:font-body lg:font-bold">
          Experience &amp; Portfolio
        </h1>

        <p className="mt-5 text-[12px] font-body font-semibold leading-none text-[#5D5D61] lg:text-[14px] lg:font-normal">
          Tell us about your background — no experience required.
        </p>
      </div>

      {/* Experience level */}
      <div className="flex flex-col gap-3 font-body">
        <p className="text-[12px] font-semibold uppercase text-[#5D5D61] lg:text-[11px]">
          Experience Level
        </p>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {experienceLevels.map((level) => {
            const isSelected = experienceLevel === level;

            return (
              <button
                key={level}
                type="button"
                onClick={() => onExperienceLevelChange(level)}
                className={`
                  flex
                  h-[44px]
                  items-center
                  gap-3
                  rounded-[10px]
                  border
                  px-4
                  text-left
                  transition-colors
                  ${
                    isSelected
                      ? "border-[#00B6CE]"
                      : "border-[#E5E5EB] hover:border-[#CFCFD6]"
                  }
                `}
              >
                <span
                  className={`
                    flex
                    h-[18px]
                    w-[18px]
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

                <span className="text-[12px] font-normal text-[#1F1F25] lg:text-[13px] lg:font-semibold">
                  {level}
                </span>
              </button>
            );
          })}
        </div>

        {errors?.experienceLevel && (
          <p className="text-xs font-medium text-red-500">
            {errors.experienceLevel}
          </p>
        )}
      </div>

      {/* Portfolio + LinkedIn */}
      <div className="grid grid-cols-1 gap-4 font-body md:grid-cols-2">
        {/* Portfolio */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="portfolio"
            className="text-[12px] font-normal text-[#1F1F25] lg:font-semibold"
          >
            Portfolio Link (optional)
          </label>

          <input
            id="portfolio"
            type="url"
            value={portfolioUrl}
            onChange={(event) => onPortfolioChange(event.target.value)}
            placeholder="https://your-portfolio.com"
            className={`
              h-[42px]
              rounded-[10px]
              border
              bg-white
              px-4
              text-[12px]
              font-normal
              text-[#1F1F25]
              outline-none
              placeholder:text-[#5D5D61]
              lg:text-[13px]
              ${
                errors?.portfolioUrl
                  ? "border-red-400 focus:border-red-500"
                  : "border-[#E5E5EB] focus:border-[#00B6CE]"
              }
            `}
          />

          {errors?.portfolioUrl && (
            <p className="text-xs font-medium text-red-500">
              {errors.portfolioUrl}
            </p>
          )}
        </div>

        {/* LinkedIn */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="linkedin"
            className="text-[12px] font-normal text-[#1F1F25] lg:font-semibold"
          >
            LinkedIn Profile (optional)
          </label>

          <input
            id="linkedin"
            type="url"
            value={linkedinUrl}
            onChange={(event) => onLinkedinChange(event.target.value)}
            placeholder="https://linkedin.com/in/..."
            className={`
              h-[42px]
              rounded-[10px]
              border
              bg-white
              px-4
              text-[12px]
              font-normal
              text-[#1F1F25]
              outline-none
              placeholder:text-[#5D5D61]
              lg:text-[13px]
              ${
                errors?.linkedinUrl
                  ? "border-red-400 focus:border-red-500"
                  : "border-[#E5E5EB] focus:border-[#00B6CE]"
              }
            `}
          />

          {errors?.linkedinUrl && (
            <p className="text-xs font-medium text-red-500">
              {errors.linkedinUrl}
            </p>
          )}
        </div>
      </div>

      {/* Resume */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="resume"
          className="text-[12px] font-normal text-[#1F1F25] lg:font-semibold"
        >
          Resume / CV (optional)
        </label>

        <label
          htmlFor="resume"
          className={`
            flex
            h-[60px]
            cursor-pointer
            items-center
            gap-3
            rounded-[10px]
            border
            border-dashed
            bg-[#F6F6F7]
            px-4
            transition-colors
            hover:border-[#00B6CE]
            ${
              resumeError || errors?.resume
                ? "border-red-400"
                : "border-[#D9D9E0]"
            }
          `}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-[#00B6CE]">
            ↑
          </span>

          <span className="text-[12px] font-normal text-[#5D5D61] lg:text-[13px]">
            {resume
              ? resume.name
              : "Click to upload or drag and drop (PDF, max 5MB)"}
          </span>

          <input
            id="resume"
            type="file"
            accept="application/pdf"
            onChange={handleResumeChange}
            className="hidden"
          />
        </label>

        {(resumeError || errors?.resume) && (
          <p className="text-xs font-medium text-red-500">
            {resumeError || errors?.resume}
          </p>
        )}
      </div>

      {/* Motivation */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor="motivation"
          className="text-[12px] font-normal text-[#1F1F25] lg:font-semibold"
        >
          Why do you want to join this program?
        </label>

        <textarea
          id="motivation"
          value={motivation}
          onChange={(event) => onMotivationChange(event.target.value)}
          placeholder="Tell us what draws you to this track and PN Africa..."
          className={`
            min-h-[88px]
            w-full
            resize-none
            rounded-[10px]
            border
            bg-white
            px-4
            py-4
            text-[12px]
            font-normal
            text-[#1F1F25]
            outline-none
            placeholder:text-[#5D5D61]
            lg:text-[13px]
            ${
              errors?.motivation
                ? "border-red-400 focus:border-red-500"
                : "border-[#E5E5EB] focus:border-[#00B6CE]"
            }
          `}
        />

        {errors?.motivation && (
          <p className="text-xs font-medium text-red-500">
            {errors.motivation}
          </p>
        )}
      </div>
    </div>
  );
}
