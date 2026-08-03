import FooterBottom from "./footer-bottom";

export default function Footer() {
  return (
    <footer className="relative h-[561px] overflow-hidden bg-[linear-gradient(45deg,#1F1F25_0%,#131316_83.33%)]">
      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.35) 1.2px, transparent 1.2px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-0 h-[114px] w-full bg-white/20 blur-3xl" />

      {/* Left Circle */}
      <div className="absolute -left-[47px] top-[374px] h-[160px] w-[160px] rounded-full bg-white/10" />

      {/* Top Circle */}
      <div className="absolute left-[173px] top-[-66px] h-[160px] w-[160px] rounded-full bg-white/10" />

      {/* Right Circle */}
      <div className="absolute left-[1276px] top-[195px] h-[160px] w-[160px] rounded-full bg-white/10" />

      <div className="relative mx-auto flex h-full max-w-[1440px] flex-col justify-between px-[40px] pt-[113px] pb-[20px]">
        {/* Heading */}
        <h2 className="max-w-[596px] font-heading text-[72px] font-bold leading-[100%] tracking-[-2px] text-white">
          Building the future
          <br />
          of tech talent in
          <br />
          Africa.
        </h2>

        <FooterBottom />
      </div>
    </footer>
  );
}
