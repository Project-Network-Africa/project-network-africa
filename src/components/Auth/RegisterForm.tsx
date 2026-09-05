"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import AuthCard from "./AuthCard";
import AuthInput from "./AuthInput";

import AuthCheckbox from "./AuthCheckbox";
import { Button } from "../ui";
import api from "@/src/services/api";
import axios from "axios";

type Role = "Applicant" | "Mentor" | "Employer" | "";

export default function RegisterForm() {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<Role>("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isFormValid =
    fullName.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    role !== "" &&
    agreedToTerms;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    setLoading(true);
    setError("");

    try {
      await api.post("/api/auth/register", {
        fullName,
        email,
        password,
        role,
      });

      router.push("/verify-email");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            "Unable to create account. Please try again.",
        );
      } else {
        setError("Unable to create account. Please try again.");
      }
    } finally {
      setLoading(false);
    }
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

        {/* <AuthButton disabled={!isFormValid}>Create Account</AuthButton> */}
        {error && <p className="text-[12px] text-red-500">{error}</p>}
        <Button
          variant="dark"
          disabled={!isFormValid || loading}
          className="h-[44px] w-full rounded-[8px] text-[12px] font-semibold"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </Button>
      </form>
    </AuthCard>
  );
}
