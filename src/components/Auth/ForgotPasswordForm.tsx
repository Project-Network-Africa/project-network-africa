"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AuthCard from "./AuthCard";
import AuthInput from "./AuthInput";
import { Button } from "../ui";
import { forgotPassword } from "@/src/services/auth";
import axios, { AxiosError } from "axios";

export default function ForgotPasswordForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    try {
      setLoading(true);

      const response = await forgotPassword(email);

      console.log("FORGOT PASSWORD RESPONSE:", response);

      router.push("/reset-password");
    } catch (error: unknown) {
      console.error("FORGOT PASSWORD ERROR:", error);

      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            "Unable to send reset link. Please try again.",
        );
      } else {
        setError("Unable to send reset link. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Reset your password"
      description="Enter your email and we'll send you a link to reset your password."
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-[22px]">
        <AuthInput
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={setEmail}
        />

        {error && (
          <p className="-mt-[10px] text-[13px] text-red-500">{error}</p>
        )}

        <Button
          variant="dark"
          disabled={loading}
          className="h-[45px] w-full rounded-[10px] text-[14px] font-semibold"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </Button>
      </form>
    </AuthCard>
  );
}
