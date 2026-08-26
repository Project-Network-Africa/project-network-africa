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
    <div className="grid w-full min-w-0 grid-cols-1 gap-5 xl:h-[545px] xl:w-[580px] xl:shrink-0 xl:grid-cols-2 xl:grid-rows-[255px_255px] xl:gap-x-5 xl:gap-y-[35px]">
      {/* Featured Mentor */}
      <div className="col-span-1 flex h-[190px] w-full flex-col gap-3 rounded-[16px] bg-white p-5 sm:h-auto sm:min-h-[255px] sm:gap-5 sm:rounded-[24px] sm:p-7 xl:col-span-2 xl:h-[255px] xl:flex-row xl:items-center xl:gap-7 xl:bg-[#1F1F25]">
        {/* Image + Name */}
        <div className="flex h-[56px] w-full items-center gap-3 xl:h-[118px] xl:w-auto xl:gap-0">
          <div className="relative h-[56px] w-[56px] shrink-0 overflow-hidden rounded-full border-[1.9px] border-[#00B6CE] xl:h-[118px] xl:w-[118px] xl:border-[4px]">
            <Image
              src={featuredMentor.image}
              alt={featuredMentor.name}
              fill
              className="object-cover"
            />
          </div>

          <p className="font-body text-[16px] font-bold leading-[100%] text-[#1F1F25] xl:hidden">
            {featuredMentor.name}
          </p>
        </div>

        {/* Desktop content */}
        <div className="hidden h-full min-w-0 flex-1 flex-col justify-between xl:flex">
          <p className="font-body text-[18px] font-bold leading-[100%] text-[#36E7FD]">
            {featuredMentor.name}
          </p>

          <p className="font-heading text-[26px] font-bold leading-[120%] text-white">
            {featuredMentor.quote}
          </p>

          <p className="font-body text-[13px] font-normal leading-[100%] text-white/60">
            {featuredMentor.role}
          </p>

          <p className="font-body text-[13px] font-normal leading-[100%] text-[#36E7FDE5]">
            {featuredMentor.stats}
          </p>
        </div>

        {/* Mobile / Tablet content */}
        <div className="flex min-w-0 flex-col gap-1 xl:hidden">
          <p className="font-body text-[16px] font-normal leading-6 text-[#1F1F25]">
            {featuredMentor.quote}
          </p>

          <p className="font-body text-[14px] font-normal leading-[22px] text-[#5D5D61]">
            {featuredMentor.role}
          </p>
        </div>
      </div>

      {/* Tunde */}
      <div className="flex min-h-[190px] w-full flex-col gap-4 rounded-[16px] bg-white p-5 xl:min-h-[255px] xl:gap-5 xl:rounded-[22px] xl:bg-[#00B6CE] xl:p-6">
        <MentorSmallProfile mentor={otherMentors[0]} />
      </div>

      {/* Zainab */}
      <div className="flex min-h-[190px] w-full flex-col gap-4 rounded-[16px] bg-white p-5 xl:min-h-[255px] xl:gap-5 xl:rounded-[22px] xl:bg-[#F8F8F8] xl:p-6">
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
      <div className="flex h-[56px] w-full items-center gap-3 xl:h-[64px] xl:gap-4">
        <div className="relative h-[56px] w-[56px] shrink-0 overflow-hidden rounded-full border-[2px] border-[#E5E5EB] xl:h-[64px] xl:w-[64px] xl:border-[4px] xl:border-white">
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

      <p className="font-body text-[16px] font-normal leading-6 text-[#1F1F25] xl:font-heading xl:text-[21px] xl:font-bold xl:leading-[120%]">
        {mentor.quote}
      </p>

      <p className="font-body text-[14px] font-normal leading-[22px] text-[#5D5D61] xl:text-[12px] xl:leading-[100%] xl:text-[#1F1F25]">
        {mentor.role}
      </p>
    </>
  );
}
