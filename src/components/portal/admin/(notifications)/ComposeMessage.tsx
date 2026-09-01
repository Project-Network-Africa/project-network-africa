"use client";

import { useState } from "react";

import { Button } from "@/src/components/ui";

import { notificationAudiences, notificationTypes } from "./notifications-data";

export default function ComposeMessage() {
  const [audience, setAudience] = useState(
    notificationAudiences[0]?.value ?? "",
  );

  const [type, setType] = useState(notificationTypes[0]?.value ?? "");

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [channels, setChannels] = useState({
    email: true,
    inApp: true,
    sms: false,
  });

  const toggleChannel = (channel: "email" | "inApp" | "sms") => {
    setChannels((current) => ({
      ...current,
      [channel]: !current[channel],
    }));
  };

  const handleSend = () => {
    console.log("Send notification", {
      audience,
      type,
      subject,
      message,
      channels,
    });
  };

  const handleSaveTemplate = () => {
    console.log("Save template", {
      audience,
      type,
      subject,
      message,
      channels,
    });
  };

  const handleSchedule = () => {
    console.log("Schedule notification", {
      audience,
      type,
      subject,
      message,
      channels,
    });
  };

  return (
    <section className="rounded-xl border border-[#DDE1E5] bg-white p-5 shadow-sm">
      <h2 className="text-[12px] font-semibold uppercase text-[#737379]">
        Compose message
      </h2>

      {/* Audience + Type */}

      <div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-2">
        <select
          value={audience}
          onChange={(event) => setAudience(event.target.value)}
          className="h-9 rounded-lg border border-[#DDE1E5] bg-white px-3 text-[12px] text-[#737379] outline-none focus:border-[#00B6CE]"
        >
          {notificationAudiences.map((item) => (
            <option key={item.value} value={item.value}>
              Audience: {item.label}
            </option>
          ))}
        </select>

        <select
          value={type}
          onChange={(event) => setType(event.target.value)}
          className="h-9 rounded-lg border border-[#DDE1E5] bg-white px-3 text-[12px] text-[#737379] outline-none focus:border-[#00B6CE]"
        >
          {notificationTypes.map((item) => (
            <option key={item.value} value={item.value}>
              Type: {item.label}
            </option>
          ))}
        </select>
      </div>

      {/* Subject */}

      <input
        type="text"
        value={subject}
        onChange={(event) => setSubject(event.target.value)}
        placeholder="Subject: Enter notification subject"
        className="mt-2 h-9 w-full rounded-lg border border-[#DDE1E5] px-3 text-[12px] text-[#303035] outline-none placeholder:text-[#737379] focus:border-[#00B6CE]"
      />

      {/* Message */}

      <textarea
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Write your message here..."
        className="mt-2 min-h-[92px] w-full resize-none rounded-lg border border-[#DDE1E5] p-3 text-[12px] text-[#303035] outline-none placeholder:text-[#737379] focus:border-[#00B6CE]"
      />

      {/* Channels */}

      <div className="mt-3 flex flex-wrap items-center gap-5">
        <button
          type="button"
          onClick={() => toggleChannel("email")}
          className={`flex items-center gap-1.5 text-[12px] ${
            channels.email ? "font-medium text-[#00B6CE]" : "text-[#737379]"
          }`}
        >
          <span
            className={`h-2 w-2 rounded-full ${
              channels.email ? "bg-[#00B6CE]" : "border border-[#737379]"
            }`}
          />
          Email
        </button>

        <button
          type="button"
          onClick={() => toggleChannel("inApp")}
          className={`flex items-center gap-1.5 text-[12px] ${
            channels.inApp ? "font-medium text-[#00B6CE]" : "text-[#737379]"
          }`}
        >
          <span
            className={`h-2 w-2 rounded-full ${
              channels.inApp ? "bg-[#00B6CE]" : "border border-[#737379]"
            }`}
          />
          In-app
        </button>

        <button
          type="button"
          onClick={() => toggleChannel("sms")}
          className={`flex items-center gap-1.5 text-[12px] ${
            channels.sms ? "font-medium text-[#00B6CE]" : "text-[#737379]"
          }`}
        >
          <span
            className={`h-2 w-2 rounded-full ${
              channels.sms ? "bg-[#00B6CE]" : "border border-[#737379]"
            }`}
          />
          SMS
        </button>
      </div>

      {/* Actions */}

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Button
          variant="light"
          className="h-9 rounded-lg px-3 text-[12px] font-medium"
          onClick={handleSaveTemplate}
        >
          Save template
        </Button>

        <Button
          variant="light"
          className="h-9 rounded-lg px-4 text-[12px] font-medium"
          onClick={handleSchedule}
        >
          Schedule
        </Button>

        <Button
          variant="primary"
          className="h-9 rounded-lg px-4 text-[12px] font-semibold"
          onClick={handleSend}
        >
          Send message
        </Button>
      </div>
    </section>
  );
}
