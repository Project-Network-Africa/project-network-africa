import EmailVerification from "@/src/components/Auth/EmailVerification";

export default function EmailVerificationPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8F8F8] px-5 py-10">
      <EmailVerification email="you@example.com" />
    </main>
  );
}
