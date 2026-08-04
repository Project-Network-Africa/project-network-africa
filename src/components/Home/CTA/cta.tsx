import Button from "../../ui/Button";

interface CTAProps {
  title: string;
  primaryText: string;
  primaryHref: string;
  secondaryText?: string;
  secondaryHref?: string;
}

export default function CTA({
  title,
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
}: CTAProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#00B6CE] to-[#007585] px-4 py-10 sm:px-6 md:px-8 lg:px-20 lg:py-[88px]">
      {/* Ellipse */}
      <div className="absolute -top-20 -right-16 h-[180px] w-[180px] rounded-full bg-white/10 sm:h-[220px] sm:w-[220px] lg:-top-[90px] lg:right-[-42px] lg:h-[300px] lg:w-[300px]" />

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-8 lg:gap-[38px]">
        <h2 className="max-w-[650px] text-center font-heading text-[24px] font-semibold leading-tight text-white sm:text-[28px] md:text-[30px] lg:text-[32px] lg:leading-10">
          {title}
        </h2>

        <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-[14px]">
          <Button
            href={primaryHref}
            variant="white"
            className="w-full rounded-[10px] border-[1.5px] border-white px-[26px] py-[15px] text-center text-[15px] font-semibold hover:bg-transparent hover:text-white sm:w-auto"
          >
            {primaryText}
          </Button>

          {secondaryText && secondaryHref && (
            <Button href={secondaryHref} variant="outline" className="...">
              {secondaryText}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
