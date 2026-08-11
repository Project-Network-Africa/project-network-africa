// import Image from "next/image";
// import { CareerOutcome } from "../../../types/program";

// export default function PersonCard({
//   name,
//   role,
//   company,
//   image,
//   initials,
//   avatarBg = "#1F1F25",
// }: CareerOutcome) {
//   return (
//     <div className="flex flex-col items-center gap-3 rounded-2xl border border-[#E5E5EB] bg-white px-6 py-8 text-center transition-shadow hover:shadow-md">
//       {image ? (
//         <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full">
//           <Image
//             src={image}
//             alt={name}
//             fill
//             className="object-cover"
//             sizes="72px"
//           />
//         </div>
//       ) : (
//         <div
//           className="flex h-[72px] w-[72px] items-center justify-center rounded-full text-[26px] font-bold text-white"
//           style={{ backgroundColor: avatarBg }}
//         >
//           {initials}
//         </div>
//       )}

//       <h3 className="text-[15px] font-semibold text-[#1F1F25]">{name}</h3>

//       <p className="text-xs text-[#5D5D61]">{role}</p>
//       <p className="text-xs font-semibold text-[#00B6CE]">{company}</p>
//     </div>
//   );
// }
// import { Button, Section, SectionHeader } from "../../ui";
// import PersonCard from "./PersonCard";
// import { PeopleSectionProps } from "./people.types";

// export default function PeopleSection({
//   label,
//   title,
//   people,
//   columns = 3,
//   backgroundClass = "bg-[#F8F8F8]",
//   buttonText,
//   buttonHref,
// }: PeopleSectionProps) {
//   const gridCols = {
//     2: "xl:grid-cols-2",
//     3: "xl:grid-cols-3",
//     4: "xl:grid-cols-4",
//   };

//   return (
//     <Section className={backgroundClass}>
//       <div className="flex flex-col gap-8">
//         <SectionHeader label={label} title={title} />

//         <div
//           className={`grid grid-cols-1 gap-6 sm:grid-cols-2 ${gridCols[columns]}`}
//         >
//           {people.map((person) => (
//             <PersonCard key={person.name} {...person} />
//           ))}
//           {buttonText && buttonHref && (
//             <Button
//               href={buttonHref}
//               variant="light"
//               className="w-fit rounded-[10px] px-6 py-[14px]"
//             >
//               {buttonText}
//             </Button>
//           )}
//         </div>
//       </div>
//     </Section>
//   );
// }
import Image from "next/image";
import { Person } from "./people.types";

export default function PersonCard({
  name,
  role,
  company,
  image,
  initials,
  avatarBg = "#1F1F25",
}: Person) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-[#E5E5EB] bg-white px-6 py-8 text-center transition-shadow hover:shadow-md">
      {image ? (
        <div className="relative h-[72px] w-[72px] overflow-hidden rounded-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="72px"
          />
        </div>
      ) : (
        <div
          className="flex h-[72px] w-[72px] items-center justify-center rounded-full text-[26px] font-bold text-white"
          style={{ backgroundColor: avatarBg }}
        >
          {initials}
        </div>
      )}

      <h3 className="text-[15px] font-semibold text-[#1F1F25]">{name}</h3>

      <p className="text-xs text-[#5D5D61]">{role}</p>

      {company && (
        <p className="text-xs font-semibold text-[#00B6CE]">{company}</p>
      )}
    </div>
  );
}
