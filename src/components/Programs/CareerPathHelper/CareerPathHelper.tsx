import Link from "next/link";
import { CareerPathHelperProps } from "./CareerPathHelper.types";

export default function CareerPathHelper({
  eyebrow = "NOT SURE WHERE TO START?",
  title = "Choose the kind of work you want to do",
  note = "You can change your choice before applying.",
  options,
  backgroundClassName = "bg-[#F8F8F8]",
}: CareerPathHelperProps) {
  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-8 lg:px-0 lg:py-[64px]">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-body text-[11px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[12px]">
              {eyebrow}
            </p>

            <h2 className="mt-4 max-w-[700px] font-body text-[28px] font-bold leading-[115%] tracking-[-0.5px] text-[#1F1F25] lg:mt-3 lg:text-[32px] lg:leading-[120%]">
              {title}
            </h2>
          </div>

          <p className="mt-3 font-body text-[13px] font-normal leading-[150%] text-[#5D5D61] lg:mb-1 lg:mt-0 lg:text-[14px]">
            {note}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 lg:mt-[26px] lg:gap-5">
          {options.map((option) => (
            <div
              key={option.title}
              className="flex min-h-[148px] rounded-[16px] border border-[#DEDEE2] bg-white p-4 lg:h-[168px] lg:p-5"
            >
              <div className="flex w-full gap-4 lg:gap-4">
                <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[12px] bg-[#E0F8FA] font-body text-[14px] font-bold text-[#1F1F25] lg:h-[46px] lg:w-[46px]">
                  {option.icon}
                </div>

                <div className="flex min-w-0 flex-1 flex-col">
                  <h3 className="font-body text-[16px] font-bold leading-[120%] text-[#1F1F25] lg:text-[17px]">
                    {option.title}
                  </h3>

                  <p className="mt-2 font-body text-[13px] font-normal leading-[150%] text-[#5D5D61] lg:text-[13px]">
                    {option.description}
                  </p>

                  <Link
                    href={option.href}
                    className="mt-auto flex w-fit items-center gap-2 font-body text-[13px] font-bold leading-[100%] text-[#1F1F25] transition hover:text-[#00B6CE]"
                  >
                    {option.linkText}
                    <span
                      aria-hidden="true"
                      className="text-[17px] leading-none"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
