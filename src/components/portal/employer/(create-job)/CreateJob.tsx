"use client";

import { useState } from "react";

import { addJob } from "@/src/services/employer/job";
import { JobStatus } from "@/src/types/employer/job";

import JobTitleField from "./JobTitleField";
import JobLocationField from "./JobLocationField";
import EmploymentTypeField from "./EmploymentTypeField";
import JobDescriptionField from "./JobDescriptionField";
import JobRequirementsField from "./JobRequirementsField";
import JobFormActions from "./JobFormActions";

export default function CreateJob() {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");

  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setTitle("");
    setLocation("");
    setEmploymentType("");
    setDescription("");
    setRequirements("");
  };

  const handleSubmit = (status: JobStatus) => {
    if (
      !title.trim() ||
      !location.trim() ||
      !employmentType.trim() ||
      !description.trim() ||
      !requirements.trim()
    ) {
      setMessage("Please complete all fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      addJob({
        title: title.trim(),
        location: location.trim(),
        employmentType: employmentType.trim(),
        description: description.trim(),
        requirements: requirements.trim(),
        status,
      });

      setMessage(
        status === "Active"
          ? "Job published successfully."
          : "Job saved as draft.",
      );

      resetForm();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Job Details
      </p>

      <JobTitleField value={title} onChange={setTitle} />

      <div className="mt-[14px] grid grid-cols-1 gap-4 md:grid-cols-2">
        <JobLocationField value={location} onChange={setLocation} />

        <EmploymentTypeField
          value={employmentType}
          onChange={setEmploymentType}
        />
      </div>

      <JobDescriptionField value={description} onChange={setDescription} />

      <JobRequirementsField value={requirements} onChange={setRequirements} />

      {message && <p className="mt-3 text-[11px] text-[#5D5D61]">{message}</p>}

      <JobFormActions
        onSaveDraft={() => handleSubmit("Closing Soon")}
        onPublish={() => handleSubmit("Active")}
        isSubmitting={isSubmitting}
      />
    </section>
  );
}
