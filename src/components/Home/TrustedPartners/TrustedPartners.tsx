const partners = [
  "Flutterwave",
  "Paystack",
  "Andela",
  "Interswitch",
  "Moniepoint",
];

export default function TrustedPartners() {
  return (
    <section className="w-full bg-[#F8F8F8] px-20 py-[50px]">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6">
        {/* Heading */}
        <h2 className="text-center font-body text-base font-semibold leading-7 text-[#1F1F25] uppercase">
          Trusted by Employers and Partners Across Africa
        </h2>

        {/* Partners */}
        <div className="flex items-center gap-14 px-[10px]">
          {partners.map((partner) => (
            <span
              key={partner}
              className="font-body text-base font-bold text-[#5D5D61]"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
