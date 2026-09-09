// import ProgrammeCard from "./ProgrammeCard";
// import { ProgrammeCatalogueProps } from "./ProgrammeCatalogue.types";

// export default function ProgrammeCatalogue({
//   programmes,
//   eyebrow = "OPEN AND UPCOMING PROGRAMMES",
//   title = "Choose your learning track",
//   backgroundClassName = "bg-white",
// }: ProgrammeCatalogueProps) {
//   return (
//     <section className={`w-full ${backgroundClassName}`}>
//       <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-8 lg:px-0 lg:py-[64px]">
//         {/* Header */}
//         <div className="mb-7 lg:mb-8">
//           <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
//             {eyebrow}
//           </p>

//           <h2 className="mt-4 max-w-[500px] font-body text-[28px] font-bold leading-[115%] tracking-[-0.5px] text-[#1F1F25] lg:mt-3 lg:text-[32px] lg:leading-[120%]">
//             {title}
//           </h2>
//         </div>

//         {/* Programme Grid */}
//         <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
//           {programmes.map((programme) => (
//             <ProgrammeCard key={programme.id} programme={programme} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import ProgrammeCard from "./ProgrammeCard";
import { ProgrammeCatalogueProps } from "./ProgrammeCatalogue.types";

export default function ProgrammeCatalogue({
  programmes,
  eyebrow = "OPEN AND UPCOMING PROGRAMMES",
  title = "Choose your learning track",
  backgroundClassName = "bg-white",
}: ProgrammeCatalogueProps) {
  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-8 lg:px-0 lg:py-[64px]">
        {/* Header */}
        <div className="mb-7 lg:mb-8">
          <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
            {eyebrow}
          </p>

          <h2 className="mt-4 max-w-[500px] font-body text-[28px] font-bold leading-[115%] tracking-[-0.5px] text-[#1F1F25] lg:mt-3 lg:text-[32px] lg:leading-[120%]">
            {title}
          </h2>
        </div>

        {/* Programme Grid / Empty State */}
        {programmes.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {programmes.map((programme) => (
              <ProgrammeCard key={programme.id} programme={programme} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[240px] w-full items-center justify-center rounded-[16px] border border-[#DEDEE2] bg-[#F8F8F8]">
            <p className="font-body text-[15px] font-medium text-[#5D5D61]">
              No programme found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
