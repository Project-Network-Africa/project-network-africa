import Image from "next/image";
import Link from "next/link";
import { projects } from "@/src/data/applicant/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-[14px] text-[#5D5D61]">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-5">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <Link
          href="/applicant/projects"
          className="w-fit text-[12px] font-semibold text-[#5D5D61] hover:text-[#00B6CE]"
        >
          ← Back to Projects
        </Link>

        <h1 className="text-[24px] font-bold text-[#1F1F25]">
          {project.title} — {project.description}
        </h1>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,780px)_320px]">
        {/* Project Brief */}
        <div className="flex flex-col gap-[14px] rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
          <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
            Project Brief
          </p>

          <div className="relative h-[220px] w-full overflow-hidden rounded-[12px]">
            <Image
              src={project.imageSrc}
              alt={project.title}
              fill
              sizes="(max-width: 1280px) 100vw, 736px"
              className="object-cover"
            />
          </div>

          <p className="text-[13px] leading-5 text-[#5D5D61]">
            {project.brief}
          </p>

          <div className="mt-2">
            <p className="mb-3 text-[10px] font-semibold uppercase text-[#5D5D61]">
              Deliverables
            </p>

            <div className="flex flex-col gap-2">
              {project.deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-[12px] text-[#1F1F25]"
                >
                  <span className="h-[6px] w-[6px] rounded-full bg-[#00B6CE]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-5">
          {/* Team */}
          <div className="flex flex-col gap-[14px] rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
            <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
              Team
            </p>

            <div className="flex">
              {project.team.map((member, index) => (
                <div
                  key={member.initials}
                  className="flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-white text-[10.8px] font-bold text-white"
                  style={{
                    backgroundColor: member.bg,
                    marginLeft: index === 0 ? 0 : -8,
                  }}
                >
                  {member.initials}
                </div>
              ))}
            </div>
          </div>

          {/* Mentor Feedback */}
          <div className="flex flex-col gap-[14px] rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
            <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
              Mentor Feedback
            </p>

            <p className="text-[12px] leading-5 text-[#1F1F25]">
              {project.mentorFeedback}
            </p>

            <button
              type="button"
              className="w-fit rounded-[8px] bg-[#1F1F25] px-4 py-[10px] text-[12px] font-semibold text-white hover:bg-[#33333A]"
            >
              Submit for Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
// import Image from "next/image";
// import Link from "next/link";

// import { projects } from "@/src/data/applicant/projects";

// type ProjectDetailsPageProps = {
//   params: Promise<{
//     slug: string;
//   }>;
// };

// export default async function ProjectDetailsPage({
//   params,
// }: ProjectDetailsPageProps) {
//   const { slug } = await params;

//   const project = projects.find((item) => item.slug === slug);

//   if (!project) {
//     return (
//       <div className="flex min-h-[400px] items-center justify-center">
//         <div className="flex flex-col items-center gap-3">
//           <h1 className="text-[20px] font-bold text-[#1F1F25]">
//             Project not found
//           </h1>

//           <Link
//             href="/applicant/projects"
//             className="text-[13px] font-semibold text-[#00B6CE]"
//           >
//             Back to Projects
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex w-full flex-col gap-5">
//       {/* Project title */}
//       <div className="flex flex-col gap-2">
//         <Link
//           href="/applicant/projects"
//           className="w-fit text-[12px] font-semibold text-[#5D5D61] transition hover:text-[#00B6CE]"
//         >
//           ← Back to Projects
//         </Link>

//         <h1 className="text-[24px] font-bold text-[#1F1F25]">
//           {project.title} — {project.description}
//         </h1>
//       </div>

//       {/* Main content */}
//       <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,780px)_320px]">
//         {/* Project Brief */}
//         <div className="flex flex-col gap-[14px] rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
//           <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
//             Project Brief
//           </p>

//           <div className="relative h-[220px] w-full overflow-hidden rounded-[12px] bg-[#F6F6F7]">
//             <Image
//               src={project.imageSrc}
//               alt={project.title}
//               fill
//               sizes="(max-width: 1280px) 100vw, 736px"
//               className="object-cover"
//             />
//           </div>

//           <p className="text-[13px] leading-5 text-[#5D5D61]">
//             {project.brief}
//           </p>

//           {/* Deliverables */}
//           <div className="mt-2">
//             <p className="mb-3 text-[10px] font-semibold uppercase text-[#5D5D61]">
//               Deliverables
//             </p>

//             <div className="flex flex-col gap-2">
//               {project.deliverables.map((item) => (
//                 <div
//                   key={item}
//                   className="flex items-center gap-2 text-[12px] text-[#1F1F25]"
//                 >
//                   <span className="h-[6px] w-[6px] shrink-0 rounded-full bg-[#00B6CE]" />

//                   <span>{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right column */}
//         <div className="flex flex-col gap-5">
//           {/* Team */}
//           <div className="flex flex-col gap-[14px] rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
//             <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
//               Team
//             </p>

//             <div className="flex">
//               {project.team.map((member, index) => (
//                 <div
//                   key={member.initials}
//                   className="flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-white text-[10.8px] font-bold text-white"
//                   style={{
//                     backgroundColor: member.bg,
//                     marginLeft: index === 0 ? 0 : -8,
//                   }}
//                 >
//                   {member.initials}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Mentor Feedback */}
//           <div className="flex flex-col gap-[14px] rounded-[14px] border border-[#E5E5EB] bg-white px-[22px] py-5 shadow-[0px_2px_8px_0px_#0000000A]">
//             <p className="text-[10px] font-semibold uppercase text-[#5D5D61]">
//               Mentor Feedback
//             </p>

//             <p className="text-[12px] leading-5 text-[#1F1F25]">
//               {project.mentorFeedback}
//             </p>

//             <button
//               type="button"
//               className="w-fit rounded-[8px] bg-[#1F1F25] px-4 py-[10px] text-[12px] font-semibold text-white transition hover:bg-[#33333A]"
//             >
//               Submit for Review
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
