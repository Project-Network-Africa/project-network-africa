import Image from "next/image";
import { LeadershipSectionProps } from "./LeadershipSection.types";

export default function LeadershipSection({
  eyebrow,
  title,
  description,
  featured,
  members,
  backgroundClassName = "bg-[#F8F8F8]",
}: LeadershipSectionProps) {
  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-4 py-12 sm:px-8 lg:px-0 lg:py-[64px]">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div>
            <p className="font-body text-[12px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[13px]">
              {eyebrow}
            </p>

            <h2 className="mt-7 max-w-[700px] font-body text-[30px] font-bold leading-[125%] tracking-[-0.5px] text-[#1F1F25] lg:mt-4 lg:text-[36px] lg:leading-[120%] lg:tracking-[-1px]">
              {title}
            </h2>
          </div>

          <p className="mt-7 max-w-[390px] font-body text-[14px] font-normal leading-[150%] text-[#5D5D61] lg:mt-2 lg:text-[15px]">
            {description}
          </p>
        </div>

        {/* Leadership */}
        <div className="mt-8 flex flex-col gap-3 lg:mt-10 lg:grid lg:grid-cols-[1fr_1.38fr] lg:gap-5">
          {/* Featured */}
          <div className="overflow-hidden rounded-[18px] bg-[#1F1F25] lg:h-[520px]">
            <div className="relative h-[250px] w-full bg-white lg:h-[228px]">
              <Image
                src={featured.image}
                alt={featured.name}
                fill
                className="object-contain"
              />
            </div>

            <div className="flex min-h-[270px] flex-col justify-between p-5 lg:h-[292px] lg:p-6">
              <div>
                <div className="flex items-center justify-between">
                  <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
                    {featured.role}
                  </p>

                  <span className="font-body text-[12px] font-semibold text-[#00B6CE]">
                    01
                  </span>
                </div>

                <h3 className="mt-5 font-body text-[23px] font-bold leading-[120%] text-white lg:text-[26px]">
                  {featured.name}
                </h3>

                <p className="mt-3 max-w-[500px] font-body text-[14px] font-normal leading-[150%] text-[#BFBFC7]">
                  {featured.description}
                </p>
              </div>

              <div className="border-t border-[#3D3D43] pt-4">
                <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
                  FOCUS{" "}
                  <span className="ml-2 text-white">{featured.category}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Other members */}

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:gap-5">
            {members.map((member) => (
              <div
                key={member.name}
                className="flex min-h-[142px] flex-col rounded-[16px] border border-[#DEDEE2] bg-white p-3 lg:h-[248px] lg:min-h-0 lg:p-5"
              >
                <div className="flex h-[118px] gap-3 lg:h-[108px] lg:gap-4">
                  <div className="relative h-[118px] w-[94px] shrink-0 overflow-hidden rounded-[12px] lg:h-[108px] lg:w-[104px]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col gap-1.5 lg:h-[108px]">
                    <p className="font-body text-[11px] font-semibold leading-[18px] text-[#006D7C] lg:text-[12px]">
                      {member.role}
                    </p>

                    <h3 className="font-body text-[17px] font-bold leading-[26px] text-[#1F1F25] lg:text-[20px]">
                      {member.name}
                    </h3>

                    <span className="w-fit rounded-full bg-[#E0F8FA] px-[9px] py-[5px] font-body text-[10px] font-bold leading-[15px] tracking-[4%] text-[#006D7C] lg:text-[11px]">
                      {member.category}
                    </span>
                  </div>
                </div>

                <div className="mt-[14px] hidden h-px w-full bg-[#DEDEE2] lg:block" />

                <p className="mt-3 font-body text-[12px] font-normal leading-[145%] text-[#5D5D61] lg:mt-3 lg:text-[13px] lg:leading-[19px]">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
