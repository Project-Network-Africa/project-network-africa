"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import AuthCard from "./AuthCard";
import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";

export default function ResetPasswordForm() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");

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

    console.log("Password reset");

    // Later connect to backend.
    router.push("/login");
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

        <AuthButton>Reset Password</AuthButton>
      </form>
    </AuthCard>
  );
}
