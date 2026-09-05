import Image from "next/image";

interface MentorProfile {
  name: string;
  image: string;
  quote: string;
  role: string;
  stats?: string;
  featured?: boolean;
  dark?: boolean;
}

const mentors: MentorProfile[] = [
  {
    name: "AMARA OKAFOR",
    image: "/images/mentors/mentor-1.jpg",
    quote: "“Great work starts with asking better questions.”",
    role: "Senior Product Designer  •  Lagos",
    stats: "6+ YEARS EXPERIENCE  •  48 PORTFOLIO REVIEWS",
    featured: true,
    dark: true,
  },
  {
    name: "TUNDE BELLO",
    image: "/images/mentors/mentor-2.jpg",
    quote: "“Build small, learn fast, improve together.”",
    role: "Engineering Lead  •  Accra",
    dark: false,
  },
  {
    name: "ZAINAB MUSA",
    image: "/images/mentors/mentor-3.jpg",
    quote: "“Clarity is the most valuable output of data.”",
    role: "Data Science Manager  •  Nairobi",
    dark: true,
  },
];

export default function MentorshipVisual() {
  const [featuredMentor, ...otherMentors] = mentors;

  return (
    <div className="grid w-full min-w-0 grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-[220px_180px] md:gap-4 lg:h-[545px] lg:w-[580px] lg:shrink-0 lg:grid-rows-[255px_255px] lg:gap-x-5 lg:gap-y-[35px]">
      {/* Featured Mentor */}
      <div className="col-span-1 flex  w-full flex-col gap-3 rounded-[16px] bg-white px-2 md:col-span-2 md:h-[220px] md:min-h-0 md:flex-row md:items-center md:gap-6 md:p-6 lg:h-[255px] lg:gap-7 lg:rounded-[24px] md:bg-[#1F1F25] lg:p-7">
        {/* Image + Name */}
        <div className="flex h-[56px] w-full items-center gap-3 md:h-[90px] md:w-auto md:gap-0 lg:h-[118px]">
          <div className="relative h-[56px] w-[56px] shrink-0 overflow-hidden rounded-full border-[2px] border-[#00B6CE] md:h-[90px] md:w-[90px] lg:h-[118px] lg:w-[118px] lg:border-[4px]">
            <Image
              src={featuredMentor.image}
              alt={featuredMentor.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Mobile name */}
          <p className="font-body text-[16px] font-bold leading-[100%] text-[#1F1F25] md:hidden">
            {featuredMentor.name}
          </p>
        </div>

        {/* Tablet + Desktop content */}
        <div className="hidden h-full min-w-0 flex-1 flex-col justify-between md:flex">
          <p className="font-body text-[16px] font-bold leading-[100%] text-[#36E7FD] lg:text-[18px]">
            {featuredMentor.name}
          </p>

          <p className="font-heading text-[21px] font-bold leading-[120%] text-white md:max-w-[420px] lg:text-[26px]">
            {featuredMentor.quote}
          </p>

          <p className="font-body text-[11px] font-normal leading-[100%] text-white/60 lg:text-[13px]">
            {featuredMentor.role}
          </p>

          <p className="font-body text-[11px] font-normal leading-[100%] text-[#36E7FDE5] lg:text-[13px]">
            {featuredMentor.stats}
          </p>
        </div>

        {/* Mobile content */}
        <div className="flex min-w-0 flex-col gap-1 md:hidden">
          <p className="font-body text-[16px] font-normal leading-6 text-[#1F1F25]">
            {featuredMentor.quote}
          </p>

          <p className="font-body text-[14px] font-normal leading-[22px] text-[#5D5D61]">
            {featuredMentor.role}
          </p>
        </div>
      </div>

      {/* Tunde */}
      <div className="flex w-full flex-col gap-4 rounded-[16px] bg-white p-2 md:h-[180px] lg:h-[255px] lg:gap-5 lg:rounded-[22px] md:bg-[#00B6CE] lg:p-6">
        <MentorSmallProfile mentor={otherMentors[0]} />
      </div>

      {/* Zainab */}
      <div className="flex w-full flex-col gap-4 rounded-[16px] bg-white p-2 md:h-[180px] lg:h-[255px] lg:gap-5 lg:rounded-[22px] md:bg-[#F8F8F8] lg:p-6">
        <MentorSmallProfile mentor={otherMentors[1]} />
      </div>
    </div>
  );
}

interface MentorSmallProfileProps {
  mentor: MentorProfile;
}

function MentorSmallProfile({ mentor }: MentorSmallProfileProps) {
  return (
    <>
      {/* Image + Name */}
      <div className="flex h-[56px] w-full items-center gap-3 lg:h-[64px] lg:gap-4">
        <div className="relative h-[56px] w-[56px] shrink-0 overflow-hidden rounded-full border-[2px] border-[#E5E5EB] lg:h-[64px] lg:w-[64px] lg:border-[4px] lg:border-white">
          <Image
            src={mentor.image}
            alt={mentor.name}
            fill
            className="object-cover"
          />
        </div>

        <p className="font-body text-[16px] font-semibold leading-[100%] text-[#1F1F25]">
          {mentor.name}
        </p>
      </div>

      {/* Quote */}
      <p className="font-body text-[16px] font-normal leading-6 text-[#1F1F25] lg:font-heading lg:text-[21px] lg:font-bold lg:leading-[120%]">
        {mentor.quote}
      </p>

      {/* Role */}
      <p className="font-body text-[14px] font-normal leading-[22px] text-[#5D5D61] lg:text-[12px] lg:leading-[100%] lg:text-[#1F1F25]">
        {mentor.role}
      </p>
    </>
  );
}
