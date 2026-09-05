const communityRoles = [
  "Learners",
  "Mentors",
  "Project Teams",
  "Community Leaders",
  "Industry Contributors",
];

export default function CommunityRoles() {
  return (
    <section className="w-full bg-[#1F1F25] sm:px-8 py-5 lg:px-20 md:py-[38px]  h-[78px] md:h-[184px] ">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center md:py-6  md:gap-5 gap-2">
        {/* Heading */}
        <h2 className="text-center  uppercase text-[#FFFFFF] lg:text-[18px] text-[10px] font-bold md:font-semibold">
          BUILT THROUGH COMMUNITY AND COLLABORATION
        </h2>

        {/* CommunityRoles */}

        <div className="w-full overflow-hidden">
          <div className="animate-marquee flex w-max items-center">
            {[0, 1, 2].map((group) => (
              <div
                key={group}
                className="flex shrink-0 items-center gap-x-8 pr-8 lg:gap-x-14 lg:pr-14"
              >
                {communityRoles.map((role) => (
                  <span
                    key={`${group}-${role}`}
                    className="whitespace-nowrap text-[11px] font-bold text-white lg:text-[18px]"
                  >
                    {role}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
