"use client";

import { useState } from "react";
import Link from "next/link";

type UserRole = "Applicant" | "Mentor" | "Employer";

const roles: UserRole[] = ["Applicant", "Mentor", "Employer"];

export default function CreateAccountForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<UserRole>("Applicant");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!fullName.trim()) {
      alert("Please enter your full name.");
      return;
    }

    if (!email.trim()) {
      alert("Please enter your email address.");
      return;
    }

    if (!password.trim()) {
      alert("Please create a password.");
      return;
    }

    if (!agreedToTerms) {
      alert("Please agree to the Privacy Policy and Terms of Service.");
      return;
    }

    // For now, navigate to email verification.
    // Backend/API integration can be added here later.
    window.location.href = "/email-verification";
  };

  return (
    <div
      className="
        w-full
        max-w-[440px]
        rounded-[18px]
        bg-white
        p-9
        shadow-[0px_8px_24px_0px_#0000000F]
      "
    >
      {/* Logo */}
      <Link
        href="/"
        className="inline-block text-[20px] font-bold text-[#1F1F25]"
      >
        PN Africa
      </Link>

      {/* Heading */}
      <div className="mt-[22px]">
        <h1 className="text-[22px] font-bold leading-none text-[#1F1F25]">
          Create your account
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-[22px] flex flex-col gap-[22px]"
      >
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="full-name"
            className="text-[12px] font-semibold leading-none text-[#1F1F25]"
          >
            Full Name
          </label>

          <input
            id="full-name"
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            placeholder="Enter your name"
            className="
              h-[42px]
              w-full
              rounded-[10px]
              border
              border-[#E5E5EB]
              bg-white
              px-4
              text-[13px]
              text-[#1F1F25]
              outline-none
              placeholder:text-[#5D5D61]
              focus:border-[#00B6CE]
            "
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-[12px] font-semibold leading-none text-[#1F1F25]"
          >
            Email Address
          </label>

          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@example.com"
            className="
              h-[42px]
              w-full
              rounded-[10px]
              border
              border-[#E5E5EB]
              bg-white
              px-4
              text-[13px]
              text-[#1F1F25]
              outline-none
              placeholder:text-[#5D5D61]
              focus:border-[#00B6CE]
            "
          />
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-[12px] font-semibold leading-none text-[#1F1F25]"
          >
            Password
          </label>

          <input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Create a password"
            className="
              h-[42px]
              w-full
              rounded-[10px]
              border
              border-[#E5E5EB]
              bg-white
              px-4
              text-[13px]
              text-[#1F1F25]
              outline-none
              placeholder:text-[#5D5D61]
              focus:border-[#00B6CE]
            "
          />
        </div>

        {/* Role */}
        <div className="flex flex-col gap-2">
          <p className="text-[12px] font-semibold leading-none text-[#1F1F25]">
            I am a...
          </p>

          <div className="flex flex-wrap gap-2">
            {roles.map((item) => {
              const selected = role === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setRole(item)}
                  className={`
                    rounded-[8px]
                    border
                    px-4
                    py-2
                    text-[12px]
                    font-semibold
                    transition
                    ${
                      selected
                        ? "border-[#00B6CE] bg-[#00B6CE] text-white"
                        : "border-[#E5E5EB] bg-white text-[#5D5D61] hover:border-[#00B6CE]"
                    }
                  `}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* Terms */}
        <label className="flex cursor-pointer items-start gap-2">
          <span className="relative mt-[1px] h-4 w-4 shrink-0">
            <input
              type="checkbox"
              checked={agreedToTerms}
              onChange={(event) => setAgreedToTerms(event.target.checked)}
              className="peer absolute h-4 w-4 cursor-pointer opacity-0"
            />

            <span
              className="
                flex
                h-4
                w-4
                items-center
                justify-center
                rounded-[4px]
                border
                border-[#E5E5EB]
                bg-white
                text-[10px]
                font-bold
                text-white
                peer-checked:border-[#00B6CE]
                peer-checked:bg-[#00B6CE]
              "
            >
              {agreedToTerms && "✓"}
            </span>
          </span>

          <span className="text-[11px] leading-[13px] text-[#5D5D61]">
            I agree to the Privacy Policy and Terms of Service
          </span>
        </label>

        {/* Create Account */}
        <button
          type="submit"
          className="
            h-[45px]
            w-full
            rounded-[10px]
            bg-[#00B6CE]
            px-5
            text-[14px]
            font-semibold
            text-white
            transition
            hover:bg-[#00A5BB]
          "
        >
          Create Account
        </button>
      </form>
      <div className="flex items-center justify-center gap-1">
        <span className="text-[12px] text-[#5D5D61]">
          Already have an account?
        </span>

        <Link
          href="/login"
          className="text-[12px] font-semibold text-[#00B6CE]"
        >
          Log In
        </Link>
      </div>
    </div>
  );
}
