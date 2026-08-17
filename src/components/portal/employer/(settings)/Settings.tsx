// "use client";

// import { useState } from "react";

// import { Button } from "@/src/components/ui";
// import { employerSettingsData } from "@/src/data/employer/settings";

// export default function Settings() {
//   const [contactName, setContactName] = useState(
//     employerSettingsData.account.contactName,
//   );

//   const [email, setEmail] = useState(employerSettingsData.account.email);

//   const [showCompanyProfile, setShowCompanyProfile] = useState(
//     employerSettingsData.privacy.showCompanyProfile,
//   );

//   const handleSaveChanges = () => {
//     // Replace this later with your API call.
//     console.log({
//       contactName,
//       email,
//     });
//   };

//   const handleManageBilling = () => {
//     // Replace this later with your billing route/API.
//     console.log("Manage billing");
//   };

//   const handlePrivacyPolicy = () => {
//     // Replace this with your actual privacy-policy route.
//     window.location.href = "/privacy-policy";
//   };

//   return (
//     <div className="flex w-full flex-col gap-5">
//       {/* Account */}
//       <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
//         <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
//           Account
//         </p>

//         <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
//           {/* Contact Name */}
//           <div className="flex flex-col gap-2">
//             <label
//               htmlFor="contact-name"
//               className="text-[12px] font-semibold text-[#1F1F25]"
//             >
//               Contact Name
//             </label>

//             <input
//               id="contact-name"
//               type="text"
//               value={contactName}
//               onChange={(event) => setContactName(event.target.value)}
//               className="h-[38px] w-full rounded-[8px] border border-[#E5E5EB] bg-white px-[13px] text-[12px] text-[#1F1F25] outline-none transition placeholder:text-[#8A8A90] focus:border-[#00B6CE]"
//               placeholder="Enter contact name"
//             />
//           </div>

//           {/* Email Address */}
//           <div className="flex flex-col gap-2">
//             <label
//               htmlFor="email"
//               className="text-[12px] font-semibold text-[#1F1F25]"
//             >
//               Email Address
//             </label>

//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(event) => setEmail(event.target.value)}
//               className="h-[38px] w-full rounded-[8px] border border-[#E5E5EB] bg-white px-[13px] text-[12px] text-[#1F1F25] outline-none transition placeholder:text-[#8A8A90] focus:border-[#00B6CE]"
//               placeholder="Enter email address"
//             />
//           </div>
//         </div>

//         <Button
//           variant="dark"
//           onClick={handleSaveChanges}
//           className="mt-[14px] h-[36px] rounded-[8px] px-4 text-[11px] font-semibold"
//         >
//           Save Changes
//         </Button>
//       </section>

//       {/* Billing */}
//       <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
//         <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
//           Billing
//         </p>

//         <p className="mt-[14px] text-[13px] text-[#1F1F25]">
//           {employerSettingsData.billing.plan} — Renews{" "}
//           {employerSettingsData.billing.renewalDate}
//         </p>

//         <Button
//           variant="light"
//           onClick={handleManageBilling}
//           className="mt-[14px] h-[35px] rounded-[8px] border border-[#E5E5EB] px-4 text-[11px] font-semibold"
//         >
//           Manage Billing
//         </Button>
//       </section>

//       {/* Privacy & Data */}
//       <section className="rounded-[14px] border border-[#E5E5EB] bg-white px-[21px] py-[20px] shadow-[0px_2px_8px_0px_#0000000A]">
//         <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
//           Privacy & Data
//         </p>

//         <div className="mt-[14px] flex items-center justify-between gap-5">
//           <p className="text-[13px] text-[#1F1F25]">
//             Show company profile to candidates
//           </p>

//           {/* Toggle */}
//           <button
//             type="button"
//             role="switch"
//             aria-checked={showCompanyProfile}
//             aria-label="Show company profile to candidates"
//             onClick={() => setShowCompanyProfile((current) => !current)}
//             className={`relative h-[22px] w-[40px] shrink-0 rounded-full transition-colors ${
//               showCompanyProfile ? "bg-[#00B6CE]" : "bg-[#D5D5DA]"
//             }`}
//           >
//             <span
//               className={`absolute top-[3px] h-[16px] w-[16px] rounded-full bg-white shadow-sm transition-transform ${
//                 showCompanyProfile ? "translate-x-[21px]" : "translate-x-[3px]"
//               }`}
//             />
//           </button>
//         </div>

//         <button
//           type="button"
//           onClick={handlePrivacyPolicy}
//           className="mt-[14px] text-[11px] font-semibold text-[#00B6CE] transition hover:opacity-80"
//         >
//           View Privacy Policy →
//         </button>
//       </section>
//     </div>
//   );
// }
import Account from "./Account";
import Billing from "./Billing";
import PrivacyData from "./PrivacyData";

export default function Settings() {
  return (
    <div className="flex w-full flex-col gap-5">
      <Account />
      <Billing />
      <PrivacyData />
    </div>
  );
}
