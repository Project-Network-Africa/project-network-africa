"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import AuthCard from "./AuthCard";
import AuthInput from "./AuthInput";
import { Button } from "../ui";

export default function ForgotPasswordForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    console.log("Reset link requested for:", email);

    // Later connect to backend.
    router.push("/reset-password");
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

        <Button
          variant="dark"
          className="h-[45px] w-full rounded-[10px] text-[14px] font-semibold"
        >
          Send Reset Link
        </Button>
      </form>
    </AuthCard>
  );
}
