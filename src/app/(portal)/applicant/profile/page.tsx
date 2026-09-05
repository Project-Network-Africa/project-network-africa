// import BioSkills from "@/src/components/portal/applicant/(profile)/BioSkills";
// import LinksDocuments from "@/src/components/portal/applicant/(profile)/LinksDocuments";
// import ProfileHeader from "@/src/components/portal/applicant/(profile)/ProfileHeader";

// const profile = {
//   initials: "AO",
//   name: "Amara Okafor",
//   cohort: "Product Design — Cohort 6",
//   bio: "Aspiring product designer passionate about accessible, human-centered design.",
//   skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
// };

// const documents = [
//   {
//     label: "Resume.pdf",
//     href: "/documents/resume.pdf",
//   },
//   {
//     label: "LinkedIn Profile",
//     href: "https://linkedin.com",
//   },
// ];

// export default function ProfilePage() {
//   return (
//     <div className="flex w-full flex-col gap-5">
//       <ProfileHeader
//         initials={profile.initials}
//         name={profile.name}
//         cohort={profile.cohort}
//       />

//       <BioSkills bio={profile.bio} skills={profile.skills} />

//       <LinksDocuments documents={documents} />
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";

import BioSkills from "@/src/components/portal/applicant/(profile)/BioSkills";
import LinksDocuments from "@/src/components/portal/applicant/(profile)/LinksDocuments";
import ProfileHeader from "@/src/components/portal/applicant/(profile)/ProfileHeader";

import { getMyApplicantProfile } from "@/src/services/applicants";
interface ApplicantProfile {
  initials: string;
  name: string;
  cohort: string;
  bio: string;
  skills: string[];
  documents: {
    label: string;
    href: string;
  }[];
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<ApplicantProfile | null>(null);
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getMyApplicantProfile();

        console.log("APPLICANT PROFILE:", data);

        setProfile(data);
      } catch (error) {
        console.error("FAILED TO FETCH PROFILE:", error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex w-full flex-col gap-5">
      <ProfileHeader
        initials={profile.initials}
        name={profile.name}
        cohort={profile.cohort}
      />

      <BioSkills bio={profile.bio} skills={profile.skills} />

      <LinksDocuments documents={profile.documents} />
    </div>
  );
}
