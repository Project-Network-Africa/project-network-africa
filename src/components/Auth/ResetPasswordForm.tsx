"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AuthCard from "./AuthCard";
import AuthInput from "./AuthInput";
import { Button } from "../ui";
import { resetPassword } from "@/src/services/auth";
import axios from "axios";

export default function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

    if (!token) {
      setError("Invalid or missing password reset link.");
      return;
    }

    if (!password || !confirmPassword) {
      setError("Please fill in both password fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    try {
      setLoading(true);

      const response = await resetPassword(token, password);

      console.log("RESET PASSWORD RESPONSE:", response);

      router.push("/login");
    } catch (error: unknown) {
      console.error("RESET PASSWORD ERROR:", error);

      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ||
            "Unable to reset password. Please try again.",
        );
      } else {
        setError("Unable to reset password. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Create a new password"
      description="Enter a new password for your account."
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-[22px]">
        <AuthInput
          label="New Password"
          type="password"
          placeholder="Create a new password"
          value={password}
          onChange={setPassword}
        />

        <AuthInput
          label="Confirm Password"
          type="password"
          placeholder="Confirm your new password"
          value={confirmPassword}
          onChange={setConfirmPassword}
        />

        {error && <p className="text-[12px] text-red-500">{error}</p>}

        <Button
          variant="dark"
          disabled={loading}
          className="h-[45px] w-full rounded-[10px] text-[14px] font-semibold"
        >
          {loading ? "Resetting..." : "Reset Password"}
        </Button>
      </form>
    </AuthCard>
  );
}
