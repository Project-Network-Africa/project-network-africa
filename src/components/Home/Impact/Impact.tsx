import ImpactCard from "./impact-card";
import { impactData } from "./impact-card.data";

export default function Impact() {
  return (
    <section className="w-full bg-[#F8F8F8] px-20 py-[88px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-[50px]">
        {/* Heading */}
        <div className="flex flex-col items-center gap-[5px] text-center">
          <h2 className="font-body text-[32px] font-bold leading-none text-[#4DD9E8]">
            OUR IMPACT
          </h2>

          <p className="font-body text-[18px] font-semibold leading-[30px] text-[#1F1F25]">
            Numbers that speak for the network
          </p>
        </div>

        {/* Stats */}
        <div className="flex w-full items-center justify-center gap-16">
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
