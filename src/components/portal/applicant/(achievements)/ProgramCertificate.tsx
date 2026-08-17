// import { certificate } from "@/src/data/applicant/achievements";
// import { Button } from "@/src/components/ui";

// export default function ProgramCertificate() {
//   return (
//     <section className="w-full rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
//       <p className="mb-4 text-[10px] font-semibold uppercase text-[#5D5D61]">
//         Program Certificate
//       </p>

//       <div className="flex items-center gap-5">
//         {/* Certificate preview */}
//         <div className="flex h-[100px] w-[140px] shrink-0 items-center justify-center rounded-[10px] border border-[#E5E5EB] bg-[#F9F9FA]">
//           <span className="text-[40px]">🎓</span>
//         </div>

//         {/* Certificate information */}
//         <div className="flex flex-col gap-2">
//           <h2 className="text-[15px] font-semibold text-[#1F1F25]">
//             {certificate.title}
//           </h2>

//           <p className="text-[13px] text-[#5D5D61]">
//             {certificate.description}
//           </p>

//           <Button
//             variant="light"
//             className="w-fit cursor-not-allowed rounded-[8px] bg-[#E5E5EB] px-[18px] py-[10px] text-[12px] font-semibold text-[#5D5D61]"
//           >
//             Download Certificate (Locked)
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }

import { certificate } from "@/src/data/applicant/achievements";
import { Button } from "@/src/components/ui";

export default function ProgramCertificate() {
  return (
    <section className="w-full rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
      <p className="mb-4 text-[10px] font-semibold uppercase text-[#5D5D61]">
        Program Certificate
      </p>

      <div className="flex items-center gap-5">
        {/* Certificate preview */}
        <div className="flex h-[100px] w-[140px] shrink-0 items-center justify-center rounded-[10px] border border-[#E5E5EB] bg-[#F9F9FA]">
          <span className="text-[40px]">🎓</span>
        </div>

        {/* Certificate information */}
        <div className="flex flex-col gap-2">
          <h2 className="text-[15px] font-semibold text-[#1F1F25]">
            {certificate.title}
          </h2>

          <p className="text-[13px] text-[#5D5D61]">
            {certificate.description}
          </p>

          <Button
            variant={certificate.isUnlocked ? "dark" : "light"}
            disabled={!certificate.isUnlocked}
            className="w-fit rounded-[8px] px-[18px] py-[10px] text-[12px] font-semibold"
          >
            {certificate.isUnlocked
              ? "Download Certificate"
              : "Download Certificate (Locked)"}
          </Button>
        </div>
      </div>
    </section>
  );
}
