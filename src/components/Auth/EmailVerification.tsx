"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/src/components/ui";

interface EmailVerificationProps {
  email: string;
}

export default function EmailVerification({ email }: EmailVerificationProps) {
  const handleResend = () => {
    // Later connect this to the backend
    console.log("Resend verification email to:", email);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F6F6F7] px-5 py-10">
      <div className="flex w-full max-w-[440px] flex-col items-center gap-[22px] rounded-[18px] bg-white p-9 shadow-[0px_8px_24px_0px_#0000000F]">
        {/* Logo */}
        <Link href="/" className="flex h-[20px] w-fit items-center self-start">
          <Image
            src="/images/logo.svg"
            alt="PN Africa"
            width={100}
            height={20}
            className="h-[20px] w-[100px]"
            priority
          />
        </Link>

        {/* Email Icon */}
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E5FAFC]">
          <span className="text-[26px] font-bold leading-none text-[#00B6CE]">
            ✉
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-center text-[20px] font-bold leading-none text-[#1F1F25]">
          Verify your email
        </h1>

        {/* Description */}
        <p className="w-full text-center text-[13px] font-normal leading-[1.25] text-[#5D5D61]">
          We sent a verification link to{" "}
          <span className="font-medium text-[#1F1F25]">{email}</span>. Click the
          link to activate your account.
        </p>

        {/* Continue to Login */}
        <Link href="/login" className="w-full">
          <Button
            variant="dark"
            className="h-[45px] w-full rounded-[10px] px-5 text-[14px] font-semibold"
          >
            Continue to Log In
          </Button>
        </Link>

        {/* Resend Verification Email */}
        <Button
          variant="light"
          onClick={handleResend}
          className="h-[45px] w-full rounded-[10px] border border-[#E5E5EB] bg-white px-5 text-[14px] font-semibold text-[#1F1F25] hover:bg-[#F6F6F7]"
        >
          Resend Verification Email
        </Button>
      </div>
    </main>
  );
}
