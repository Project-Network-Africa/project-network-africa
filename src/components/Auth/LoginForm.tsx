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

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [rememberMe, setRememberMe] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      setError("");

      const response = await api.post("/api/auth/login", {
        email,
        password,
      });

      const role = response.data.user.role;

      if (role === "Applicant") {
        router.push("/applicant/dashboard");
      } else if (role === "Mentor") {
        router.push("/mentor/dashboard");
      } else if (role === "Admin") {
        router.push("/admin/dashboard");
      } else {
        setError("Invalid user role.");
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.log("LOGIN ERROR:", error.response?.data);

        console.log("STATUS:", error.response?.status);

        setError(
          error.response?.data?.message ||
            "Unable to log in. Please try again.",
        );
      } else {
        setError("Unable to log in. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Log in to your account"
      footer={
        <div className="flex items-center justify-center gap-1">
          <span className="text-[12px] text-[#5D5D61]">
            Don’t have an account?
          </span>

          <Link
            href="/register"
            className="text-[12px] font-semibold text-[#00B6CE]"
          >
            Register
          </Link>
        </div>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-[22px]">
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
          placeholder="Enter your password"
          value={password}
          onChange={setPassword}
        />

        {/* Remember / Forgot */}
        <div className="flex items-center justify-between">
          <AuthCheckbox checked={rememberMe} onChange={setRememberMe}>
            Remember me
          </AuthCheckbox>

          <Link
            href="/forgot-password"
            className="text-[12px] font-semibold text-[#00B6CE]"
          >
            Forgot password?
          </Link>
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        {/* <AuthButton>Log In</AuthButton> */}
        <Button variant="dark">{loading ? "Logging in..." : "Log In"}</Button>
      </form>
    </AuthCard>
  );
}
