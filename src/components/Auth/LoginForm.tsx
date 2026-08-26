"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import AuthCard from "./AuthCard";
import AuthInput from "./AuthInput";

import AuthCheckbox from "./AuthCheckbox";
import { Button } from "../ui";

export default function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      return;
    }

    console.log({
      email,
      password,
      rememberMe,
    });

    // Later connect to backend.
    router.push("/applicant-dashboard");
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

        {/* <AuthButton>Log In</AuthButton> */}
        <Button variant="dark">Log In</Button>
      </form>
    </AuthCard>
  );
}
