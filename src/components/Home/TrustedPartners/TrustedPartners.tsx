const partners = [
  "Flutterwave",
  "Paystack",
  "Andela",
  "Interswitch",
  "Moniepoint",
];

export default function TrustedPartners() {
  return (
    <section className="w-full bg-[#1F1F25] sm:px-8 py-2 lg:px-20 lg:py-[50px] md:h-[110px] h-[78px] lg:h-[184px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center md:py-6 py-3 gap-2">
        {/* Heading */}
        <h2 className="text-center font-semibold uppercase text-[#FFFFFF] lg:text-[18px] text-[11px] font-bold md:font-semibold">
          Trusted by Employers and Partners Across Africa
        </h2>

        {/* Partners */}
        <div className="flex lg:max-w-[699px] max-w-[448px] flex-wrap items-center justify-center lg:gap-x-8 md:gap-x-7 gap-x-[18px] lg:flex-nowrap lg:justify-between lg:gap-14">
          {partners.map((partner) => (
            <span
              key={partner}
              className="text-[11px] font-bold text-[#FFFFFF] lg:text-[18px]"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
