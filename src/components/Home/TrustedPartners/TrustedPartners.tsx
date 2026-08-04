const partners = [
  "Flutterwave",
  "Paystack",
  "Andela",
  "Interswitch",
  "Moniepoint",
];

export default function TrustedPartners() {
  return (
    <section className="w-full bg-[#F8F8F8] px-5 py-10 sm:px-8 lg:px-20 lg:py-[50px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6">
        {/* Heading */}
        <h2 className="text-center text-sm font-semibold uppercase leading-6 text-[#1F1F25] sm:text-base">
          Trusted by Employers and Partners Across Africa
        </h2>

        {/* Partners */}
        <div className="flex w-full flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12 lg:flex-nowrap lg:justify-between lg:gap-14">
          {partners.map((partner) => (
            <span
              key={partner}
              className="text-sm font-bold text-[#5D5D61] sm:text-base"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
