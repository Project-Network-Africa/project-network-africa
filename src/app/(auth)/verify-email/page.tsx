// "use client";

// import EmailVerification from "@/src/components/Auth/EmailVerification";
// import { useSearchParams } from "next/navigation";
// export default function EmailVerificationPage() {
//   const searchParams = useSearchParams();

//   const email = searchParams.get("email") || "";
//   return (
//     <main className="flex min-h-screen items-center justify-center bg-[#F8F8F8] px-5 py-10">
//       <EmailVerification email={email} />
//     </main>
//   );
// }
"use client";

import { Suspense } from "react";
import EmailVerification from "@/src/components/Auth/EmailVerification";
import { useSearchParams } from "next/navigation";

function EmailVerificationContent() {
  const searchParams = useSearchParams();

  const email = searchParams.get("email") || "";

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8F8F8] px-5 py-10">
      <EmailVerification email={email} />
    </main>
  );
}

export default function EmailVerificationPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EmailVerificationContent />
    </Suspense>
  );
}
