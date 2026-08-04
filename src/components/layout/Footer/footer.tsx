import FooterBottom from "./footer-bottom";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(45deg,#1F1F25_0%,#131316_83.33%)]">
      {/* Dot Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.35) 1.2px, transparent 1.2px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative circles */}
      <div className="absolute bottom-0 left-0 h-28 w-full bg-white/20 blur-3xl" />

      <div className="absolute -left-10 bottom-16 h-40 w-40 rounded-full bg-white/10" />

      <div className="absolute left-1/4 -top-16 h-40 w-40 rounded-full bg-white/10" />

      <div className="absolute -right-10 top-40 h-40 w-40 rounded-full bg-white/10" />

      <div className="relative mx-auto flex min-h-[561px] w-full max-w-[1440px] flex-col justify-between px-6 py-16 sm:px-10 lg:px-20 lg:py-24">
        <h2 className="max-w-[596px] font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-[72px] lg:leading-[100%] lg:tracking-[-2px]">
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
