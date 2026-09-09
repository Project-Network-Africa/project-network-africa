import { MissionVisionProps } from "./MissionVision.types";

export default function MissionVision({
  eyebrow,
  title,
  cards,
  backgroundClassName = "bg-[#F8F8F8]",
}: MissionVisionProps) {
  return (
    <section className={`w-full ${backgroundClassName}`}>
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-4 py-12 sm:px-8 lg:px-0 lg:py-[64px]">
        <p className="font-body text-[12px] font-semibold leading-[100%] text-[#00B6CE] lg:text-[13px]">
          {eyebrow}
        </p>

        <h2 className="mt-7 max-w-[900px] font-body text-[30px] font-bold leading-[125%] tracking-[-0.5px] text-[#1F1F25] lg:mt-4 lg:text-[36px] lg:leading-[120%] lg:tracking-[-1px]">
          {title}
        </h2>

        <div className="mt-7 grid w-full grid-cols-1 gap-6 lg:mt-8 lg:grid-cols-2 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.number}
              className={`flex min-h-[265px] flex-col justify-between rounded-[18px] p-5 lg:min-h-[294px] lg:rounded-[20px] lg:p-8 ${
                card.variant === "dark"
                  ? "bg-[#1F1F25] text-white"
                  : "bg-[#00B6CE] text-[#1F1F25]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`font-body text-[12px] font-semibold leading-[100%] ${card.variant === "dark" ? "text-[#00B6CE]" : "text-white"}`}
                >
                  {card.number}
                </span>

                <span className="font-body text-[12px] font-semibold leading-[100%]">
                  {card.label}
                </span>
              </div>

              <div className="mt-8">
                <h3 className="max-w-[620px] font-body text-[23px] font-bold leading-[125%] lg:text-[26px] lg:leading-[130%]">
                  {card.title}
                </h3>

                <p
                  className={`mt-4 max-w-[620px] font-body text-[14px] font-normal leading-[150%] lg:text-[15px] ${card.variant === "dark" ? "text-[#D0D0D5]" : "text-[#1F1F25]"}`}
                >
                  {card.description}
                </p>
              </div>

              <div
                className={`mt-5 w-fit rounded-full px-3 py-2 font-body text-[11px] font-medium leading-[100%] ${card.variant === "dark" ? "bg-[#36363D] text-white" : "bg-[#36C9D8] text-[#1F1F25]"}`}
              >
                {card.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
