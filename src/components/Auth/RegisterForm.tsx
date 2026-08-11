"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import AuthCard from "./AuthCard";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";
import AuthCheckbox from "./AuthCheckbox";

type Role = "Applicant" | "Mentor" | "Employer" | "";

export default function RegisterForm() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const isFormValid =
    fullName.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    role !== "" &&
    agreedToTerms;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    console.log({
      fullName,
      email,
      password,
      role,
      agreedToTerms,
    });

    // Later connect to backend.
    router.push("/verify-email");
  };

  return (
    <AuthCard
      title="Create your account"
      footer={
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
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <AuthInput
          label="Full Name"
          placeholder="Enter your name"
          value={fullName}
          onChange={setFullName}
        />

        <AuthInput
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={setEmail}
        />

        <AuthInput
          label="Password"
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={setPassword}
        />

        {/* Role */}
        <div className="flex flex-col gap-2">
          <label
            htmlFor="role"
            className="text-[12px] font-semibold leading-none text-[#1F1F25]"
          >
            I am a...
          </label>

          <select
            id="role"
            value={role}
            onChange={(event) => setRole(event.target.value as Role)}
            className="
              h-[42px]
              w-full
              appearance-none
              rounded-[10px]
              border
              border-[#E5E5EB]
              bg-white
              px-4
              text-[13px]
              text-[#5D5D61]
              outline-none
              focus:border-[#00B6CE]
            "
          >
            <option value="">Select your role</option>
            <option value="Applicant">Applicant</option>
            <option value="Mentor">Mentor</option>
            <option value="Employer">Employer</option>
          </select>
        </div>

        {/* Terms */}
        <AuthCheckbox checked={agreedToTerms} onChange={setAgreedToTerms}>
          I agree to the Privacy Policy and Terms of Service
        </AuthCheckbox>

        <AuthButton disabled={!isFormValid}>Create Account</AuthButton>
      </form>
    </AuthCard>
  );
}
