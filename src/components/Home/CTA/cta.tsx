import Button from "../../ui/Button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#00B6CE] to-[#007585] px-20 py-[88px]">
      {/* Right Ellipse */}
      <div className="absolute -top-[90px] right-[-42px] h-[300px] w-[300px] rounded-full bg-white/10" />

      <div className="relative mx-auto flex max-w-[1280px] flex-col items-center gap-[38px]">
        {/* Heading */}
        <h2 className="max-w-[600px] text-center font-heading text-[32px] font-semibold leading-10 text-white">
          Ready to start your journey with PN Africa?
        </h2>

        {/* Buttons */}
        <div className="flex items-center gap-[14px]">
          <Button
            href="/apply"
            variant="white"
            className="rounded-[10px] border-[1.5px] border-white px-[26px] py-[15px] text-[15px] font-semibold hover:bg-transparent hover:text-white"
          >
            Apply Now
          </Button>

          <Button
            href="/contact"
            variant="outline"
            className="rounded-[10px] border-[1.5px] border-white px-[26px] py-[15px] text-[15px] font-semibold text-white hover:bg-white hover:text-[#1F1F25]"
          >
            Talk to an Advisor
          </Button>
        </div>
      </div>
    </section>
  );
}
