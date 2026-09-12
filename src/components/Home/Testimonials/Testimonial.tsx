import Image from "next/image";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  category?: string;
  image?: string;
}

interface TestimonialAvatarProps {
  name: string;
  image?: string;
  featured?: boolean;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "“The programme gave me the opportunity to apply project management in a real-world environment and improve my leadership, communication and confidence.”",
    name: "Louise M. Persidis",
    role: "Project Manager",
    category: "  COHORT 2  •  GHANA",
    // image: "/images/testimonials/femi.jpg",
  },
  {
    quote:
      "“PN Africa taught me how different roles actually work together. Working on a product means you’re never really working in isolation.”",
    name: "Caleb Anafuwe",
    role: "Backend Developer",
    // image: "/images/testimonials/ngozi.jpg",
  },
  {
    quote: "“Real projects meant I entered interviews with proof.”",
    name: "AISHA K.",
    role: "Product Manager at Andela",
    // image: "/images/testimonials/aisha.jpg",
  },
];

function TestimonialAvatar({
  name,
  image,
  featured = false,
}: TestimonialAvatarProps) {
  const initials = name
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (image) {
    return (
      <div
        className={`relative h-[48px] w-[48px] shrink-0 overflow-hidden rounded-full border-[${featured ? "1.85px" : "3.69px"}] ${featured ? "border-[#36E7FD] lg:h-[104px] lg:w-[104px] lg:border-[4px]" : "border-[#1F1F25] lg:h-[52px] lg:w-[52px]"}`}
      >
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-full bg-[#00B6CE] ${featured ? "border-[1.85px] border-[#36E7FD] lg:h-[104px] lg:w-[104px] lg:border-[4px]" : "border-[3.69px] border-[#1F1F25] lg:h-[52px] lg:w-[52px]"}`}
    >
      <span
        className={`font-heading font-semibold text-white ${featured ? "text-[16px] lg:text-[28px]" : "text-[14px] lg:text-[16px]"}`}
      >
        {initials}
      </span>
    </div>
  );
}

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
            <span className="hidden lg:block text-[#00B6CE] ">
              SUCCESS STORIES
            </span>
          </p>

          <h2 className="font-heading text-[22px] font-semibold leading-[30px] text-[#1F1F25] lg:mt-2 lg:text-[44px] lg:font-bold lg:leading-[100%]">
            Real growth, built through teamwork.
          </h2>
        </div>

        {/* Testimonials */}
        <div className="flex w-full flex-col gap-5 lg:h-[420px] lg:flex-row lg:gap-10">
          {/* Secondary testimonials */}
          <div className="flex w-full flex-col gap-5 lg:h-[420px] lg:w-1/2 lg:gap-[64px]">
            {secondary.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className={`flex h-[156px] w-full flex-col justify-between rounded-[16px] px-5 py-6 lg:h-auto lg:w-full lg:rounded-[22px] lg:p-6 ${
                  index === 0
                    ? "bg-[#F8F8F8] lg:h-[166px]"
                    : "bg-[#00B6CE] lg:h-[190px]"
                }`}
              >
                {/* Quote */}
                <p className="font-body text-[14px] font-bold leading-[22px] text-[#1F1F25] lg:text-[23px] lg:leading-[100%]">
                  {testimonial.quote}
                </p>

                {/* Profile */}
                <div className="flex h-[48px] w-full items-center gap-3 lg:h-[52px] lg:gap-4">
                  <TestimonialAvatar
                    name={testimonial.name}
                    image={testimonial.image}
                  />

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
          {/* Featured testimonial */}
          <div className="flex h-[156px] w-full flex-col justify-between rounded-[16px] bg-[#1F1F25] px-5 py-6 lg:h-[420px] lg:w-1/2 lg:rounded-[24px] lg:p-[34px]">
            {/* Quote */}
            <p className="font-body text-[13px] font-bold leading-[18px] text-white lg:max-w-[692px] lg:text-[27px]  lg:leading-[120%]">
              {featured.quote}
            </p>

            {/* Profile */}
            <div className="flex h-[48px] w-full items-center gap-3 lg:h-[104px] lg:gap-[22px]">
              <TestimonialAvatar
                name={featured.name}
                image={featured.image}
                featured
              />

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
        </div>
      </div>
    </section>
  );
}
