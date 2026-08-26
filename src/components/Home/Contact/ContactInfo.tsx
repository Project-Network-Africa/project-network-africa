import Image from "next/image";

export default function ContactInfo() {
  return (
    <aside className="w-full">
      {/* Map */}
      <div className="relative h-[170px] w-full overflow-hidden rounded-[14px]">
        <Image
          src="/images/contact-map.png"
          alt="PN Africa office location map"
          fill
          className="object-cover"
        />
      </div>

      {/* Office */}
      <div className="mt-[20px]">
        <p className="text-[12px] font-semibold uppercase leading-[100%] text-[#00B6CE]">
          Office
        </p>

        <p className="mt-[10px] text-[13px] leading-[145%] text-[#1F1F25]">
          Lagos, Nigeria
        </p>
      </div>

      {/* Support */}
      <div className="mt-[20px]">
        <p className="text-[12px] font-semibold uppercase leading-[100%] text-[#00B6CE]">
          Support
        </p>

        <p className="mt-[10px] text-[13px] leading-[145%] text-[#1F1F25]">
          projectnetworkafrica@gmail.com
        </p>

        <p className="mt-[4px] text-[13px] leading-[145%] text-[#1F1F25]">
          +234 906 332 5032
        </p>
      </div>
    </aside>
  );
}
