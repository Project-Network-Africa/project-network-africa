import Image from "next/image";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  category?: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "“PN Africa gave me the portfolio, confidence, and real product experience to land my first design role.”",
    name: "NGOZI E.",
    role: "UX Designer at Flutterwave",
    category: "PRODUCT DESIGN  •  COHORT 5  •  LAGOS",
    image: "/images/testimonials/ngozi.jpg",
  },
  {
    quote: "“The mentorship model changed how quickly I grew.”",
    name: "FEMI O.",
    role: "Backend Engineer at Paystack",
    image: "/images/testimonials/femi.jpg",
  },
  {
    quote: "“Real projects meant I entered interviews with proof.”",
    name: "AISHA K.",
    role: "Product Manager at Andela",
    image: "/images/testimonials/aisha.jpg",
  },
];

export default function Testimonials() {
  const [featured, ...secondary] = testimonials;

  return (
    <section className="w-full bg-white px-5 py-10 sm:px-8 bg-[#F8F8F8] lg:px-20 lg:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 lg:gap-[56px]">
        {/* Header */}
        <div className="flex w-full flex-col gap-2 lg:gap-0">
          <p className="font-body text-[18px] font-semibold leading-[30px] text-[#1F1F25] lg:text-[18px]">
            <span className="lg:hidden font-heading font-semibold text-[#00B6CE]">
              SUCCESS STORIES
            </span>

            <span className="hidden lg:block">SUCCESS STORIES</span>
          </p>

          <h2 className="font-heading text-[22px] font-semibold leading-[30px] text-[#1F1F25] lg:mt-2 lg:text-[44px] lg:font-bold lg:leading-[100%]">
            Real careers, built from real work.
          </h2>
        </div>

        {/* Testimonials */}
        <div className="flex w-full flex-col gap-5 lg:h-[420px] lg:flex-row lg:gap-10">
          {/* Featured testimonial */}
          <div className="flex h-[156px] w-full flex-col justify-between rounded-[16px] bg-[#1F1F25] px-5 py-6 lg:h-[420px] lg:w-[760px] lg:rounded-[24px] lg:p-[34px]">
            {/* Quote */}
            <p className="font-heading text-[13px] font-bold leading-[18px] text-white lg:max-w-[692px] lg:text-[34px] lg:leading-[120%]">
              {featured.quote}
            </p>

            {/* Profile */}
            <div className="flex h-[48px] w-full items-center gap-3 lg:h-[104px] lg:gap-[22px]">
              <div className="relative h-[48px] w-[48px] shrink-0 overflow-hidden rounded-full border-[1.85px] border-[#36E7FD] lg:h-[104px] lg:w-[104px] lg:border-[4px]">
                <Image
                  src={featured.image}
                  alt={featured.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex h-[46px] flex-col justify-center gap-0.5 lg:h-[80px] lg:gap-5">
                <p className="font-heading text-[18px] font-semibold leading-[26px] text-[#36E7FD] lg:font-body lg:text-[14px] lg:font-semibold lg:leading-[145%]">
                  {featured.name}
                </p>

                <p className="font-body text-[12px] font-normal leading-[18px] tracking-[1px] text-[#36E7FD] lg:text-[14px] lg:font-semibold lg:leading-[145%] lg:tracking-normal">
                  <span className="lg:hidden">{featured.role}</span>

                  <span className="hidden lg:block">
                    {featured.role} &nbsp; • &nbsp; {featured.category}
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Secondary testimonials */}
          <div className="flex w-full flex-col gap-5 lg:h-[420px] lg:w-[440px] lg:gap-[64px]">
            {secondary.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`flex h-[156px] w-full flex-col justify-between rounded-[16px] px-5 py-6 lg:h-auto lg:w-[440px] lg:rounded-[22px] lg:p-6 ${
                  index === 0
                    ? "bg-[#F8F8F8] lg:h-[166px]"
                    : "bg-[#00B6CE] lg:h-[190px]"
                }`}
              >
                {/* Quote */}
                <p className="font-heading text-[14px] font-bold leading-[22px] text-[#1F1F25] lg:text-[23px] lg:leading-[100%]">
                  {testimonial.quote}
                </p>

                {/* Profile */}
                <div className="flex h-[48px] w-full items-center gap-3 lg:h-[52px] lg:gap-4">
                  <div
                    className={`relative h-[48px] w-[48px] shrink-0 overflow-hidden rounded-full border-[3.69px] lg:h-[52px] lg:w-[52px] ${
                      index === 0 ? "border-[#1F1F25]" : "border-[#1F1F25]"
                    }`}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex h-[46px] flex-col justify-center gap-0.5 lg:h-[15px] lg:block">
                    <p className="font-heading text-[18px] font-semibold leading-[26px] text-[#1F1F25] lg:font-body lg:text-[12px] lg:font-semibold lg:leading-[100%]">
                      <span className="lg:hidden">{testimonial.name}</span>

                      <span className="hidden lg:block">
                        {testimonial.name} &nbsp; • &nbsp;{" "}
                        {testimonial.role.toUpperCase()}
                      </span>
                    </p>

                    <p className="font-body text-[12px] font-normal leading-[18px] tracking-[1px] text-[#1F1F25] lg:hidden">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
