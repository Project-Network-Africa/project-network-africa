"use client";

import { FormEvent, useState } from "react";

import { Button } from "@/src/components/ui";
import { ContactFormData } from "@/src/types/public/contact";

const initialForm: ContactFormData = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(initialForm);

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Backend/API integration will go here.
    console.log(formData);
  };

  return (
    <section>
      <p className="text-[12px] font-semibold uppercase leading-[100%] text-[#00B6CE]">
        Contact Form
      </p>

      <form onSubmit={handleSubmit} className="mt-[20px] space-y-[18px]">
        {/* Name + Email */}
        <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2">
          <div>
            <label
              htmlFor="fullName"
              className="mb-[8px] block text-[12px] font-semibold text-[#1F1F25]"
            >
              Full Name
            </label>

            <input
              id="fullName"
              type="text"
              value={formData.fullName}
              onChange={(event) => handleChange("fullName", event.target.value)}
              placeholder="Enter your name"
              className="h-[42px] w-full rounded-[9px] border border-[#E5E5EB] bg-white px-[15px] text-[12px] text-[#1F1F25] outline-none placeholder:text-[#5D5D61] focus:border-[#00B6CE]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-[8px] block text-[12px] font-semibold text-[#1F1F25]"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(event) => handleChange("email", event.target.value)}
              placeholder="you@example.com"
              className="h-[42px] w-full rounded-[9px] border border-[#E5E5EB] bg-white px-[15px] text-[12px] text-[#1F1F25] outline-none placeholder:text-[#5D5D61] focus:border-[#00B6CE]"
            />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label
            htmlFor="subject"
            className="mb-[8px] block text-[12px] font-semibold text-[#1F1F25]"
          >
            Subject
          </label>

          <input
            id="subject"
            type="text"
            value={formData.subject}
            onChange={(event) => handleChange("subject", event.target.value)}
            placeholder="What's this about?"
            className="h-[42px] w-full rounded-[9px] border border-[#E5E5EB] bg-white px-[15px] text-[12px] text-[#1F1F25] outline-none placeholder:text-[#5D5D61] focus:border-[#00B6CE]"
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="mb-[8px] block text-[12px] font-semibold text-[#1F1F25]"
          >
            Message
          </label>

          <textarea
            id="message"
            value={formData.message}
            onChange={(event) => handleChange("message", event.target.value)}
            placeholder="Type your message..."
            rows={4}
            className="min-h-[90px] w-full resize-none rounded-[9px] border border-[#E5E5EB] bg-white px-[15px] py-[14px] text-[12px] text-[#1F1F25] outline-none placeholder:text-[#5D5D61] focus:border-[#00B6CE]"
          />
        </div>

        <Button
          variant="dark"
          className="h-[45px] rounded-[9px] px-[24px] text-[12px] font-semibold"
        >
          Send Message
        </Button>
      </form>
    </section>
  );
}
