"use client";

import { useState } from "react";

import { Button } from "@/src/components/ui";

import {
  interviewCandidates,
  interviewJobs,
} from "@/src/data/employer/interview-scheduler";

export default function ScheduleInterview() {
  const [candidate, setCandidate] = useState("");
  const [job, setJob] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [message, setMessage] = useState("");

  const handleSchedule = () => {
    if (!candidate || !job || !dateTime) {
      setMessage("Please select a candidate, job and date & time.");
      return;
    }

    const selectedCandidate = interviewCandidates.find(
      (item) => item.id === candidate,
    );

    const selectedJob = interviewJobs.find((item) => item.id === job);

    setMessage(
      `Interview scheduled with ${selectedCandidate?.name} for ${selectedJob?.title}.`,
    );

    setCandidate("");
    setJob("");
    setDateTime("");
  };

  return (
    <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
        Schedule a New Interview
      </p>

      <div className="mt-[12px] grid grid-cols-1 gap-[14px] md:grid-cols-2 xl:grid-cols-[1.1fr_1fr_1fr_1fr]">
        {/* Candidate */}
        <select
          value={candidate}
          onChange={(event) => {
            setCandidate(event.target.value);
            setMessage("");
          }}
          className="h-[45px] w-full rounded-[8px] border border-[#E5E5EB] bg-[#F6F6F7] px-[13px] text-[12px] text-[#5D5D61] outline-none transition focus:border-[#00B6CE]"
        >
          <option value="">Select candidate</option>

          {interviewCandidates.map((item) => (
            <option key={item.id} value={item.id}>
              {item.name}
            </option>
          ))}
        </select>

        {/* Job */}
        <select
          value={job}
          onChange={(event) => {
            setJob(event.target.value);
            setMessage("");
          }}
          className="h-[45px] w-full rounded-[8px] border border-[#E5E5EB] bg-[#F6F6F7] px-[13px] text-[12px] text-[#5D5D61] outline-none transition focus:border-[#00B6CE]"
        >
          <option value="">Select job</option>

          {interviewJobs.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>

        {/* Date & Time */}
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(event) => {
            setDateTime(event.target.value);
            setMessage("");
          }}
          className="h-[45px] w-full rounded-[8px] border border-[#E5E5EB] bg-[#F6F6F7] px-[13px] text-[12px] text-[#5D5D61] outline-none transition focus:border-[#00B6CE]"
        />

        {/* Schedule */}
        <Button
          variant="primary"
          onClick={handleSchedule}
          className="h-[45px] w-full rounded-[8px] px-4 text-[12px] font-semibold"
        >
          Schedule
        </Button>
      </div>

      {message && (
        <p className="mt-[10px] text-[11px] text-[#5D5D61]">{message}</p>
      )}
    </section>
  );
}
