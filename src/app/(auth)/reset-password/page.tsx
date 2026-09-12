// import ResetPasswordForm from "@/src/components/Auth/ResetPasswordForm";

// export default function ResetPasswordPage() {
//   return (
//     <main className="flex min-h-screen items-center justify-center bg-[#F8F8F8] px-5 py-10">
//       <ResetPasswordForm />
//     </main>
//   );
// }
import ResetPasswordForm from "@/src/components/Auth/ResetPasswordForm";
import { Suspense } from "react";

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={null}>
      <ResetPasswordForm />
    </Suspense>
  );
}
