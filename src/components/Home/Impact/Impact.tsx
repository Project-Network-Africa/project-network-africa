import ImpactCard from "./impact-card";
import { impactData } from "./impact-card.data";

export default function Impact() {
  return (
    <section className="w-full bg-[#F8F8F8] px-5 py-10 sm:px-8 lg:px-20 lg:py-[88px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-10 lg:gap-[50px]">
        {/* Heading */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 className="text-2xl font-bold text-[#4DD9E8] sm:text-3xl lg:text-[32px]">
            OUR IMPACT
          </h2>

          <p className="max-w-xl text-base font-semibold text-[#1F1F25] sm:text-lg lg:text-[18px]">
            Numbers that speak for the network
          </p>
        </div>

        {/* Stats */}
        <div
          className="
            grid
            w-full
            grid-cols-1
            gap-10
            sm:grid-cols-2
            lg:grid-cols-2
            xl:grid-cols-4
          "
        >
          {impactData.map((item) => (
            <ImpactCard
              key={item.label}
              value={item.value}
              label={item.label}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
